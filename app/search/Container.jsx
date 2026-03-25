"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import TextLimit from "@/components/home/TextLimit";
import Image from "next/image";
import { Search } from "lucide-react";

export default function Container({ top_seller }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("key");
  const initialTopSellers = useRef(top_seller);

  const [data, setData] = useState({ top_sellers: top_seller });
  const [query, setQuery] = useState(code ?? "");

  useEffect(() => {
    setQuery(code ?? "");
  }, [code]);

  useEffect(() => {
    if (!code || !String(code).trim()) {
      setData({ top_sellers: initialTopSellers.current });
      return;
    }

    let cancelled = false;
    (async () => {
      const response = await fetch("/api/discover", {
        method: "POST",
        body: JSON.stringify({
          sort: "",
          limit: "",
          keyword: code,
        }),
      });
      if (!response.ok || cancelled) {
        if (!cancelled) alert("An error occurred");
        return;
      }
      const res = await response.json();
      setData({ top_sellers: res.popular_domains });
    })();

    return () => {
      cancelled = true;
    };
  }, [code]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/search?key=${encodeURIComponent(q)}`);
    } else {
      router.push("/search");
    }
  };

  const domains = data?.top_sellers?.data?.domains ?? [];

  return (
    <>
      <section className="tw-border-b tw-border-slate-800/80 tw-bg-[#0b0f14] tw-py-10 md:tw-py-12">
        <div className="container">
          <h1 className="tw-mb-2 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-slate-100 md:tw-text-3xl">
            Search domains
          </h1>
          <p className="tw-mb-6 tw-max-w-2xl tw-text-slate-400">
            Filter the directory by keyword. Leave empty to show the default list.
          </p>
          <form
            onSubmit={handleSubmit}
            className="tw-flex tw-max-w-xl tw-flex-col tw-gap-3 sm:tw-flex-row sm:tw-items-stretch"
          >
            <label className="tw-sr-only" htmlFor="search-domain-q">
              Search domains
            </label>
            <div className="tw-relative tw-flex-1">
              <Search
                className="tw-pointer-events-none tw-absolute tw-left-3 tw-top-1/2 tw-h-[1.1rem] tw-w-[1.1rem] tw--translate-y-1/2 tw-text-slate-500"
                strokeWidth={2}
                aria-hidden
              />
              <input
                id="search-domain-q"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. crypto, design, your vertical…"
                className="form-control tw-min-h-[3rem] tw-w-full tw-rounded-xl tw-border-slate-600 tw-bg-slate-950/60 tw-py-3 tw-pl-10 tw-pr-4 tw-text-slate-100 placeholder:tw-text-slate-500 focus:tw-border-sky-500/50 focus:tw-ring-sky-500/20"
                autoComplete="off"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg tw-shrink-0">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="tw-py-12">
        <div className="container">
          {domains.length === 0 ? (
            <p className="tw-rounded-xl tw-border tw-border-slate-700 tw-bg-slate-900/50 tw-p-6 tw-text-center tw-text-slate-400">
              No domains match this search. Try another keyword or clear the search to see the full
              list.
            </p>
          ) : (
            <div className="row g-3 tw-items-stretch">
              {domains.map((top_sellers) => (
                <div className="col-xl-4 tw-flex" key={top_sellers.domain_name}>
                  <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-pb-4">
                    <div className="tw-flex tw-h-full tw-min-h-0 tw-w-full tw-flex-col tw-overflow-hidden tw-rounded-xl tw-border tw-border-slate-700 tw-bg-slate-900 tw-shadow-[0_12px_40px_-12px_rgb(0_0_0_/_45%)]">
                      <div className="tw-relative tw-aspect-[16/10] tw-w-full tw-shrink-0 tw-bg-slate-950">
                        <Image
                          src={
                            top_sellers.background === "" || top_sellers.background === null
                              ? "https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image6.png"
                              : top_sellers.background
                          }
                          alt=""
                          fill
                          sizes="(min-width: 1200px) 33vw, 90vw"
                          className="tw-object-cover"
                        />
                      </div>
                      <div className="tw-flex tw-min-h-0 tw-flex-1 tw-flex-col tw-p-2">
                        <div className="tw-relative tw-mx-auto tw-mt-[-2.75rem] tw-mb-2 tw-w-[min(200px,70%)] tw-shrink-0">
                          <Image
                            src={
                              top_sellers.logo === "" || top_sellers.logo === null
                                ? "https://cdn.vnoc.com/logos/chat-default2.png"
                                : top_sellers.logo
                            }
                            width={200}
                            height={120}
                            sizes="200px"
                            alt=""
                            className="img-fluid tw-w-full tw-rounded-lg tw-ring-2 tw-ring-slate-900"
                          />
                        </div>
                        <div className="tw-flex tw-min-h-0 tw-flex-1 tw-flex-col tw-text-center">
                          <h2 className="tw-mb-3 tw-shrink-0 tw-font-semibold tw-text-base tw-text-slate-100">
                            <a
                              href={top_sellers.domain_name}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="tw-line-clamp-2 tw-no-underline tw-text-sky-300 hover:tw-text-sky-200"
                            >
                              {top_sellers.domain_name}
                            </a>
                          </h2>
                          <p className="tw-mb-4 tw-flex-1 tw-text-pretty tw-text-sm tw-leading-relaxed tw-text-slate-400">
                            <TextLimit text={top_sellers.description} limit={80} />
                          </p>
                          <div className="tw-mt-auto tw-flex tw-shrink-0 tw-justify-center tw-pb-1">
                            <a
                              href={
                                `https://www.contrib.com/signup/firststep?domain=` +
                                top_sellers.domain_name
                              }
                              className="btn btn-primary"
                            >
                              Contribute
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
