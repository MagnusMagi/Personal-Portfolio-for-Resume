# API Key Guide

Complete guide for generating, setting up, and using the CMS API key.

## 🔑 What is an API Key?

An API key is a secret token that authenticates requests to modify the Tools section. It prevents unauthorized users from adding, editing, or deleting tools through the admin panel or API endpoints.

## 🎯 Quick Start

### Step 1: Generate an API Key

Choose one of these methods to generate a secure API key:

#### Method 1: OpenSSL (Recommended - Most Secure)

```bash
openssl rand -hex 32
```

**Output example:**
```
a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456
```

#### Method 2: Node.js

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Output example:**
```
f9e8d7c6b5a4321098765432109876543210fedcba0987654321fedcba098765
```

#### Method 3: Online Generator

1. Visit [randomkeygen.com](https://randomkeygen.com/)
2. Use a "CodeIgniter Encryption Keys" (256-bit)
3. Copy the generated key

#### Method 4: Manual Generation

Create a long, random string with:
- **Minimum 32 characters** (recommended: 64+)
- Mix of:
  - Lowercase letters (a-z)
  - Uppercase letters (A-Z)
  - Numbers (0-9)
  - Special characters (!@#$%^&*()_+-=[]{}|;:,.<>?)

**Example:**
```
MyS3cr3t-K3y-2024!@#$%^&*()_+-=[]{}|;:,.<>?
```

### Step 2: Create `.env.local` File

1. **Copy the example file:**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Or create manually:**
   ```bash
   touch .env.local
   ```

### Step 3: Add Your API Key

Open `.env.local` and add your generated API key:

```env
CMS_API_KEY=your-generated-api-key-here
```

**Example:**
```env
CMS_API_KEY=a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456
```

### Step 4: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## 🖥️ Using the API Key

### In Admin Panel

1. Navigate to: `http://localhost:3000/admin/tools`
2. Enter your API key in the input field
3. Click "Login"
4. The API key is saved in your browser's localStorage for the session
5. You can now add, edit, or delete tools

**Note:** If you set `CMS_API_KEY` in `.env.local`, you can use that same key in the admin panel.

### In API Calls

Include the API key in the `Authorization` header:

```bash
curl -X POST http://localhost:3000/api/tools \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-api-key-here" \
  -d '{
    "name": "New Tool",
    "href": "https://example.com",
    "category": "Frontend"
  }'
```

### In Production (Vercel, Netlify, etc.)

1. Go to your hosting platform's dashboard
2. Navigate to **Environment Variables** or **Settings → Environment**
3. Add a new variable:
   - **Key:** `CMS_API_KEY`
   - **Value:** Your generated API key
4. Redeploy your application

## 🔒 Security Best Practices

### ✅ Do's

- ✅ **Use a strong, random key** (at least 32 characters, recommended: 64+)
- ✅ **Use different keys** for development and production
- ✅ **Keep your API key secret** - never share it publicly
- ✅ **Store in environment variables** - never hardcode in source code
- ✅ **Rotate keys periodically** - change them every few months
- ✅ **Use HTTPS** in production to encrypt API key transmission

### ❌ Don'ts

- ❌ **Never commit** `.env.local` to Git (already in `.gitignore`)
- ❌ **Don't use** simple passwords like "password123"
- ❌ **Don't share** your API key in screenshots or public forums
- ❌ **Don't use** the default key (`your-secret-key-change-in-production`) in production
- ❌ **Don't hardcode** API keys in component files

## 🧪 Testing Your API Key

### Test in Admin Panel

1. Go to `http://localhost:3000/admin/tools`
2. Enter your API key
3. Try adding a new tool
4. If successful, you'll see the tool appear in the list

### Test via API

```bash
# Test GET (no auth required)
curl http://localhost:3000/api/tools

# Test POST (auth required)
curl -X POST http://localhost:3000/api/tools \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-api-key" \
  -d '{
    "name": "Test Tool",
    "href": "https://example.com",
    "category": "Frontend"
  }'
```

If you get `401 Unauthorized`, check:
- API key is correct
- `.env.local` file exists and has the correct key
- Development server was restarted after adding the key
- Authorization header format: `Bearer your-api-key`

## 🔄 Changing Your API Key

### Development

1. Update `.env.local`:
   ```env
   CMS_API_KEY=new-api-key-here
   ```
2. Restart the development server
3. Clear localStorage in admin panel (or use new key)

### Production

1. Update environment variable in hosting platform
2. Redeploy application
3. Update admin panel localStorage with new key

## 🆘 Troubleshooting

### "Unauthorized" Error

**Problem:** Getting 401 Unauthorized when trying to modify tools.

**Solutions:**
1. Check that `.env.local` exists and contains `CMS_API_KEY`
2. Verify the API key matches exactly (no extra spaces)
3. Restart the development server
4. Clear browser localStorage and re-enter the key
5. Check that the Authorization header format is correct: `Bearer your-key`

### API Key Not Working in Admin Panel

**Problem:** Can't login to admin panel.

**Solutions:**
1. Make sure you're using the same key as in `.env.local`
2. Check browser console for errors
3. Try clearing browser cache and localStorage
4. Verify the key doesn't have leading/trailing spaces

### Environment Variable Not Loading

**Problem:** Changes to `.env.local` not taking effect.

**Solutions:**
1. Restart the development server completely
2. Check file name is exactly `.env.local` (not `.env.local.txt`)
3. Verify the file is in the project root directory
4. Check for syntax errors (no spaces around `=`)

## 📚 Additional Resources

- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [OpenSSL Documentation](https://www.openssl.org/docs/)
- [Node.js Crypto Module](https://nodejs.org/api/crypto.html)

---

**Need Help?** Open an issue on [GitHub](https://github.com/MagnusMagi/Personal-Portfolio-for-Resume/issues)

