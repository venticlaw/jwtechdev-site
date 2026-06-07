const niches = [
  {
    id: "dragon-ball-power-scaling",
    label: "Dragon Ball power-scaling absurdity",
    fandom: "Dragon Ball fans who debate forms, training arcs, and impossible power math",
    tone: "confident, ridiculous, over-serious about unserious rankings",
    motifs: ["training grids", "capsule labels", "energy charts", "tournament brackets", "orange-blue contrast"],
    subjects: ["power scaling", "training arcs", "villain speeches", "transformations", "tournament logic"]
  },
  {
    id: "demon-slayer-emotional-damage",
    label: "Demon Slayer emotional damage",
    fandom: "fans who came for sword fights and stayed for heartbreak",
    tone: "dramatic, tender, theatrical, with a sudden joke at the end",
    motifs: ["paper texture", "breath diagrams", "moonlit panels", "pattern tiles", "soft red accents"],
    subjects: ["tragic backstories", "discipline", "sibling loyalty", "beautiful violence", "mentor energy"]
  },
  {
    id: "my-hero-academia-classroom-chaos",
    label: "My Hero Academia classroom chaos",
    fandom: "fans who treat hero school like a group project gone sideways",
    tone: "school-announcement serious with unhinged student logic",
    motifs: ["report cards", "training notes", "class rosters", "comic halftones", "blue-yellow-red blocks"],
    subjects: ["quirk logic", "teacher notes", "rivalry arcs", "hero rankings", "classroom disasters"]
  },
  {
    id: "chainsaw-man-unhinged-life-advice",
    label: "Chainsaw Man unhinged life advice",
    fandom: "fans who like dark jokes, bad decisions, and emotional whiplash",
    tone: "deadpan, feral, bleakly funny, strangely honest",
    motifs: ["warning labels", "receipt paper", "rough ink", "industrial tags", "black-red-cream contrast"],
    subjects: ["bad bargains", "survival logic", "cheap dreams", "toxic mentorship", "emotional damage"]
  },
  {
    id: "hells-paradise-survival-notes",
    label: "Hell's Paradise survival notes",
    fandom: "fans drawn to brutal beauty, mission stakes, and cursed island logic",
    tone: "field manual meets existential panic",
    motifs: ["botanical diagrams", "mission cards", "ink stamps", "island maps", "green-coral-black palette"],
    subjects: ["survival rules", "mission priorities", "stoic characters", "body horror", "beauty as danger"]
  }
];

const formatTemplates = [
  ["PowerPoint For People Who Need Help", "5-slide carousel that explains a fandom argument like a cursed office deck."],
  ["The Ranking Nobody Asked For", "Tier list with one obviously biased rule and one surprisingly good insight."],
  ["One Joke, Four Escalations", "A meme premise that gets more specific each slide until the final punchline."],
  ["Wrong But Confident", "A fake theory delivered with academic confidence and a disclaimer in the caption."],
  ["Fandom Court", "Put a character, trope, or fan habit on trial with evidence cards."],
  ["Tiny Manual", "A field guide for surviving one absurd fandom situation."],
  ["Before You Argue", "Pre-argument checklist for comments sections and fandom debates."],
  ["Character HR File", "Workplace performance review for a character archetype without using protected visuals."],
  ["Emotional Damage Receipt", "Text-first receipt of everything a scene or arc made the fandom pay for."],
  ["Comment Bait With Standards", "A prompt engineered to invite debate without becoming spammy or mean."]
];

