import CategorySection from "@/components/home/CategorySection";
import DiscoverSection from "@/components/home/DiscoverSection";
import HomeHero from "@/components/home/HomeHero";
import LatestTasksSection from "@/components/home/LatestTasksSection";
import PopularSection from "@/components/home/PopularSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import Footer from "@/components/includes/Footer";
import HeaderWidget from "@/components/includes/HeaderWidget";
import Learn from "@/components/includes/Learn";
import Navigation from "@/components/includes/Navigation";
import Notification from "@/components/notification/Notification";
//import BlogList from "@/modules/blog/BlogList";

import { getCategories, getData, getDomain, getchatdomains } from "@/lib/data";
import Image from "next/image";

export default async function Home() {
  const c = await getData();
  const domain = getDomain();
  const popular_domains = await getchatdomains("8", "", "");
  const top_seller = await getchatdomains("12", "", "");
  const categories = await getCategories();
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
  const html =
    '<script type="text/javascript" src="https://tools.contrib.com/eservice/chat?chat=1&d=' +
    domain +
    '" style="height:960px"></script>';

  return (
    <>
      <HeaderWidget
        piwikId={c.data.piwikId}
        accountGA={c.data.accountGA}
        adsenseClientId={c.data.adsenseClientId}
      />
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
      <Navigation
        domain={domain}
        logo={c.data.logo}
      />
      <HomeHero domain={domain} />
      <PopularSection popular_domains={popular_domains} />
      <DiscoverSection top_seller={top_seller} />

      <LatestTasksSection scriptHtml={html} />

      <CategorySection categories={categories} />
      {/* <BlogList /> */}
      <WhatWeDoSection />
      <Learn domain={domain} />
      <Notification />
      <Footer
        domain={domain}
        twitter_url={twitter_url}
        fb_url={fb_url}
        linkedin_url={linkedin_url}
      />
    </>
  );
}
