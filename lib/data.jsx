import { headers } from "next/headers";
import axios from "axios";
let DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;

/** Shown in Popular / Discover when the Chat Domains API is missing, errors, or returns no rows — development only. */
const LOCAL_FALLBACK_CHAT_DOMAINS = {
  data: {
    domains: [
      {
        domain_name: "https://www.contrib.com",
        description:
          "Local preview card — set GET_CHAT_DOMAINS and domain env vars to load real domains from the API.",
        background: "",
        logo: "",
      },
      {
        domain_name: "https://www.globalventures.com",
        description: "Placeholder vertical portfolio entry for local development.",
        background: "",
        logo: "",
      },
      {
        domain_name: "https://www.vnoc.com",
        description: "Second sample listing so the carousel has enough slides while you work offline.",
        background: "",
        logo: "",
      },
    ],
  },
};

function isLocalDevelopment() {
  return process.env.NODE_ENV === "development";
}

function applyChatDomainsLimit(payload, limit) {
  const domains = payload?.data?.domains ?? [];
  const raw = limit === "" || limit == null ? domains.length : parseInt(String(limit), 10);
  const cap = Number.isFinite(raw) && raw > 0 ? Math.min(raw, domains.length) : domains.length;
  return { data: { domains: domains.slice(0, cap) } };
}

export function getDomain() {
  const headersList = headers();
  const referrer = headersList.get("host");
  const domainName = referrer.includes("localhost") ? DOMAIN : referrer.replace("www.", "");
  return domainName;
}

export async function getData() {
  const domain = getDomain();
  const url = process.env.CONTRIB_API1 + `&domain=${domain}`;
  const res = await fetch(url, { 
    next: { revalidate: 3600 },
    mode: "cors",
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getCategories() {
  const domain = getDomain();
  const url = process.env.GET_CATEGORIES + `&domain=${domain}`;
  const res = await fetch(url, { 
    next: { revalidate: 3600 },
    mode: "cors",
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getchatdomains(limit, keyword, sort) {
  const devFallback = () => applyChatDomainsLimit(LOCAL_FALLBACK_CHAT_DOMAINS, limit);

  if (!process.env.GET_CHAT_DOMAINS) {
    if (isLocalDevelopment()) return devFallback();
    throw new Error("GET_CHAT_DOMAINS is not configured");
  }

  try {
    const domain = getDomain();
    const url =
      process.env.GET_CHAT_DOMAINS +
      `&domain=${domain}&limit=${limit}&keyword=${keyword}&sort=${sort}`;
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      mode: "cors",
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });
    if (!res.ok) {
      if (isLocalDevelopment()) return devFallback();
      throw new Error("Failed to fetch data");
    }

    const json = await res.json();
    const list = json?.data?.domains;
    if (!Array.isArray(list) || list.length === 0) {
      if (isLocalDevelopment()) return devFallback();
    }
    return json;
  } catch (e) {
    if (isLocalDevelopment()) return devFallback();
    throw e;
  }
}

export async function getScript(url) {
  try {
    const res = await axios.get(url);
    return res.data.data.content;
  } catch (e) {
    // console.log("error getScript", e);
    return { error: "error getScript" };
  }
}

export async function getBlogs() {
  const domain = getDomain();
  const url = process.env.GET_BLOGS + `&domain=${domain}`;
  const res = await fetch(url, { 
    next: { revalidate: 3600 },
    mode: "cors",
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
