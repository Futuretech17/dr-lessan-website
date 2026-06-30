import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  schema?: object;
}

export function SEO({ title, description, schema }: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    let scriptTag = document.querySelector('#seo-schema');
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('id', 'seo-schema');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, schema]);

  return null;
}
