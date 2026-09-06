const body =
  document.body;

const header =
  document.getElementById("header");

const themeToggle =
  document.getElementById("themeToggle");

const mobileMenuBtn =
  document.getElementById("mobileMenuBtn");

const mobileNav =
  document.getElementById("mobileNav");

const languageButtons =
  document.querySelectorAll(".language-btn");

const currentYear =
  document.getElementById("currentYear");

/* =========================
   TRANSLATIONS
========================= */

const translations = {

  en: {

    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      expertise: "Expertise",
      skills: "Skills",
      contact: "Contact",
    },

    common: {
      downloadCv: "Download CV",
      viewWork: "View My Work",
      letsTalk: "Let's Talk",
      viewCaseStudy: "View Case Study",
      visitWebsite: "Visit Website",
    },

    hero: {
      available:
        "Available for new opportunities",

      title1:
        "Building scalable applications",

      and:
        "&",

      title2:
        "high-converting digital experiences.",

      description:
        "I'm Susanna Margaryan, a Frontend Developer with 6 years of commercial experience specializing in Angular, modern frontend architecture, and e-commerce development.",

      angular:
        "Angular Specialist",

      experience:
        "6 Years Experience",

      shopify:
        "Shopify & E-commerce",

      frontendDeveloper:
        "Frontend Developer",

      turning:
        "TURNING",

      ideas:
        "IDEAS INTO",

      products:
        "REAL PRODUCTS",
    },

    stats: {
      years:
        "Years of Experience",

      projects:
        "Commercial Projects",

      multiple:
        "Multiple",

      domains:
        "Business Domains",

      endToEnd:
        "End-to-End",

      productDevelopment:
        "Product Development",
    },

    about: {
      label:
        "ABOUT ME",

      title:
        "Frontend Developer with a passion for creating meaningful products.",

      paragraph1:
        "I enjoy solving complex problems, building clean and maintainable code, creating intuitive user interfaces, and taking products from an idea to production.",

      paragraph2:
        "Over the years, I've worked across e-commerce, media, hospitality, healthcare, IoT and enterprise systems.",

      more:
        "More About Me",

      based:
        "Based in",

      armenia:
        "Armenia",

      commercial:
        "Commercial",

      sixYears:
        "6 Years Experience",

      frontend:
        "Frontend",

      engineering:
        "Engineering",

      ecommerce:
        "E-commerce",

      development:
        "Development",

      quote:
        "“I believe great software is a combination of clean code, thoughtful design and a deep understanding of the people who use it.”",
    },

    projects: {

      label:
        "FEATURED PROJECTS",

      title:
        "Selected commercial work",

      businessCode: {
        category:
          "News & Media Platform",

        description:
          "A modern news and media platform designed to make discovering and exploring large volumes of content fast and intuitive.",
      },

      city: {
        category:
          "E-commerce / Retail",

        description:
          "A large-scale grocery and retail platform with an extensive catalog, structured navigation and modern shopping experience.",
      },

      alpha: {
        category:
          "Healthcare / E-commerce",

        description:
          "An online pharmacy and healthcare e-commerce platform providing convenient access to health, beauty and wellness products.",
      },

      rezx: {
        category:
          "Restaurant Technology / CRM",

        description:
          "A restaurant discovery, reservation and management ecosystem connecting diners with venues and businesses.",
      },

      petpace: {
        category:
          "PetTech / IoT / Health Monitoring",

        description:
          "Administration interface connected to a smart pet wearable ecosystem for pet management and health-related workflows.",
      },

      watch: {
        category:
          "Shopify / E-commerce",

        description:
          "Premium multi-brand watch e-commerce experience built around elegant product discovery, storytelling and conversion-focused shopping.",
      },

      tags: {
        news:
          "News",

        search:
          "Search",

        discovery:
          "Content Discovery",

        ecommerce:
          "E-commerce",

        catalog:
          "Product Catalog",

        promotions:
          "Promotions",

        healthcare:
          "Healthcare",

        reservations:
          "Reservations",

        guestManagement:
          "Guest Management",

        dashboards:
          "Dashboards",

        healthMonitoring:
          "Health Monitoring",

        themeDevelopment:
          "Theme Development",
      },
    },

    expertise: {
      label:
        "SHOPIFY & E-COMMERCE",

      title1:
        "Building complete",

      title2:
        "e-commerce experiences.",

      description:
        "Beyond enterprise frontend development, I build complete Shopify experiences — from store architecture and theme customization to custom Liquid development, product structures, integrations and conversion-focused storefronts.",

      cta:
        "Start a Shopify Project",

      theme: {
        title:
          "Theme Development",

        description:
          "Customizing and extending Shopify themes to create polished branded storefronts.",
      },

      liquid: {
        title:
          "Liquid Development",

        description:
          "Custom Liquid sections, components, product templates and reusable storefront functionality.",
      },

      architecture: {
        title:
          "Store Architecture",

        description:
          "Product structures, collections, navigation, shipping, payments and store configuration.",
      },

      ux: {
        title:
          "Conversion-focused UX",

        description:
          "Responsive and user-focused shopping journeys designed for product discovery and conversion.",
      },
    },

    skills: {
      label:
        "SKILLS & EXPERTISE",

      title:
        "Technologies I work with",

      description:
        "A combination of frontend, e-commerce and modern engineering practices.",

      core:
        "Core specialization",

      frontendEngineering:
        "Frontend engineering",

      modernWeb:
        "Modern web",

      reactive:
        "Reactive programming",

      ecommerce:
        "E-commerce",

      shopifyDev:
        "Shopify development",

      modernAngular:
        "Modern Angular",

      architecture:
        "Architecture & Engineering",

      ui:
        "UI & Styling",

      additional:
        "Additional",
    },

    experience: {
      label:
        "EXPERIENCE",

      title:
        "My Professional Journey",

      description:
        "Six years of commercial experience building and supporting production-ready digital products.",

      frontendDeveloper:
        "Frontend Developer",

      frontendWebDeveloper:
        "Frontend Web Developer",

      vueDeveloper:
        "Frontend Developer — Vue.js",

      middleAngular:
        "Middle Angular Developer",

      idt:
        "Plan, develop, launch and support complex web and mobile applications from scratch using Angular, TypeScript, RxJS and modern Angular architecture.",

      inline:
        "Developed complex production applications with Angular, TypeScript and RxJS across media, hospitality, retail, healthcare and IoT domains.",

      rexsoft:
        "Built modern web applications, reusable UI components, responsive interfaces and API-driven production features.",

      digitalThreads:
        "Developed responsive frontend functionality and reusable components using Vue.js.",

      codeex:
        "Built scalable Angular functionality, reusable components, REST API integrations and complex workflows.",

      armboldmind:
        "Developed responsive applications, reusable UI and backend service integrations.",
    },

    confidential: {
      label:
        "ADDITIONAL COMMERCIAL WORK",

      title:
        "Confidential projects",

      description:
        "Some commercial products are protected by confidentiality agreements, so client names and screenshots cannot be shared publicly.",

      staff: {
        title:
          "Staff Management System",

        description:
          "Comprehensive staff management platform for employee administration and organizational workflows.",
      },

      land: {
        title:
          "Land Surveying Administration Platform",

        description:
          "Specialized control platform for managing surveying workflows, operational data and administrative processes.",
      },

      wedding: {
        title:
          "Wedding Planning Platform",

        description:
          "Modern digital product designed to organize and simplify different aspects of wedding planning.",
      },
    },

    education: {
      label:
        "EDUCATION",

      university:
        "National Polytechnic University of Armenia",

      degree:
        "Computer Science",
    },

    languages: {
      label:
        "LANGUAGES",

      armenian:
        "Armenian",

      english:
        "English",

      russian:
        "Russian",

      native:
        "Native",
    },

    contact: {
      label:
        "LET'S WORK TOGETHER",

      title:
        "Have a project in mind? Let's build something great.",

      description:
        "Whether you're looking for an experienced frontend developer, need help with an Angular application, or want to build a high-quality Shopify store, I'd be happy to hear about your project.",

      getInTouch:
        "GET IN TOUCH",

      panelTitle:
        "Let's create something great together.",

      panelDescription:
        "I'm open to remote full-time opportunities, freelance frontend projects, Angular development and Shopify / e-commerce collaborations.",

      emailMe:
        "Email Me",

      available:
        "Available for new opportunities",

      types:
        "Remote full-time · Freelance · Shopify / E-commerce",
    },

    footer: {
      role:
        "Frontend Developer",

      rights:
        "All rights reserved.",
    },
  },

  /* =========================
     ARMENIAN
  ========================= */

  hy: {

    nav: {
      about:
        "Իմ մասին",

      experience:
        "Փորձ",

      projects:
        "Նախագծեր",

      expertise:
        "Մասնագիտացում",

      skills:
        "Հմտություններ",

      contact:
        "Կապ",
    },

    common: {
      downloadCv:
        "Ներբեռնել CV-ն",

      viewWork:
        "Դիտել աշխատանքներս",

      letsTalk:
        "Կապվենք",

      viewCaseStudy:
        "Դիտել նախագիծը",

      visitWebsite:
        "Բացել կայքը",
    },

    hero: {
      available:
        "Բաց եմ նոր աշխատանքային հնարավորությունների համար",

      title1:
        "Ստեղծում եմ մասշտաբավորվող հավելվածներ",

      and:
        "և",

      title2:
        "արդյունավետ թվային փորձառություններ։",

      description:
        "Ես Սուսաննա Մարգարյանն եմ՝ Frontend Developer՝ 6 տարվա առևտրային փորձով։ Իմ հիմնական մասնագիտացումը Angular-ն է, ժամանակակից frontend ճարտարապետությունը և e-commerce լուծումների մշակումը։",

      angular:
        "Angular մասնագետ",

      experience:
        "6 տարվա փորձ",

      shopify:
        "Shopify և E-commerce",

      frontendDeveloper:
        "Frontend Developer",

      turning:
        "ԳԱՂԱՓԱՐՆԵՐԸ",

      ideas:
        "ՎԵՐԱԾՈՒՄ ԵՄ",

      products:
        "ԻՐԱԿԱՆ ՊՐՈԴՈՒԿՏՆԵՐԻ",
    },

    stats: {
      years:
        "Տարվա փորձ",

      projects:
        "Առևտրային նախագծեր",

      multiple:
        "Տարբեր",

      domains:
        "Բիզնես ոլորտներ",

      endToEnd:
        "Սկզբից մինչև վերջ",

      productDevelopment:
        "Պրոդուկտի մշակում",
    },

    about: {
      label:
        "ԻՄ ՄԱՍԻՆ",

      title:
        "Frontend Developer՝ հետաքրքրված բարդ և արժեքավոր թվային պրոդուկտների ստեղծմամբ։",

      paragraph1:
        "Սիրում եմ լուծել բարդ խնդիրներ, գրել մաքուր և պահպանելի կոդ, ստեղծել ինտուիտիվ ինտերֆեյսներ և գաղափարները հասցնել իրական արտադրական պրոդուկտի։",

      paragraph2:
        "Իմ մասնագիտական փորձի ընթացքում աշխատել եմ e-commerce, media, hospitality, healthcare, IoT և enterprise համակարգերի վրա։",

      more:
        "Ավելին իմ մասին",

      based:
        "Գտնվում եմ",

      armenia:
        "Հայաստանում",

      commercial:
        "Առևտրային փորձ",

      sixYears:
        "6 տարի",

      frontend:
        "Frontend",

      engineering:
        "Engineering",

      ecommerce:
        "E-commerce",

      development:
        "Development",

      quote:
        "«Ինձ համար լավ ծրագրային ապահովումը մաքուր կոդի, մտածված դիզայնի և այն օգտագործող մարդկանց կարիքների խոր ընկալման համադրություն է»։",
    },

    projects: {

      label:
        "ԸՆՏՐՎԱԾ ՆԱԽԱԳԾԵՐ",

      title:
        "Իմ առևտրային աշխատանքներից մի քանիսը",

      businessCode: {
        category:
          "Նորությունների և մեդիայի հարթակ",

        description:
          "Ժամանակակից լրատվական և մեդիա հարթակ, որը հեշտացնում է մեծ քանակությամբ բովանդակության որոնումը, զտումը և ուսումնասիրումը։",
      },

      city: {
        category:
          "E-commerce / Retail",

        description:
          "Մեծածավալ առցանց խանութ՝ լայն ապրանքատեսականիով, կառուցվածքային navigation-ով, որոնմամբ և ժամանակակից գնումների փորձառությամբ։",
      },

      alpha: {
        category:
          "Healthcare / E-commerce",

        description:
          "Առցանց դեղատան և առողջապահական e-commerce հարթակ՝ առողջության, գեղեցկության և խնամքի ապրանքների հարմար որոնմամբ ու գնումներով։",
      },

      rezx: {
        category:
          "Ռեստորանային տեխնոլոգիա / CRM",

        description:
          "Ռեստորանների որոնման, սեղանների ամրագրման և կառավարման հարթակ, որը կապում է հաճախորդներին և բիզնեսներին։",
      },

      petpace: {
        category:
          "PetTech / IoT / Առողջության մոնիթորինգ",

        description:
          "Smart pet wearable համակարգին միացված admin interface՝ կենդանիների կառավարման, առողջական տվյալների և անասնաբուժական գործընթացների համար։",
      },

      watch: {
        category:
          "Shopify / E-commerce",

        description:
          "Premium բազմաբրենդ ժամացույցների e-commerce նախագիծ՝ կառուցված գեղեցիկ product discovery-ի, վստահության և conversion-focused UX-ի շուրջ։",
      },

      tags: {
        news:
          "Նորություններ",

        search:
          "Որոնում",

        discovery:
          "Բովանդակության բացահայտում",

        ecommerce:
          "E-commerce",

        catalog:
          "Ապրանքների կատալոգ",

        promotions:
          "Ակցիաներ",

        healthcare:
          "Առողջապահություն",

        reservations:
          "Ամրագրումներ",

        guestManagement:
          "Հաճախորդների կառավարում",

        dashboards:
          "Dashboard-ներ",

        healthMonitoring:
          "Առողջության մոնիթորինգ",

        themeDevelopment:
          "Theme Development",
      },
    },

    expertise: {
      label:
        "SHOPIFY ԵՎ E-COMMERCE",

      title1:
        "Ստեղծում եմ ամբողջական",

      title2:
        "e-commerce լուծումներ։",

      description:
        "Enterprise frontend development-ից բացի, ստեղծում եմ ամբողջական Shopify խանութներ՝ store architecture-ից և theme customization-ից մինչև custom Liquid development, product structure, integrations և conversion-focused storefront-ներ։",

      cta:
        "Սկսել Shopify նախագիծ",

      theme: {
        title:
          "Theme Development",

        description:
          "Shopify theme-երի customization և ընդլայնում՝ բրենդին համապատասխան professional storefront ստեղծելու համար։",
      },

      liquid: {
        title:
          "Liquid Development",

        description:
          "Custom Liquid section-ներ, component-ներ, product template-ներ և reusable storefront functionality։",
      },

      architecture: {
        title:
          "Store Architecture",

        description:
          "Ապրանքների կառուցվածք, collection-ներ, navigation, shipping, payments և store configuration։",
      },

      ux: {
        title:
          "Conversion-focused UX",

        description:
          "Responsive և user-focused գնումների փորձառություն՝ product discovery-ն և conversion-ը բարելավելու համար։",
      },
    },

    skills: {
      label:
        "ՀՄՏՈՒԹՅՈՒՆՆԵՐ",

      title:
        "Տեխնոլոգիաներ, որոնցով աշխատում եմ",

      description:
        "Frontend, e-commerce և ժամանակակից software engineering մոտեցումների համադրություն։",

      core:
        "Հիմնական մասնագիտացում",

      frontendEngineering:
        "Frontend engineering",

      modernWeb:
        "Ժամանակակից web",

      reactive:
        "Reactive programming",

      ecommerce:
        "E-commerce",

      shopifyDev:
        "Shopify development",

      modernAngular:
        "Ժամանակակից Angular",

      architecture:
        "Architecture և Engineering",

      ui:
        "UI և Styling",

      additional:
        "Լրացուցիչ",
    },

    experience: {
      label:
        "ԱՇԽԱՏԱՆՔԱՅԻՆ ՓՈՐՁ",

      title:
        "Իմ մասնագիտական ճանապարհը",

      description:
        "6 տարվա առևտրային փորձ՝ production-ready թվային պրոդուկտների մշակման և սպասարկման ոլորտում։",

      frontendDeveloper:
        "Frontend Developer",

      frontendWebDeveloper:
        "Frontend Web Developer",

      vueDeveloper:
        "Frontend Developer — Vue.js",

      middleAngular:
        "Middle Angular Developer",

      idt:
        "Պլանավորում, մշակում, գործարկում և սպասարկում եմ բարդ web և mobile հավելվածներ՝ ամբողջությամբ զրոյից՝ օգտագործելով Angular, TypeScript, RxJS և ժամանակակից Angular architecture։",

      inline:
        "Մշակել եմ production web հավելվածներ Angular, TypeScript և RxJS տեխնոլոգիաներով՝ media, hospitality, retail, healthcare և IoT ոլորտներում։",

      rexsoft:
        "Մշակել եմ ժամանակակից web հավելվածներ, reusable UI component-ներ, responsive interface-ներ և backend API-ների հետ ինտեգրված functionality։",

      digitalThreads:
        "Մշակել եմ responsive frontend functionality և reusable component-ներ Vue.js-ով։",

      codeex:
        "Մշակել եմ scalable Angular functionality, reusable component-ներ, REST API integration-ներ և բարդ workflow-ներ։",

      armboldmind:
        "Մշակել եմ responsive web հավելվածներ, reusable UI և backend service integration-ներ։",
    },

    confidential: {
      label:
        "ԼՐԱՑՈՒՑԻՉ ԱՌԵՎՏՐԱՅԻՆ ԱՇԽԱՏԱՆՔՆԵՐ",

      title:
        "Գաղտնի նախագծեր",

      description:
        "Որոշ առևտրային նախագծեր պաշտպանված են գաղտնիության համաձայնագրերով, այդ պատճառով client name-երը և screenshots-ը հրապարակայնորեն չեն ներկայացվում։",

      staff: {
        title:
          "Աշխատակազմի կառավարման համակարգ",

        description:
          "Ամբողջական համակարգ՝ աշխատակիցների կառավարման, ադմինիստրատիվ գործընթացների և կազմակերպչական workflow-ների համար։",
      },

      land: {
        title:
          "Հողերի չափագրման կառավարման հարթակ",

        description:
          "Մասնագիտացված admin և control system՝ հողերի չափագրման գործընթացների, օպերացիոն տվյալների և ադմինիստրատիվ workflow-ների կառավարման համար։",
      },

      wedding: {
        title:
          "Հարսանիքի պլանավորման հարթակ",

        description:
          "Ժամանակակից թվային հարթակ՝ հարսանիքի կազմակերպման տարբեր փուլերը մեկ համակարգում կառավարելու և պարզեցնելու համար։",
      },
    },

    education: {
      label:
        "ԿՐԹՈՒԹՅՈՒՆ",

      university:
        "Հայաստանի ազգային պոլիտեխնիկական համալսարան",

      degree:
        "Համակարգչային գիտություն",
    },

    languages: {
      label:
        "ԼԵԶՈՒՆԵՐ",

      armenian:
        "Հայերեն",

      english:
        "Անգլերեն",

      russian:
        "Ռուսերեն",

      native:
        "Մայրենի",
    },

    contact: {
      label:
        "ԱՇԽԱՏԵՆՔ ՄԻԱՍԻՆ",

      title:
        "Ունե՞ք նախագիծ։ Եկեք միասին ստեղծենք այն։",

      description:
        "Եթե փնտրում եք փորձառու Frontend Developer, Angular մասնագետ կամ ցանկանում եք ստեղծել որակյալ Shopify / e-commerce նախագիծ, կարող եք կապվել ինձ հետ։",

      getInTouch:
        "ԿԱՊՎԵՔ ԻՆՁ ՀԵՏ",

      panelTitle:
        "Եկեք միասին ստեղծենք հիանալի պրոդուկտ։",

      panelDescription:
        "Բաց եմ remote full-time աշխատանքի, freelance frontend նախագծերի, Angular development-ի և Shopify / e-commerce համագործակցությունների համար։",

      emailMe:
        "Գրել Email",

      available:
        "Բաց եմ նոր հնարավորությունների համար",

      types:
        "Remote full-time · Freelance · Shopify / E-commerce",
    },

    footer: {
      role:
        "Frontend Developer",

      rights:
        "Բոլոր իրավունքները պաշտպանված են։",
    },
  },
};

