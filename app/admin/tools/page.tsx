"use client";

import { useEffect, useState } from "react";
import type { Tool } from "@/types/tools";

export default function AdminToolsPage() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", href: "", category: "" });
  const [apiKey, setApiKey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetchTools();
    // Check if API key is stored (SSR safe)
    if (typeof window !== "undefined") {
      const storedKey = localStorage.getItem("cms_api_key");
      if (storedKey) {
        setApiKey(storedKey);
        setIsAuthenticated(true);
      }
    }
  }, []);

  const fetchTools = async () => {
    try {
      const response = await fetch("/api/tools");
      const data = await response.json();
      setTools(data.tools || []);
    } catch (error) {
      console.error("Failed to fetch tools:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    if (apiKey && typeof window !== "undefined") {
      localStorage.setItem("cms_api_key", apiKey);
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cms_api_key");
    }
    setApiKey("");
    setIsAuthenticated(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      alert("Please set API key first");
      return;
    }

    try {
      if (editingIndex !== null) {
        // Update existing tool
        const response = await fetch("/api/tools", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            id: editingIndex,
            ...formData,
          }),
        });

        if (response.ok) {
          await fetchTools();
          setEditingIndex(null);
          setFormData({ name: "", href: "", category: "" });
        } else {
          alert("Failed to update tool");
        }
      } else {
        // Create new tool
        const response = await fetch("/api/tools", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          await fetchTools();
          setFormData({ name: "", href: "", category: "" });
        } else {
          alert("Failed to create tool");
        }
      }
    } catch (error) {
      console.error("Error saving tool:", error);
      alert("An error occurred");
    }
  };

  const handleEdit = (index: number) => {
    const tool = tools[index];
    setEditingIndex(index);
    setFormData({
      name: tool.name,
      href: tool.href,
      category: tool.category,
    });
  };

  const handleDelete = async (index: number) => {
    if (!confirm("Are you sure you want to delete this tool?")) {
      return;
    }

    if (!isAuthenticated) {
      alert("Please set API key first");
      return;
    }

    try {
      const response = await fetch(`/api/tools?id=${index}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (response.ok) {
        await fetchTools();
      } else {
        alert("Failed to delete tool");
      }
    } catch (error) {
      console.error("Error deleting tool:", error);
      alert("An error occurred");
    }
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setFormData({ name: "", href: "", category: "" });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-[var(--color-secondary)]">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-4">Tools CMS</h1>
          
          {!isAuthenticated ? (
            <div className="bg-[var(--color-bg-light)] p-4 rounded-lg mb-6">
              <p className="text-sm text-[var(--color-secondary)] mb-2">
                Set your API key (default: your-secret-key-change-in-production)
              </p>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter API key"
                  className="px-4 py-2 border border-[var(--color-border)] rounded-lg flex-1"
                />
                <button
                  onClick={handleLogin}
                  className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:opacity-80"
                >
                  Login
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[var(--color-bg-light)] p-4 rounded-lg mb-6 flex items-center justify-between">
              <p className="text-sm text-[var(--color-secondary)]">Authenticated</p>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-[var(--color-secondary)] text-white rounded-lg hover:opacity-80 text-sm"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Form */}
        <div className="bg-[var(--color-bg-light)] p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
            {editingIndex !== null ? "Edit Tool" : "Add New Tool"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 border border-[var(--color-border)] rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                URL
              </label>
              <input
                type="url"
                value={formData.href}
                onChange={(e) => setFormData({ ...formData, href: e.target.value })}
                required
                className="w-full px-4 py-2 border border-[var(--color-border)] rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
                className="w-full px-4 py-2 border border-[var(--color-border)] rounded-lg"
              >
                <option value="">Select category</option>
                <option value="Design & Productivity">Design & Productivity</option>
                <option value="AI">AI</option>
                <option value="Blockchain">Blockchain</option>
                <option value="Backend">Backend</option>
                <option value="Frontend">Frontend</option>
                <option value="Development Tools">Development Tools</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:opacity-80"
              >
                {editingIndex !== null ? "Update" : "Create"}
              </button>
              {editingIndex !== null && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-2 bg-[var(--color-secondary)] text-white rounded-lg hover:opacity-80"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Tools List */}
        <div>
          <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
            Tools ({tools.length})
          </h2>
          <div className="space-y-2">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-bg-light)]"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-[var(--color-primary)]">{tool.name}</h3>
                  <p className="text-sm text-[var(--color-secondary)]">{tool.href}</p>
                  <span className="text-xs text-[var(--color-secondary)] bg-[var(--color-bg-light)] px-2 py-1 rounded">
                    {tool.category}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:opacity-80 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:opacity-80 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