const visualDirections = [
  {
    title: "Fake Operational Manual",
    description: "Instruction-card layouts, stamps, simple diagrams, and exaggerated process labels.",
    colors: ["#171b20", "#f7f8f4", "#0f766e", "#c4862f", "#2456a4"]
  },
  {
    title: "Kitsch Trading Card Wall",
    description: "Original icon shapes, score bars, fake stats, and collectible-card framing.",
    colors: ["#242a31", "#fef3c7", "#c8573f", "#6d3f70", "#0f766e"]
  },
  {
    title: "Fandom Court Evidence",
    description: "Case files, redacted notes, receipts, and exhibit labels for debate posts.",
    colors: ["#ffffff", "#171b20", "#d9ddd4", "#c4862f", "#c8573f"]
  },
  {
    title: "Chaotic Classroom Board",
    description: "Notebook grids, margin comments, quiz marks, and bright but controlled blocks.",
    colors: ["#f7f8f4", "#2456a4", "#c4862f", "#c8573f", "#171b20"]
  },
  {
    title: "Meme Museum Placard",
    description: "High/low design: serious labels for deeply unserious fandom artifacts.",
    colors: ["#f7f8f4", "#242a31", "#6d3f70", "#0f766e", "#d9ddd4"]
  }
];

const hooks = [
  "The chart nobody requested",
  "Before you start typing",
  "A serious report on unserious behavior",
  "This is why the comments are doomed",
  "The fandom math is not okay",
  "Five signs you are too deep in the arc",
  "The emotional invoice has arrived",
  "A field guide for surviving the debate",
  "The fake expert has entered the chat",
  "This should not be a PowerPoint, but it is"
];

const bits = [
  "treats headcanon like peer-reviewed research",
  "turns one scene into a 19-slide legal case",
  "adds a fake metric that somehow makes sense",
  "ends with a comment prompt designed for chaos",
  "uses an over-serious label for a tiny fandom habit",
  "turns a character archetype into a workplace issue",
  "makes the punchline land on slide four",
  "invites debate without needing protected screenshots",
  "uses original icons instead of official artwork",
  "keeps the caption short and argument-ready"
];

const normalizeContent = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const state = {
  niche: niches[0],
  goal: "audience testing",
  riskMode: "rights-safe original layouts",
  contentHistory: { items: [] },
  approvedQueue: { items: [] },
  dailyReport: null,
  ideas: [],
  formats: [],
  visuals: [],
  queue: [],
  reviews: JSON.parse(localStorage.getItem("anime-social-reviews") || "{}")
};

const elements = {
  nicheSelect: document.querySelector("#nicheSelect"),
  goalSelect: document.querySelector("#goalSelect"),
  riskSelect: document.querySelector("#riskSelect"),
  buildButton: document.querySelector("#buildButton"),
  heroTitle: document.querySelector("#heroTitle"),
  heroCopy: document.querySelector("#heroCopy"),
  searchInput: document.querySelector("#searchInput"),
  ideaGrid: document.querySelector("#ideaGrid"),
  formatGrid: document.querySelector("#formatGrid"),
  visualGrid: document.querySelector("#visualGrid"),
  queueList: document.querySelector("#queueList"),
  approvalList: document.querySelector("#approvalList"),
  dailyReport: document.querySelector("#dailyReport"),
  exportText: document.querySelector("#exportText"),
  copyButton: document.querySelector("#copyButton"),
  clearApprovalsButton: document.querySelector("#clearApprovalsButton"),
  ideaCount: document.querySelector("#ideaCount"),
  formatCount: document.querySelector("#formatCount"),
  visualCount: document.querySelector("#visualCount"),
  queueCount: document.querySelector("#queueCount"),
  tabs: [...document.querySelectorAll(".tabs button")],
  panels: [...document.querySelectorAll("[data-panel]")]
};

const historyFingerprints = () =>
  new Set(
    state.contentHistory.items.flatMap((item) =>
      [item.title, item.caption, item.angle, ...(item.fingerprints || [])].map(normalizeContent)
    )
  );

const historyMatches = (idea, fingerprints = historyFingerprints()) => {
  const checks = [
    idea.title,
    idea.caption,
    idea.angle,
    idea.fingerprint,
    `${idea.nicheId} ${idea.format} ${idea.subject} ${idea.angle}`
  ].map(normalizeContent);

  return checks.some((check) => check && fingerprints.has(check));
};

