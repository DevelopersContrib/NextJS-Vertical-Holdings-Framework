"use client"
import Navigation from "@/components/includes/Navigation"
import PopularSection from "@/components/home/PopularSection"
import Image from "next/image"
import Dropdown from 'react-bootstrap/Dropdown'
import {FaTasks,FaFacebookF, FaTwitter, FaYoutube} from "react-icons/fa"

export default function Home() {
  return (
    <>
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
      <Navigation />
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
              Join a vibrant community of developers, influencers, and entrepreneurs on hairchat.com, all using the versatile CONTRIB token to power their token economies!. 
              </h1>
              <a href="" className="btn btn-primary tw-p-[20px!important] tw-min-w-[180px]">
                Discover
              </a>
            </div>
          </div>
        </div>
      </section>
      <PopularSection />
      <section className="tw-py-12">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="tw-font-bold tw-text-3xl mb-3">Discover Domains</h2>
            </div>
            <div className="col-xl-12 mb-5">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-sortby" variant="dark" className="tw-py-[10px!important] tw-px-[45px!important]">
                  Sort By
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Lastet</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Blockchain</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-xl-12 mb-4">
              <div className="row g-3">
                <div className="col-xl-3 col-sm-6">
                  <a href="#" className="tw-flex tw-w-full tw-shadow-md tw-p-2 tw-items-center tw-rounded-lg tw-no-underline">
                    <div className="tw-mr-3">
                      <Image
                        src="https://cdn.vnoc.com/logos/icon-www-domain2.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className="tw-text-base tw-text-black">chatvectors.com</div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <a href="#" className="tw-flex tw-w-full tw-shadow-md tw-p-2 tw-items-center tw-rounded-lg tw-no-underline">
                    <div className="tw-mr-3">
                      <Image
                        src="https://cdn.vnoc.com/logos/icon-www-domain2.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className="tw-text-base tw-text-black">chatvectors.com</div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <a href="#" className="tw-flex tw-w-full tw-shadow-md tw-p-2 tw-items-center tw-rounded-lg tw-no-underline">
                    <div className="tw-mr-3">
                      <Image
                        src="https://cdn.vnoc.com/logos/icon-www-domain2.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className="tw-text-base tw-text-black">chatvectors.com</div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <a href="#" className="tw-flex tw-w-full tw-shadow-md tw-p-2 tw-items-center tw-rounded-lg tw-no-underline">
                    <div className="tw-mr-3">
                      <Image
                        src="https://cdn.vnoc.com/logos/icon-www-domain2.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className="tw-text-base tw-text-black">chatvectors.com</div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <a href="#" className="tw-flex tw-w-full tw-shadow-md tw-p-2 tw-items-center tw-rounded-lg tw-no-underline">
                    <div className="tw-mr-3">
                      <Image
                        src="https://cdn.vnoc.com/logos/icon-www-domain2.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className="tw-text-base tw-text-black">chatvectors.com</div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <a href="#" className="tw-flex tw-w-full tw-shadow-md tw-p-2 tw-items-center tw-rounded-lg tw-no-underline">
                    <div className="tw-mr-3">
                      <Image
                        src="https://cdn.vnoc.com/logos/icon-www-domain2.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className="tw-text-base tw-text-black">chatvectors.com</div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <a href="#" className="tw-flex tw-w-full tw-shadow-md tw-p-2 tw-items-center tw-rounded-lg tw-no-underline">
                    <div className="tw-mr-3">
                      <Image
                        src="https://cdn.vnoc.com/logos/icon-www-domain2.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className="tw-text-base tw-text-black">chatvectors.com</div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <a href="#" className="tw-flex tw-w-full tw-shadow-md tw-p-2 tw-items-center tw-rounded-lg tw-no-underline">
                    <div className="tw-mr-3">
                      <Image
                        src="https://cdn.vnoc.com/logos/icon-www-domain2.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className="tw-text-base tw-text-black">chatvectors.com</div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <a href="#" className="tw-flex tw-w-full tw-shadow-md tw-p-2 tw-items-center tw-rounded-lg tw-no-underline">
                    <div className="tw-mr-3">
                      <Image
                        src="https://cdn.vnoc.com/logos/icon-www-domain2.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className="tw-text-base tw-text-black">chatvectors.com</div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <a href="#" className="tw-flex tw-w-full tw-shadow-md tw-p-2 tw-items-center tw-rounded-lg tw-no-underline">
                    <div className="tw-mr-3">
                      <Image
                        src="https://cdn.vnoc.com/logos/icon-www-domain2.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className="tw-text-base tw-text-black">chatvectors.com</div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <a href="#" className="tw-flex tw-w-full tw-shadow-md tw-p-2 tw-items-center tw-rounded-lg tw-no-underline">
                    <div className="tw-mr-3">
                      <Image
                        src="https://cdn.vnoc.com/logos/icon-www-domain2.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className="tw-text-base tw-text-black">chatvectors.com</div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <a href="#" className="tw-flex tw-w-full tw-shadow-md tw-p-2 tw-items-center tw-rounded-lg tw-no-underline">
                    <div className="tw-mr-3">
                      <Image
                        src="https://cdn.vnoc.com/logos/icon-www-domain2.png"
                        width={50}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className="tw-text-base tw-text-black">chatvectors.com</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-12 text-center">
              <a href="" className="btn btn-primary px-5">
                <small>View more</small>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-12">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="tw-font-bold tw-text-3xl mb-3">Latest Tasks</h2>
              contrib tool widget here
            </div>
          </div>
        </div>
      </section>
      <section className="tw-py-12">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="tw-font-bold tw-text-3xl mb-3">Browse Categories</h2>
            </div>
            <div className="col-lg-12">
              <div className="row g-3">
                <div className="col-xl-3">
                  <a target="_blank" href="" className="tw-no-underline tw-flex tw-w-full tw-items-center tw-text-2xl tw-font-medium">
                    <div className="tw-mr-4">
                      <FaTasks className="tw-w-6 tw-h-6 tw-text-blue-400" />
                    </div>
                    <div className="tw-text-[#515151]">
                      Agriculture
                    </div>
                  </a>
                </div>
                <div className="col-xl-3">
                  <a target="_blank" href="" className="tw-no-underline tw-flex tw-w-full tw-items-center tw-text-2xl tw-font-medium">
                    <div className="tw-mr-4">
                      <FaTasks className="tw-w-6 tw-h-6 tw-text-blue-400" />
                    </div>
                    <div className="tw-text-[#515151]">
                      Agriculture
                    </div>
                  </a>
                </div>
                <div className="col-xl-3">
                  <a target="_blank" href="" className="tw-no-underline tw-flex tw-w-full tw-items-center tw-text-2xl tw-font-medium">
                    <div className="tw-mr-4">
                      <FaTasks className="tw-w-6 tw-h-6 tw-text-blue-400" />
                    </div>
                    <div className="tw-text-[#515151]">
                      Agriculture
                    </div>
                  </a>
                </div>
                <div className="col-xl-3">
                  <a target="_blank" href="" className="tw-no-underline tw-flex tw-w-full tw-items-center tw-text-2xl tw-font-medium">
                    <div className="tw-mr-4">
                      <FaTasks className="tw-w-6 tw-h-6 tw-text-blue-400" />
                    </div>
                    <div className="tw-text-[#515151]">
                      Agriculture
                    </div>
                  </a>
                </div>
                <div className="col-xl-3">
                  <a target="_blank" href="" className="tw-no-underline tw-flex tw-w-full tw-items-center tw-text-2xl tw-font-medium">
                    <div className="tw-mr-4">
                      <FaTasks className="tw-w-6 tw-h-6 tw-text-blue-400" />
                    </div>
                    <div className="tw-text-[#515151]">
                      Agriculture
                    </div>
                  </a>
                </div>
                <div className="col-xl-3">
                  <a target="_blank" href="" className="tw-no-underline tw-flex tw-w-full tw-items-center tw-text-2xl tw-font-medium">
                    <div className="tw-mr-4">
                      <FaTasks className="tw-w-6 tw-h-6 tw-text-blue-400" />
                    </div>
                    <div className="tw-text-[#515151]">
                      Agriculture
                    </div>
                  </a>
                </div>
                <div className="col-xl-3">
                  <a target="_blank" href="" className="tw-no-underline tw-flex tw-w-full tw-items-center tw-text-2xl tw-font-medium">
                    <div className="tw-mr-4">
                      <FaTasks className="tw-w-6 tw-h-6 tw-text-blue-400" />
                    </div>
                    <div className="tw-text-[#515151]">
                      Agriculture
                    </div>
                  </a>
                </div>
                <div className="col-xl-3">
                  <a target="_blank" href="" className="tw-no-underline tw-flex tw-w-full tw-items-center tw-text-2xl tw-font-medium">
                    <div className="tw-mr-4">
                      <FaTasks className="tw-w-6 tw-h-6 tw-text-blue-400" />
                    </div>
                    <div className="tw-text-[#515151]">
                      Agriculture
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section className="tw-py-12 tw-bg-gray-100/50">
        <div className="container">
          <div className="row tw-justify-center">
            <div className="col-xl-9">
              <div className="row tw-justify-center tw-items-center">
                <div className="col-xl-4">
                  <div className="tw-w-1/2 tw-m-auto xl:tw-w-full">
                    <Image 
                      src="https://vnoc.com/assets/lander/assets/images/envelope.png"
                      height={0}
                      width={0}
                      alt=""
                      sizes="100vw"
                      className="tw-w-full img-fluid"
                    />
                  </div>
                </div>
                <div className="col-xl-8 tw-flex tw-flex-col">
                  <h2 className="tw-font-bold tw-text-3xl tw-text-[#020E1E] mb-3">
                  Learn more about us
                  </h2>
                  <p className="tw-text-gray-400">
                  Join the Network of Professionals and Digital Asset Owners.
                  </p>
                  <div className="row">
                    <div className="col-lg-9 tw-mb-3 sm:tw-mb-auto">
                      <input type="text" className="form-control form-control-lg" placeholder="Email Address" />
                    </div>
                    <div className="col-lg-3">
                      <div className="d-grid">
                        <a href="" className="btn btn-primary btn-lg px-4">
                          Submit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="tw-bg-[#020E1E] tw-py-12 tw-text-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <h4 className="tw-font-semibold mb-3">Hairchat.com</h4>
              <p className="small">
              Join a vibrant community of developers, influencers, and entrepreneurs on hairchat.com, all using the versatile CONTRIB token to power their token economies!
              </p>
            </div>
            <div className="col-xl-8 tw-flex tw-justify-between xl:tw-pl-[10rem!important]">
              <div className="col">
                <h4 className="tw-font-bold mb-3">
                  Get Started
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a href="#" className="tw-no-underline tw-text-white tw-inline-block">
                    Partner
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="tw-no-underline tw-text-white tw-inline-block">
                    Apply Now
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="tw-no-underline tw-text-white tw-inline-block">
                    Referral
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="tw-no-underline tw-text-white tw-inline-block">
                    Developers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h4 className="tw-font-bold mb-3">
                Company
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a href="#" className="tw-no-underline tw-text-white tw-inline-block">
                    About Us
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="tw-no-underline tw-text-white tw-inline-block">
                    Contact Us
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="tw-no-underline tw-text-white tw-inline-block">
                    Terms
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="tw-no-underline tw-text-white tw-inline-block">
                    Privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <h4 className="tw-font-bold mb-3">
                Partners
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a href="#" className="tw-no-underline tw-text-white tw-inline-block">
                      <Image 
                        src="https://s3.amazonaws.com/assets.zipsite.net/images/jayson/logo/logo-new-contrib-06-wyt.png"
                        width={129}
                        height={40}
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </li>
                </ul>
                <h4 className="tw-font-bold mb-3">
                Socials
                </h4>
                <ul className="list-inline">
                  <li className="mb-3 list-inline-item">
                    <a href="#" className="tw-no-underline tw-text-white tw-inline-block">
                      <FaFacebookF/>
                    </a>
                  </li>
                  <li className="mb-3 list-inline-item">
                    <a href="#" className="tw-no-underline tw-text-white tw-inline-block">
                    <FaTwitter />
                    </a>
                  </li>
                  <li className="mb-3 list-inline-item">
                    <a href="#" className="tw-no-underline tw-text-white tw-inline-block">
                    <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
