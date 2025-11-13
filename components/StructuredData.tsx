export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aydin Gundeger",
    jobTitle: "Data Analyst",
    worksFor: [
      {
        "@type": "Organization",
        name: "VIG",
        jobTitle: "Data Analyst",
      },
      {
        "@type": "Organization",
        name: "Noord7",
        jobTitle: "Founder",
      },
    ],
    url: "https://aydingundeger.com",
    sameAs: [
      "https://www.linkedin.com/in/aydin-gundeger",
      "https://instagram.com/aydingundeger",
    ],
    email: "hello@aydingundeger.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aydin Gundeger Portfolio",
    url: "https://aydingundeger.com",
    description: "Data Analyst at VIG | Founder at Noord7. Portfolio and resume website.",
    author: {
      "@type": "Person",
      name: "Aydin Gundeger",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