const makeIdeaCandidate = (niche, index) => {
    const subject = niche.subjects[index % niche.subjects.length];
    const hook = hooks[index % hooks.length];
    const bit = bits[(index + Math.floor(index / hooks.length)) % bits.length];
    const format = formatTemplates[index % formatTemplates.length][0];
    const angle = `${hook} / ${subject} / ${bit}`;
    return {
      id: `${niche.id}-${String(index + 1).padStart(2, "0")}`,
      nicheId: niche.id,
      subject,
      title: `${hook}: ${subject}`,
      format,
      hook,
      angle,
      premise: `A ${niche.tone} post that ${bit}.`,
      slideArc: [
        `Slide 1: ${hook}`,
        `Slide 2: Define the fandom problem around ${subject}.`,
        `Slide 3: Add a fake-but-readable framework.`,
        `Slide 4: Land the joke with a specific fan behavior.`,
        `Slide 5: Ask a short debate question.`
      ],
      caption: `Argue with the chart, not with me. Which ${subject} take belongs in fandom jail?`,
      hashtags: ["anime", "animememes", "fandom", subject.replaceAll(" ", "")],
      fingerprint: normalizeContent(`${niche.id} ${format} ${subject} ${angle}`)
    };
};

const makeIdeas = (niche) => {
  const fingerprints = historyFingerprints();
  const candidates = Array.from({ length: 150 }, (_, index) => makeIdeaCandidate(niche, index));
  const unique = [];
  const seen = new Set();

  candidates.forEach((idea) => {
    const localKey = normalizeContent(`${idea.title} ${idea.format} ${idea.caption} ${idea.angle} ${idea.premise}`);
    if (seen.has(localKey) || historyMatches(idea, fingerprints)) return;
    seen.add(localKey);
    unique.push({ ...idea, id: `${niche.id}-${String(unique.length + 1).padStart(2, "0")}` });
  });

  return unique.slice(0, 50);
};

const makeQueue = (ideas) =>
  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => ({
    day,
    post: ideas[(index * 6) % ideas.length] || ideas[0],
    backup: ideas[(index * 6 + 1) % ideas.length] || ideas[0],
    status: state.reviews[`${state.niche.id}-${day}`] || "hold"
  }));

const buildPlan = () => {
  state.niche = niches.find((niche) => niche.id === elements.nicheSelect.value) || niches[0];
  state.goal = elements.goalSelect.value;
  state.riskMode = elements.riskSelect.value;
  state.ideas = makeIdeas(state.niche);
  state.formats = formatTemplates.map(([title, description], index) => ({
    id: `format-${index + 1}`,
    title,
    description,
    cadence: index < 3 ? "2x weekly" : index < 7 ? "weekly" : "as winner variant"
  }));
  state.visuals = visualDirections;
  state.queue = makeQueue(state.ideas);
  render();
};

const renderIdeas = () => {
  const query = elements.searchInput.value.trim().toLowerCase();
  const filtered = state.ideas.filter((idea) =>
    [idea.title, idea.format, idea.premise, idea.caption, idea.hashtags.join(" ")]
      .join(" ")
      .toLowerCase()
      .includes(query)
  );

  elements.ideaGrid.replaceChildren(
    ...filtered.map((idea) => {
      const card = document.createElement("article");
      card.className = "idea-card";
      card.innerHTML = `
        <b>${idea.format}</b>
        <h4>${idea.title}</h4>
        <p>${idea.premise}</p>
        <small>${idea.slideArc.join(" ")}</small>
      `;
      return card;
    })
  );
};

const renderFormats = () => {
  elements.formatGrid.replaceChildren(
    ...state.formats.map((format) => {
      const card = document.createElement("article");
      card.className = "format-card";
      card.innerHTML = `
        <b>${format.cadence}</b>
        <h4>${format.title}</h4>
        <p>${format.description}</p>
      `;
      return card;
    })
  );
};

