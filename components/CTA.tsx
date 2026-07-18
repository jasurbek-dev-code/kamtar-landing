"use client";

import { Controller, useForm } from "react-hook-form";
import Reveal from "./Reveal";
import { ArrowRightIcon } from "./icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import InputMask from "react-input-mask";
// API talabiga ko'ra maydon nomlari: name, phone va org
type FormValues = {
  name: string;
  phone: string;
  org: string;
};

// Xabarlar obyektining kalitlarini context'dagi "lat" va "cyr" turlariga moslashtiramiz
const messages = {
  lat: {
    success: "Muvaffaqiyatli! Ma'lumotlaringiz qabul qilindi.",
    validationError:
      "Xatolik: Iltimos, barcha maydonlar to'g'ri to'ldirilganini tekshiring.",
    networkError: "Tarmoq ulanishida xatolik yuz berdi.",
    sending: "Yuborilmoqda...",
  },
  cyr: {
    success: "Муваффақиятли! Маълумотларингиз қабул қилинди.",
    validationError:
      "Хатолик: Илтимос, барча майдонлар тўғри тўлдирилганини теширинг.",
    networkError: "Тармоқ уланишида хатолик юз берди.",
    sending: "Юборилмоқда...",
  },
};

export default function CTA() {
  // Context'dan kelayotgan 'lang' faqat "lat" yoki "cyr" bo'lishi mumkin
  const { dict, lang } = useLanguage();
  const c = dict.cta;

  // TypeScript endi tinchiydi, chunki lang faqat "lat" | "cyr" va messages'da bu kalitlar bor
  const activeMessages = messages[lang];

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const cleanedData = {
      ...data,
      phone: data.phone.replace(/\s/g, ""), // Barcha bo'shliqlarni olib tashlaymiz: +998 97 206 10 20 -> +998972061020
    };

    try {
      const response = await fetch("https://kamtar.uz/api/landing/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanedData),
      });

      if (response.ok) {
        console.log("Lead muvaffaqiyatli yuborildi:", data);
        alert(activeMessages.success);
        reset();
      } else {
        const errorData = await response.json();
        console.error("Validatsiya xatoligi:", errorData);
        alert(activeMessages.validationError);
      }
    } catch (error) {
      console.error("Tarmoq xatosi yuz berdi:", error);
      alert(activeMessages.networkError);
    }
  };

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-[100px] px-5 sm:px-8 lg:px-10 bg-gradient-to-br from-green-nav to-green-2"
      id="contact"
    >
      <div className="pointer-events-none absolute -top-[30%] -right-[5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(39,179,155,.15)_0%,transparent_70%)]" />

      <Reveal className="relative z-[1] max-w-[800px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-black text-white tracking-tight leading-[1.15] mb-5 text-balance">
          {c.titlePre} <em className="not-italic text-teal">{c.titleEm}</em>{" "}
          {c.titlePost}
        </h2>
        <p className="text-base sm:text-lg text-white/60 mb-10 leading-[1.65]">
          {c.subtitle}
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="bg-white/[.06] border border-white/10 rounded-[20px] p-6 sm:p-9 max-w-[560px] mx-auto text-left"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
            {/* Name input */}
            <div>
              <input
                {...register("name", { required: c.nameRequired })}
                type="text"
                placeholder={c.namePlaceholder}
                className="w-full bg-white/[.08] border-[1.5px] border-white/[.12] rounded-[11px] px-[18px] py-3.5 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-teal"
              />
              {errors.name && (
                <p className="text-red-bright text-xs mt-1.5">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Controller
                name="phone"
                control={control}
                rules={{ required: c.phoneRequired }}
                render={({ field: { onChange, value } }) => (
                  <InputMask
                    mask="+998 99 999 99 99"
                    // Bu yerda formatChars maskadagi belgilar nimani anglatishini belgilaydi

                    maskChar="_"
                    value={value || ""}
                    onChange={onChange}
                    placeholder="+998 00 000 00 00"
                  >
                    {(inputProps: any) => (
                      <input
                        {...inputProps}
                        type="tel"
                        className="w-full bg-white/[.08] border-[1.5px] border-white/[.12] rounded-[11px] px-[18px] py-3.5 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-teal"
                      />
                    )}
                  </InputMask>
                )}
              />
              {errors.phone && (
                <p className="text-red-bright text-xs mt-1.5">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Org (Tashkilot/Do'kon) input */}
          <div className="mb-3.5">
            <input
              {...register("org", { required: c.storeRequired })}
              type="text"
              placeholder={c.storePlaceholder}
              className="w-full bg-white/[.08] border-[1.5px] border-white/[.12] rounded-[11px] px-[18px] py-3.5 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-teal"
            />
            {errors.org && (
              <p className="text-red-bright text-xs mt-1.5">
                {errors.org.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-teal text-white rounded-xl text-base font-bold flex items-center justify-center gap-2.5 transition-colors hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? activeMessages.sending : c.submit}
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