/* =========================
   LANGUAGE
========================= */

const getNestedValue = (
  object,
  path
) => {
  return path
    .split(".")
    .reduce(
      (value, key) =>
        value?.[key],
      object
    );
};

const setLanguage = (
  language
) => {

  const languageData =
    translations[language];

  if (!languageData) {
    return;
  }

  document
    .querySelectorAll(
      "[data-i18n]"
    )
    .forEach(
      (element) => {

        const key =
          element.dataset.i18n;

        const value =
          getNestedValue(
            languageData,
            key
          );

        if (
          value !==
          undefined
        ) {
          element.textContent =
            value;
        }
      }
    );

  languageButtons.forEach(
    (button) => {

      button.classList.toggle(
        "active",
        button.dataset.lang ===
          language
      );

    }
  );

  document.documentElement.lang =
    language === "hy"
      ? "hy"
      : "en";

  localStorage.setItem(
    "portfolio-language",
    language
  );

  updateModalLanguage();
};

languageButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        setLanguage(
          button.dataset.lang
        );

      }
    );

  }
);

const savedLanguage =
  localStorage.getItem(
    "portfolio-language"
  );

setLanguage(
  savedLanguage || "en"
);

/* =========================
   YEAR
========================= */

currentYear.textContent =
  new Date().getFullYear();

