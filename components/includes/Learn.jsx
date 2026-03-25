"use client";

import { useState, useEffect } from "react";
import { Mail } from "lucide-react";

const Learn = ({ domain }) => {
  const initialValues = {
    domain: domain,
    email: "",
  };

  const initialErrors = {
    validate: false,
    emailError: "",
  };

  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  useEffect(() => {
    const validateErrors = () => {
      const dataErrors = {
        emailError:
          (data.email ? "" : "Email is required") ||
          (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? "" : "Invalid Email"),
      };
      setErrors(dataErrors);
    };
    validateErrors();
  }, [data]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = !Object.values(errors).some((v) => v);
    setErrors({ ...errors, ["validate"]: true });
    if (isValid) {
      try {
        const response = await fetch("/api/lead", {
          method: "POST",
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const res = await response.json();
          if (res.lead.success == "success") {
            alert("Email successfully sent! We will get in touch with you soon...");
          } else {
            alert("Email Already Exists");
          }
        } else {
          alert("An error occurred");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert(errors.emailError);
    }
  };

  return (
    <section className="tw-scroll-mt-24 tw-border-t tw-border-slate-800/80 tw-bg-slate-900/40 tw-py-20">
      <div className="container">
        <div className="row tw-justify-center">
          <div className="col-xl-10 col-xxl-9">
            <div className="tw-relative tw-overflow-hidden tw-rounded-2xl tw-border tw-border-slate-700/80 tw-bg-gradient-to-br tw-from-slate-900/95 tw-via-slate-950/90 tw-to-[#0b0f14] tw-p-8 tw-shadow-2xl tw-shadow-black/40 md:tw-p-10 lg:tw-p-12">
              <div
                className="tw-pointer-events-none tw-absolute tw--right-24 tw--top-24 tw-h-64 tw-w-64 tw-rounded-full tw-bg-sky-500/10 tw-blur-3xl"
                aria-hidden
              />
              <div
                className="tw-pointer-events-none tw-absolute tw--bottom-32 tw--left-16 tw-h-56 tw-w-56 tw-rounded-full tw-bg-[#0E294D]/25 tw-blur-3xl"
                aria-hidden
              />

              <div className="row tw-items-center tw-gy-10 tw-relative">
                <div className="col-lg-4 tw-text-center lg:tw-text-start">
                  <div
                    className="tw-mx-auto tw-flex tw-aspect-square tw-max-w-[220px] tw-items-center tw-justify-center tw-rounded-2xl tw-border tw-border-sky-500/20 tw-bg-gradient-to-br tw-from-sky-500/10 tw-to-slate-950/80 tw-p-8 tw-shadow-lg tw-shadow-sky-900/20 lg:tw-mx-0 lg:tw-max-w-[260px]"
                    aria-hidden
                  >
                    <Mail
                      className="tw-h-[42%] tw-w-[42%] tw-min-h-[5rem] tw-min-w-[5rem] tw-text-sky-400"
                      strokeWidth={1.15}
                    />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="tw-mb-2 tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-sky-500/25 tw-bg-sky-500/10 tw-px-3 tw-py-1 tw-text-xs tw-font-semibold tw-uppercase tw-tracking-wide tw-text-sky-300">
                    <Mail className="tw-h-3.5 tw-w-3.5" aria-hidden />
                    Newsletter
                  </div>
                  <h2 className="tw-mb-3 tw-text-3xl tw-font-bold tw-tracking-tight tw-text-slate-100 md:tw-text-4xl">
                    Stay in the loop
                  </h2>
                  <p className="tw-mb-8 tw-max-w-xl tw-text-base tw-leading-relaxed tw-text-slate-400 md:tw-text-lg">
                    Get updates from <span className="tw-text-slate-300">{domain}</span>—news for
                    professionals and digital asset owners on the network.
                  </p>
                  <form
                    className="tw-flex tw-flex-col tw-gap-3 sm:tw-flex-row sm:tw-items-stretch"
                    onSubmit={handleSubmit}
                  >
                    <label className="tw-sr-only" htmlFor="learn-email">
                      Email address
                    </label>
                    <input
                      id="learn-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="form-control tw-min-h-[3rem] tw-flex-1 tw-rounded-xl tw-border-slate-600 tw-bg-slate-950/60 tw-py-3 tw-text-slate-100 placeholder:tw-text-slate-500 focus:tw-border-sky-500/50 focus:tw-ring-sky-500/20"
                    />
                    <button type="submit" className="btn btn-primary btn-lg tw-shrink-0">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
