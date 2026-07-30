import { useEffect } from 'react';

const SITE_URL = 'https://hartscapes.co.za';
const DEFAULT_TITLE = 'Hartscapes — Landscape Design & Construction';

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute(attr, value);
}

/**
 * Sets the document title, meta description, Open Graph tags, and canonical
 * URL for the current page. Values are restored to the index.html defaults
 * automatically when another page calls this hook.
 */
export function usePageMeta(title: string, description: string, path?: string) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    if (path !== undefined) {
      setMeta('meta[property="og:url"]', 'content', `${SITE_URL}${path}`);
      let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `${SITE_URL}${path}`;
    }
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description, path]);
}
