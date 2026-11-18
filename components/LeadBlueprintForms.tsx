"use client";

import type { ChangeEvent } from "react";
import SqftListbox from "@/components/SqftListbox";
import { useBlueprintForm } from "@/hooks/useBlueprintForm";

const fieldBase =
  "w-full rounded-[8px] border-[1.101px] border-solid bg-[#F0F0F0] text-[12px] leading-[normal] text-black outline-none placeholder:text-[#757575] focus:border-[#C4161C]";

const labelClass = "text-[14px] font-bold leading-[normal] text-[#5A5A5A]";

export function BlueprintForm() {
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
    `${fieldBase} ${borderColor(error)} appearance-none cursor-pointer rounded-[8.809px] py-[15.101px] pr-[36.101px] pl-[23.101px] ${
      hasValue ? "text-black" : "text-[#757575]"
    }`;

  const errorText = (error?: string) =>
    error ? (
      <p className="mt-1 text-[11px] leading-[normal] text-[#C4161C]">
        {error}
      </p>
    ) : null;

  return (
    <div className="flex w-full flex-col items-center gap-[26px] rounded-[31.931px] bg-white px-5 py-[32px] sm:px-[50px] sm:py-[44px] min-[1024px]:w-[659px]">
      <div className="flex w-full flex-col items-center gap-[6px] text-center">
        <h3 className="w-full text-[19px] leading-[normal] font-extrabold text-[#080808] sm:text-[24px]">
          Request Your Fulfillment Center Blueprint &amp; Quote
        </h3>
        <p className="w-full text-[12px] leading-[normal] font-medium text-[#9A9A9A] sm:text-[14px]">
          Get a custom structural layout optimized for sorting, mezzanines &amp; rapid dispatch.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full flex-col items-center gap-[26px]"
      >
        <div className="flex w-full flex-col items-start">
          {/* ROW 1 */}
          <div className="flex w-full flex-col sm:flex-row sm:items-center sm:gap-[35px]">
            <div className="flex w-full flex-col items-start gap-[7px] sm:w-[262.202px]">
              <label htmlFor="lb-name" className={labelClass}>
                Full Name<span className="text-[#ED1D23]">*</span>
              </label>
              <input
                id="lb-name"
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
              <label htmlFor="lb-location" className={labelClass}>
                Project Location<span className="text-[#ED1D23]">*</span>
              </label>
              <input
                id="lb-location"
                type="text"
                name="location"
                placeholder="Enter Project Location"
                value={values.location}
                onChange={handleChange}
                className={`${inputClass(errors.location)} rounded-[8.809px] pr-[36.101px] pl-[23.101px] tracking-[0.3303px]`}
              />
              {errorText(errors.location)}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="flex w-full flex-col sm:flex-row sm:items-center sm:gap-[35.237px]">
            <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
              <label htmlFor="lb-phone" className={labelClass}>
                Mobile Number<span className="text-[#ED1D23]">*</span>
              </label>
              <input
                id="lb-phone"
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
              <label htmlFor="lb-email" className={labelClass}>
                Email Address<span className="text-[#ED1D23]">*</span>
              </label>
              <input
                id="lb-email"
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
              <label htmlFor="lb-industry" className={labelClass}>
                Industry Type<span className="text-[#ED1D23]">*</span>
              </label>
              <input
                id="lb-industry"
                type="text"
                name="industry"
                placeholder="Enter your Industry type"
                value={values.industry}
                onChange={handleChange}
                className={`${inputClass(errors.industry)} rounded-[8.809px]`}
              />
              {errorText(errors.industry)}
            </div>

            <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
              <label htmlFor="lb-sqft" className={labelClass}>
                Project Sq. Ft<span className="text-[#ED1D23]">*</span>
              </label>
              <SqftListbox
                id="lb-sqft"
                value={values.sqft}
                onChange={(value) =>
                  handleChange({
                    target: { name: "sqft", value },
                  } as ChangeEvent<HTMLSelectElement>)
                }
                className={selectClass(errors.sqft, !!values.sqft)}
              />
              {errorText(errors.sqft)}
            </div>
          </div>

          {/* ROW 4 */}
          <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px]">
            <label htmlFor="lb-details" className={labelClass}>
              Requirement Details<span className="text-[#ED1D23]">*</span>
            </label>
            <textarea
              id="lb-details"
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

          <p className="py-px text-center text-[12px] leading-[normal] font-medium tracking-[0.3303px] text-[#5A5A5A]">
            100% Transparent Consultation with single point project support
          </p>
        </div>
      </form>
    </div>
  );
}
