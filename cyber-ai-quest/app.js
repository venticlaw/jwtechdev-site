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

const trainingPlans = {
  high: {
    name: "High speed · aggressive but humane",
    hours: "10–12 hours",
    jobReady: "March 1, 2027",
    specialtyReady: {
      government: "July 2027",
      commercial: "July 2027"
    },
    rhythm: "Tuesday and Thursday: 75 minutes each. Saturday: 3 hours. Sunday: 3 hours. Add two 30–45 minute lunch reviews. Keep Friday night and one weekend night completely protected.",
    googleCost: "$98",
    labCost: "$84",
    total: {
      government: "$1,181–$1,241",
      commercial: "$831–$891"
    },
    common: [
      { date: "Oct 12–18, 2026", title: "Set the baseline and target jobs", copy: "Complete a skills inventory, save 20 real job listings, set up GitHub, and choose the government or commercial destination.", proof: "Proof: 20-role tracker + GitHub profile" },
      { date: "Oct 19–Dec 13, 2026", title: "Finish the Google Cybersecurity Certificate", copy: "Build foundations in Linux, SQL, Python, SIEM, network security, and incident response. Publish three short lab notes while learning.", proof: "Proof: certificate + 3 lab writeups" },
      { date: "Dec 14, 2026–Feb 27, 2027", title: "Prepare for and sit Security+", copy: "Use the official objectives as the checklist, free Professor Messer instruction for review, and timed practice exams before booking the test.", proof: "Deadline: sit the exam February 27" },
      { date: "Jan 4–Feb 28, 2027", title: "Build the first recruiter-readable case study", copy: "Create a small incident investigation with logs, findings, containment steps, and a plain-English executive summary.", proof: "Proof: published incident case study" },
      { date: "Starting Mar 1, 2027", title: "Begin the hiring campaign", copy: "Send five tailored applications and hold two networking conversations every week. Improve one artifact after each interview or rejection pattern.", proof: "Target: 50 applications by May 15" }
    ],
    path: {
      government: [
        { date: "Mar 15–Jun 19, 2027", title: "Build Linux depth and sit RHCSA", copy: "Practice users, services, storage, networking, firewalld, SSH, logs, and SELinux in performance-based labs. Apply to sponsor-capable roles while studying.", proof: "Deadline: RHCSA exam June 19" },
        { date: "Jun 21–Jul 31, 2027", title: "Ship the mission AI-security capstone", copy: "Document a permission-bounded AI workflow with audit logs, a threat model, approval gates, and degraded-mode procedures.", proof: "Proof: capstone + 5-minute walkthrough" }
      ],
      commercial: [
        { date: "Mar 15–May 29, 2027", title: "Prepare for AWS Solutions Architect – Associate", copy: "Learn IAM, VPC, compute, storage, monitoring, resiliency, and cost controls. Build each major concept before memorizing it.", proof: "Deadline: SAA exam May 29" },
        { date: "May 31–Jul 18, 2027", title: "Ship the cloud AI-security capstone", copy: "Deploy a permission-bounded AI workflow with budget alerts, logs, human approvals, and a public architecture explanation.", proof: "Proof: capstone + 5-minute walkthrough" }
      ]
    },
    pros: ["Earliest route to interviews and income opportunities.", "Lower subscription cost because monthly courses finish faster.", "Momentum stays visible because every month produces proof."],
    cons: ["Less schedule flexibility during busy work weeks.", "Requires a firm boundary around two evenings and part of the weekend.", "Missing two weeks can create catch-up pressure, so buffer time must be used intentionally."]
  },
  medium: {
    name: "Medium speed · balanced",
    hours: "6–8 hours",
    jobReady: "June 1, 2027",
    specialtyReady: {
      government: "November 2027",
      commercial: "November 2027"
    },
    rhythm: "Tuesday and Thursday: 60 minutes each. Saturday: 2.5 hours. Sunday: 1.5 hours. Add one 30-minute review during lunch, and take one full weekend off every six weeks.",
    googleCost: "$196",
    labCost: "$126",
    total: {
      government: "$1,321–$1,381",
      commercial: "$971–$1,031"
    },
    common: [
      { date: "Oct 12–25, 2026", title: "Set the baseline and target jobs", copy: "Complete a skills inventory, save 20 real job listings, set up GitHub, and choose the government or commercial destination.", proof: "Proof: 20-role tracker + GitHub profile" },
      { date: "Oct 26, 2026–Jan 31, 2027", title: "Finish the Google Cybersecurity Certificate", copy: "Build foundations in Linux, SQL, Python, SIEM, network security, and incident response. Publish three short lab notes while learning.", proof: "Proof: certificate + 3 lab writeups" },
      { date: "Feb 1–May 15, 2027", title: "Prepare for and sit Security+", copy: "Use the official objectives as the checklist, free Professor Messer instruction for review, and timed practice exams before booking the test.", proof: "Deadline: sit the exam May 15" },
      { date: "Jan 11–May 31, 2027", title: "Build the first recruiter-readable case study", copy: "Create a small incident investigation with logs, findings, containment steps, and a plain-English executive summary.", proof: "Proof: published incident case study" },
      { date: "Starting Jun 1, 2027", title: "Begin the hiring campaign", copy: "Send five tailored applications and hold two networking conversations every week. Improve one artifact after each interview or rejection pattern.", proof: "Target: 50 applications by August 15" }
    ],
    path: {
      government: [
        { date: "Jun 1–Oct 23, 2027", title: "Build Linux depth and sit RHCSA", copy: "Practice users, services, storage, networking, firewalld, SSH, logs, and SELinux in performance-based labs. Apply to sponsor-capable roles while studying.", proof: "Deadline: RHCSA exam October 23" },
        { date: "Sep 1–Nov 30, 2027", title: "Ship the mission AI-security capstone", copy: "Document a permission-bounded AI workflow with audit logs, a threat model, approval gates, and degraded-mode procedures.", proof: "Proof: capstone + 5-minute walkthrough" }
      ],
      commercial: [
        { date: "Jun 7–Sep 18, 2027", title: "Prepare for AWS Solutions Architect – Associate", copy: "Learn IAM, VPC, compute, storage, monitoring, resiliency, and cost controls. Build each major concept before memorizing it.", proof: "Deadline: SAA exam September 18" },
        { date: "Sep 20–Nov 30, 2027", title: "Ship the cloud AI-security capstone", copy: "Deploy a permission-bounded AI workflow with budget alerts, logs, human approvals, and a public architecture explanation.", proof: "Proof: capstone + 5-minute walkthrough" }
      ]
    },
    pros: ["Strong enough pace to create career movement within a year.", "Leaves room for a full-time job, relationships, sleep, and a social life.", "More time to retain concepts and produce polished portfolio evidence."],
    cons: ["Interviews begin about three months later than the high-speed plan.", "Monthly subscriptions cost more when courses stay open longer.", "The longer runway creates more chances for motivation to drift without calendar deadlines."]
  },
  low: {
    name: "Low speed · sustainable",
    hours: "3.5–5 hours",
    jobReady: "September 15, 2027",
    specialtyReady: {
      government: "April 2028",
      commercial: "April 2028"
    },
    rhythm: "Tuesday: 60 minutes. Thursday: 45 minutes. Saturday: 2 hours. Add an optional 45-minute Sunday review, plus a full buffer week after every six study weeks.",
    googleCost: "$294",
    labCost: "$168",
    total: {
      government: "$1,461–$1,521",
      commercial: "$1,111–$1,171"
    },
    common: [
      { date: "Oct 12–Nov 1, 2026", title: "Set the baseline and target jobs", copy: "Complete a skills inventory, save 20 real job listings, set up GitHub, and choose the government or commercial destination.", proof: "Proof: 20-role tracker + GitHub profile" },
      { date: "Nov 2, 2026–Apr 4, 2027", title: "Finish the Google Cybersecurity Certificate", copy: "Build foundations in Linux, SQL, Python, SIEM, network security, and incident response. Publish three short lab notes while learning.", proof: "Proof: certificate + 3 lab writeups" },
      { date: "Apr 5–Sep 4, 2027", title: "Prepare for and sit Security+", copy: "Use the official objectives as the checklist, free Professor Messer instruction for review, and timed practice exams before booking the test.", proof: "Deadline: sit the exam September 4" },
      { date: "Feb 1–Sep 12, 2027", title: "Build the first recruiter-readable case study", copy: "Create a small incident investigation with logs, findings, containment steps, and a plain-English executive summary.", proof: "Proof: published incident case study" },
      { date: "Starting Sep 15, 2027", title: "Begin the hiring campaign", copy: "Send five tailored applications and hold two networking conversations every week. Improve one artifact after each interview or rejection pattern.", proof: "Target: 50 applications by December 15" }
    ],
    path: {
      government: [
        { date: "Oct 4, 2027–Mar 25, 2028", title: "Build Linux depth and sit RHCSA", copy: "Practice users, services, storage, networking, firewalld, SSH, logs, and SELinux in performance-based labs. Apply to sponsor-capable roles while studying.", proof: "Deadline: RHCSA exam March 25" },
        { date: "Feb 1–Apr 30, 2028", title: "Ship the mission AI-security capstone", copy: "Document a permission-bounded AI workflow with audit logs, a threat model, approval gates, and degraded-mode procedures.", proof: "Proof: capstone + 5-minute walkthrough" }
      ],
      commercial: [
        { date: "Oct 4, 2027–Jan 29, 2028", title: "Prepare for AWS Solutions Architect – Associate", copy: "Learn IAM, VPC, compute, storage, monitoring, resiliency, and cost controls. Build each major concept before memorizing it.", proof: "Deadline: SAA exam January 29" },
        { date: "Feb 1–Apr 30, 2028", title: "Ship the cloud AI-security capstone", copy: "Deploy a permission-bounded AI workflow with budget alerts, logs, human approvals, and a public architecture explanation.", proof: "Proof: capstone + 5-minute walkthrough" }
      ]
    },
    pros: ["Lowest weekly stress and easiest pace to sustain around work and relationships.", "More time for repetition, deeper understanding, and careful portfolio polish.", "A missed week rarely threatens the entire plan."],
    cons: ["The first concentrated application campaign starts more than a year from launch.", "Monthly learning subscriptions cost more over a longer timeline.", "She delays access to higher-paying interviews and risks learning without enough urgency or feedback."]
  }
};

