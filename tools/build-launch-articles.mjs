import { mkdir, writeFile } from 'node:fs/promises';

const outDir = new URL('../articles/', import.meta.url);
const assetDir = new URL('../assets/articles/', import.meta.url);
const site = 'https://venticlaw.github.io/jwtechdev-site';
const published = '2026-06-06';

const esc = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const slugTitle = (title) => title.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();

const articles = [
  {
    slug: 'what-to-learn-first-cloud-infrastructure',
    category: 'Cloud Infrastructure',
    badge: 'Cloud infrastructure path',
    title: 'What should a beginner learn first in cloud infrastructure?',
    description: 'A practical cloud infrastructure learning path for beginners: identity, networking, compute, storage, monitoring, cost, and one portfolio project.',
    answer: 'A beginner should learn cloud infrastructure by understanding six categories first: identity, networking, compute, storage, monitoring, and cost. After that, map AWS services into those categories and build one small project that proves the concepts.',
    readTime: '8 min read',
    tags: ['Cloud basics', 'AWS fundamentals', 'Portfolio proof'],
    visual: {
      label: 'Cloud first map',
      accent: '#0B6E4F',
      nodes: ['Identity', 'Network', 'Compute', 'Storage', 'Logs', 'Cost']
    },
    sections: [
      ['The beginner mistake', `<p>Most beginners start cloud infrastructure by collecting service names. EC2, S3, Lambda, VPC, IAM, CloudWatch, DynamoDB, Route 53, and on and on. That feels productive because the vocabulary is real, but it does not create understanding by itself.</p><p>The better first move is to learn what problem each infrastructure category solves. Once you understand the category, the service names have a place to land. IAM is not just another AWS acronym. It belongs to identity. VPC is not random. It belongs to networking. CloudWatch is not trivia. It belongs to monitoring and observability.</p>`],
      ['The six categories to learn first', `<div class="article-grid"><div class="article-mini-card"><h3>Identity</h3><p>Who can do what. Learn users, roles, policies, permission boundaries, and why least privilege matters.</p></div><div class="article-mini-card"><h3>Networking</h3><p>What can talk to what. Learn public and private paths, subnets, routing, security groups, and DNS.</p></div><div class="article-mini-card"><h3>Compute</h3><p>Where code runs. Learn servers, containers, functions, scaling, and the tradeoff between control and convenience.</p></div><div class="article-mini-card"><h3>Storage</h3><p>Where data lives. Learn object storage, block storage, databases, backups, retention, and access patterns.</p></div><div class="article-mini-card"><h3>Monitoring</h3><p>How you know what happened. Learn logs, metrics, alerts, dashboards, traces, and incident review.</p></div><div class="article-mini-card"><h3>Cost</h3><p>How you avoid surprise bills. Learn budgets, tags, lifecycle rules, right-sizing, and what makes workloads expensive.</p></div></div>`],
      ['How to connect the map to AWS', `<p>After the category map is clear, AWS services become easier to place. IAM belongs to identity. VPC, subnets, route tables, security groups, and Route 53 belong to networking. EC2, Lambda, ECS, and EKS belong to compute. S3, EBS, EFS, RDS, and DynamoDB belong to storage. CloudWatch and CloudTrail help you understand what happened. AWS Budgets and Cost Explorer help you control spend.</p><p>The point is not to memorize every service. The point is to be able to explain why a service exists, when you would use it, and what risk it introduces.</p>`],
      ['Build one project while learning', `<p>The fastest way to make cloud learning real is to pair the categories with one finished portfolio project. A strong beginner project can be simple: a static site, a contact form architecture plan, a private notes app diagram, or a small serverless API.</p><p>For each project, write down the identity model, network path, compute layer, storage layer, monitoring plan, and cost guardrail. That explanation is often more valuable than a huge project that nobody can understand.</p>`],
      ['Where AI changes the learning path', `<p>AI tools can help explain errors, generate diagrams, review code, and create study drills. They do not remove the need for infrastructure judgment. AI workflows still need permissions, logs, storage, routing, review, and rollback plans.</p><p>That is why cloud infrastructure remains useful even in an AI-heavy world. The prompt may start the workflow, but infrastructure determines whether the workflow is safe, repeatable, and recoverable.</p>`]
    ],
    tool: {
      title: 'Pick your next study move',
      prompt: 'Choose the sentence that sounds most like you.',
      choices: [
        ['I do not know the vocabulary yet', 'Start with the six-category map and build flashcards around problems, not service names.'],
        ['I know some AWS names but cannot explain architecture', 'Draw one project and label identity, networking, compute, storage, monitoring, and cost.'],
        ['I want job proof', 'Build a small portfolio project and write the README like an architecture review.']
      ]
    },
    checklistTitle: 'Cloud beginner checklist',
    checklist: ['I can explain IAM without only saying "permissions."', 'I can describe what a subnet is for.', 'I can choose between a server, container, and function at a beginner level.', 'I can explain object storage versus a database.', 'I know where logs and alerts would live.', 'I know how I would prevent surprise spend.'],
    faqs: [
      ['Should I learn AWS, Azure, or Google Cloud first?', 'Start with one platform deeply enough to build and explain projects. AWS is a strong first choice because the ecosystem is large, but the category map transfers across clouds.'],
      ['Do I need to code before learning cloud infrastructure?', 'You do not need to be an advanced programmer, but basic scripting, command line comfort, and Git will make cloud projects much easier.'],
      ['What is the best first cloud project?', 'A static website with a clear deployment path and a written architecture explanation is a strong first project because it teaches deployment, ownership, DNS, and documentation.']
    ],
    ctaAsset: 'Cloud Infrastructure First Map',
    cta: 'Request the Cloud Infrastructure First Map and use it to turn the six categories into your first clean portfolio project.'
  },
  {
    slug: 'which-aws-certification-should-a-beginner-take-first',
    category: 'AWS Certification Path',
    badge: 'AWS certs',
    title: 'Which AWS certification should a beginner take first?',
    description: 'A beginner-friendly AWS certification path that explains when to start with Cloud Practitioner and when to move toward Solutions Architect Associate.',
    answer: 'Most true beginners should start with AWS Certified Cloud Practitioner. If you already have IT, support, networking, systems, or software experience, study Cloud Practitioner concepts first and then move toward AWS Certified Solutions Architect - Associate.',
    readTime: '9 min read',
    tags: ['AWS certification', 'Cloud Practitioner', 'Solutions Architect'],
    visual: {
      label: 'AWS cert path',
      accent: '#FA9F42',
      nodes: ['Beginner', 'Cloud vocab', 'Project', 'SAA', 'Interview', 'Proof']
    },
    sections: [
      ['The simple answer', `<p>If you are brand new to cloud, AWS Certified Cloud Practitioner is the cleaner first step. AWS describes Cloud Practitioner as a foundational certification for people building high-level understanding of AWS Cloud services and terminology. It is especially useful for people with no prior IT or cloud experience who are switching into cloud or need cloud literacy.</p><p>If you already work in IT, support, networking, systems, or development, you may not need to treat Cloud Practitioner as the final destination. Learn the Cloud Practitioner concepts, then aim at AWS Certified Solutions Architect - Associate when you are ready to reason about secure, resilient, high-performing, and cost-optimized architectures.</p>`],
      ['Choose by background', `<div class="article-grid"><div class="article-mini-card"><h3>Career switcher</h3><p>Start with Cloud Practitioner, then build one simple project so the cert becomes proof instead of trivia.</p></div><div class="article-mini-card"><h3>IT or support</h3><p>Review Cloud Practitioner concepts, then move toward Solutions Architect Associate once architecture questions make sense.</p></div><div class="article-mini-card"><h3>Developer</h3><p>Build while studying. Connect compute, IAM, storage, deployment, and monitoring to a small app.</p></div><div class="article-mini-card"><h3>Student</h3><p>Use the cert for structure, but create notes, diagrams, and project writeups to show how you think.</p></div></div>`],
      ['What the exams are really testing', `<p>Cloud Practitioner is not asking you to design complex architectures. It is asking whether you understand cloud concepts, security and compliance, technology and services, billing, pricing, and support at a foundational level. AWS lists Cloud Practitioner as a 65-question, 90-minute exam on its certification page.</p><p>Solutions Architect Associate is different. AWS says the exam validates the ability to design solutions based on the AWS Well-Architected Framework. The current SAA-C03 guide organizes the exam around secure, resilient, high-performing, and cost-optimized architectures.</p>`],
      ['Do not collect courses forever', `<p>The easiest trap is to watch five courses, start three practice-test subscriptions, and never build anything. Courses can help, but they are not the finish line. Your learning rhythm should include explanation and implementation.</p><p>After every study session, write one plain-English explanation and one project note. For example: "Today I learned why IAM roles are safer than hardcoded keys for workloads." That sentence becomes interview fuel later.</p>`],
      ['A 30-day beginner rhythm', `<p>Days 1-7: learn cloud concepts, the shared responsibility model, regions, Availability Zones, and core vocabulary. Days 8-14: learn IAM, networking basics, compute, storage, and databases. Days 15-21: learn monitoring, billing, support, and common architectures. Days 22-30: take practice questions, review misses, and connect the concepts to a small project.</p><p>If you are moving toward Solutions Architect Associate, extend the rhythm with hands-on architecture practice. Spend extra time on secure design, resilient design, performance choices, and cost tradeoffs.</p>`]
    ],
    tool: {
      title: 'Which cert path sounds like you?',
      prompt: 'Pick the closest profile.',
      choices: [
        ['New to tech', 'Start with Cloud Practitioner plus a small project. Your goal is vocabulary, confidence, and proof of follow-through.'],
        ['IT background', 'Review Cloud Practitioner concepts, then build toward Solutions Architect Associate. Your advantage is troubleshooting context.'],
        ['Developer', 'Study architecture while building. Connect IAM, compute, storage, deployment, and monitoring to one app.']
      ]
    },
    checklistTitle: 'Before you schedule an exam',
    checklist: ['I know what the exam is intended to validate.', 'I can explain the shared responsibility model.', 'I can map services into categories instead of memorizing names only.', 'I have taken practice questions and reviewed missed concepts.', 'I have one project or diagram that proves the study was useful.'],
    faqs: [
      ['Is Cloud Practitioner worth it?', 'It is worth it for true beginners, career switchers, and people who need cloud vocabulary. It is less useful if you already have strong cloud experience and need architecture proof.'],
      ['Can I skip Cloud Practitioner?', 'Yes, some people with IT or development experience can study the concepts and move toward Solutions Architect Associate. The key is not skipping the fundamentals.'],
      ['What should I build while studying?', 'Build a small static site, serverless contact form concept, or architecture diagram. Keep it simple enough to finish and explain.']
    ],
    sources: [
      ['AWS Certified Cloud Practitioner', 'https://aws.amazon.com/certification/certified-cloud-practitioner/'],
      ['AWS Cloud Practitioner exam guide CLF-C02', 'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html'],
      ['AWS Solutions Architect Associate exam guide SAA-C03', 'https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html']
    ],
    ctaAsset: 'AWS Certification Study Map',
    cta: 'Request the AWS Certification Study Map to choose a path, plan your first 30 days, and pair the cert with portfolio proof.'
  },
  {
    slug: 'what-is-an-ai-agent-and-what-infrastructure-does-it-need',
    category: 'AI Agents',
    badge: 'AI agents',
    title: 'What is an AI agent, and what infrastructure does it need?',
    description: 'A plain-English explanation of AI agents and the infrastructure they need: context, tools, permissions, storage, logs, approvals, and recovery.',
    answer: 'An AI agent is a workflow that can use context and tools to complete a defined job. It needs infrastructure for identity, permissions, input and output routing, storage, logs, approval gates, recovery, and cost control.',
    readTime: '8 min read',
    tags: ['AI agents', 'Infrastructure', 'Human approval'],
    visual: {
      label: 'Agent system map',
      accent: '#721817',
      nodes: ['Goal', 'Context', 'Tools', 'Approvals', 'Logs', 'Done']
    },
    sections: [
      ['Agent vs chatbot', `<p>A chatbot mainly responds. An agent does work inside boundaries. That difference matters because work has consequences. If an AI assistant is only explaining a concept, the risk is mostly accuracy. If an agent can touch files, send messages, update records, run commands, or trigger workflows, the risk becomes operational.</p><p>A useful agent needs a job, a lane, tool access, context, approval gates, and verification. Without those pieces, it is just a powerful autocomplete system wandering around your workspace.</p>`],
      ['The infrastructure behind the agent', `<div class="article-grid"><div class="article-mini-card"><h3>Identity</h3><p>What account, role, or permission scope does the agent use?</p></div><div class="article-mini-card"><h3>Context</h3><p>What source material is allowed, trusted, and current?</p></div><div class="article-mini-card"><h3>Tools</h3><p>What can the agent read, write, run, browse, or call?</p></div><div class="article-mini-card"><h3>Storage</h3><p>Where do inputs, outputs, logs, drafts, and handoff notes live?</p></div><div class="article-mini-card"><h3>Approvals</h3><p>What must a human approve before impact?</p></div><div class="article-mini-card"><h3>Observability</h3><p>How do you know what happened and why?</p></div></div>`],
      ['Approval gates are not optional', `<p>Some work should stop for human approval every time. DNS changes, payment changes, live backend storage, outbound messages, deletion, credential handling, and public publishing all deserve a clear gate.</p><p>This does not make the system slower in a bad way. It makes the system usable. A good agent should move fast where the work is reversible and pause where the impact is real.</p>`],
      ['A simple first agent workflow', `<p>Start with a research and draft workflow. Give the agent a narrow question, approved source folders, a target output path, and a definition of done. Ask it to produce a draft, list assumptions, and record what still needs review.</p><p>That kind of workflow builds trust. Once the agent proves it can handle context, structure, and verification, you can gradually add more tools.</p>`],
      ['What infrastructure experts notice first', `<p>Infrastructure people do not only ask "can the model do it?" They ask: what identity is being used, where the logs go, what data is exposed, what happens when it fails, how it recovers, and who approves the risky step.</p><p>That is the differentiator. Agent work is not just prompt craft. It is systems design.</p>`]
    ],
    tool: {
      title: 'Is this ready to become an agent?',
      prompt: 'Pick the current state of your idea.',
      choices: [
        ['I only have a vague goal', 'Keep it as a prompt or draft task. Define the lane before giving tools.'],
        ['I know the inputs and output', 'Create an agent brief with source files, output path, and definition of done.'],
        ['It touches real systems', 'Add approval gates, logs, rollback notes, and a human review step before execution.']
      ]
    },
    checklistTitle: 'Agent readiness checklist',
    checklist: ['The agent has one clear job.', 'The allowed files and tools are named.', 'The forbidden actions are named.', 'Approval gates are written down.', 'There is a log or handoff note.', 'There is a way to verify the final output.'],
    faqs: [
      ['Is an AI agent the same as automation?', 'Not exactly. Automation follows predefined steps. An agent can use context and tools to decide how to complete a bounded job, which makes boundaries and review more important.'],
      ['What is the safest first agent?', 'A draft or research agent that writes to a local output folder and cannot send, delete, publish, or change production systems.'],
      ['Why does an agent need infrastructure?', 'Because real work needs identity, storage, logs, permissions, approvals, and recovery. The model is only one part of the system.']
    ],
    ctaAsset: 'AI Agent Builder Checklist',
    cta: 'Request the AI Agent Builder Checklist before handing tools to any workflow that can touch real systems.'
  },
  {
    slug: 'what-should-a-cloud-portfolio-project-include',
    category: 'Portfolio Projects',
    badge: 'Portfolio projects',
    title: 'What should a cloud portfolio project include?',
    description: 'A practical cloud portfolio project checklist covering architecture, deployment, security, cost, monitoring, documentation, and interview storytelling.',
    answer: 'A cloud portfolio project should include a working artifact, a clear architecture diagram, a deployment path, security decisions, cost guardrails, monitoring notes, a README, and a short explanation of what you would improve next.',
    readTime: '8 min read',
    tags: ['Portfolio', 'Cloud projects', 'Career proof'],
    visual: {
      label: 'Portfolio proof stack',
      accent: '#2B4162',
      nodes: ['Repo', 'Diagram', 'Deploy', 'Security', 'Cost', 'Story']
    },
    sections: [
      ['The goal is proof of thinking', `<p>A portfolio project is not only a demo. It is evidence of how you think. A hiring manager, mentor, client, or collaborator should be able to look at the project and understand the problem, the architecture, the tradeoffs, and the next improvement.</p><p>That means a small complete project is usually better than a big unfinished one. The best beginner cloud projects are scoped enough to finish and clear enough to explain.</p>`],
      ['The seven parts of a strong project', `<div class="article-grid"><div class="article-mini-card"><h3>Working artifact</h3><p>A live page, app, API, dashboard, or demo people can inspect.</p></div><div class="article-mini-card"><h3>Repo</h3><p>Clean code structure, meaningful commits, and setup instructions.</p></div><div class="article-mini-card"><h3>Architecture diagram</h3><p>A simple picture showing users, DNS, hosting, compute, storage, and data flow.</p></div><div class="article-mini-card"><h3>Security notes</h3><p>Identity, access, secrets, and what you intentionally kept private.</p></div><div class="article-mini-card"><h3>Cost notes</h3><p>Expected cost, free-tier assumptions, and guardrails.</p></div><div class="article-mini-card"><h3>Monitoring notes</h3><p>Logs, alerts, error handling, and how you would troubleshoot.</p></div></div>`],
      ['A beginner-friendly project path', `<p>Start with a static website because it teaches ownership, deployment, file structure, links, assets, Git, and publishing without forcing you into unnecessary backend complexity. Then add an architecture plan for a form or data capture system. That lets you show backend thinking without paying for infrastructure you do not need yet.</p><p>After that, add a README that explains why you chose static hosting first, what the future backend would look like, and what security gates would be required before collecting real data.</p>`],
      ['What to write in the README', `<p>Your README should answer five questions: What problem does this solve? How is it architected? How do I run or view it? What tradeoffs did you make? What would you improve next?</p><p>Do not write the README like a school assignment. Write it like an engineer explaining the project to a teammate who has ten minutes to understand the system.</p>`],
      ['How to talk about it in interviews', `<p>Use the project to show judgment. Say what you kept simple, what you made secure, what you did not build yet, and why. That is more impressive than pretending every beginner project is a production-grade platform.</p><p>A strong sentence sounds like: "I chose GitHub Pages for this version because the site is static, the operating cost is zero, and I wanted to separate the public page from any future lead-capture backend."</p>`]
    ],
    tool: {
      title: 'Portfolio project picker',
      prompt: 'What do you need to prove first?',
      choices: [
        ['I can deploy', 'Build a static site with a clean README and GitHub Pages deployment.'],
        ['I understand architecture', 'Create a diagram and decision log for a static site plus future backend form capture.'],
        ['I can troubleshoot', 'Add logs, failure scenarios, and a support-style runbook to the project.']
      ]
    },
    checklistTitle: 'Portfolio proof checklist',
    checklist: ['The project has a live or viewable artifact.', 'The README explains the problem and architecture.', 'There is a diagram or clear system map.', 'Security decisions are written down.', 'Cost assumptions are written down.', 'Future improvements are honest and specific.'],
    faqs: [
      ['Does a portfolio project need a database?', 'No. A database is useful only when the project needs persistent dynamic data. A static-first project can still demonstrate strong cloud thinking.'],
      ['How complex should the first project be?', 'Simple enough to finish, polished enough to explain, and structured enough to show judgment.'],
      ['Should I include screenshots?', 'Yes. Screenshots help reviewers understand the result quickly, especially if they do not run the project locally.']
    ],
    ctaAsset: 'Cloud Portfolio Project Pack',
    cta: 'Request the Cloud Portfolio Project Pack for project ideas, README structure, and interview talking points.'
  },
  {
    slug: 'how-creators-use-static-websites-to-avoid-platform-lock-in',
    category: 'Creator Infrastructure',
    badge: 'Static web strategy',
    title: 'How can creators use static websites to avoid platform lock-in?',
    description: 'A creator-owned static website strategy for reducing platform lock-in, building an email list, publishing durable resources, and keeping operating costs low.',
    answer: 'Creators can avoid platform lock-in by making a static website the home base, using social platforms for distribution, collecting an owned audience through email or inquiry forms, and keeping content portable in plain files.',
    readTime: '8 min read',
    tags: ['Static websites', 'Creator ownership', 'GitHub Pages'],
    visual: {
      label: 'Creator-owned web',
      accent: '#0B6E4F',
      nodes: ['Website', 'Articles', 'Guides', 'Email', 'Social', 'Archive']
    },
    sections: [
      ['The platform lock-in problem', `<p>Social platforms are useful, but they are not headquarters. Algorithms change. Links get buried. Accounts get restricted. Video formats shift. A creator who only builds on rented platforms is always one policy change away from losing reach.</p><p>A static website gives the creator a durable home base. It can host articles, guides, portfolios, contact paths, resource pages, and a clear brand story without requiring a monthly backend bill.</p>`],
      ['What a static site should own', `<div class="article-grid"><div class="article-mini-card"><h3>Positioning</h3><p>Who you help, what you explain, and why people should trust you.</p></div><div class="article-mini-card"><h3>Articles</h3><p>Durable answers to questions your audience is already asking.</p></div><div class="article-mini-card"><h3>Resources</h3><p>Guides, checklists, templates, and waitlists that turn attention into relationship.</p></div><div class="article-mini-card"><h3>Contact path</h3><p>A form or inquiry flow that captures intent without forcing a social DM.</p></div></div>`],
      ['Use social as distribution', `<p>TikTok, YouTube, Instagram, LinkedIn, and other channels should point back to owned resources. A short video can introduce the idea. The article can hold the full explanation. The guide can capture the deeper intent.</p><p>This lets each platform do what it does best. Social creates discovery. The website creates memory.</p>`],
      ['Why static first works', `<p>Static sites are fast, simple, cheap to host, and easy to version. For many creators, the early business problem is not database scale. It is clarity, consistency, portability, and trust.</p><p>You can still add backend services later. The trick is not adding them before the use case earns the complexity.</p>`],
      ['The local-first capture pattern', `<p>A static website can present the form and route the inquiry while a local Mac mini or approved backend stores CSV records. That keeps the public site simple and lets the creator decide when a real hosted database is worth it.</p><p>The approval gate matters. Do not expose private machines or storage paths publicly without a secure access plan.</p>`]
    ],
    tool: {
      title: 'Creator site priority picker',
      prompt: 'What is the weakest part of your creator system?',
      choices: [
        ['People cannot understand what I do', 'Fix the homepage positioning and publish three durable answer articles.'],
        ['People like posts but do not convert', 'Create a resource ladder: article, guide, waitlist, inquiry form.'],
        ['Everything is scattered', 'Move source drafts, guides, and links into a portable file structure.']
      ]
    },
    checklistTitle: 'Static creator hub checklist',
    checklist: ['The homepage explains who the brand helps.', 'The site has at least six durable answer articles.', 'The resource section has request-access CTAs.', 'The form captures intent or opens a reliable fallback.', 'Social bios point to the owned site.', 'Drafts and outputs are saved as portable files.'],
    faqs: [
      ['Is a static website enough for a creator business?', 'For many early creator systems, yes. Static sites are strong for brand, content, guides, and inquiry flows. Add dynamic services when the workflow proves it needs them.'],
      ['What should live on social instead?', 'Short discovery content, behind-the-scenes clips, conversations, and distribution. Keep durable resources on the owned site.'],
      ['Can a static site collect leads?', 'It can route inquiries through email, form providers, or an approved local capture endpoint. The storage decision should be intentional.']
    ],
    ctaAsset: 'Codex Content-engine Workflow',
    cta: 'Request the Codex Content-engine Workflow to turn one idea into articles, scripts, posts, and guide assets.'
  },
  {
    slug: 'how-to-use-codex-safely-for-real-work',
    category: 'Codex Workflows',
    badge: 'Codex operations',
    title: 'How do you use Codex safely for real work?',
    description: 'A practical Codex workflow for real projects: define the lane, read the repo, use approval gates, verify in browser, commit intentionally, and keep a status trail.',
    answer: 'Use Codex safely by giving it a clear lane, trusted context, scoped files, approval gates, verification steps, and a definition of done. Let it move quickly on reversible drafting and code work, but stop for human approval before high-impact actions.',
    readTime: '9 min read',
    tags: ['Codex', 'AI workflows', 'Safe automation'],
    visual: {
      label: 'Safe Codex loop',
      accent: '#2B4162',
      nodes: ['Scope', 'Read', 'Build', 'Verify', 'Commit', 'Handoff']
    },
    sections: [
      ['Codex is strongest with boundaries', `<p>Codex gets better when the work is specific. "Build my site" is too broad. "Update the article section, preserve the existing design system, add six launch articles, verify links, and do not touch DNS" is useful.</p><p>The better the lane, the safer the execution. A lane tells Codex what brand it owns, which files matter, where outputs belong, what approval gates exist, and what done means.</p>`],
      ['The safe-work loop', `<div class="article-grid"><div class="article-mini-card"><h3>1. Scope</h3><p>Name the brand, repo, files, output path, and approval gates.</p></div><div class="article-mini-card"><h3>2. Read</h3><p>Inspect the current code, style, docs, and existing patterns before editing.</p></div><div class="article-mini-card"><h3>3. Build</h3><p>Make the smallest coherent change that satisfies the task.</p></div><div class="article-mini-card"><h3>4. Verify</h3><p>Run local checks, inspect the browser, and test the user path.</p></div><div class="article-mini-card"><h3>5. Commit</h3><p>Commit only scoped work with a clear message.</p></div><div class="article-mini-card"><h3>6. Handoff</h3><p>Record what changed, what was verified, and what still needs approval.</p></div></div>`],
      ['Approval gates make automation practical', `<p>Approval gates are not a lack of trust. They are how real systems stay useful. Codex can draft content, refactor frontend code, create local runbooks, build static pages, and verify previews. It should stop before sending messages, changing DNS, exposing storage, charging payments, deleting data, or publishing anything that has not been approved.</p><p>That split lets the system move quickly while keeping Josh in control of risk.</p>`],
      ['Why infrastructure experience helps', `<p>People with infrastructure experience naturally ask the right questions: What can this access? What writes happen? Where are logs? What breaks if the machine sleeps? What is the rollback plan? What is the cost?</p><p>That is why Codex is not only a coding tool here. It becomes part of an operating system for projects.</p>`],
      ['A reusable prompt for real work', `<p>Use this when starting a task: "You own the JWTechDev.ai lane. Read the repo before editing. Preserve existing design patterns. Do not delete files. Do not touch DNS, backend exposure, payment, outbound sends, or public storage without approval. Implement the smallest coherent change, verify it locally, update durable notes, then summarize changed files and blockers."</p>`]
    ],
    tool: {
      title: 'Safe Codex lane picker',
      prompt: 'What kind of work are you about to ask Codex to do?',
      choices: [
        ['Drafting or content', 'Let Codex draft and organize freely, then review for voice, facts, and publish readiness.'],
        ['Frontend/code change', 'Have Codex read the repo, patch scoped files, run a preview, and verify the interaction path.'],
        ['High-impact system action', 'Require approval immediately before DNS, payments, storage exposure, deletion, or outbound sends.']
      ]
    },
    checklistTitle: 'Codex safety checklist',
    checklist: ['The lane and brand are named.', 'The source files are named or discoverable.', 'Approval gates are explicit.', 'The output path is clear.', 'Verification is defined.', 'The final handoff includes changed files and blockers.'],
    faqs: [
      ['Can Codex work overnight?', 'It can work through scoped, reversible tasks and prepare drafts, code, and runbooks. High-impact actions should remain gated for human approval.'],
      ['Should Codex create separate agents?', 'For multi-step work, yes. Split by function, then run an integration wave to merge and verify the outputs.'],
      ['What is the biggest risk?', 'Vague authority. The fix is boundaries: allowed files, forbidden actions, approval gates, and clear verification.']
    ],
    ctaAsset: 'Codex Workspace Field Guide',
    cta: 'Request the Codex Workspace Field Guide and AI Agent Builder Checklist to set up safe AI-assisted project work.'
  }
];

