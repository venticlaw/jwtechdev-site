const roles = {
  cloud: {
    label: "Cloud guardian",
    title: "Secure the foundation everything else runs on.",
    copy: "Design identity, networking, logging, storage, and guardrails so cloud and AI workloads have a safer place to live.",
    skills: "Linux · AWS IAM · networking · CloudTrail · incident response",
    project: "Deploy a small AWS environment with least-privilege roles, centralized logs, alerts, a budget, and a one-page threat model.",
    color: "var(--teal-soft)"
  },
  soc: {
    label: "AI defender",
    title: "Find the signal before the damage spreads.",
    copy: "Investigate activity across cloud, identity, endpoint, and AI workflows, then turn evidence into fast, understandable decisions.",
    skills: "SIEM · detection rules · logs · incident response · AI-assisted analysis",
    project: "Create an AI SOC mini-lab that generates test events, flags suspicious behavior, and uses AI to summarize evidence with citations.",
    color: "var(--cobalt-soft)"
  },
  red: {
    label: "AI red teamer",
    title: "Break the system carefully so someone else cannot break it badly.",
    copy: "Test how models, agents, tools, data, and human workflows fail under adversarial pressure, then make the fixes actionable.",
    skills: "Threat modeling · Python · prompt injection · MITRE ATLAS · reporting",
    project: "Build a safe local agent and document tests for prompt injection, excessive agency, data leakage, and tool abuse.",
    color: "var(--coral-soft)"
  },
  assurance: {
    label: "AI assurance lead",
    title: "Turn vague AI risk into evidence leaders can use.",
    copy: "Define evaluations, map controls, document limitations, and help teams decide whether an AI system is ready for a real environment.",
    skills: "NIST AI RMF · evaluations · risk registers · control mapping · communication",
    project: "Create an assurance pack for a public AI use case: threat model, test plan, evidence log, residual risk, and go/no-go recommendation.",
    color: "var(--lilac-soft)"
  },
  mission: {
    label: "Mission systems engineer",
    title: "Make critical technology work where failure has consequences.",
    copy: "Translate mission needs into secure, reliable systems while balancing users, infrastructure, policy, and real operating constraints.",
    skills: "Systems thinking · Linux · cloud · zero trust · stakeholder communication",
    project: "Design a resilient mission-style architecture with segmented access, degraded-mode operations, audit trails, and recovery steps.",
    color: "var(--yellow-soft)"
  }
};

const roleTabs = [...document.querySelectorAll(".role-tab")];
const rolePanel = document.querySelector("#role-panel");

function selectRole(key) {
  const role = roles[key];
  if (!role) return;

  document.querySelector("#role-label").textContent = role.label;
  document.querySelector("#role-title").textContent = role.title;
  document.querySelector("#role-copy").textContent = role.copy;
  document.querySelector("#role-skills").textContent = role.skills;
  document.querySelector("#role-project").textContent = role.project;
  rolePanel.style.background = role.color;

  roleTabs.forEach((tab) => {
    const isSelected = tab.dataset.role === key;
    tab.classList.toggle("is-active", isSelected);
    tab.setAttribute("aria-selected", String(isSelected));
  });
}

roleTabs.forEach((tab) => {
  tab.addEventListener("click", () => selectRole(tab.dataset.role));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const currentIndex = roleTabs.indexOf(tab);
    const nextIndex = (currentIndex + direction + roleTabs.length) % roleTabs.length;
    roleTabs[nextIndex].focus();
    selectRole(roleTabs[nextIndex].dataset.role);
  });
});

const pathTabs = [...document.querySelectorAll(".path-tab")];
const pathCards = [...document.querySelectorAll("[data-path-card]")];

function selectPath(key, shouldScroll = false) {
  pathTabs.forEach((tab) => {
    const isSelected = tab.dataset.path === key;
    tab.classList.toggle("is-active", isSelected);
    tab.setAttribute("aria-selected", String(isSelected));
  });

  pathCards.forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.pathCard === key);
  });

  if (shouldScroll && window.matchMedia("(max-width: 900px)").matches) {
    document.querySelector(`[data-path-card="${key}"]`).scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

pathTabs.forEach((tab) => {
  tab.addEventListener("click", () => selectPath(tab.dataset.path, true));
});

const checklist = [...document.querySelectorAll("[data-quest]")];
const storageKey = "cyber-ai-quest-progress-v1";

function readProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch {
    return [];
  }
}

function renderProgress() {
  const completed = checklist.filter((item) => item.checked).length;
  const percent = Math.round((completed / checklist.length) * 100);
  const ring = document.querySelector("#progress-ring");
  const value = document.querySelector("#progress-value");
  const message = document.querySelector("#progress-message");

  ring.style.setProperty("--progress", percent);
  value.textContent = `${percent}%`;
  message.textContent = percent === 100
    ? "Checkpoint cleared. Time for the next map."
    : percent >= 50
      ? "The evidence is stacking up."
      : percent > 0
        ? "Momentum unlocked. Keep it small and steady."
        : "The adventure starts with one check.";
}

const saved = new Set(readProgress());
checklist.forEach((item) => {
  item.checked = saved.has(item.dataset.quest);
  item.addEventListener("change", () => {
    const completed = checklist.filter((entry) => entry.checked).map((entry) => entry.dataset.quest);
    localStorage.setItem(storageKey, JSON.stringify(completed));
    renderProgress();
  });
});

renderProgress();
