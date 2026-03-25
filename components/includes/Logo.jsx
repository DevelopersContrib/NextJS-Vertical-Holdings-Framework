import Image from "next/image";

export default function Logo({ domain, logo }) {
  if (logo != null && logo !== "") {
    return (
      <Image
        src={logo}
        width={200}
        height={48}
        alt=""
        sizes="200px"
        className="img-fluid tw-block tw-h-9 tw-w-auto tw-max-h-10 tw-max-w-[min(200px,55vw)] tw-object-contain tw-object-left md:tw-h-10 md:tw-max-h-11"
      />
    );
  }

  return (
    <span className="tw-block tw-max-w-[min(100%,240px)] tw-truncate tw-text-base tw-font-semibold tw-leading-none tw-tracking-tight tw-text-slate-100 md:tw-text-lg">
      {domain}
    </span>
  );
}
