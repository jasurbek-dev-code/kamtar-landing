import type { Dictionary } from "./types";

export const lat: Dictionary = {
  meta: {
    title:
      "Kamatar ERP — Biznesingizni raqamlashtiring | Do'kon va Savdo Boshqaruv Dasturi",
    description:
      "Savdo, ombor, moliya va mijozlar boshqaruvini bitta platformada. Kamatar ERP — O'zbekiston biznesi uchun ishlab chiqilgan zamonaviy ERP tizimi. Do'kon, magazin va tarmoqlar uchun kassa, ombor va CRM dasturi.",
    keywords: [
      "ERP dastur",
      "savdo dasturi",
      "do'kon dasturi",
      "kassa dasturi",
      "ombor dasturi",
      "biznes boshqaruv dasturi",
      "CRM dasturi O'zbekiston",
      "nasiya savdo dasturi",
      "bo'lib to'lash dasturi",
      "magazin uchun dastur",
      "savdo hisobi dasturi",
      "Kamatar ERP",
    ],
  },
  nav: {
    links: [
      { href: "#features", label: "Imkoniyatlar" },
      { href: "#modules", label: "Modullar" },
      { href: "#pricing", label: "Narxlar" },
      { href: "#testimonials", label: "Mijozlar" },
      { href: "#contact", label: "Aloqa" },
    ],
    login: "Kirish",
    cta: "Bepul boshlash",
    menuLabel: "Menyu",
  },
  hero: {
    badge: "Yangi: Bo'lib to'lash moduli qo'shildi",
    titlePre: "Biznesingizni",
    titleEm: "to'liq",
    titlePost: "raqamlashtiring",
    ctaPrimary: "Bepul sinab ko'rish",
    ctaSecondary: "Demo ko'rish",
    socialProofStrong: "500+",
    socialProofText: "ishonchli mijoz bizni tanladi",
    subtitle:
      "Savdo, ombor, moliya va mijozlar boshqaruvini bitta platformada. Kamatar ERP — O'zbekiston biznes uchun ishlab chiqilgan.",
    panel: {
      storeName: "Asosiy Do'kon",
      tabs: ["Bosh sahifa", "Savdo", "Ombor", "Moliya", "Hisobot"],
      cards: ["Naqd savdo", "Nasiya savdo", "Bo'lib to'lash"],
      todaySales: "Bugungi savdo",
      currency: "so'm",
      cash: "Naqd",
      credit: "Nasiya",
      cashboxStatus: "Kassa holati",
      cashboxSub: "so'm · 3 kassa",
      debt: "Qarz",
      growthLabel: "Bu oy o'sish",
      realtimeLabel1: "Real vaqt",
      realtimeLabel2: "hisobotlar",
    },
  },
  stats: {
    items: [
      { num: "500", suffix: "+", label: "Faol mijozlar" },
      { num: "12", suffix: "M+", label: "Kunlik tranzaksiyalar" },
      { num: "99", suffix: ".9%", label: "Uptime kafolati" },
      { num: "24", suffix: "/7", label: "Texnik qo'llab-quvvatlash" },
    ],
  },
  problems: {
    badge: "Muammolar",
    titlePre: "Eski usullar sizni",
    titleEm: "orqada qoldiradi",
    subtitle:
      "Ko'plab O'zbekiston bizneslari hali ham Excel, qo'l yozuvlari yoki eskirgan dasturlar bilan ishlaydi.",
    items: [
      {
        title: "Qo'lda kiritish xatolari",
        text: "Excel yoki daftar orqali ma'lumot kiritish vaqt talab qiladi va xatolarga olib keladi — bu moliyaviy yo'qotishlarni keltirib chiqaradi.",
      },
      {
        title: "Haqiqiy vaqtda hisobot yo'q",
        text: "Savdo va moliyaviy ko'rsatkichlarni ko'rish uchun kunlar kerak bo'ladi. Qarorlar kech qabul qilinadi.",
      },
      {
        title: "Mijozlar tarixi yo'q",
        text: "Kim qancha qarzda, kim bo'lib to'lash qilmoqda — bu ma'lumotlar turli joylarda tarqoq holda saqlanadi.",
      },
      {
        title: "Ombor nazorati zaif",
        text: "Qaysi mahsulot qancha qolganligi noma'lum. Ortiqcha buyurtma yoki kam zaxira — ikkalasi ham zarar.",
      },
      {
        title: "Kassa nazorati murakkab",
        text: "Naqd pul, bank, nasiya, dollar — ularni bir joyda kuzatib borish juda qiyin va ko'p vaqt oladi.",
      },
      {
        title: "Soliq va hisobot yuklamasi",
        text: "Oylik va yillik hisobotlarni qo'lda tayyorlash ko'p kuch va vaqt talab qiladi, xatolarga moyil.",
      },
    ],
  },
  features: {
    badge: "Yechimlar",
    titlePre: "Hamma narsa bitta",
    titleEm: "platformada",
    subtitle:
      "Kamatar ERP ning asosiy imkoniyatlari biznesingizning barcha jarayonlarini qamrab oladi.",
    items: [
      {
        title: "Savdo boshqaruvi",
        text: "Naqd, nasiya va bo'lib to'lash orqali savdoni tez va xatosiz amalga oshiring. Chek chiqarish, chegirma, qaytarish — barchasi bir ekranda.",
        tags: ["Naqd savdo", "Nasiya savdo", "Bo'lib to'lash"],
      },
      {
        title: "Ombor nazorati",
        text: "Tovarlar kirim-chiqimini nazorat qiling, qoldiqlarni real vaqtda kuzating. Minimal zaxira ogohlantirishi.",
        tags: ["Savdo kirim", "Savdo chiqim", "Inventarizatsiya"],
      },
      {
        title: "Moliya va kassa",
        text: "Pul kirim-chiqim, valyuta almashtirish, o'tkazma — barcha moliyaviy operatsiyalar to'liq nazorat ostida.",
        tags: ["Pul kirim/chiqim", "Valyuta", "Balans"],
      },
      {
        title: "Mijozlar bazasi (CRM)",
        text: "Har bir mijoz tarixi, qarzi, bo'lib to'lash jadvali — bir joyda. Mijozni topish, qo'shish va boshqarish juda oson.",
        tags: ["Mijoz kartasi", "Qarz nazorati", "Tarix"],
      },
      {
        title: "Bo'lib to'lash",
        text: "Muddatli to'lov jadvalini yarating, oylik to'lovlarni nazorat qiling va eslatmalar yuboring. To'liq avtomatlashtirilgan.",
        tags: ["Jadval", "Eslatma", "Statistika"],
      },
      {
        title: "Hisobot va tahlil",
        text: "Kunlik, haftalik, oylik savdo, foyda-zarar, mijozlar faolligi — barchasi chiroyli grafiklar va jadvallar bilan.",
        tags: ["Savdo hisoboti", "Foyda-zarar", "PDF export"],
      },
    ],
  },
  howItWorks: {
    badge: "Qanday ishlaydi",
    titlePre: "Ishni boshlash",
    titleEm: "oson",
    subtitle:
      "Kamatar ERP ga ulangan do'konlar o'rtacha 2 soat ichida to'liq ishlay boshlaydi.",
    steps: [
      {
        title: "Ro'yxatdan o'ting",
        text: "Telefon raqamingiz bilan 30 soniyada ro'yxatdan o'ting. Hech qanday texnik bilim kerak emas.",
      },
      {
        title: "Do'koningizni sozlang",
        text: "Mahsulotlar, xodimlar va kassalarni kiriting. Bizning mutaxassislar sizga yordam beradi.",
      },
      {
        title: "Savdoni boshlang",
        text: "Birinchi savdoni 5 daqiqada qiling. Naqd, nasiya yoki bo'lib to'lash — siz tanlaysiz.",
      },
      {
        title: "Hisobotlarni ko'ring",
        text: "Har kuni ertalab bugungi va kechagi ko'rsatkichlarni telefonda ko'ring.",
      },
    ],
    panel: {
      header: "Naqd savdo",
      client: "Mijoz",
      clientName: "Rustam Yusupov",
      date: "Sana",
      product: "Mahsulot",
      productName: 'Samsung TV 55"',
      qty: "Soni",
      qtyValue: "1 dona",
      price: "Narxi",
      priceValue: "4,800,000 so'm",
      discount: "Chegirma",
      total: "Jami to'lov",
      totalValue: "4,800,000 so'm",
      confirm: "✓ Savdoni tasdiqlash",
    },
  },
  modules: {
    badge: "Modullar",
    titlePre: "Kamatar ERP",
    titleEm: "modullari",
    subtitle: "Har bir modul mustaqil ishlaydi va bir-biriga ulangan.",
    items: [
      {
        title: "Savdo",
        text: "Naqd va nasiya savdo, chek chiqarish, qaytarish",
        tag: "3 ta operatsiya",
      },
      {
        title: "Bo'lib to'lash",
        text: "Muddatli to'lov jadvali, to'lov nazorati",
        tag: "Avtomatik eslatma",
      },
      {
        title: "Ombor",
        text: "Tovar kirim-chiqim, zaxira nazorati, inventarizatsiya",
        tag: "Real vaqt",
      },
      {
        title: "Moliya",
        text: "Kassa, bank, pul o'tkazma, valyuta",
        tag: "Ko'p valyuta",
      },
      {
        title: "CRM",
        text: "Mijozlar bazasi, qarz nazorati, tarix",
        tag: "Cheksiz mijoz",
      },
      {
        title: "Xizmat ko'rsatish",
        text: "Ustaxona, ta'mirlash, buyurtmalar boshqaruvi",
        tag: "Jarayon nazorati",
      },
      {
        title: "Hisobotlar",
        text: "Savdo, foyda-zarar, mijoz faolligi, PDF export",
        tag: "20+ hisobot turi",
      },
      {
        title: "Ko'p filial",
        text: "Bir nechta do'kon, ombor va filiallarni boshqarish",
        tag: "Cheksiz filial",
      },
    ],
  },
  pricing: {
    badge: "Tariflar",
    titlePre: "Oddiy va",
    titleEm: "shaffof",
    titlePost: "narx",
    subtitle:
      "Bazaviy paketni oling, keyin faqat kerakli xodim va do'konlarni qo'shing. Ortiqcha to'lov yo'q.",
    basePackage: {
      badge: "Boshlash uchun",
      title: "Bazaviy paket",
      chips: ["1 do'kon", "1 Owner", "1 Admin", "1 Seller"],
      perMonth: "oyiga",
      approx: "≈ 300 000 so'm",
    },
    addons: {
      title: "Qo'shimcha birliklar",
      subtitle: "Bazadan tashqari har biri uchun / oy",
      items: [
        { name: "Owner", price: "+$6" },
        { name: "Admin", price: "+$5" },
        { name: "Leader", price: "+$4" },
        { name: "Seller", price: "+$3" },
        { name: "Do'kon", price: "+$12" },
      ],
    },
    plansLabel: "Namunaviy paketlar — biznesingiz hajmiga qarab",
    plans: [
      {
        name: "Kichik do'kon",
        price: "25",
        period: "≈ 300 000 so'm / oy",
        features: ["1 do'kon", "1 Owner", "1 Admin", "1 Seller"],
        cta: "Tanlash",
      },
      {
        name: "O'sayotgan do'kon",
        price: "35",
        period: "≈ 420 000 so'm / oy",
        popularBadge: "⭐ Eng mashhur",
        features: ["1 Owner", "1 Admin", "1 Leader", "3 Seller"],
        cta: "14 kun bepul",
      },
      {
        name: "Tarmoq",
        price: "86",
        period: "≈ 1 032 000 so'm / oy",
        features: ["3 do'kon", "3 Admin", "11 Seller", "1 Owner"],
        cta: "Tanlash",
      },
    ],
    calculator: {
      title: "Yoki o'z do'koningizni yarating",
      subtitle:
        "Kerakli xodim va do'konlarni qo'shing — narx real vaqtda hisoblanadi.",
    },
  },
  pricingCalculator: {
    basePackage: "Bazaviy paket",
    baseIncluded: "1 do'kon + Owner + Admin + Seller",
    roles: {
      owner: { label: "Owner", desc: "Biznes egasi — to'liq kirish" },
      admin: { label: "Admin", desc: "Do'kon boshqaruvchisi" },
      leader: { label: "Leader", desc: "Sotuvchilar guruhi rahbari" },
      seller: { label: "Seller", desc: "Sotuvchi — savdo va mijozlar" },
      store: { label: "Do'kon", desc: "Har bir filial uchun" },
    },
    monthlyTitle: "Oylik hisob",
    basePlan: "Baza paket",
    total: "Jami / oy",
    currency: "so'm",
    startButton: "Shu paket bilan boshlash",
  },
  testimonials: {
    badge: "Mijozlar fikri",
    titlePre: "Ular",
    titleEm: "ishonishdi",
    items: [
      {
        quote:
          "\u201CKamatar ERP dan oldin har oyning oxirida hisob qilish 3 kun olardi. Endi real vaqtda ko'raman. Savdom 30% o'sdi.\u201D",
        name: "Bobur Toshmatov",
        role: "Elektronika do'koni egasi, Toshkent",
      },
      {
        quote:
          "\u201CBo'lib to'lash moduli bizning asosiy ehtiyojimiz edi. Endi 200+ nasiya mijozni qulay boshqaramiz. Muddatlar o'tib ketmaydi.\u201D",
        name: "Dilnoza Rahimova",
        role: "Mebel savdosi, Samarqand",
      },
      {
        quote:
          "\u201C3 ta filialimni bitta ekrandan boshqaraman. Har bir filialning savdosi, omborini real vaqtda ko'raman. Ajoyib!\u201D",
        name: "Sherzod Mirzayev",
        role: "Qurilish materiallari, Farg'ona",
      },
    ],
  },
  cta: {
    titlePre: "Biznesingizni",
    titleEm: "bugundan",
    titlePost: "o'zgartiring",
    subtitle:
      "14 kunlik bepul sinov. Kredit karta kerak emas. Istalgan vaqt bekor qilish mumkin.",
    namePlaceholder: "Ismingiz",
    nameRequired: "Ismingizni kiriting",
    phonePlaceholder: "+998 __ ___ __ __",
    phoneRequired: "Telefon raqamingizni kiriting",
    storePlaceholder: "Do'kon nomi",
    storeRequired: "Do'kon nomini kiriting",
    submit: "Bepul sinashni boshlash",
    successMessage: "Rahmat! Tez orada bog'lanamiz.",
    helperMessage: "Yuboring — mutaxassisimiz 30 daqiqa ichida bog'lanadi",
  },
  footer: {
    description:
      "O'zbekiston biznesi uchun ishlab chiqilgan to'liq ERP tizimi. Savdo, ombor, moliya — barchasi bir joyda.",
    productTitle: "Mahsulot",
    productLinks: ["Imkoniyatlar", "Modullar", "Narxlar", "Yangiliklar"],
    companyTitle: "Kompaniya",
    companyLinks: ["Biz haqimizda", "Blog", "Hamkorlar", "Karyera"],
    contactTitle: "Aloqa",
    contactLinks: [
      "+998 71 123-45-67",
      "info@kamatar.uz",
      "Toshkent, O'zbekiston",
      "Qo'llab-quvvatlash",
    ],
    copyright: "© 2026 Kamatar ERP. Barcha huquqlar himoyalangan.",
  },
};