const renderVisuals = () => {
  elements.visualGrid.replaceChildren(
    ...state.visuals.map((visual) => {
      const card = document.createElement("article");
      card.className = "visual-card";
      card.innerHTML = `
        <div class="visual-swatch">${visual.colors.map((color) => `<i style="background:${color}"></i>`).join("")}</div>
        <b>Original asset direction</b>
        <h4>${visual.title}</h4>
        <p>${visual.description}</p>
      `;
      return card;
    })
  );
};

const saveReviews = () => {
  localStorage.setItem("anime-social-reviews", JSON.stringify(state.reviews));
};

const renderQueue = () => {
  elements.queueList.replaceChildren(
    ...state.queue.filter((item) => item.post && item.backup).map((item) => {
      const id = `${state.niche.id}-${item.day}`;
      const card = document.createElement("article");
      card.className = "queue-item";
      card.innerHTML = `
        <div class="day-pill">${item.day}</div>
        <div>
          <b>${item.post.format}</b>
          <h4>${item.post.title}</h4>
          <p>${item.post.premise}</p>
          <p><strong>Backup:</strong> ${item.backup.title}</p>
        </div>
        <div class="review-actions" aria-label="${item.day} review state">
          <button type="button" data-state="approved">Approve</button>
          <button type="button" data-state="revise">Revise</button>
          <button type="button" data-state="hold">Hold</button>
        </div>
      `;
      card.querySelectorAll("[data-state]").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.state === (state.reviews[id] || "hold"));
        button.addEventListener("click", () => {
          state.reviews[id] = button.dataset.state;
          saveReviews();
          state.queue = makeQueue(state.ideas);
          renderQueue();
          renderExport();
        });
      });
      return card;
    })
  );
};

const statusLabels = {
  approved_for_creation: "Approved",
  in_production: "In Production",
  proof_ready: "Proof Ready",
  needs_revision: "Needs Revision",
  exported: "Exported",
  blocked: "Blocked"
};

const renderDailyReport = () => {
  const report = state.dailyReport;
  if (!report) {
    elements.dailyReport.replaceChildren();
    return;
  }

  const summary = report.summary || {};
  const stats = [
    ["Queue Items", summary.totalQueueItems || 0],
    ["Approved", summary.approvedForCreation || 0],
    ["Ready", summary.readyForProduction || 0],
    ["Blocked", summary.blockedDuplicates || 0]
  ];

  elements.dailyReport.replaceChildren(
    ...stats.map(([label, value]) => {
      const item = document.createElement("article");
      item.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
      return item;
    }),
    (() => {
      const item = document.createElement("article");
      item.className = "report-meta";
      item.innerHTML = `
        <span>Last Scan</span>
        <strong>${report.mode || "not_run"}</strong>
        <small>${report.generatedAt || "No report generated yet"}</small>
      `;
      return item;
    })()
  );
};

const renderApprovals = () => {
  const items = state.approvedQueue.items || [];
  if (!items.length) {
    const empty = document.createElement("article");
    empty.className = "approval-item";
    empty.innerHTML = `
      <div class="status-pill">Empty</div>
      <div>
        <h4>No durable approval queue items yet</h4>
        <p>Approved posts should be added to approved-post-queue.json before daily production.</p>
      </div>
    `;
    elements.approvalList.replaceChildren(empty);
    return;
  }

  elements.approvalList.replaceChildren(
    ...items.map((item) => {
      const card = document.createElement("article");
      card.className = "approval-item";
      const status = statusLabels[item.status] || item.status || "Unknown";
      const duplicateCount = item.duplicateMatches?.length || 0;
      card.innerHTML = `
        <div class="status-pill" data-status="${item.status || "unknown"}">${status}</div>
        <div>
          <b>${item.niche || "anime-social"}</b>
          <h4>${item.title || "Untitled approved post"}</h4>
          <p>${item.requestedFormat || item.format || "Format TBD"}</p>
          <p><strong>Proof:</strong> ${
            item.proofUrl ? `<a href="${item.proofUrl}">Open proof</a>` : "Not ready"
          }</p>
          <small>Approved: ${item.approvedAt || "pending"}${
            duplicateCount ? ` · duplicate matches: ${duplicateCount}` : ""
          }</small>
        </div>
      `;
      return card;
    })
  );
};

