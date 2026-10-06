document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

  const navbar = $("#navbar");
  const navMenu = $("#nav-menu");
  const menuToggle = $("#hamburger");
  const navLinks = $$(".nav-link");
  const sections = $$("main section[id]");
  const scrollTopBtn = $("#scrollTopBtn");

  // Sticky navbar + scroll-to-top.
  const handleScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 24);
    scrollTopBtn.classList.toggle("show", window.scrollY > 500);
  };
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Mobile navigation.
  const closeMenu = () => {
    navMenu.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks.forEach(link => link.addEventListener("click", closeMenu));

  // Active navigation item while scrolling.
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.remove("active"));
      const activeLink = $(`.nav-link[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add("active");
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

  sections.forEach(section => sectionObserver.observe(section));

  // Scroll-to-top.
  scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Skill filtering.
  const skillButtons = $$("[data-skill-filter]");
  const skillCards = $$(".skill-card");

  skillButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.skillFilter;
      skillButtons.forEach(item => item.classList.toggle("active", item === button));
      skillCards.forEach(card => {
        const visible = category === "all" || card.dataset.skill === category;
        card.classList.toggle("is-hidden", !visible);
      });
    });
  });

  // Project filtering.
  const projectButtons = $$("[data-project-filter]");
  const projectCards = $$(".project-card");
  const emptyState = $("#project-empty");

  projectButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.projectFilter;
      projectButtons.forEach(item => item.classList.toggle("active", item === button));

      let visibleCount = 0;
      projectCards.forEach(card => {
        const categories = card.dataset.category.split(" ");
        const visible = category === "all" || categories.includes(category);
        card.classList.toggle("is-hidden", !visible);
        if (visible) visibleCount++;
      });

      emptyState.hidden = visibleCount !== 0;
    });
  });

  // Hero role typing / rotating animation.
  const roleText = $("#role-text");
  const roles = ["BCA Student", "Full-Stack Developer", "AI Enthusiast"];
  let roleIndex = 0;
  let characterIndex = 0;
  let deleting = false;

  const typeRole = () => {
    const role = roles[roleIndex];

    if (!deleting) {
      characterIndex++;
      roleText.textContent = role.slice(0, characterIndex);
      if (characterIndex === role.length) {
        deleting = true;
        setTimeout(typeRole, 1700);
        return;
      }
      setTimeout(typeRole, 85);
    } else {
      characterIndex--;
      roleText.textContent = role.slice(0, characterIndex);
      if (characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 350);
        return;
      }
      setTimeout(typeRole, 45);
    }
  };
  setTimeout(typeRole, 900);

  // Scroll reveal.
  const revealItems = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  // Project modal.
  const modal = $("#project-modal");
  const modalBody = $("#modal-body");
  const modalClose = $("#modal-close");

  const projectDetails = {
    schedai: {
      title: "SchedAI",
      image: "assets/images/schedai.png",
      description: "An AI-powered department scheduling and academic coordination system designed to reduce timetable conflicts and simplify academic operations.",
      features: [
        "AI timetable generation with scheduling constraints",
        "Teacher workload fairness and availability handling",
        "Teacher absence and substitution management",
        "Academic reports and coordination tools",
        "Notes / PYQs management",
        "Gemini AI assistant for academic support"
      ],
      github: "https://github.com/kritika7268/SchedAI",
      live: "https://schedai-frontend-qy8g.onrender.com"
    },
    airwatch: {
      title: "AirWatch AI",
      image: "https://raw.githubusercontent.com/kritika7268/airwatch-ai/main/screenshots/home.png",
      description: "A hyperlocal air-pollution detection and civic-action platform powered by Google Gemini 2.0 Flash for multimodal verification and environmental risk reasoning.",
      features: [
        "Urban AQI dashboard with city switching",
        "Leaflet-based hyperlocal pollution hotspot map",
        "Gemini 2.0 Flash vision classification for citizen photos",
        "AI risk scoring using PM2.5, PM10, wind and incident data",
        "Municipal alert lifecycle: Pending → Assigned → Resolved",
        "Zero-crash AI fallback for live demonstrations"
      ],
      github: "https://github.com/kritika7268/airwatch-ai",
      live: "https://airwatch-ai-992k.onrender.com"
    },
    expensely: {
      title: "Expensely",
      image: "https://raw.githubusercontent.com/kritika7268/expense-tracker/main/screenshots/dashboard.png",
      description: "A production-style full-stack personal finance platform combining a JavaScript/React frontend with a FastAPI backend for secure financial tracking, budgeting and analytics.",
      features: [
        "JWT authentication and multi-tenant data isolation",
        "Income and expense ledger with filtering and pagination",
        "80% Near Limit and 100% Over Budget guardrails",
        "Recharts cash-flow, category and payment analytics",
        "CSV financial statement export",
        "Dark/light theme and multi-currency formatting"
      ],
      github: "https://github.com/kritika7268/expense-tracker",
      live: "https://expensely-frontend.onrender.com"
    }
  };

  const openModal = key => {
    const project = projectDetails[key];
    if (!project) return;

    modalBody.innerHTML = `
      <p class="eyebrow">Project Details</p>
      <h2 id="modal-title">${project.title}</h2>
      <img class="modal-project-image" src="${project.image}" alt="${project.title} project screenshot">
      <p>${project.description}</p>
      <ul>${project.features.map(feature => `<li>${feature}</li>`).join("")}</ul>
      <div class="modal-actions">
        <a class="btn btn-primary" href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a class="btn btn-ghost" href="${project.live}" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
      </div>
    `;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modalClose.focus();
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  $$(".details-btn").forEach(button => {
    button.addEventListener("click", () => openModal(button.dataset.project));
  });

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  // Contact form validation. This is frontend-only, so no fake network request is made.
  const contactForm = $("#contact-form");
  const formMessage = $("#form-message");

  const fields = {
    name: { input: $("#name"), error: $("#name-error"), message: "Please enter your name." },
    email: { input: $("#email"), error: $("#email-error"), message: "Please enter a valid email address." },
    subject: { input: $("#subject"), error: $("#subject-error"), message: "Please enter a subject." },
    message: { input: $("#message"), error: $("#message-error"), message: "Please enter at least 10 characters." }
  };

  const setFieldError = (field, message = "") => {
    field.error.textContent = message;
    field.input.closest(".field").classList.toggle("invalid", Boolean(message));
  };

  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    formMessage.textContent = "";
    formMessage.className = "form-message";

    const name = fields.name.input.value.trim();
    const email = fields.email.input.value.trim();
    const subject = fields.subject.input.value.trim();
    const message = fields.message.input.value.trim();
    let valid = true;

    Object.values(fields).forEach(field => setFieldError(field));

    if (name.length < 2) {
      setFieldError(fields.name, fields.name.message);
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setFieldError(fields.email, fields.email.message);
      valid = false;
    }

    if (subject.length < 2) {
      setFieldError(fields.subject, fields.subject.message);
      valid = false;
    }

    if (message.length < 10) {
      setFieldError(fields.message, fields.message.message);
      valid = false;
    }

    if (!valid) {
      formMessage.textContent = "Please correct the highlighted fields and try again.";
      formMessage.classList.add("error");
      return;
    }

    formMessage.textContent = "Thanks! Your message passed validation. This static portfolio does not send data to a server.";
    formMessage.classList.add("success");
    contactForm.reset();
  });

  // Clear individual errors as the user edits.
  Object.values(fields).forEach(field => {
    field.input.addEventListener("input", () => setFieldError(field));
  });

  // Dynamic copyright year.
  $("#current-year").textContent = new Date().getFullYear();

  // Close mobile menu when viewport becomes desktop-sized.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMenu();
  });
});
