import { Building2, Layers3, Package } from "lucide-react";

const ITEMS = [
  {
    title: "We build brands",
    body:
      "Technology contributors and in-house teams ship positioning, presence, and momentum for each property.",
    Icon: Building2,
  },
  {
    title: "We build products",
    body:
      "The Contrib/VNOC model lets us stand up web products vertically—your participation still shapes what ships next.",
    Icon: Package,
  },
  {
    title: "We build verticals",
    body:
      "Across the GlobalVentures portfolio we align products with vertical strategy and create synergy inside and outside the network.",
    Icon: Layers3,
  },
];

export default function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="tw-scroll-mt-24 tw-border-t tw-border-slate-800/80 tw-bg-[#0b0f14] tw-py-20"
    >
      <div className="container">
        <div className="row tw-mb-12">
          <div className="col-xl-12 col-lg-10">
            <p className="tw-mb-2 tw-text-sm tw-font-semibold tw-uppercase tw-tracking-wide tw-text-sky-400">
              What we do
            </p>
            <h2 className="tw-text-3xl tw-font-bold tw-tracking-tight tw-text-slate-100 md:tw-text-4xl">
              Brands, products, and verticals—built together
            </h2>
            <p className="tw-mt-4 tw-max-w-2xl tw-text-lg tw-leading-relaxed tw-text-slate-400">
              We combine contributor talent, in-house execution, and portfolio reach so each domain
              can scale with clarity.
            </p>
          </div>
        </div>
        <div className="row g-4 tw-items-stretch">
          {ITEMS.map((item, i) => {
            const { Icon } = item;
            return (
              <div className="col-xl-4 tw-flex" key={item.title}>
                <article className="tw-group tw-relative tw-flex tw-h-full tw-w-full tw-flex-col tw-overflow-hidden tw-rounded-2xl tw-border tw-border-slate-800 tw-bg-slate-950/50 tw-p-6 tw-shadow-lg tw-shadow-black/20 tw-transition-all tw-duration-300 hover:tw-border-slate-700 hover:tw-shadow-xl hover:tw-shadow-black/30 md:tw-p-8">
                  <div
                    className="tw-pointer-events-none tw-absolute tw-inset-x-0 tw-top-0 tw-h-px tw-bg-gradient-to-r tw-from-transparent tw-via-sky-500/50 tw-to-transparent tw-opacity-0 tw-transition-opacity group-hover:tw-opacity-100"
                    aria-hidden
                  />
                  <div className="tw-mb-5 tw-flex tw-items-center tw-gap-3">
                    <span className="tw-flex tw-h-11 tw-w-11 tw-items-center tw-justify-center tw-rounded-xl tw-bg-sky-500/10 tw-ring-1 tw-ring-sky-500/20">
                      <Icon
                        className="tw-h-6 tw-w-6 tw-text-sky-400"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </span>
                    <span className="tw-text-xs tw-font-semibold tw-uppercase tw-tracking-wider tw-text-slate-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                <h3 className="tw-mb-3 tw-shrink-0 tw-text-xl tw-font-semibold tw-tracking-tight tw-text-slate-100">
                  {item.title}
                </h3>
                <p className="tw-mb-0 tw-flex-1 tw-text-sm tw-leading-relaxed tw-text-slate-400 md:tw-text-[0.9375rem]">
                  {item.body}
                </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
