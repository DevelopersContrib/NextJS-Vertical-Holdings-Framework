import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const PopularSection = () => {
  return (
    <section className="tw-py-12">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h2 className="tw-font-bold tw-text-3xl mb-3">Popular Section</h2>
          </div>
          <div className="col-xl-12 tw-min-h-[200px] lg:tw-min-h-[350px]">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
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
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='tw-inline-flex tw-w-full tw-h-full tw-flex-col tw-relative'>
                  <div className="tw-w-full">
                    <Image
                      src="https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                    />
                  </div>
                  <div className="tw-w-[200px] tw-mt-[-45px] tw-mx-auto tw-table tw-absolute tw-left-0 tw-right-0">
                    <Image
                      src="https://cdn.vnoc.com/logos/logo-ChatCafe-3.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                    />
                  </div>
                  <div className="tw-w-full text-center">
                    <h2 className='tw-font-semibold tw-text-base tw-mb-4'>
                      <a href="http://chatcafe.com" target='_blank' className='tw-no-underline'>chatcafe.com</a>
                    </h2>
                    <p>
                      Join a vibrant community of developers, influencers, and entrepreneurs on chatcafe.com, all using the versatile CONTRIB token to power their token economies!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://consultants.com/" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://cdn.vnoc.com/background/consultants.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://globalventures.com/" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://cdn.vnoc.com/background/globalventures.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://photostream.com/" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://cdn.vnoc.com/background/photostream.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://referrals.com/" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://cdn.vnoc.com/background/referrals.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://venturecamp.com/" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://cdn.vnoc.com/background/venturecamp.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://virtualinterns.com/" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://cdn.vnoc.com/background/virtualinterns.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://wellnesschallenge.com/" className='tw-inline-flex tw-w-full tw-h-full' target='_blank'>
                  <Image
                    src="https://cdn.vnoc.com/background/wellnesschallenge.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                    className='img-fluid tw-w-[80%] lg:tw-w-full lg:tw-h-full mx-auto'
                  />
                </a>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularSection