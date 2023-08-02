import Image from "next/image"


const Learn = () => {
  return (
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
  )
}
export default Learn