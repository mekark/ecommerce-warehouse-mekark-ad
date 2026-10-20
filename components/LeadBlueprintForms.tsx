"use client";

import Image from "next/image";
import {
  SQFT_OPTIONS,
  useBlueprintForm,
} from "@/hooks/useBlueprintForm";
import { assetUrl } from "@/lib/assetPrefix";

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
      <div className="flex w-full max-w-[364px] flex-col items-start gap-[6px]">
        <h3 className="w-full text-[22px] leading-[normal] font-extrabold text-[#080808] sm:text-[24px]">
          Request Your Project Blueprint
        </h3>
        <p className="w-full max-w-[337px] text-[14px] leading-[normal] font-medium text-[#9A9A9A]">
          Get a custom layout, cost range &amp; 150-day* timeline
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
                Full Name*
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
                Project Location
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
                Mobile Number*
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
                Email Address
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
                Industry Type*
              </label>
              <input
                id="lb-industry"
                type="text"
                name="industry"
                placeholder="Enter your Industry type"
                value={values.industry}
                onChange={handleChange}
                className={`${inputClass(errors.industry)} rounded-[8.809px] pr-[36.101px] pl-[23.101px]`}
              />
              {errorText(errors.industry)}
            </div>

            <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
              <label htmlFor="lb-sqft" className={labelClass}>
                Project Sq. Ft*
              </label>
              <select
                id="lb-sqft"
                name="sqft"
                value={values.sqft}
                onChange={handleChange}
                className={selectClass(errors.sqft, !!values.sqft)}
              >
                <option value="">Select Sq.ft Requirement</option>
                {SQFT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errorText(errors.sqft)}
            </div>
          </div>

          {/* ROW 4 */}
          <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px]">
            <label htmlFor="lb-details" className={labelClass}>
              Requirement Details*
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
            {isSubmitting ? "Submitting..." : "Get My Free Quote →"}
          </button>

          <p className="py-px text-center text-[12px] leading-[normal] font-medium tracking-[0.3303px] text-[#5A5A5A]">
            100% Transparent Consultation with single point project support
          </p>
        </div>
      </form>
    </div>
  );
}

const mobileField =
  "w-full rounded-[8px] border border-solid border-[#E2E2E2] bg-[#F0F0F0] pt-[13px] pb-[12px] text-[12px] leading-[normal] text-black outline-none placeholder:text-[#757575] focus:border-[#C4161C]";

export function MobileBlueprintForm() {
  const {
    values,
    errors,
    statusMessage,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useBlueprintForm();

  const borderColor = (error?: string) => (error ? "!border-[#C4161C]" : "");

  const errorText = (error?: string) =>
    error ? (
      <p className="mt-1 text-[11px] leading-[normal] text-[#C4161C]">
        {error}
      </p>
    ) : null;

  const selectClass = (error?: string, hasValue?: boolean) =>
    `${mobileField} ${borderColor(error)} cursor-pointer appearance-none bg-none! pr-[32px] pl-[20px] ${
      hasValue ? "text-black" : "text-[#757575]"
    }`;

  const chevron = (
    <Image
      src={assetUrl("/Images/lead/m-chevron2.svg")}
      alt=""
      width={15}
      height={15}
      className="pointer-events-none absolute top-1/2 right-[16px] size-[15px] -translate-y-1/2 rotate-90"
    />
  );

  return (
    <div className="flex w-full flex-col gap-[16px] rounded-[24px] border border-solid border-[#E2E2E2] bg-white p-[20px] drop-shadow-[0px_24px_40px_rgba(0,0,0,0.06)]">
      <div className="flex w-full flex-col items-center justify-center gap-[8px]">
        <h3 className="w-[275px] max-w-full text-[18px] leading-[normal] font-extrabold text-[#080808]">
          Request Your Project Blueprint
        </h3>
        <p className="w-[290px] max-w-full text-[12px] leading-[normal] font-medium text-[#9A9A9A]">
          Get a custom layout, cost range &amp; 150-day* timeline
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full flex-col gap-[16px]"
      >
        <div className="flex w-full flex-col gap-[16px]">
          <div>
            <input
              type="text"
              name="name"
              aria-label="Full name"
              placeholder="Enter Your name"
              value={values.name}
              onChange={handleChange}
              className={`${mobileField} ${borderColor(errors.name)} px-[16px]`}
            />
            {errorText(errors.name)}
          </div>

          <div>
            <input
              type="text"
              name="location"
              aria-label="Project location"
              placeholder="Enter project location"
              value={values.location}
              onChange={handleChange}
              className={`${mobileField} ${borderColor(errors.location)} pr-[32px] pl-[20px] tracking-[0.3px]`}
            />
            {errorText(errors.location)}
          </div>

          <div>
            <input
              type="tel"
              name="phoneNumber"
              maxLength={10}
              inputMode="numeric"
              aria-label="Mobile number"
              placeholder="Mobile Number*"
              value={values.phoneNumber}
              onChange={handleChange}
              className={`${mobileField} ${borderColor(errors.phoneNumber)} px-[16px]`}
            />
            {errorText(errors.phoneNumber)}
          </div>

          <div>
            <input
              type="email"
              name="email"
              aria-label="Email address"
              placeholder="Enter Email Address"
              value={values.email}
              onChange={handleChange}
              className={`${mobileField} ${borderColor(errors.email)} px-[16px]`}
            />
            {errorText(errors.email)}
          </div>

          <div>
            <input
              type="text"
              name="industry"
              aria-label="Industry"
              placeholder="Enter your Industry"
              value={values.industry}
              onChange={handleChange}
              className={`${mobileField} ${borderColor(errors.industry)} px-[16px]`}
            />
            {errorText(errors.industry)}
          </div>

          <div>
            <div className="relative">
              <select
                name="sqft"
                aria-label="Project square feet"
                value={values.sqft}
                onChange={handleChange}
                className={selectClass(errors.sqft, !!values.sqft)}
              >
                <option value="">Select Sq. Ft Requirement</option>
                {SQFT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {chevron}
            </div>
            {errorText(errors.sqft)}
          </div>

          <div>
            <textarea
              name="details"
              rows={1}
              aria-label="Requirement details"
              placeholder="Enter requirement details*"
              value={values.details}
              onChange={handleChange}
              className={`${mobileField} ${borderColor(errors.details)} block h-[46px] resize-none pr-[32px] pl-[20px]`}
            />
            {errorText(errors.details)}
          </div>
        </div>

        <div className="flex w-full flex-col gap-[16px]">
          {statusMessage && (
            <p className="w-full rounded-[8px] border border-red-200 bg-red-50 px-3 py-2 text-[12px] font-medium text-red-700">
              {statusMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center rounded-[8px] bg-[#C4161C] px-[36px] py-[14px] text-center text-[14px] leading-[normal] font-semibold whitespace-nowrap text-[#F5F5F5] drop-shadow-[0px_8px_16px_rgba(196,22,28,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Get My Free Quote →"}
          </button>

          <p className="w-full text-center text-[12px] leading-[normal] font-medium text-[#5A5A5A]">
            100% Transparent Consultation with single point project support
          </p>
        </div>
      </form>
    </div>
  );
}
