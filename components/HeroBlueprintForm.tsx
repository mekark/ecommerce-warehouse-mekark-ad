"use client";

import { type ChangeEvent } from "react";
import SqftListbox from "@/components/SqftListbox";
import { useBlueprintForm } from "@/hooks/useBlueprintForm";

const fieldBase =
  "w-full rounded-[8px] border-[1.101px] border-solid bg-[#F0F0F0] text-[12px] leading-[normal] text-black outline-none placeholder:text-[#757575] focus:border-[#C4161C]";

const labelClass = "text-[14px] font-bold leading-[normal] text-white";

/** The hero's "Request Your Project Blueprint" card — the only interactive part of the hero. */
export default function HeroBlueprintForm() {
  const {
    values,
    errors,
    statusMessage,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useBlueprintForm();

  const borderColor = (error?: string) =>
    error ? "border-[#C4161C]" : "border-[#E2E2E2]";

  const inputClass = (error?: string) =>
    `${fieldBase} ${borderColor(error)} px-[19.101px] py-[15.101px]`;

  const selectClass = (error?: string, hasValue?: boolean) =>
    `${fieldBase} ${borderColor(error)} appearance-none cursor-pointer pl-[23.101px] pr-[36.101px] py-[15.101px] tracking-[0.3303px] ${
      hasValue ? "text-black" : "text-[#757575]"
    }`;

  const errorText = (error?: string) =>
    error ? (
      <p className="mt-1 text-[11px] leading-[normal] text-[#FF8A8F]">
        {error}
      </p>
    ) : null;

  return (
    <div className="flex w-full max-w-[659px] shrink-0 flex-col items-center gap-[26px] self-center rounded-[31.931px] bg-white/10 px-5 py-[32px] shadow-[0px_26.428px_88.092px_0px_rgba(0,0,0,0.45)] backdrop-blur-[15px] sm:px-[50px] sm:py-[44px] min-[1024px]:mt-[1.08px] min-[1024px]:w-[659px]">
      <div className="flex w-full max-w-[364px] flex-col items-start gap-[6px] sm:max-w-full sm:items-center sm:text-center">
        <h3 className="w-full text-[22px] leading-[normal] font-extrabold text-white sm:text-[24px]">
          Plan Your E-Commerce Fulfillment Center
        </h3>
        <div className="flex w-full max-w-[349.431px] flex-col items-center justify-center sm:max-w-full sm:items-center">
          <p className="w-full max-w-[337px] text-[14px] sm:max-w-full leading-[normal] font-medium text-white">
            Get a custom structural layout optimized for sorting, mezzanines &amp; rapid dispatch.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full flex-col items-center gap-[26px]"
      >
        <div className="flex w-full flex-col items-start">
          {/* ROW 1 */}
          <div className="flex w-full flex-col gap-0 sm:flex-row sm:items-center sm:gap-[35px]">
            <div className="flex w-full flex-col items-start gap-[7px] sm:w-[262.202px]">
              <label htmlFor="bh-name" className={labelClass}>
                Full Name<span className="text-[#ED1D23]">*</span>
              </label>
              <input
                id="bh-name"
                type="text"
                name="name"
                placeholder="Your name"
                value={values.name}
                onChange={handleChange}
                className={inputClass(errors.name)}
              />
              {errorText(errors.name)}
            </div>

            <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
              <label htmlFor="bh-location" className={labelClass}>
                Project Location<span className="text-[#ED1D23]">*</span>
              </label>
              <input
                id="bh-location"
                type="text"
                name="location"
                placeholder="Enter Project Location"
                value={values.location}
                onChange={handleChange}
                className={`${inputClass(errors.location)} rounded-[8.809px] pl-[23.101px] pr-[36.101px] tracking-[0.3303px]`}
              />
              {errorText(errors.location)}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="flex w-full flex-col sm:flex-row sm:items-center sm:gap-[35.237px]">
            <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
              <label htmlFor="bh-phone" className={labelClass}>
                Mobile Number<span className="text-[#ED1D23]">*</span>
              </label>
              <input
                id="bh-phone"
                type="tel"
                name="phoneNumber"
                maxLength={10}
                inputMode="numeric"
                placeholder="98765 43210"
                value={values.phoneNumber}
                onChange={handleChange}
                className={inputClass(errors.phoneNumber)}
              />
              {errorText(errors.phoneNumber)}
            </div>

            <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
              <label htmlFor="bh-email" className={labelClass}>
                Email Address<span className="text-[#ED1D23]">*</span>
              </label>
              <input
                id="bh-email"
                type="email"
                name="email"
                placeholder="abcd@gmail.com"
                value={values.email}
                onChange={handleChange}
                className={inputClass(errors.email)}
              />
              {errorText(errors.email)}
            </div>
          </div>

          {/* ROW 3 */}
          <div className="flex w-full flex-col sm:flex-row sm:items-center sm:gap-[37px]">
            <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
              <label htmlFor="bh-industry" className={labelClass}>
                Industry Type<span className="text-[#ED1D23]">*</span>
              </label>
              <input
                id="bh-industry"
                type="text"
                name="industry"
                placeholder="Enter your Industry type"
                value={values.industry}
                onChange={handleChange}
                className={`${inputClass(errors.industry)} rounded-[8.809px] pl-[23.101px] pr-[36.101px] tracking-normal`}
              />
              {errorText(errors.industry)}
            </div>

            <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
              <label htmlFor="bh-sqft" className={labelClass}>
                Project Sq. Ft<span className="text-[#ED1D23]">*</span>
              </label>
              <SqftListbox
                id="bh-sqft"
                value={values.sqft}
                onChange={(value) =>
                  handleChange({
                    target: { name: "sqft", value },
                  } as ChangeEvent<HTMLSelectElement>)
                }
                className={`${selectClass(errors.sqft, !!values.sqft)} rounded-[8.809px] tracking-normal`}
              />
              {errorText(errors.sqft)}
            </div>
          </div>

          {/* ROW 4 */}
          <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px]">
            <label htmlFor="bh-details" className={labelClass}>
              Requirement Details<span className="text-[#ED1D23]">*</span>
            </label>
            <textarea
              id="bh-details"
              name="details"
              placeholder="Enter Requirement Details"
              value={values.details}
              onChange={handleChange}
              className={`${fieldBase} ${borderColor(errors.details)} h-[82.6px] resize-none rounded-[8.809px] pt-[15.101px] pr-[36.101px] pb-[15.101px] pl-[23.101px]`}
            />
            {errorText(errors.details)}
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-[14px]">
          {statusMessage && (
            <p className="w-full rounded-[8px] border border-red-200 bg-red-50 px-3 py-2 text-[12px] font-medium text-red-700">
              {statusMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-[63.867px] w-full items-center justify-center rounded-[9px] bg-[#C4161C] px-[40px] py-[20px] text-center text-[18px] leading-[normal] font-bold whitespace-nowrap text-[#F5F5F5] drop-shadow-[0px_8.809px_17.618px_rgba(196,22,28,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Request an Estimate →"}
          </button>

          <p className="py-px text-center text-[12px] leading-[normal] font-medium tracking-[0.3303px] text-[#DCDCDC]">
            100% Transparent Consultation with single point project support
          </p>
        </div>
      </form>
    </div>
  );
}
