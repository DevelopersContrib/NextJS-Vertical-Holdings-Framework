"use client";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "next/image";
import { useState, useEffect } from "react";
import LoadingState from "@/components/includes/LoadingState";

const DiscoverSection = ({ top_seller }) => {
  const initialValues = {
    top_sellers: top_seller,
    isLoading: false,
    buttonLabel: "View All",
    showMoreLess: "more",
  };

  const initialDiscover = {
    sort: "",
    limit: "12",
    keyword: "",
  };

  const [data, setData] = useState(initialValues);
  const [selectedValue, setSelectedValue] = useState(initialDiscover);

  useEffect(() => {
    const dataDisplay = async () => {
      try {
        const response = await fetch("/api/discover", {
          method: "POST",
          body: JSON.stringify(selectedValue),
        });

        setData({ ...data, ["isLoading"]: false });
        // console.log(response);
        if (response.ok) {
          const res = await response.json();
          setData({ ...data, ["top_sellers"]: res.popular_domains });

          // console.log(res.popular_domains);
          if (res.status) {
            // console.log("done....");
          }
        } else {
          alert("An error occurred");
        }
      } catch (error) {
        console.log(error);
      } finally {
        //set
      }
    };

    dataDisplay();
  }, [selectedValue]);

  const handleSelect = (eventKey) => {
    //setSelectedValue(eventKey);
    setSelectedValue({ ...selectedValue, ["sort"]: eventKey });
  };

  const handleClick = (e) => {
    // console.log(e.currentTarget.name);
    // console.log(e);
    if (e.currentTarget.name === "more") {
      setSelectedValue({ ...selectedValue, ["limit"]: "" });
      setData({ ...data, ["buttonLabel"]: "Show Less", ["showMoreLess"]: "less" });
    } else {
      setSelectedValue({ ...selectedValue, ["limit"]: "12" });
      setData({ ...data, ["buttonLabel"]: "View all", ["showMoreLess"]: "more" });
    }
  };

  const showDiscover = () => {
    return (
      <div className="row g-3 tw-items-stretch">
        {data.top_sellers.data.domains.map((top_sellers) => (
          <div
            className="col-xl-3 col-sm-6 tw-flex"
            key={top_sellers.domain_name}
          >
            <a
              href={top_sellers.domain_name}
              className="tw-flex tw-h-full tw-w-full tw-min-h-[4.75rem] tw-items-center tw-rounded-xl tw-border tw-border-slate-700/80 tw-bg-slate-950/50 tw-p-3 tw-shadow-md tw-shadow-black/20 tw-no-underline tw-transition-colors hover:tw-border-slate-600 hover:tw-bg-slate-900/70"
            >
              <div className="tw-mr-3">
                <Image
                  src={
                    top_sellers.logo === "" || top_sellers.logo === null
                      ? "https://cdn.vnoc.com/logos/icon-www-domain2.png"
                      : top_sellers.logo
                  }
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
              <div className="">
                <div className="tw-text-base tw-text-slate-100">{top_sellers.domain_name}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="discover-domains"
      className="tw-scroll-mt-24 tw-border-t tw-border-slate-800/80 tw-bg-slate-900/40 tw-py-20"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <p className="tw-mb-2 tw-text-sm tw-font-semibold tw-uppercase tw-tracking-wide tw-text-sky-400">
              Explore
            </p>
            <h2 className="tw-mb-3 tw-text-3xl tw-font-bold tw-tracking-tight tw-text-slate-100 md:tw-text-4xl">
              Discover domains
            </h2>
            <p className="tw-mb-8 tw-max-w-2xl tw-text-slate-400">
              Sort the directory and open properties that match your interests.
            </p>
          </div>
          <div className="col-xl-12 mb-5">
            <Dropdown onSelect={handleSelect}>
              <Dropdown.Toggle id="dropdown-sortby" variant="dark">
                Sort By
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="name">Name</Dropdown.Item>
                <Dropdown.Item eventKey="latest">Latest</Dropdown.Item>
                <Dropdown.Item eventKey="blockchain">Blockchain</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-xl-12 mb-4">{data.isLoading ? <LoadingState /> : showDiscover()}</div>
          <div className="col-xl-12 text-center">
            <button
              onClick={handleClick}
              name={data.showMoreLess}
              type="button"
              className="btn btn-primary"
            >
              {data.buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
