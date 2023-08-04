
import HeaderWidget from '@/components/includes/HeaderWidget'
import Navigation from "@/components/includes/Navigation"
import { getData, getDomain } from '@/lib/data'
import Footer from '@/components/includes/Footer'
import Image from 'next/image'
import TextLimit from '@/components/home/TextLimit'

const page = async () => {
  const c = await getData();
  const domain = getDomain();
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;


  return (
    <>
      <HeaderWidget piwikId={c.data.piwikId} accountGA={c.data.accountGA} adsenseClientId={c.data.adsenseClientId} />
      <div className="circlebg1">
        <Image
          className="img-fluid tw-w-full"
          src="https://cdn.vnoc.com/background/vertica-holdings-framework/circlebg19.svg"
          width={525}
          height={548}
          alt=""
        />
      </div>
      <div className="circlebg2">
        <Image
          className="img-fluid tw-w-full"
          src="https://cdn.vnoc.com/background/vertica-holdings-framework/circlebg20.svg"
          width={525}
          height={548}
          sizes="100vw"
          alt=""
        />
      </div>
      <div className="circlebg3">
        <Image
          className="img-fluid tw-w-full"
          src="https://cdn.vnoc.com/background/vertica-holdings-framework/circlebg21.svg"
          width={671}
          height={600}
          sizes="100vw"
          alt=""
        />
      </div>
      <Navigation domain={domain} logo={c.data.logo} />
      <section className='tw-py-12'>
        <div className="container">
          <div className="row g-3">
            <div className="col-xl-4">
              <div className='tw-inline-flex tw-w-full tw-h-full tw-flex-col tw-relative tw-pb-4'>
                <div className="tw-w-full tw-relative">
                  <Image
                    src="https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image6.png"
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
                      src="https://cdn.vnoc.com/logos/chat-default2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                    />
                  </div>
                  <div className="tw-w-full text-center">
                    <h2 className='tw-font-semibold tw-text-base tw-mb-4'>
                      <a href="#" target='_blank' className='tw-no-underline'>domainname.com</a>
                    </h2>
                    <p>
                      <TextLimit text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime sed et fugit. Eius quo ea mollitia corrupti quod aliquid cum est necessitatibus obcaecati laudantium eos nostrum deserunt, accusantium, impedit dolorem?" limit={80} />
                    </p>
                    <div className="text-center mb-4">
                      <a href="#" className="btn btn-primary">
                        Contribute
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className='tw-inline-flex tw-w-full tw-h-full tw-flex-col tw-relative tw-pb-4'>
                <div className="tw-w-full tw-relative">
                  <Image
                    src="https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image6.png"
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
                      src="https://cdn.vnoc.com/logos/chat-default2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                    />
                  </div>
                  <div className="tw-w-full text-center">
                    <h2 className='tw-font-semibold tw-text-base tw-mb-4'>
                      <a href="#" target='_blank' className='tw-no-underline'>domainname.com</a>
                    </h2>
                    <p>
                      <TextLimit text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime sed et fugit. Eius quo ea mollitia corrupti quod aliquid cum est necessitatibus obcaecati laudantium eos nostrum deserunt, accusantium, impedit dolorem?" limit={80} />
                    </p>
                    <div className="text-center mb-4">
                      <a href="#" className="btn btn-primary">
                        Contribute
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className='tw-inline-flex tw-w-full tw-h-full tw-flex-col tw-relative tw-pb-4'>
                <div className="tw-w-full tw-relative">
                  <Image
                    src="https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image6.png"
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
                      src="https://cdn.vnoc.com/logos/chat-default2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                    />
                  </div>
                  <div className="tw-w-full text-center">
                    <h2 className='tw-font-semibold tw-text-base tw-mb-4'>
                      <a href="#" target='_blank' className='tw-no-underline'>domainname.com</a>
                    </h2>
                    <p>
                      <TextLimit text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime sed et fugit. Eius quo ea mollitia corrupti quod aliquid cum est necessitatibus obcaecati laudantium eos nostrum deserunt, accusantium, impedit dolorem?" limit={80} />
                    </p>
                    <div className="text-center mb-4">
                      <a href="#" className="btn btn-primary">
                        Contribute
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className='tw-inline-flex tw-w-full tw-h-full tw-flex-col tw-relative tw-pb-4'>
                <div className="tw-w-full tw-relative">
                  <Image
                    src="https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image6.png"
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
                      src="https://cdn.vnoc.com/logos/chat-default2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                    />
                  </div>
                  <div className="tw-w-full text-center">
                    <h2 className='tw-font-semibold tw-text-base tw-mb-4'>
                      <a href="#" target='_blank' className='tw-no-underline'>domainname.com</a>
                    </h2>
                    <p>
                      <TextLimit text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime sed et fugit. Eius quo ea mollitia corrupti quod aliquid cum est necessitatibus obcaecati laudantium eos nostrum deserunt, accusantium, impedit dolorem?" limit={80} />
                    </p>
                    <div className="text-center mb-4">
                      <a href="#" className="btn btn-primary">
                        Contribute
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className='tw-inline-flex tw-w-full tw-h-full tw-flex-col tw-relative tw-pb-4'>
                <div className="tw-w-full tw-relative">
                  <Image
                    src="https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image6.png"
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
                      src="https://cdn.vnoc.com/logos/chat-default2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                    />
                  </div>
                  <div className="tw-w-full text-center">
                    <h2 className='tw-font-semibold tw-text-base tw-mb-4'>
                      <a href="#" target='_blank' className='tw-no-underline'>domainname.com</a>
                    </h2>
                    <p>
                      <TextLimit text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime sed et fugit. Eius quo ea mollitia corrupti quod aliquid cum est necessitatibus obcaecati laudantium eos nostrum deserunt, accusantium, impedit dolorem?" limit={80} />
                    </p>
                    <div className="text-center mb-4">
                      <a href="#" className="btn btn-primary">
                        Contribute
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className='tw-inline-flex tw-w-full tw-h-full tw-flex-col tw-relative tw-pb-4'>
                <div className="tw-w-full tw-relative">
                  <Image
                    src="https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image6.png"
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
                      src="https://cdn.vnoc.com/logos/chat-default2.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt=""
                      className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                    />
                  </div>
                  <div className="tw-w-full text-center">
                    <h2 className='tw-font-semibold tw-text-base tw-mb-4'>
                      <a href="#" target='_blank' className='tw-no-underline'>domainname.com</a>
                    </h2>
                    <p>
                      <TextLimit text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime sed et fugit. Eius quo ea mollitia corrupti quod aliquid cum est necessitatibus obcaecati laudantium eos nostrum deserunt, accusantium, impedit dolorem?" limit={80} />
                    </p>
                    <div className="text-center mb-4">
                      <a href="#" className="btn btn-primary">
                        Contribute
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer domain={domain} twitter_url={twitter_url} fb_url={fb_url} linkedin_url={linkedin_url} />
    </>

  )
}

export default page