let activePath = "government";
let activePace = "medium";

function renderTrainingPlan() {
  const plan = trainingPlans[activePace];
  const pathLabel = activePath === "government" ? "Government + cleared" : "Commercial + cloud";
  const specialization = activePath === "government"
    ? { label: "RHCSA exam", price: "$500" }
    : { label: "AWS Solutions Architect – Associate exam", price: "$150" };
  const phases = [...plan.common, ...plan.path[activePath]];

  document.querySelector("#training-path-label").textContent = pathLabel;
  document.querySelector("#pace-name").textContent = plan.name;
  document.querySelector("#pace-hours").textContent = plan.hours;
  document.querySelector("#pace-job-ready").textContent = plan.jobReady;
  document.querySelector("#pace-specialty-ready").textContent = plan.specialtyReady[activePath];
  document.querySelector("#pace-cost").textContent = plan.total[activePath];
  document.querySelector("#weekly-rhythm-copy").textContent = plan.rhythm;

  document.querySelector("#training-timeline").innerHTML = phases.map((phase) => `
    <li class="training-step">
      <time>${phase.date}</time>
      <div>
        <h4>${phase.title}</h4>
        <p>${phase.copy}</p>
        <span class="deadline-proof">${phase.proof}</span>
      </div>
    </li>
  `).join("");

  document.querySelector("#cost-breakdown").innerHTML = `
    <div class="cost-row"><span>Google Cybersecurity Certificate</span><strong>${plan.googleCost}</strong></div>
    <div class="cost-row"><span>CompTIA Security+ exam</span><strong>$439</strong></div>
    <div class="cost-row"><span>TryHackMe lab budget</span><strong>${plan.labCost}</strong></div>
    <div class="cost-row"><span>${specialization.label}</span><strong>${specialization.price}</strong></div>
    <div class="cost-row"><span>Linux, Python, GitHub, and AI-security lessons</span><strong>$0</strong></div>
    <div class="cost-row"><span>AWS practice spend with budget alerts</span><strong>$60–$120</strong></div>
    <div class="cost-row total"><span>Estimated total</span><strong>${plan.total[activePath]}</strong></div>
  `;

  document.querySelector("#pace-pros").innerHTML = plan.pros.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#pace-cons").innerHTML = plan.cons.map((item) => `<li>${item}</li>`).join("");
}

const paceTabs = [...document.querySelectorAll(".pace-tab")];
paceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activePace = tab.dataset.pace;
    paceTabs.forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
    });
    renderTrainingPlan();
  });
});

const pathTabs = [...document.querySelectorAll(".path-tab")];
const pathCards = [...document.querySelectorAll("[data-path-card]")];

function selectPath(key, shouldScroll = false) {
  activePath = key;
  pathTabs.forEach((tab) => {
    const isSelected = tab.dataset.path === key;
    tab.classList.toggle("is-active", isSelected);
    tab.setAttribute("aria-selected", String(isSelected));
  });

  pathCards.forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.pathCard === key);
  });

  renderTrainingPlan();

  if (shouldScroll && window.matchMedia("(max-width: 900px)").matches) {
    document.querySelector(`[data-path-card="${key}"]`).scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

pathTabs.forEach((tab) => {
  tab.addEventListener("click", () => selectPath(tab.dataset.path, true));
});

renderTrainingPlan();

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
