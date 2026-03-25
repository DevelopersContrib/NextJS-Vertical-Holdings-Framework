"use client"
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Text Limit Truncate
import TextLimit from './TextLimit';

const PopularSection = ({ popular_domains }) => {
  const domains = popular_domains?.data?.domains ?? [];

  return (
    <section
      id="popular"
      className="tw-scroll-mt-24 tw-border-t tw-border-slate-800/80 tw-bg-[#0b0f14] tw-py-20"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <p className="tw-mb-2 tw-text-sm tw-font-semibold tw-uppercase tw-tracking-wide tw-text-sky-400">
              Spotlight
            </p>
            <h2 className="tw-mb-3 tw-text-3xl tw-font-bold tw-tracking-tight tw-text-slate-100 md:tw-text-4xl">
              Popular domains
            </h2>
            <p className="tw-mb-8 tw-max-w-2xl tw-text-slate-400">
              Active communities and properties getting traction right now.
            </p>
          </div>
          <div className="col-xl-12 tw-min-h-[200px] lg:tw-min-h-[350px]">
            {domains.length === 0 ? (
              <p className="tw-rounded-xl tw-border tw-border-slate-700 tw-bg-slate-900/60 tw-p-6 tw-text-center tw-text-slate-400">
                No popular domains to show yet. In production this list comes from your Chat Domains
                API.
              </p>
            ) : (
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              loop={domains.length > 2}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Autoplay, Navigation]}
              className="mySwiper"
            >
             {domains.map((popular_domain) => (
                <SwiperSlide key={popular_domain.domain_name}>
                  <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-pb-4">
                    <div className="tw-flex tw-h-full tw-min-h-0 tw-w-full tw-flex-col tw-overflow-hidden tw-rounded-xl tw-border tw-border-slate-700 tw-bg-slate-900 tw-shadow-[0_12px_40px_-12px_rgb(0_0_0_/_45%)]">
                      <div className="tw-relative tw-aspect-[16/10] tw-w-full tw-shrink-0 tw-bg-slate-950">
                        <Image
                          src={
                            popular_domain.background === "" || popular_domain.background === null
                              ? "https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image6.png"
                              : popular_domain.background
                          }
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 30vw, 90vw"
                          className="tw-object-cover"
                        />
                      </div>
                      <div className="tw-flex tw-min-h-0 tw-flex-1 tw-flex-col tw-p-2">
                        <div className="tw-relative tw-mx-auto tw-mt-[-2.75rem] tw-mb-2 tw-w-[min(200px,70%)] tw-shrink-0">
                          <Image
                            src={
                              popular_domain.logo === "" || popular_domain.logo === null
                                ? "https://cdn.vnoc.com/logos/chat-default2.png"
                                : popular_domain.logo
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
                              href={popular_domain.domain_name}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="tw-line-clamp-2 tw-no-underline tw-text-sky-300 hover:tw-text-sky-200"
                            >
                              {popular_domain.domain_name}
                            </a>
                          </h2>
                          <p className="tw-mb-4 tw-flex-1 tw-text-pretty tw-text-sm tw-leading-relaxed tw-text-slate-400">
                            <TextLimit text={popular_domain.description} limit={80} />
                          </p>
                          <div className="tw-mt-auto tw-flex tw-shrink-0 tw-justify-center tw-pb-1">
                            <a
                              href={
                                "https://www.contrib.com/signup/firststep?domain=" +
                                popular_domain.domain_name
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
                </SwiperSlide>
              ))}
            </Swiper>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularSection