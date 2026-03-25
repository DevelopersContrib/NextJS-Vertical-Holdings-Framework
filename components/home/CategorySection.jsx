import { ChevronRight, LayoutGrid } from "lucide-react";

const CategorySection = ({ categories }) => {
  const list = categories?.data?.categories ?? [];

  return (
    <section
      id="categories"
      className="tw-scroll-mt-24 tw-border-t tw-border-slate-800/80 tw-bg-slate-900/35 tw-py-20"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <p className="tw-mb-2 tw-text-sm tw-font-semibold tw-uppercase tw-tracking-wide tw-text-sky-400">
              Browse
            </p>
            <h2 className="tw-mb-3 tw-text-3xl tw-font-bold tw-tracking-tight tw-text-slate-100 md:tw-text-4xl">
              Categories
            </h2>
            <p className="tw-mb-10 tw-max-w-2xl tw-text-lg tw-leading-relaxed tw-text-slate-400">
              Explore vertical news and topics across the portfolio—each link opens Contrib vertical
              coverage.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="row g-3 tw-items-stretch">
              {list.map((category) => (
                <div className="col-xl-3 col-md-6 tw-flex" key={category.category_id}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.contrib.com/verticals/news/${category.slug}`}
                    className="tw-group tw-flex tw-h-full tw-w-full tw-min-h-[4.5rem] tw-items-center tw-justify-between tw-gap-3 tw-rounded-xl tw-border tw-border-slate-700/70 tw-bg-slate-950/40 tw-px-4 tw-py-3 tw-no-underline tw-shadow-sm tw-shadow-black/10 tw-transition-all tw-duration-200 hover:tw-border-sky-500/35 hover:tw-bg-slate-900/70 hover:tw-shadow-md"
                  >
                    <div className="tw-flex tw-min-w-0 tw-items-center tw-gap-3">
                      <span className="tw-flex tw-h-10 tw-w-10 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-lg tw-bg-sky-500/10 tw-ring-1 tw-ring-sky-500/15">
                        <LayoutGrid className="tw-h-4 tw-w-4 tw-text-sky-400" strokeWidth={2} aria-hidden />
                      </span>
                      <span className="tw-truncate tw-text-sm tw-font-medium tw-text-slate-200 md:tw-text-base">
                        {category.category_name}
                      </span>
                    </div>
                    <ChevronRight className="tw-h-5 tw-w-5 tw-shrink-0 tw-text-slate-600 tw-transition-all group-hover:tw-translate-x-0.5 group-hover:tw-text-sky-400" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