const exportPacket = () => ({
  generatedAt: new Date().toISOString(),
  status: "manual-review-mvp",
  niche: state.niche.label,
  fandom: state.niche.fandom,
  goal: state.goal,
  riskMode: state.riskMode,
  guardrails: [
    "No official anime stills, clips, or logos.",
    "No impersonation or misleading affiliation.",
    "No automated public posting.",
    "Manual approval before asset generation or scheduling.",
    "Every batch must check content-history.json before production and append approved/exported posts after production."
  ],
  uniquenessCheck: {
    historyItemsChecked: state.contentHistory.items.length,
    approvedQueueItemsChecked: state.approvedQueue.items.length,
    lastDailyProductionScan: state.dailyReport?.generatedAt || null,
    duplicatePolicy: "Candidates matching prior title, caption, angle, or fingerprint are filtered before batching.",
    historySource: "./content-history.json",
    approvalQueueSource: "./approved-post-queue.json",
    productionReportSource: "./daily-production-report.json"
  },
  ideas: state.ideas,
  formats: state.formats,
  visualDirections: state.visuals.map(({ title, description }) => ({ title, description })),
  queue: state.queue.map((item) => ({
    day: item.day,
    status: item.status,
    primary: item.post.title,
    backup: item.backup.title,
    caption: item.post.caption,
    hashtags: item.post.hashtags
  })),
  approvedPostQueue: state.approvedQueue.items,
  dailyProductionReport: state.dailyReport
});

const renderExport = () => {
  elements.exportText.value = JSON.stringify(exportPacket(), null, 2);
};

const render = () => {
  elements.heroTitle.textContent = state.niche.label;
  elements.heroCopy.textContent = `${state.niche.fandom}. Goal: ${state.goal}. Mode: ${state.riskMode}. Prior posts checked: ${state.contentHistory.items.length}.`;
  elements.ideaCount.textContent = state.ideas.length;
  elements.formatCount.textContent = state.formats.length;
  elements.visualCount.textContent = state.visuals.length;
  elements.queueCount.textContent = state.queue.length;
  renderIdeas();
  renderFormats();
  renderVisuals();
  renderQueue();
  renderDailyReport();
  renderApprovals();
  renderExport();
};

niches.forEach((niche) => {
  const option = document.createElement("option");
  option.value = niche.id;
  option.textContent = niche.label;
  elements.nicheSelect.append(option);
});

const loadContentHistory = async () => {
  try {
    const response = await fetch("./content-history.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`History returned ${response.status}`);
    state.contentHistory = await response.json();
  } catch (error) {
    state.contentHistory = { items: [] };
  }
};

const loadJson = async (url, fallback) => {
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`${url} returned ${response.status}`);
    return await response.json();
  } catch (error) {
    return fallback;
  }
};

elements.buildButton.addEventListener("click", buildPlan);
elements.searchInput.addEventListener("input", renderIdeas);
elements.clearApprovalsButton.addEventListener("click", () => {
  state.reviews = {};
  saveReviews();
  state.queue = makeQueue(state.ideas);
  renderQueue();
  renderExport();
});
elements.copyButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(elements.exportText.value);
  elements.copyButton.textContent = "Copied";
  window.setTimeout(() => {
    elements.copyButton.textContent = "Copy JSON";
  }, 1200);
});
elements.tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    elements.tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
    elements.panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.panel === tab.dataset.view));
  });
});

await loadContentHistory();
state.approvedQueue = await loadJson("./approved-post-queue.json", { items: [] });
state.dailyReport = await loadJson("./daily-production-report.json", null);
buildPlan();
