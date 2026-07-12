export interface Dictionary {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    links: { href: string; label: string }[];
    login: string;
    cta: string;
    menuLabel: string;
  };
  hero: {
    badge: string;
    titlePre: string;
    titleEm: string;
    ctaPrimary: string;
    ctaSecondary: string;
    socialProofStrong: string;
    socialProofText: string;
    subtitle: string;
    panel: {
      storeName: string;
      tabs: string[];
      cards: string[];
      todaySales: string;
      currency: string;
      cash: string;
      credit: string;
      cashboxStatus: string;
      cashboxSub: string;
      debt: string;
      growthLabel: string;
      realtimeLabel1: string;
      realtimeLabel2: string;
    };
  };
  stats: {
    items: { num: string; suffix: string; label: string }[];
  };
  problems: {
    badge: string;
    titlePre: string;
    titleEm: string;
    subtitle: string;
    items: { title: string; text: string }[];
  };
  features: {
    badge: string;
    titlePre: string;
    titleEm: string;
    subtitle: string;
    items: { title: string; text: string; tags: string[] }[];
  };
  howItWorks: {
    badge: string;
    titlePre: string;
    titleEm: string;
    subtitle: string;
    steps: { title: string; text: string }[];
    panel: {
      header: string;
      client: string;
      clientName: string;
      date: string;
      product: string;
      productName: string;
      qty: string;
      qtyValue: string;
      price: string;
      priceValue: string;
      discount: string;
      total: string;
      totalValue: string;
      confirm: string;
    };
  };
  modules: {
    badge: string;
    titlePre: string;
    titleEm: string;
    subtitle: string;
    items: { title: string; text: string; tag: string }[];
  };
  pricing: {
    badge: string;
    titlePre: string;
    titleEm: string;
    titlePost: string;
    subtitle: string;
    basePackage: {
      badge: string;
      title: string;
      chips: string[];
      perMonth: string;
      approx: string;
    };
    addons: {
      title: string;
      subtitle: string;
      items: { name: string; price: string }[];
    };
    plansLabel: string;
    plans: {
      name: string;
      price: string;
      period: string;
      popularBadge?: string;
      features: string[];
      cta: string;
    }[];
    calculator: {
      title: string;
      subtitle: string;
    };
  };
  pricingCalculator: {
    basePackage: string;
    baseIncluded: string;
    roles: Record<"owner" | "admin" | "leader" | "seller" | "store", { label: string; desc: string }>;
    monthlyTitle: string;
    basePlan: string;
    total: string;
    currency: string;
    startButton: string;
  };
  testimonials: {
    badge: string;
    titlePre: string;
    titleEm: string;
    items: { quote: string; name: string; role: string }[];
  };
  cta: {
    titlePre: string;
    titleEm: string;
    titlePost: string;
    subtitle: string;
    namePlaceholder: string;
    nameRequired: string;
    phonePlaceholder: string;
    phoneRequired: string;
    storePlaceholder: string;
    storeRequired: string;
    submit: string;
    successMessage: string;
    helperMessage: string;
  };
  footer: {
    description: string;
    productTitle: string;
    productLinks: string[];
    companyTitle: string;
    companyLinks: string[];
    contactTitle: string;
    contactLinks: string[];
    copyright: string;
  };
}
