'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from "react";
import TextLimit from '@/components/home/TextLimit'
import Image from 'next/image'

export default function Container({top_seller}) { 
		const searchParams = useSearchParams() 
    const code = searchParams.get('key')

		const initialValues = {
				top_sellers:top_seller,
		}

		const initialDiscover = {
			sort: '',
			limit: '',
			keyword: code
		}

		const [data, setData] = useState(initialValues);
		const [selectedValue, setSelectedValue] = useState(initialDiscover);

		useEffect(() => {
				setSelectedValue((prevState) => ({
					...prevState,
					keyword: code,
				}));
		}, []); 
	

		useEffect(() => {
      console.log('useEffect')
			console.log(code);
			console.log(selectedValue.keyword);
        if(selectedValue.keyword !== ''){
        async function fetchData() {
            const response = await fetch("/api/discover", {
            method: "POST",
            body: JSON.stringify(selectedValue),
            });
						if (response.ok) {
							const res = await response.json()
							setData({ ...data, ['top_sellers']: res.popular_domains})
							setSelectedValue({ ...selectedValue, ['keyword']: code});
							console.log(res.popular_domains)
							if(res.status){
								
								console.log('done....')
							}
							
						}else{
							alert('An error occurred')
						}
      
        }
        fetchData();
        }
    }, [code, selectedValue.keyword]);



    return (
        <>
        <section className='tw-py-12'>
						
            <div className="container">
                <div className="row g-3">
										{data.top_sellers.data.domains.map((top_sellers) => (
                    <div className="col-xl-4"  key={top_sellers.domain_name}>
                        <div className='tw-inline-flex tw-w-full tw-h-full tw-flex-col tw-relative tw-pb-4'>
                            <div className="tw-w-full tw-relative">
                            <Image
                                src={top_sellers.background==='' || top_sellers.background=== null ?'https://cdn.vnoc.com/icons/chat-vertical/chat-popular-image6.png':top_sellers.background}
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
                                    src={top_sellers.logo==='' || top_sellers.logo=== null ?'https://cdn.vnoc.com/logos/chat-default2.png':top_sellers.logo}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt=""
                                    className='img-fluid tw-w-full tw-rounded-tr-xl tw-rounded-tl-xl'
                                    />
                                </div>
                                <div className="tw-w-full text-center">
                                    <h2 className='tw-font-semibold tw-text-base tw-mb-4'>
                                    <a href={top_sellers.domain_name} target='_blank' className='tw-no-underline'>{top_sellers.domain_name}</a>
                                    </h2>
                                    <p>
                                    <TextLimit text={top_sellers.description} limit={80} />
                                    </p>
                                    <div className="text-center mb-4">
                                    <a href={`https://www.contrib.com/signup/firststep?domain=`+top_sellers.domain_name} className="btn btn-primary">
                                        Contribute
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
										))}
                </div>
            </div>
        </section>
        </>
    )
}