import { OFFICES, OFFICE_SLOT } from "@/components/offices";

/** "Offices across India" card, styled like the Call / WhatsApp cards. Plain HTML, no JS. */
export default function OfficesDirectory({ className = "" }: { className?: string }) {
  return (
    <address
      className={`flex w-full flex-col rounded-[20px] border border-solid border-black/5 bg-[#212121] px-4 py-4 not-italic sm:rounded-[22px] sm:px-5 sm:py-5 lg:rounded-[26px] lg:px-6 lg:py-6 ${className}`}
    >
      <div className="flex items-center gap-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#CC000A] sm:size-12 sm:rounded-[16px] lg:size-14 lg:rounded-[18px]">
          <svg viewBox="0 0 24 24" className="size-5 shrink-0 text-white lg:size-6" fill="currentColor" aria-hidden="true">
            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
          </svg>
        </span>
        <span className="flex flex-col">
          <span className="text-[10px] leading-4 font-bold text-[#A9A9A9] uppercase sm:text-[13px] sm:leading-[18px] lg:text-[15px] lg:leading-[20px]">
            Offices across India
          </span>
          <span className="text-sm leading-6 font-extrabold text-white sm:text-[17px] lg:text-[21px] lg:leading-7">
            Our Locations
          </span>
        </span>
      </div>

      <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 border-t border-solid border-white/10 pt-3 sm:mt-2.5 sm:grid-cols-2 sm:pt-3 lg:mt-3 lg:grid-cols-3 lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-8 lg:pt-4">
        {OFFICES.map((office, i) => (
          <div key={office.city} className={`flex flex-col gap-1 self-start ${OFFICE_SLOT[i] ?? ""}`}>
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#FF4D55] uppercase sm:text-[12px] lg:text-[14px]">
              {office.city}
            </span>
            <span className="text-xs leading-[1.55] text-white/70 sm:text-[13px] lg:text-[15px] lg:leading-[1.6]">
              {office.address}
            </span>
          </div>
        ))}
      </div>
    </address>
  );
}