/* =========================
   HEADER
========================= */

const updateHeader = () => {

  header.classList.toggle(
    "scrolled",
    window.scrollY > 20
  );

};

updateHeader();

window.addEventListener(
  "scroll",
  updateHeader
);

/* =========================
   THEME
========================= */

const savedTheme =
  localStorage.getItem(
    "portfolio-theme"
  );

if (
  savedTheme === "light"
) {
  body.classList.add(
    "light-theme"
  );
}

themeToggle.addEventListener(
  "click",
  () => {

    body.classList.toggle(
      "light-theme"
    );

    const theme =
      body.classList.contains(
        "light-theme"
      )
        ? "light"
        : "dark";

    localStorage.setItem(
      "portfolio-theme",
      theme
    );

  }
);

/* =========================
   MOBILE MENU
========================= */

const closeMobileMenu = () => {

  mobileNav.classList.remove(
    "open"
  );

  body.classList.remove(
    "menu-open"
  );

  mobileMenuBtn.setAttribute(
    "aria-expanded",
    "false"
  );

};

mobileMenuBtn.addEventListener(
  "click",
  () => {

    const isOpen =
      mobileNav.classList.toggle(
        "open"
      );

    body.classList.toggle(
      "menu-open",
      isOpen
    );

    mobileMenuBtn.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  }
);

mobileNav
  .querySelectorAll("a")
  .forEach(
    (link) => {

      link.addEventListener(
        "click",
        closeMobileMenu
      );

    }
  );

/* =========================
   REVEAL ANIMATIONS
========================= */

const revealElements =
  document.querySelectorAll(
    ".reveal-left, .reveal-right, .reveal-up"
  );

const revealObserver =
  new IntersectionObserver(
    (
      entries,
      observer
    ) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target
              .classList
              .add("visible");

            observer.unobserve(
              entry.target
            );

          }

        }
      );

    },
    {
      threshold: 0.12,

      rootMargin:
        "0px 0px -40px 0px",
    }
  );

revealElements.forEach(
  (element) => {

    revealObserver.observe(
      element
    );

  }
);

/* =========================
   COUNTERS
========================= */

const counters =
  document.querySelectorAll(
    ".counter"
  );

const counterSection =
  document.querySelector(
    ".stats-section"
  );

let countersStarted =
  false;

const animateCounter = (
  counter
) => {

  const target =
    Number(
      counter.dataset.target
    );

  const duration =
    1000;

  const start =
    performance.now();

  const update = (
    time
  ) => {

    const progress =
      Math.min(
        (time - start) /
          duration,
        1
      );

    const eased =
      1 -
      Math.pow(
        1 - progress,
        3
      );

    counter.textContent =
      Math.floor(
        target * eased
      );

    if (
      progress < 1
    ) {

      requestAnimationFrame(
        update
      );

    } else {

      counter.textContent =
        target;

    }

  };

  requestAnimationFrame(
    update
  );

};

const counterObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting &&
            !countersStarted
          ) {

            countersStarted =
              true;

            counters.forEach(
              animateCounter
            );

          }

        }
      );

    },
    {
      threshold: 0.4,
    }
  );

if (
  counterSection
) {

  counterObserver.observe(
    counterSection
  );

}

/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );

const desktopLinks =
  document.querySelectorAll(
    ".desktop-nav a"
  );

const setActiveNav = () => {

  let currentId = "";

  sections.forEach(
    (section) => {

      const top =
        section.offsetTop -
        170;

      const bottom =
        top +
        section.offsetHeight;

      if (
        window.scrollY >=
          top &&
        window.scrollY <
          bottom
      ) {

        currentId =
          section.id;

      }

    }
  );

  desktopLinks.forEach(
    (link) => {

      link.classList.toggle(
        "active",
        link.getAttribute(
          "href"
        ) ===
          `#${currentId}`
      );

    }
  );

};

window.addEventListener(
  "scroll",
  setActiveNav
);

setActiveNav();

/* =========================
   PROJECT MODAL DATA
========================= */

const projectData = {

  en: {

    "business-code": {

      title:
        "Business Code",

      category:
        "News & Media Platform",

      description:
        "Business Code is a modern news and media platform designed to make discovering and exploring large volumes of content fast and intuitive.",

      features: [
        "Advanced Search",
        "Content Discovery",
        "Topic Filtering",
        "Responsive Experience",
        "Structured Content",
      ],

      url:
        "https://bcode.news/",
    },

    "yerevan-city": {

      title:
        "Yerevan City",

      category:
        "Large-scale E-commerce / Retail",

      description:
        "Yerevan City is a large-scale online grocery and retail platform designed to provide a structured shopping experience across an extensive product catalog.",

      features: [
        "Large Product Catalog",
        "Search",
        "Categories",
        "Promotions",
        "Multilingual Experience",
      ],

      url:
        "https://yerevan-city.am/shop/home",
    },

    alfapharm: {

      title:
        "AlfaPharm",

      category:
        "Healthcare / E-commerce",

      description:
        "AlfaPharm is an online pharmacy and healthcare e-commerce platform providing convenient access to health, beauty and wellness products.",

      features: [
        "Healthcare",
        "E-commerce",
        "Product Catalog",
        "Product Discovery",
        "Responsive UI",
      ],

      url:
        "https://www.alfapharm.am/",
    },

    rezx: {

      title:
        "RezX",

      category:
        "Restaurant Technology / CRM",

      description:
        "RezX is a restaurant discovery, reservation and management ecosystem connecting diners with venues while providing businesses with reservation and guest-management functionality.",

      features: [
        "Restaurant Discovery",
        "Online Reservations",
        "CRM",
        "Table Management",
        "Guest Management",
      ],

      url:
        "https://rezx.am/home",
    },

    petpace: {

      title:
        "PetPace",

      category:
        "PetTech / IoT / Health Monitoring",

      description:
        "I worked on the administration interface connected to the PetPace smart wearable ecosystem, including pet management, veterinary workflows and health-related information.",

      features: [
        "IoT Integration",
        "Pet Management",
        "Health Monitoring",
        "Dashboards",
        "Veterinary Workflows",
      ],

      url:
        "https://petpace.com/",
    },

    "watch-gallery": {

      title:
        "WATCH GALLERY",

      category:
        "Shopify / E-commerce",

      description:
        "A premium multi-brand watch e-commerce experience designed around elegant product discovery, trust, storytelling and conversion-focused shopping.",

      features: [
        "Shopify",
        "Liquid",
        "Custom Sections",
        "Theme Customization",
        "Product Architecture",
        "SEO",
      ],

      url: "",
    },
  },

  hy: {

    "business-code": {

      title:
        "Business Code",

      category:
        "Նորությունների և մեդիայի հարթակ",

      description:
        "Business Code-ը ժամանակակից լրատվական և մեդիա հարթակ է, որը նախատեսված է մեծ քանակությամբ բովանդակության արագ և հարմար որոնման ու ուսումնասիրության համար։",

      features: [
        "Ընդլայնված որոնում",
        "Բովանդակության բացահայտում",
        "Թեմատիկ զտում",
        "Responsive UI",
        "Կառուցվածքային բովանդակություն",
      ],

      url:
        "https://bcode.news/",
    },

    "yerevan-city": {

      title:
        "Yerevan City",

      category:
        "Մեծածավալ E-commerce / Retail",

      description:
        "Yerevan City-ն մեծածավալ առցանց grocery և retail հարթակ է՝ լայն ապրանքատեսականիով, որոնմամբ, category-ներով և բազմալեզու գնումների փորձառությամբ։",

      features: [
        "Մեծ ապրանքային կատալոգ",
        "Որոնում",
        "Կատեգորիաներ",
        "Ակցիաներ",
        "Բազմալեզու միջավայր",
      ],

      url:
        "https://yerevan-city.am/shop/home",
    },

    alfapharm: {

      title:
        "AlfaPharm",

      category:
        "Healthcare / E-commerce",

      description:
        "AlfaPharm-ը առցանց դեղատան և առողջապահական e-commerce հարթակ է՝ առողջության, գեղեցկության և խնամքի ապրանքների հարմար որոնման ու գնումների համար։",

      features: [
        "Առողջապահություն",
        "E-commerce",
        "Ապրանքների կատալոգ",
        "Product Discovery",
        "Responsive UI",
      ],

      url:
        "https://www.alfapharm.am/",
    },

    rezx: {

      title:
        "RezX",

      category:
        "Ռեստորանային տեխնոլոգիա / CRM",

      description:
        "RezX-ը ռեստորանների որոնման, սեղանների ամրագրման և կառավարման ecosystem է, որը կապում է հաճախորդներին և ռեստորանային բիզնեսներին։",

      features: [
        "Ռեստորանների որոնում",
        "Առցանց ամրագրումներ",
        "CRM",
        "Սեղանների կառավարում",
        "Հաճախորդների կառավարում",
      ],

      url:
        "https://rezx.am/home",
    },

    petpace: {

      title:
        "PetPace",

      category:
        "PetTech / IoT / Առողջության մոնիթորինգ",

      description:
        "Աշխատել եմ PetPace smart wearable ecosystem-ին միացված admin interface-ի վրա՝ ներառյալ կենդանիների կառավարումը, veterinary workflow-ները և health-related տվյալների ներկայացումը։",

      features: [
        "IoT Integration",
        "Կենդանիների կառավարում",
        "Առողջության մոնիթորինգ",
        "Dashboard-ներ",
        "Veterinary workflow-ներ",
      ],

      url:
        "https://petpace.com/",
    },

    "watch-gallery": {

      title:
        "WATCH GALLERY",

      category:
        "Shopify / E-commerce",

      description:
        "Premium բազմաբրենդ ժամացույցների e-commerce նախագիծ՝ կառուցված product discovery-ի, վստահության, storytelling-ի և conversion-focused shopping experience-ի շուրջ։",

      features: [
        "Shopify",
        "Liquid",
        "Custom Sections",
        "Theme Customization",
        "Product Architecture",
        "SEO",
      ],

      url: "",
    },
  },
};

