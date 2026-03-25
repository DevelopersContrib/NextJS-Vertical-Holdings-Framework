import ScriptLoader from "@/components/includes/ScriptLoader";

const DEV_SAMPLE_TASKS = [
  {
    title: "Review landing page copy",
    domain: "sample-vertical.com",
    status: "Open",
  },
  {
    title: "Wireframe contributor onboarding",
    domain: "creatorshub.io",
    status: "In progress",
  },
  {
    title: "Audit token economy documentation",
    domain: "defi-portal.net",
    status: "Open",
  },
];

export default function LatestTasksSection({ scriptHtml }) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <section
      id="latest-tasks"
      className="tw-scroll-mt-24 tw-border-t tw-border-slate-800/80 tw-bg-[#0b0f14] tw-py-20"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <p className="tw-mb-2 tw-text-sm tw-font-semibold tw-uppercase tw-tracking-wide tw-text-sky-400">
              Live activity
            </p>
            <h2 className="tw-mb-2 tw-text-3xl tw-font-bold tw-tracking-tight tw-text-slate-100 md:tw-text-4xl">
              Latest tasks
            </h2>
            <p className="tw-mb-8 tw-max-w-2xl tw-text-slate-400">
              Jump into open work across the network and contribute where it fits you best.
            </p>

            {isDev ? (
              <ul className="tw-m-0 tw-list-none tw-space-y-3 tw-p-0">
                {DEV_SAMPLE_TASKS.map((task) => (
                  <li
                    key={task.title}
                    className="tw-flex tw-flex-col tw-gap-3 tw-rounded-xl tw-border tw-border-slate-700 tw-bg-slate-900/70 tw-p-4 sm:tw-flex-row sm:tw-items-center sm:tw-justify-between"
                  >
                    <div>
                      <div className="tw-font-semibold tw-text-slate-100">{task.title}</div>
                      <div className="tw-text-sm tw-text-slate-500">{task.domain}</div>
                    </div>
                    <span className="tw-shrink-0 tw-self-start tw-rounded-full tw-bg-sky-500/15 tw-px-3 tw-py-1 tw-text-xs tw-font-medium tw-text-sky-300 sm:tw-self-center">
                      {task.status}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <ScriptLoader html={scriptHtml} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
