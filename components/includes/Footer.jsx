import Image from "next/image";
import { SiFacebook, SiLinkedin, SiTwitter } from "react-icons/si";

const linkClass =
  "tw-inline-block tw-text-sm tw-text-slate-400 tw-no-underline tw-transition-colors hover:tw-text-sky-400";

const headingClass =
  "tw-mb-4 tw-text-xs tw-font-semibold tw-uppercase tw-tracking-[0.14em] tw-text-slate-500";

const Footer = ({ domain, twitter_url, fb_url, linkedin_url }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="tw-border-t tw-border-slate-800/90 tw-bg-[#06080c] tw-text-slate-300">
      <div className="container tw-py-14 md:tw-py-16">
        <div className="row tw-gy-10 lg:tw-gy-8">
          <div className="col-lg-4">
            <p className="tw-mb-1 tw-font-semibold tw-tracking-tight tw-text-slate-100">{domain}</p>
            <p className="tw-mb-0 tw-max-w-md tw-text-sm tw-leading-relaxed tw-text-slate-500">
              Join developers, creators, and founders using the CONTRIB token to power token
              economies across the network.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row tw-gy-8 sm:tw-gy-6">
              <div className="col-6 col-md-4">
                <h3 className={headingClass}>Get started</h3>
                <ul className="tw-m-0 tw-list-none tw-space-y-2.5 tw-p-0">
                  <li>
                    <a href="/partner" className={linkClass}>
                      Partner
                    </a>
                  </li>
                  <li>
                    <a href="/staffing" className={linkClass}>
                      Apply now
                    </a>
                  </li>
                  <li>
                    <a href="/referral" className={linkClass}>
                      Referral
                    </a>
                  </li>
                  <li>
                    <a href="/developers" className={linkClass}>
                      Developers
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://domaindirectory.com/servicepage/?domain=${domain}`}
                      className={linkClass}
                    >
                      Build
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://domaindirectory.com/servicepage/?domain=${domain}`}
                      className={linkClass}
                    >
                      Invest
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://domaindirectory.com/servicepage/?domain=${domain}`}
                      className={linkClass}
                    >
                      Manage
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://domaindirectory.com/servicepage/?domain=${domain}`}
                      className={linkClass}
                    >
                      Monetize
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <h3 className={headingClass}>Company</h3>
                <ul className="tw-m-0 tw-list-none tw-space-y-2.5 tw-p-0">
                  <li>
                    <a href="/about" className={linkClass}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className={linkClass}>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className={linkClass}>
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className={linkClass}>
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-4">
                <h3 className={headingClass}>Partner</h3>
                <a
                  href="https://www.contrib.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tw-inline-flex tw-rounded-lg tw-border tw-border-slate-800 tw-bg-slate-900/40 tw-p-3 tw-transition-colors hover:tw-border-slate-700"
                >
                  <Image
                    src="https://s3.amazonaws.com/assets.zipsite.net/images/jayson/logo/logo-new-contrib-06-wyt.png"
                    width={129}
                    height={40}
                    alt="Contrib"
                    className="img-fluid tw-opacity-90"
                  />
                </a>
                <h3 className={`${headingClass} tw-mt-8`}>Social</h3>
                <ul className="tw-m-0 tw-flex tw-list-none tw-flex-wrap tw-gap-2 tw-p-0">
                  <li>
                    <a
                      href={fb_url || "#"}
                      className="tw-inline-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-slate-700 tw-bg-slate-900/60 tw-text-slate-400 tw-no-underline tw-transition-all hover:tw-border-slate-600 hover:tw-bg-slate-800 hover:tw-text-sky-400"
                      aria-label="Facebook"
                    >
                      <SiFacebook className="tw-h-[18px] tw-w-[18px]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={twitter_url || "#"}
                      className="tw-inline-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-slate-700 tw-bg-slate-900/60 tw-text-slate-400 tw-no-underline tw-transition-all hover:tw-border-slate-600 hover:tw-bg-slate-800 hover:tw-text-sky-400"
                      aria-label="Twitter"
                    >
                      <SiTwitter className="tw-h-[18px] tw-w-[18px]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={linkedin_url || "#"}
                      className="tw-inline-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-slate-700 tw-bg-slate-900/60 tw-text-slate-400 tw-no-underline tw-transition-all hover:tw-border-slate-600 hover:tw-bg-slate-800 hover:tw-text-sky-400"
                      aria-label="LinkedIn"
                    >
                      <SiLinkedin className="tw-h-[18px] tw-w-[18px]" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="tw-mt-12 tw-border-t tw-border-slate-800/80 tw-pt-8 tw-text-center tw-text-xs tw-text-slate-600 md:tw-text-start">
          © {year} {domain}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
