"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1];

export default function HomeHero({ domain }) {
  return (
    <section className="tw-relative tw-flex tw-min-h-screen tw-flex-col tw-overflow-hidden tw-pt-24 sm:tw-pt-28 lg:tw-pt-32 tw-pb-16 lg:tw-pb-24">
      {/* Base */}
      <div
        className="tw-pointer-events-none tw-absolute tw-inset-0 tw--z-20 tw-bg-[#0b0f14]"
        aria-hidden
      />

      {/* Mesh: layered radials (sky + brand navy + indigo) */}
      <div
        className="tw-pointer-events-none tw-absolute tw-inset-0 tw--z-10"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 120% 90% at 0% -10%, rgb(56 189 248 / 0.14), transparent 52%),
            radial-gradient(ellipse 90% 70% at 100% 0%, rgb(14 41 77 / 0.55), transparent 48%),
            radial-gradient(ellipse 70% 55% at 50% 110%, rgb(99 102 241 / 0.09), transparent 50%),
            radial-gradient(ellipse 50% 40% at 85% 60%, rgb(14 165 233 / 0.06), transparent 45%)
          `,
        }}
      />

      {/* Soft light orbs */}
      <motion.div
        className="tw-pointer-events-none tw-absolute tw--left-[12%] tw-top-[-18%] tw--z-10 tw-h-[min(85vw,560px)] tw-w-[min(85vw,560px)] tw-rounded-full tw-bg-sky-400/[0.14] tw-blur-[100px]"
        aria-hidden
        animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.04, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="tw-pointer-events-none tw-absolute tw--right-[8%] tw-top-[25%] tw--z-10 tw-h-[min(65vw,440px)] tw-w-[min(65vw,440px)] tw-rounded-full tw-bg-blue-500/[0.11] tw-blur-[88px]"
        aria-hidden
        animate={{ opacity: [0.45, 0.75, 0.45], scale: [1.02, 1, 1.02] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div
        className="tw-pointer-events-none tw-absolute tw-left-[40%] tw-bottom-[-15%] tw--z-10 tw-h-[240px] tw-w-[320px] tw-rounded-full tw-bg-[#0E294D]/35 tw-blur-[72px] sm:tw-h-[320px] sm:tw-w-[420px]"
        aria-hidden
      />

      {/* Perspective grid — fades out toward edges */}
      <div
        className="tw-pointer-events-none tw-absolute tw-inset-0 tw--z-10 tw-opacity-[0.55]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(148 163 184 / 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(148 163 184 / 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 95% 75% at 50% 38%, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 75% at 50% 38%, black 0%, transparent 72%)",
        }}
      />

      {/* Bottom blend into next section */}
      <div
        className="tw-pointer-events-none tw-absolute tw-inset-x-0 tw-bottom-0 tw-h-32 tw--z-10 tw-bg-gradient-to-t tw-from-[#0b0f14] tw-via-[#0b0f14]/80 tw-to-transparent"
        aria-hidden
      />

      <div className="container tw-relative">
        <div className="row tw-items-center tw-gy-12 lg:tw-gy-0">
          <div className="col-lg-6 order-lg-1">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease }}
              className="tw-mb-5 tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-slate-600 tw-bg-slate-900/80 tw-px-3 tw-py-1.5 tw-text-xs tw-font-medium tw-text-slate-300"
            >
              <span className="tw-h-1.5 tw-w-1.5 tw-shrink-0 tw-rounded-full tw-bg-sky-400" />
              {domain}
            </motion.div>

            <motion.h1
              className="tw-mb-5 tw-max-w-2xl tw-text-3xl tw-font-bold tw-leading-[1.15] tw-tracking-[-0.025em] tw-text-slate-100 sm:tw-text-4xl sm:tw-leading-[1.12] lg:tw-text-5xl lg:tw-leading-[1.08] xl:tw-text-[3.25rem] xl:tw-leading-[1.06]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.04, ease }}
            >
              Build and grow{" "}
              <span className="tw-font-semibold tw-text-sky-400">
                token economies
              </span>{" "}
              with developers, creators, and founders.
            </motion.h1>

            <motion.p
              className="tw-mb-9 tw-max-w-lg tw-text-base tw-leading-relaxed tw-text-slate-400 sm:tw-text-[1.0625rem]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.1, ease }}
            >
              CONTRIB powers collaboration across verticals—discover domains, join the network, and
              ship with people who build in public.
            </motion.p>

            <motion.div
              className="tw-flex tw-flex-col tw-gap-3 sm:tw-flex-row sm:tw-flex-wrap sm:tw-items-center"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.16, ease }}
            >
              <Link href="/#discover-domains" className="btn btn-primary">
                Discover domains
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact
              </Link>
            </motion.div>

            <motion.div
              className="tw-mt-10 tw-flex tw-flex-wrap tw-gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.28, ease }}
            >
              {["CONTRIB token", "Vertical portfolios", "Contributor network"].map((label) => (
                <span
                  key={label}
                  className="tw-rounded-full tw-bg-slate-800 tw-px-3.5 tw-py-1.5 tw-text-xs tw-font-medium tw-text-slate-300"
                >
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="col-lg-6 order-lg-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease }}
          >
            <div className="tw-mx-auto tw-max-w-xl lg:tw-mx-0 lg:tw-max-w-none lg:tw-pl-6">
              <Image
                src="https://cdn.vnoc.com/icons/chat-vertical/bannerSec1.png"
                width={1200}
                height={900}
                sizes="(min-width: 992px) 50vw, 100vw"
                className="img-fluid tw-block tw-h-auto tw-w-full"
                alt=""
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