function visualSvg(article) {
  const nodes = article.visual.nodes.map((node, index) => {
    const x = 120 + (index % 3) * 250;
    const y = index < 3 ? 170 : 350;
    return `<g><rect x="${x - 82}" y="${y - 42}" width="164" height="84" rx="14" fill="rgba(255,255,255,.92)" stroke="rgba(255,255,255,.55)"/><text x="${x}" y="${y + 6}" text-anchor="middle" font-family="Roboto, Arial, sans-serif" font-size="22" font-weight="900" fill="#0e0e11">${esc(node)}</text></g>`;
  }).join('');
  const lines = `<path d="M202 170h86M452 170h86M620 218v84M538 350h-86M288 350h-86" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="5" stroke-linecap="round"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" role="img" aria-labelledby="title desc">
  <title id="title">${esc(article.visual.label)}</title>
  <desc id="desc">JWTechDev.ai visual diagram for ${esc(article.title)}</desc>
  <rect width="1200" height="675" fill="#0e0e11"/>
  <circle cx="1030" cy="120" r="240" fill="${article.visual.accent}" opacity=".35"/>
  <circle cx="80" cy="620" r="260" fill="#FA9F42" opacity=".18"/>
  <path d="M0 120h1200M0 240h1200M0 360h1200M0 480h1200M240 0v675M480 0v675M720 0v675M960 0v675" stroke="rgba(255,255,255,.055)" stroke-width="2"/>
  <text x="72" y="88" font-family="Roboto Condensed, Arial, sans-serif" font-size="58" font-weight="900" fill="#fff">${esc(article.visual.label)}</text>
  <text x="74" y="126" font-family="Roboto, Arial, sans-serif" font-size="24" font-weight="700" fill="rgba(255,255,255,.72)">JWTechDev.ai practical systems map</text>
  ${lines}
  ${nodes}
  <rect x="72" y="554" width="240" height="58" rx="29" fill="${article.visual.accent}"/>
  <text x="192" y="592" text-anchor="middle" font-family="Roboto, Arial, sans-serif" font-size="22" font-weight="900" fill="#fff">clear over clever</text>
</svg>`;
}

