
import HeaderWidget from '@/components/includes/HeaderWidget'
import Navigation from "@/components/includes/Navigation"
import { getData, getDomain, getchatdomains } from '@/lib/data'
import Footer from '@/components/includes/Footer'
import Image from 'next/image'
import Container from './Container';

const page = async () => {
  const c = await getData();
  const domain = getDomain();
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
  const top_seller = await getchatdomains('12','','');


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
          width={714}
          height={719}
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
      <Container top_seller={top_seller}/>
      <Footer domain={domain} twitter_url={twitter_url} fb_url={fb_url} linkedin_url={linkedin_url} />
    </>

  )
}

export default page