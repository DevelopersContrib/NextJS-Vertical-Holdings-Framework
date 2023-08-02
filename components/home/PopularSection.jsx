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
              navigation={true}
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
              modules={[Pagination, Autoplay, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='tw-inline-flex tw-w-full tw-h-full tw-flex-col tw-relative tw-pb-4'>
                  <div className="tw-w-full tw-relative">
                    <Image
                      src="https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                    />
                  </div>
                  <div className="tw-bg-white tw-rounded-br-xl tw-rounded-bl-xl tw-p-2 tw-shadow-[0px_4px_10px_6px_rgb(0_0_0_/_5%)]">
                    <div className="tw-w-[200px] tw-mt-[-45px] tw-mx-auto tw-relative">
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
                        <TextLimit text="Join a vibrant community of developers, influencers, and entrepreneurs on chatcafe.com, all using the versatile CONTRIB token to power their token economies!" limit={80} />
                      </p>
                      <div className="text-center mb-4">
                        <a href="#" className="btn btn-primary">
                          Contribute
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='tw-inline-flex tw-w-full tw-h-full tw-flex-col tw-relative tw-pb-4'>
                  <div className="tw-w-full tw-relative">
                    <Image
                      src="https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                    />
                  </div>
                  <div className="tw-bg-white tw-rounded-br-xl tw-rounded-bl-xl tw-p-2 tw-shadow-[0px_4px_10px_6px_rgb(0_0_0_/_5%)]">
                    <div className="tw-w-[200px] tw-mt-[-45px] tw-mx-auto tw-relative">
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
                        <TextLimit text="Join a vibrant community of developers, influencers, and entrepreneurs on chatcafe.com, all using the versatile CONTRIB token to power their token economies!" limit={80} />
                      </p>
                      <div className="text-center mb-4">
                        <a href="#" className="btn btn-primary">
                          Contribute
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='tw-inline-flex tw-w-full tw-h-full tw-flex-col tw-relative tw-pb-4'>
                  <div className="tw-w-full tw-relative">
                    <Image
                      src="https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                    />
                  </div>
                  <div className="tw-bg-white tw-rounded-br-xl tw-rounded-bl-xl tw-p-2 tw-shadow-[0px_4px_10px_6px_rgb(0_0_0_/_5%)]">
                    <div className="tw-w-[200px] tw-mt-[-45px] tw-mx-auto tw-relative">
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
                        <TextLimit text="Join a vibrant community of developers, influencers, and entrepreneurs on chatcafe.com, all using the versatile CONTRIB token to power their token economies!" limit={80} />
                      </p>
                      <div className="text-center mb-4">
                        <a href="#" className="btn btn-primary">
                          Contribute
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='tw-inline-flex tw-w-full tw-h-full tw-flex-col tw-relative tw-pb-4'>
                  <div className="tw-w-full tw-relative">
                    <Image
                      src="https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                    />
                  </div>
                  <div className="tw-bg-white tw-rounded-br-xl tw-rounded-bl-xl tw-p-2 tw-shadow-[0px_4px_10px_6px_rgb(0_0_0_/_5%)]">
                    <div className="tw-w-[200px] tw-mt-[-45px] tw-mx-auto tw-relative">
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
                        <TextLimit text="Join a vibrant community of developers, influencers, and entrepreneurs on chatcafe.com, all using the versatile CONTRIB token to power their token economies!" limit={80} />
                      </p>
                      <div className="text-center mb-4">
                        <a href="#" className="btn btn-primary">
                          Contribute
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='tw-inline-flex tw-w-full tw-h-full tw-flex-col tw-relative tw-pb-4'>
                  <div className="tw-w-full tw-relative">
                    <Image
                      src="https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                    />
                  </div>
                  <div className="tw-bg-white tw-rounded-br-xl tw-rounded-bl-xl tw-p-2 tw-shadow-[0px_4px_10px_6px_rgb(0_0_0_/_5%)]">
                    <div className="tw-w-[200px] tw-mt-[-45px] tw-mx-auto tw-relative">
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
                        <TextLimit text="Join a vibrant community of developers, influencers, and entrepreneurs on chatcafe.com, all using the versatile CONTRIB token to power their token economies!" limit={80} />
                      </p>
                      <div className="text-center mb-4">
                        <a href="#" className="btn btn-primary">
                          Contribute
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='tw-inline-flex tw-w-full tw-h-full tw-flex-col tw-relative tw-pb-4'>
                  <div className="tw-w-full tw-relative">
                    <Image
                      src="https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                    />
                  </div>
                  <div className="tw-bg-white tw-rounded-br-xl tw-rounded-bl-xl tw-p-2 tw-shadow-[0px_4px_10px_6px_rgb(0_0_0_/_5%)]">
                    <div className="tw-w-[200px] tw-mt-[-45px] tw-mx-auto tw-relative">
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
                        <TextLimit text="Join a vibrant community of developers, influencers, and entrepreneurs on chatcafe.com, all using the versatile CONTRIB token to power their token economies!" limit={80} />
                      </p>
                      <div className="text-center mb-4">
                        <a href="#" className="btn btn-primary">
                          Contribute
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='tw-inline-flex tw-w-full tw-h-full tw-flex-col tw-relative tw-pb-4'>
                  <div className="tw-w-full tw-relative">
                    <Image
                      src="https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                    />
                  </div>
                  <div className="tw-bg-white tw-rounded-br-xl tw-rounded-bl-xl tw-p-2 tw-shadow-[0px_4px_10px_6px_rgb(0_0_0_/_5%)]">
                    <div className="tw-w-[200px] tw-mt-[-45px] tw-mx-auto tw-relative">
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
                        <TextLimit text="Join a vibrant community of developers, influencers, and entrepreneurs on chatcafe.com, all using the versatile CONTRIB token to power their token economies!" limit={80} />
                      </p>
                      <div className="text-center mb-4">
                        <a href="#" className="btn btn-primary">
                          Contribute
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='tw-inline-flex tw-w-full tw-h-full tw-flex-col tw-relative tw-pb-4'>
                  <div className="tw-w-full tw-relative">
                    <Image
                      src="https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                    />
                  </div>
                  <div className="tw-bg-white tw-rounded-br-xl tw-rounded-bl-xl tw-p-2 tw-shadow-[0px_4px_10px_6px_rgb(0_0_0_/_5%)]">
                    <div className="tw-w-[200px] tw-mt-[-45px] tw-mx-auto tw-relative">
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
                        <TextLimit text="Join a vibrant community of developers, influencers, and entrepreneurs on chatcafe.com, all using the versatile CONTRIB token to power their token economies!" limit={80} />
                      </p>
                      <div className="text-center mb-4">
                        <a href="#" className="btn btn-primary">
                          Contribute
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularSection