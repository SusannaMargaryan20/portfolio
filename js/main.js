const body = document.body;

const header =
  document.getElementById("header");

const themeToggle =
  document.getElementById(
    "themeToggle"
  );

const mobileMenuBtn =
  document.getElementById(
    "mobileMenuBtn"
  );

const mobileNav =
  document.getElementById(
    "mobileNav"
  );

const languageButtons =
  document.querySelectorAll(
    ".language-btn"
  );

const translatableElements =
  document.querySelectorAll(
    "[data-en][data-hy]"
  );

const currentYear =
  document.getElementById(
    "currentYear"
  );

/* -----------------------
   Current year
----------------------- */

currentYear.textContent =
  new Date().getFullYear();

/* -----------------------
   Header scroll state
----------------------- */

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

/* -----------------------
   Theme
----------------------- */

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

/* -----------------------
   Mobile navigation
----------------------- */

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
  .forEach((link) => {
    link.addEventListener(
      "click",
      closeMobileMenu
    );
  });

/* -----------------------
   Language switch
----------------------- */

const setLanguage = (
  language
) => {
  translatableElements.forEach(
    (element) => {
      const translation =
        element.dataset[
          language
        ];

      if (translation) {
        element.textContent =
          translation;
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
};

const savedLanguage =
  localStorage.getItem(
    "portfolio-language"
  );

if (savedLanguage) {
  setLanguage(savedLanguage);
}

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

/* -----------------------
   Reveal animations
----------------------- */

const revealElements =
  document.querySelectorAll(
    ".reveal-left, .reveal-right, .reveal-up"
  );

const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(
        (entry) => {
          if (
            entry.isIntersecting
          ) {
            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );
          }
        }
      );
    },
    {
      threshold: 0.14,
      rootMargin:
        "0px 0px -50px 0px",
    }
  );

revealElements.forEach(
  (element) => {
    revealObserver.observe(
      element
    );
  }
);

/* -----------------------
   Counters
----------------------- */

const counters =
  document.querySelectorAll(
    ".counter"
  );

let countersStarted = false;

const counterSection =
  document.querySelector(
    ".stats-section"
  );

const animateCounter = (
  counter
) => {
  const target =
    Number(
      counter.dataset.target
    );

  const duration = 1000;

  const start =
    performance.now();

  const update = (time) => {
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

    if (progress < 1) {
      requestAnimationFrame(
        update
      );
    } else {
      counter.textContent =
        target;
    }
  };

  requestAnimationFrame(update);
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
            countersStarted = true;

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

if (counterSection) {
  counterObserver.observe(
    counterSection
  );
}

/* -----------------------
   Active navigation
----------------------- */

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
        150;

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

/* -----------------------
   Case study modal
----------------------- */

const projectData = {
  "business-code": {
    title:
      "Business Code",

    category:
      "News & Media Platform",

    description:
      "Business Code is a modern news and media platform designed to make discovering and exploring large volumes of content fast and intuitive. It provides advanced search and filtering capabilities across articles, news stories and interviews.",

    features: [
      "Advanced Search",
      "Content Discovery",
      "Topic Filtering",
      "Structured News Content",
      "Responsive Experience",
      "SEO-friendly Structure",
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
      "Product Discovery",
      "Search",
      "Complex Categories",
      "Promotions",
      "Collections",
      "Multilingual Experience",
      "Responsive E-commerce",
    ],

    url:
      "https://yerevan-city.am/shop/home",
  },

  alfapharm: {
    title:
      "AlfaPharm",

    category:
      "Healthcare / Pharmacy E-commerce",

    description:
      "AlfaPharm is an online pharmacy and healthcare e-commerce platform providing customers with convenient access to health, beauty and wellness products.",

    features: [
      "Healthcare",
      "E-commerce",
      "Product Catalog",
      "Product Discovery",
      "Categories",
      "Responsive Shopping",
    ],

    url:
      "https://www.alfapharm.am/",
  },

  rezx: {
    title: "RezX",

    category:
      "Restaurant Technology / Reservation Platform / CRM",

    description:
      "RezX is a restaurant discovery, reservation and management ecosystem connecting diners with venues while providing businesses with tools for managing reservations and customer interactions.",

    features: [
      "Restaurant Discovery",
      "Online Reservations",
      "CRM",
      "Reservation Management",
      "Table Management",
      "Guest Management",
      "Responsive Experience",
    ],

    url:
      "https://rezx.am/home",
  },

  petpace: {
    title: "PetPace",

    category:
      "PetTech / IoT / Health Monitoring",

    description:
      "PetPace is a connected pet health monitoring ecosystem. I worked on the administration interface connected to the smart pet wearable ecosystem, providing pet management, veterinary-related workflows and access to health-related information.",

    features: [
      "IoT Integration",
      "Pet Management",
      "Health Monitoring",
      "Temperature Data",
      "Health Data Visualization",
      "Veterinary Workflows",
      "Complex Dashboards",
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
      "Theme Customization",
      "Custom Sections",
      "Product Architecture",
      "Collections",
      "Responsive Design",
      "E-commerce UX",
      "SEO",
    ],

    url: "",
  },
};

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

const openModal = (
  projectKey
) => {
  const project =
    projectData[projectKey];

  if (!project) {
    return;
  }

  modalTitle.textContent =
    project.title;

  modalCategory.textContent =
    project.category;

  modalDescription.textContent =
    project.description;

  modalFeatures.innerHTML = "";

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

  if (project.url) {
    modalLink.href =
      project.url;

    modalLink.style.display =
      "inline-flex";
  } else {
    modalLink.style.display =
      "none";
  }

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

  body.style.overflow = "";
};

document
  .querySelectorAll(
    ".case-study-btn"
  )
  .forEach((button) => {
    button.addEventListener(
      "click",
      () => {
        openModal(
          button.dataset.project
        );
      }
    );
  });

document
  .querySelectorAll(
    "[data-close-modal]"
  )
  .forEach((element) => {
    element.addEventListener(
      "click",
      closeModal
    );
  });

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

/* -----------------------
   Contact form
----------------------- */

const contactForm =
  document.getElementById(
    "contactForm"
  );

const formStatus =
  document.getElementById(
    "formStatus"
  );

contactForm.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    const formData =
      new FormData(
        contactForm
      );

    const name =
      formData.get("name");

    const email =
      formData.get("email");

    const projectType =
      formData.get(
        "projectType"
      );

    const message =
      formData.get(
        "message"
      );

    const subject =
      encodeURIComponent(
        `${projectType} — Portfolio enquiry from ${name}`
      );

    const emailBody =
      encodeURIComponent(
        [
          `Name: ${name}`,
          `Email: ${email}`,
          `Project Type: ${projectType}`,
          "",
          message,
        ].join("\n")
      );

    formStatus.textContent =
      "Opening your email application...";

    window.location.href =
      `mailto:margarsusanna5@gmail.com?subject=${subject}&body=${emailBody}`;
  }
);