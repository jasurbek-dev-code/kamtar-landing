"use client";

import { useForm } from "react-hook-form";
import Reveal from "./Reveal";
import { ArrowRightIcon } from "./icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type FormValues = {
  name: string;
  phone: string;
  storeName: string;
};

export default function CTA() {
  const { dict } = useLanguage();
  const c = dict.cta;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Lead submitted:", data);
    reset();
  };

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-[100px] px-5 sm:px-8 lg:px-10 bg-gradient-to-br from-green-nav to-green-2"
      id="contact"
    >
      <div className="pointer-events-none absolute -top-[30%] -right-[5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(39,179,155,.15)_0%,transparent_70%)]" />

      <Reveal className="relative z-[1] max-w-[800px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-black text-white tracking-tight leading-[1.15] mb-5 text-balance">
          {c.titlePre} <em className="not-italic text-teal">{c.titleEm}</em> {c.titlePost}
        </h2>
        <p className="text-base sm:text-lg text-white/60 mb-10 leading-[1.65]">{c.subtitle}</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="bg-white/[.06] border border-white/10 rounded-[20px] p-6 sm:p-9 max-w-[560px] mx-auto text-left"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
            <div>
              <input
                {...register("name", { required: c.nameRequired })}
                type="text"
                placeholder={c.namePlaceholder}
                className="w-full bg-white/[.08] border-[1.5px] border-white/[.12] rounded-[11px] px-[18px] py-3.5 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-teal"
              />
              {errors.name && <p className="text-red-bright text-xs mt-1.5">{errors.name.message}</p>}
            </div>
            <div>
              <input
                {...register("phone", { required: c.phoneRequired })}
                type="tel"
                placeholder={c.phonePlaceholder}
                className="w-full bg-white/[.08] border-[1.5px] border-white/[.12] rounded-[11px] px-[18px] py-3.5 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-teal"
              />
              {errors.phone && <p className="text-red-bright text-xs mt-1.5">{errors.phone.message}</p>}
            </div>
          </div>
          <input
            {...register("storeName", { required: c.storeRequired })}
            type="text"
            placeholder={c.storePlaceholder}
            className="w-full bg-white/[.08] border-[1.5px] border-white/[.12] rounded-[11px] px-[18px] py-3.5 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-teal mb-3.5"
          />
          {errors.storeName && <p className="text-red-bright text-xs -mt-2.5 mb-3.5">{errors.storeName.message}</p>}

          <button
            type="submit"
            className="w-full py-4 bg-teal text-white rounded-xl text-base font-bold flex items-center justify-center gap-2.5 transition-colors hover:bg-teal-700"
          >
            {c.submit}
            <ArrowRightIcon className="w-[18px] h-[18px]" />
          </button>
          <p className="mt-3.5 text-[13px] text-white/35 text-center">
            {isSubmitSuccessful ? c.successMessage : c.helperMessage}
          </p>
        </form>
      </Reveal>
    </section>
  );
}