/* =========================
   MODAL
========================= */

const modal =
  document.getElementById(
    "caseStudyModal"
  );

const modalTitle =
  document.getElementById(
    "modalTitle"
  );

const modalCategory =
  document.getElementById(
    "modalCategory"
  );

const modalDescription =
  document.getElementById(
    "modalDescription"
  );

const modalFeatures =
  document.getElementById(
    "modalFeatures"
  );

const modalLink =
  document.getElementById(
    "modalLink"
  );

let currentProjectKey =
  null;

const getCurrentLanguage =
  () =>
    localStorage.getItem(
      "portfolio-language"
    ) || "en";

const renderModalProject = (
  projectKey
) => {

  const language =
    getCurrentLanguage();

  const project =
    projectData[language][
      projectKey
    ];

  if (
    !project
  ) {
    return;
  }

  modalTitle.textContent =
    project.title;

  modalCategory.textContent =
    project.category;

  modalDescription.textContent =
    project.description;

  modalFeatures.innerHTML =
    "";

  project.features.forEach(
    (feature) => {

      const span =
        document.createElement(
          "span"
        );

      span.textContent =
        feature;

      modalFeatures.appendChild(
        span
      );

    }
  );

  if (
    project.url
  ) {

    modalLink.href =
      project.url;

    modalLink.style.display =
      "inline-flex";

  } else {

    modalLink.style.display =
      "none";

  }

};

const updateModalLanguage =
  () => {

    if (
      currentProjectKey &&
      modal.classList.contains(
        "open"
      )
    ) {

      renderModalProject(
        currentProjectKey
      );

    }

  };

const openModal = (
  projectKey
) => {

  currentProjectKey =
    projectKey;

  renderModalProject(
    projectKey
  );

  modal.classList.add(
    "open"
  );

  body.style.overflow =
    "hidden";

};

const closeModal = () => {

  modal.classList.remove(
    "open"
  );

  body.style.overflow =
    "";

  currentProjectKey =
    null;

};

document
  .querySelectorAll(
    ".case-study-btn"
  )
  .forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          openModal(
            button.dataset.project
          );

        }
      );

    }
  );

document
  .querySelectorAll(
    "[data-close-modal]"
  )
  .forEach(
    (element) => {

      element.addEventListener(
        "click",
        closeModal
      );

    }
  );

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key ===
        "Escape" &&
      modal.classList.contains(
        "open"
      )
    ) {

      closeModal();

    }

  }
);