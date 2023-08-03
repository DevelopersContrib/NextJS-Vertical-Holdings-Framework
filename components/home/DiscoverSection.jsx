"use client"
import Dropdown from 'react-bootstrap/Dropdown'
import Image from "next/image"
import { useState } from "react";
import LoadingState from '@/components/includes/LoadingState';

const DiscoverSection =  ({top_seller}) => {
    const initialValues = {
        top_sellers:top_seller,
        isLoading:false,
       
    }

    const [data, setData] = useState(initialValues);
    const [value,setValue]=useState('');
    
    const handleSelect=(e)=>{
       
        setValue(e)
        setData({ ...data, ['isLoading']: true});
        dataDisplay();
    }

     const dataDisplay = async() =>{
        try {

            const response = await fetch("/api/discover", {
            method: "POST",
            body: JSON.stringify(value),
          });
  
          setData({ ...data, ['isLoading']: false});
          
        if (response.ok) {
                const res = await response.json()
                setData({ ...data, ['top_sellers']: res.popular_domains})
                
                console.log(res.popular_domains)
            if(res.status){
              
              console.log('done....')
            }
            
          }else{
            alert('An error occurred')
          }
        } catch (error) {
          console.log(error);
        } finally {
          //set
        }
     }

    const showDiscover = () => {

        return (
            <div className="row g-3">
                {data.top_sellers.data.domains.map((top_sellers) => (
                <div className="col-xl-3 col-sm-6" key={top_sellers.domain_name}>
                <a href={top_sellers.domain_name} className="tw-flex tw-w-full tw-shadow-md tw-p-2 tw-items-center tw-rounded-lg tw-no-underline">
                    <div className="tw-mr-3">
                    <Image
                        src={top_sellers.logo==='' || top_sellers.logo=== null ?'https://cdn.vnoc.com/logos/icon-www-domain2.png':top_sellers.logo}
                        width={50}
                        height={50}
                        alt=""
                    />
                    </div>
                    <div className="">
                        <div className="tw-text-base tw-text-black">{top_sellers.domain_name}</div>
                    </div>
                </a>
                </div>
                ))}
            </div>
        )
    }

    return (
        <section className="tw-py-12">
               
            <div className="container">
            <div className="row">
                <div className="col-xl-12">
                <h2 className="tw-font-bold tw-text-3xl mb-3">Discover Domains</h2>
                </div>
                <div className="col-xl-12 mb-5">
                <Dropdown  onSelect={handleSelect}>
                    <Dropdown.Toggle id="dropdown-sortby" variant="dark" className="tw-py-[10px!important] tw-px-[45px!important]">
                    Sort By
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item eventKey="name">Name</Dropdown.Item>
                    <Dropdown.Item eventKey="latest">Lastet</Dropdown.Item>
                    <Dropdown.Item eventKey="blockchain">Blockchain</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                <div className="col-xl-12 mb-4">
                    { data.isLoading ? <LoadingState />  : (showDiscover())}
                </div>
                <div className="col-xl-12 text-center">
                    <a href="" className="btn btn-primary px-5">
                        <small>View more</small>
                    </a>
                </div>
            </div>
            </div>
        </section>
    )
}

export default DiscoverSection