function schema(article) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: published,
    dateModified: published,
    author: { '@type': 'Person', name: 'Joshua Walker', url: site },
    publisher: {
      '@type': 'Organization',
      name: 'JWTechDev.ai',
      logo: { '@type': 'ImageObject', url: `${site}/assets/jwtechdev-logo.png` }
    },
    image: `${site}/assets/articles/${article.slug}.svg`,
    mainEntityOfPage: `${site}/articles/${article.slug}.html`
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer }
    }))
  };
  return `<script type="application/ld+json">${JSON.stringify(articleSchema)}</script>\n  <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`;
}

function articleHtml(article) {
  const toc = [
    ['quick-answer', 'Quick answer'],
    ...article.sections.map(([title]) => [slugTitle(title), title]),
    ['checklist', article.checklistTitle],
    ['faq', 'FAQ']
  ];
  const sections = article.sections.map(([title, body]) => `<section id="${slugTitle(title)}"><h2>${esc(title)}</h2>${body}</section>`).join('\n          ');
  const sourceBlock = article.sources ? `<section><h2>Sources checked</h2><ul>${article.sources.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noopener">${esc(label)}</a></li>`).join('')}</ul></section>` : '';
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(article.title)} | JWTechDev.ai</title>
  <meta name="description" content="${esc(article.description)}" />
  <meta property="og:title" content="${esc(article.title)}" />
  <meta property="og:description" content="${esc(article.description)}" />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="${site}/assets/articles/${article.slug}.svg" />
  <link rel="stylesheet" href="../css/tokens.css" />
  <link rel="stylesheet" href="../css/site.css" />
  ${schema(article)}
</head>
<body>
  <main class="article-shell">
    <a class="link-arrow" href="./">All articles <span aria-hidden="true">→</span></a>
    <p class="eyebrow">${esc(article.category)}</p>
    <article class="article-body">
      <h1>${esc(article.title)}</h1>
      <p class="section__lede">${esc(article.description)}</p>
      <div class="article-kicker">${article.tags.map((tag) => `<span>${esc(tag)}</span>`).join('')}<span>${article.readTime}</span></div>
      <figure class="article-hero">
        <img src="../assets/articles/${article.slug}.svg" alt="${esc(article.visual.label)} diagram for ${esc(article.title)}" />
        <figcaption class="article-meta"><span>Published ${published}</span><span>By Joshua Walker</span><span>JWTechDev.ai</span></figcaption>
      </figure>
      <div class="article-layout">
        <nav class="article-toc" aria-label="Article contents">
          <strong>In this article</strong>
          ${toc.map(([id, label]) => `<a href="#${id}">${esc(label)}</a>`).join('\n          ')}
        </nav>
        <div>
          <section class="quick-answer" id="quick-answer"><h2>Quick answer</h2><p>${esc(article.answer)}</p></section>
          ${sections}
          <section class="article-tool" data-choice-tool>
            <h2>${esc(article.tool.title)}</h2>
            <p>${esc(article.tool.prompt)}</p>
            <div class="article-kicker">${article.tool.choices.map(([label, result]) => `<button type="button" data-result="${esc(result)}">${esc(label)}</button>`).join('')}</div>
            <div class="tool-result" aria-live="polite">Choose one option to get a suggested next step.</div>
          </section>
          <section class="article-checklist" id="checklist" data-checklist>
            <h2>${esc(article.checklistTitle)}</h2>
            ${article.checklist.map((item, index) => `<label><input type="checkbox" value="${index}"><span>${esc(item)}</span></label>`).join('\n            ')}
            <span class="check-progress" aria-live="polite">0 of ${article.checklist.length} checked</span>
          </section>
          ${sourceBlock}
          <section class="faq" id="faq">
            <h2>FAQ</h2>
            ${article.faqs.map(([question, answer]) => `<details><summary>${esc(question)}</summary><p>${esc(answer)}</p></details>`).join('\n            ')}
          </section>
          <section class="article-cta">
            <h2>Want the working resource?</h2>
            <p>${esc(article.cta)}</p>
            <a class="btn btn--primary btn--lg" href="../?interest=${encodeURIComponent('Study guides & resources')}&asset=${encodeURIComponent(article.ctaAsset || article.title)}#connect">Request access</a>
          </section>
        </div>
      </div>
    </article>
  </main>
  <script src="../js/article.js"></script>
</body>
</html>`;
}

