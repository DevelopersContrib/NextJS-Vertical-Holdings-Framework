import Navigation from "@/components/includes/Navigation"
import Learn from "@/components/includes/Learn"
import HeaderWidget from "@/components/includes/HeaderWidget"
import Footer from "@/components/includes/Footer"
import PopularSection from "@/components/home/PopularSection"
import DiscoverSection from "@/components/home/DiscoverSection"
import CategorySection from "@/components/home/CategorySection"
import ScriptLoader from '@/components/includes/ScriptLoader'
import Image from "next/image"
import { getDomain,getData, getchatdomains, getCategories } from '@/lib/data';


export default async function  Home() {
  
  const c = await getData();
  const domain = getDomain();
  const popular_domains = await getchatdomains('8','','');
  const top_seller = await getchatdomains('12','','');
  const categories = await getCategories();
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
  const html = '<script type="text/javascript" src="https://tools.contrib.com/eservice/chat?chat=1&d='+domain+'" style="height:960px"></script>';
  
  
  return (
    <>
      <HeaderWidget piwikId={c.data.piwikId} accountGA={c.data.accountGA} adsenseClientId={c.data.adsenseClientId}  />
      <div className="circlebg1">
        <Image 
          className="img-fluid tw-w-full" 
          src="https://cdn.vnoc.com/background/vertica-holdings-framework/circlebg19.svg" 
          width={0}
          height={0}
          sizes="100vw"
          alt="" 
        />
      </div>
      <div className="circlebg2">
        <Image 
          className="img-fluid tw-w-full" 
          src="https://cdn.vnoc.com/background/vertica-holdings-framework/circlebg20.svg" 
          width={0}
          height={0}
          sizes="100vw"
          alt="" 
        />
      </div>
      <div className="circlebg3">
        <Image 
          className="img-fluid tw-w-full" 
          src="https://cdn.vnoc.com/background/vertica-holdings-framework/circlebg21.svg" 
          width={0}
          height={0}
          sizes="100vw"
          alt="" 
        />
      </div>
      <Navigation domain={domain} logo={c.data.logo}/>
      <section className="tw-pt-24 tw-min-h-screen">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <Image
                src="https://cdn.vnoc.com/icons/chat-vertical/bannerSec1.png"
                width={0}
                height={0}
                sizes="100vw"
                className="img-fluid tw-w-full"
                alt=""
              />
            </div>
            <div className="col-lg-5">
              <h1 className="tw-text-2xl tw-leading-6 sm:tw-text-[40px] sm:tw-leading-[54px] tw-font-bold mb-4">
              Join a vibrant community of developers, influencers, and entrepreneurs on {domain}, all using the versatile CONTRIB token to power their token economies!. 
              </h1>
              <a href="" className="btn btn-primary tw-p-[20px!important] tw-min-w-[180px]">
                Discover
              </a>
            </div>
          </div>
        </div>
      </section>
      <PopularSection popular_domains={popular_domains}/>
      <DiscoverSection top_seller={top_seller}/>
     
      <section className="tw-py-12">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="tw-font-bold tw-text-3xl mb-3">Latest Tasks</h2>
              <ScriptLoader html={html} />
            </div>
          </div>
        </div>
      </section>
      <CategorySection categories={categories}/>
     
      <section className="tw-py-12">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="tw-font-bold tw-text-3xl mb-4">What We Do</h2>
            </div>
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-4">
                  <div className="tw-flex tw-items-center tw-full mb-4">
                    <div className="tw-mr-4">
                      <Image 
                        src="https://cdn.vnoc.com/icons/vertical-holdings-framework/mobile-cogs.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="tw-font-medium tw-text-lg">
                      We Build Brands
                    </div>
                  </div>
                  <p className="tw-text-gray-400 tw-text-sm">
                  We have the best technology contributors and inhouse staff that builds great brands.
                  </p>
                </div>
                <div className="col-xl-4">
                  <div className="tw-flex tw-items-center tw-full mb-4">
                    <div className="tw-mr-4">
                      <Image 
                        src="https://cdn.vnoc.com/icons/vertical-holdings-framework/mobile-money.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="tw-font-medium tw-text-lg">
                    We Build Products
                    </div>
                  </div>
                  <p className="tw-text-gray-400 tw-text-sm">
                  Using our Contrib/VNOC model we are able to build web products vertically but still we need your help.
                  </p>
                </div>
                <div className="col-xl-4">
                  <div className="tw-flex tw-items-center tw-full mb-4">
                    <div className="tw-mr-4">
                      <Image 
                        src="https://cdn.vnoc.com/icons/vertical-holdings-framework/mobile-notification.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="tw-font-medium tw-text-lg">
                    We Build Verticals
                    </div>
                  </div>
                  <p className="tw-text-gray-400 tw-text-sm">
                  Using our massive Globalventures portfolio, we build products around our verticals and create synergy within and outside our portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Learn domain={domain}/>
      
      <Footer domain={domain} twitter_url={twitter_url} fb_url={fb_url} linkedin_url={linkedin_url}/>
    </>
  )
}
