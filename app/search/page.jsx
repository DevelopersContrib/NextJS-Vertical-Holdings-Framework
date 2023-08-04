
import HeaderWidget from '@/components/includes/HeaderWidget'
import Navigation from "@/components/includes/Navigation"
import { getData, getDomain } from '@/lib/data'
import Footer from '@/components/includes/Footer'

const page = async () => {
  const c = await getData();
  const domain = getDomain();
  const twitter_url = c.data.twitter;
  const fb_url = c.data.fb;
  const linkedin_url = c.data.linkedin;
 

  return (
    <>
      <HeaderWidget piwikId={c.data.piwikId} accountGA={c.data.accountGA} adsenseClientId={c.data.adsenseClientId}  />
      <Navigation domain={domain} logo={c.data.logo}/>
      
      <Footer domain={domain} twitter_url={twitter_url} fb_url={fb_url} linkedin_url={linkedin_url} />
    </>

  )
}

export default page