function indexHtml() {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>JWTechDev.ai Articles</title>
  <meta name="description" content="Plain-English cloud infrastructure, AI agent, AWS certification, Codex workflow, portfolio, and creator-owned web strategy articles from JWTechDev.ai." />
  <link rel="stylesheet" href="../css/tokens.css" />
  <link rel="stylesheet" href="../css/site.css" />
</head>
<body>
  <main class="article-shell">
    <a class="link-arrow" href="../">Back to JWTechDev.ai <span aria-hidden="true">→</span></a>
    <p class="eyebrow">Learning Library</p>
    <h1 class="section__title">Answers built for people who want the tech to finally make sense.</h1>
    <p class="section__lede">The launch article cluster turns JWTechDev.ai into a durable knowledge base: cloud basics, AWS cert paths, AI agent infrastructure, portfolio proof, static-site ownership, and safe Codex workflows.</p>
    <div class="aeo-grid article-list">
      ${articles.map((article) => `<article class="aeo-card">
        <span class="badge badge--green">${esc(article.badge)}</span>
        <h2>${esc(article.title)}</h2>
        <p>${esc(article.answer)}</p>
        <a href="${article.slug}.html">Read article -></a>
      </article>`).join('\n      ')}
    </div>
  </main>
  <script src="../js/article.js"></script>
</body>
</html>`;
}

await mkdir(outDir, { recursive: true });
await mkdir(assetDir, { recursive: true });

await Promise.all(articles.flatMap((article) => [
  writeFile(new URL(`${article.slug}.html`, outDir), articleHtml(article)),
  writeFile(new URL(`${article.slug}.svg`, assetDir), visualSvg(article))
]));
await writeFile(new URL('index.html', outDir), indexHtml());
