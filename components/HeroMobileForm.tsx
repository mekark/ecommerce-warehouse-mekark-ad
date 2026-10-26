"use client";

import { type ChangeEvent } from "react";
import { useBlueprintForm } from "@/hooks/useBlueprintForm";
import SqftListbox from "@/components/SqftListbox";
import RedStarPlaceholder from "@/components/RedStarPlaceholder";

const fieldBase =
  "w-full rounded-[8px] border border-solid bg-[#F0F0F0] px-[18px] py-[14px] text-[12px] leading-[normal] text-black outline-none placeholder:text-[#757575] focus:border-[#C4161C]";

/** Phone-only "Request Your Project Blueprint" card (Figma mobile frame). */
export default function HeroMobileForm() {
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

  const selectClass = (error?: string) =>
    `${fieldBase} ${borderColor(error)} cursor-pointer text-left pr-[22px] pl-[22px]`;

  const errorText = (error?: string) =>
    error ? (
      <p className="mt-1 text-[11px] leading-[normal] text-[#FF8A8F]">
        {error}
      </p>
    ) : null;

  return (
    <div className="flex w-full flex-col items-center gap-[16px] rounded-[24px] bg-white/[0.01] px-[20px] py-[24px] shadow-[0px_26.43px_88.09px_0px_rgba(0,0,0,0.06)] backdrop-blur-[15px]">
      <div className="flex w-full flex-col items-center gap-[6px] text-center text-white">
        <h3 className="w-full text-[19px] leading-[normal] font-extrabold">
          Plan Your E-Commerce Fulfillment Center
        </h3>
        <p className="w-full text-[12px] leading-[normal] font-medium">
          Get a custom structural layout optimized for sorting, mezzanines &amp; rapid dispatch.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full flex-col items-center gap-[16px]"
      >
        <div className="flex w-full flex-col gap-[12px]">
          <div>
            <div className="relative">
              <input
                type="text"
                name="name"
                aria-label="Full name"
                value={values.name}
                onChange={handleChange}
                className={`${fieldBase} ${borderColor(errors.name)}`}
              />
              <RedStarPlaceholder text="Enter Your name" show={!values.name} left={18} />
            </div>
            {errorText(errors.name)}
          </div>

          <div>
            <div className="relative">
              <input
                type="text"
                name="location"
                aria-label="Project location"
                value={values.location}
                onChange={handleChange}
                className={`${fieldBase} ${borderColor(errors.location)} px-[22px]`}
              />
              <RedStarPlaceholder text="Enter Project Location" show={!values.location} left={22} />
            </div>
            {errorText(errors.location)}
          </div>

          <div>
            <div className="relative">
              <input
                type="tel"
                name="phoneNumber"
                maxLength={10}
                inputMode="numeric"
                aria-label="Mobile number"
                value={values.phoneNumber}
                onChange={handleChange}
                className={`${fieldBase} ${borderColor(errors.phoneNumber)}`}
              />
              <RedStarPlaceholder text="Mobile Number" show={!values.phoneNumber} left={18} />
            </div>
            {errorText(errors.phoneNumber)}
          </div>

          <div>
            <div className="relative">
              <input
                type="email"
                name="email"
                aria-label="Email address"
                value={values.email}
                onChange={handleChange}
                className={`${fieldBase} ${borderColor(errors.email)}`}
              />
              <RedStarPlaceholder text="Enter Email Address" show={!values.email} left={18} />
            </div>
            {errorText(errors.email)}
          </div>

          <div>
            <div className="relative">
              <input
                type="text"
                name="industry"
                aria-label="Industry type"
                value={values.industry}
                onChange={handleChange}
                className={`${fieldBase} ${borderColor(errors.industry)}`}
              />
              <RedStarPlaceholder text="Enter your Industry type" show={!values.industry} left={18} />
            </div>
            {errorText(errors.industry)}
          </div>

          <div>
            <SqftListbox
              id="hm-sqft"
              value={values.sqft}
              onChange={(value) =>
                handleChange({
                  target: { name: "sqft", value },
                } as ChangeEvent<HTMLSelectElement>)
              }
              className={selectClass(errors.sqft)}
              star
            />
            {errorText(errors.sqft)}
          </div>

          <div>
            <div className="relative">
              <textarea
                name="details"
                rows={1}
                aria-label="Requirement details"
                value={values.details}
                onChange={handleChange}
                className={`${fieldBase} ${borderColor(errors.details)} block h-[46px] resize-none px-[22px]`}
              />
              <RedStarPlaceholder text="Enter Requirement Details" show={!values.details} left={22} top={14} />
            </div>
            {errorText(errors.details)}
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-[12px]">
          {statusMessage && (
            <p className="w-full rounded-[8px] border border-red-200 bg-red-50 px-3 py-2 text-[12px] font-medium text-red-700">
              {statusMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center rounded-[10px] bg-[#C4161C] px-[24px] py-[13px] text-center text-[14px] leading-[normal] font-bold whitespace-nowrap text-[#F5F5F5] drop-shadow-[0px_8.81px_17.62px_rgba(196,22,28,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Request an Estimate →"}
          </button>

          <p className="w-full text-center text-[12px] leading-[normal] font-medium text-[#8A8A8A]">
            100% Transparent Consultation with single point project support
          </p>
        </div>
      </form>
    </div>
  );
}
