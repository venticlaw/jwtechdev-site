(function () {
  const exportButton = document.querySelector("#exportPostPackButton");
  const exportStatus = document.querySelector("#exportStatus");

  if (!exportButton || !exportStatus) return;

  const slug = "dragon-ball-z-fans-power-scaling-checklist";
  const cardSize = { width: 1080, height: 1350 };
  const caption =
    "Dragon Ball Z fans, what power-scaling argument should be retired immediately? Keep it funny. Keep it specific. Bring your fake math.";
  const hashtags = ["#anime", "#animememes", "#fandom", "#powerscaling"];
  const altText = [
    "A rights-safe Dragon Ball Z fandom carousel cover with original orange and blue energy-inspired shapes, character-coded chips for Goku, Vegeta, and Frieza, and text about power-scaling debates.",
    "A scouter-style debate meter card with original charts ranking Goku casual, Vegeta committed, and Frieza-level lost fan math.",
    "A cream checklist card with original orange orb symbols and rules for Dragon Ball Z power-scaling comment sections.",
    "A receipt-style card listing the cost of a Dragon Ball Z fan debate, with original villain badges for Frieza, Cell, and Buu.",
    "A debate prompt card asking which Dragon Ball Z power-scaling argument should be banned, with original aura dots and four choices."
  ];

  const rightsChecklist = [
    "Uses original layout, typography, abstract shapes, and CSS symbols.",
    "Does not include official screenshots, clips, logos, manga panels, or character art.",
    "Uses character names as fandom commentary/parody context only.",
    "Does not claim affiliation with Dragon Ball, Toei Animation, Shueisha, Akira Toriyama, or any rights holder.",
    "Manual upload only. No automated social posting is included."
  ];

  const exportOverrides = `
    * { box-sizing: border-box; }
    body { margin: 0; }
    .export-root {
      width: ${cardSize.width}px;
      height: ${cardSize.height}px;
      overflow: hidden;
      background: #f7f8f4;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    .export-root .post-card {
      width: ${cardSize.width}px;
      height: ${cardSize.height}px;
      min-height: 0;
      aspect-ratio: auto;
      border-radius: 0;
      border: 0;
      box-shadow: none;
      padding: 64px;
      gap: 44px;
    }
    .export-root .post-top {
      font-size: 24px;
    }
    .export-root .post-card h2 {
      font-size: 92px;
      line-height: 0.94;
    }
    .export-root .slide-chart h2,
    .export-root .slide-cta h2 {
      font-size: 76px;
    }
    .export-root .kicker,
    .export-root .character-chip,
    .export-root .stamp-row span,
    .export-root .choice-grid span,
    .export-root .meter-list,
    .export-root .slide-rules ol,
    .export-root .slide-cta p,
    .export-root .receipt {
      font-size: 34px;
    }
    .export-root .stamp-row span,
    .export-root .character-chip,
    .export-root .choice-grid span {
      padding: 20px 24px;
    }
    .export-root .character-chip i {
      width: 42px;
      height: 42px;
      box-shadow: inset 0 -10px 0 var(--saiyan-blue);
    }
    .export-root .symbol-row span {
      width: 82px;
      height: 82px;
      font-size: 36px;
    }
    .export-root .scouter-line {
      padding: 30px 34px;
      font-size: 34px;
    }
    .export-root .scouter-line b {
      font-size: 52px;
    }
    .export-root .meter-list {
      gap: 32px;
    }
    .export-root .meter-list div {
      gap: 16px;
    }
    .export-root .meter-list i {
      height: 34px;
    }
    .export-root .receipt {
      padding: 42px;
      gap: 28px;
    }
    .export-root .receipt h2 {
      font-size: 72px;
    }
    .export-root .receipt strong {
      font-size: 44px;
    }
    .export-root .villain-stack span {
      padding: 20px 24px;
      font-size: 28px;
    }
    .export-root .aura-dot {
      width: 52px;
      height: 52px;
    }
  `;

  const escapeXml = (value) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");

  const downloadBlob = (filename, blob) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const makeCardSvg = (card, cssText) => {
    const clonedCard = card.cloneNode(true);
    clonedCard.querySelectorAll("[aria-hidden]").forEach((node) => node.removeAttribute("aria-hidden"));
    const html = `
      <div xmlns="http://www.w3.org/1999/xhtml" class="export-root">
        <style>${escapeXml(cssText + exportOverrides)}</style>
        ${clonedCard.outerHTML}
      </div>
    `;

    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${cardSize.width}" height="${cardSize.height}" viewBox="0 0 ${cardSize.width} ${cardSize.height}">
        <foreignObject width="${cardSize.width}" height="${cardSize.height}">
          ${html}
        </foreignObject>
      </svg>
    `.trim();
  };

  const makeManifest = () => ({
    generatedAt: new Date().toISOString(),
    status: "manual-upload-ready",
    title: "Dragon Ball Z fans before the power-scaling debate starts",
    format: "5-card carousel",
    assetType: "SVG image assets",
    caption,
    hashtags,
    altText,
    rightsChecklist,
    files: [
      "01-dragon-ball-z-fans-cover.svg",
      "02-dragon-ball-z-fans-debate-meter.svg",
      "03-dragon-ball-z-fans-checklist.svg",
      "04-dragon-ball-z-fans-power-receipt.svg",
      "05-dragon-ball-z-fans-debate-prompt.svg",
      `${slug}-manifest.json`,
      `${slug}-posting-checklist.txt`
    ]
  });

  const makeChecklist = () => [
    "Dragon Ball Z Fans Power-Scaling Checklist - Manual Posting Pack",
    "",
    "Caption:",
    caption,
    "",
    "Hashtags:",
    hashtags.join(" "),
    "",
    "Alt text:",
    ...altText.map((text, index) => `${index + 1}. ${text}`),
    "",
    "Rights-safe checklist:",
    ...rightsChecklist.map((item) => `- ${item}`),
    "",
    "Posting workflow:",
    "- Review every card visually before upload.",
    "- Upload manually or through an approved scheduler only.",
    "- Do not claim official affiliation.",
    "- Track performance before generating variants."
  ].join("\n");

  exportButton.addEventListener("click", async () => {
    exportButton.disabled = true;
    exportStatus.textContent = "Building pack...";

    try {
      const cssText = await fetch("./post-example.css").then((response) => response.text());
      const cards = [...document.querySelectorAll(".post-card")];
      const filenames = [
        "01-dragon-ball-z-fans-cover.svg",
        "02-dragon-ball-z-fans-debate-meter.svg",
        "03-dragon-ball-z-fans-checklist.svg",
        "04-dragon-ball-z-fans-power-receipt.svg",
        "05-dragon-ball-z-fans-debate-prompt.svg"
      ];

      cards.forEach((card, index) => {
        const svg = makeCardSvg(card, cssText);
        downloadBlob(filenames[index], new Blob([svg], { type: "image/svg+xml" }));
      });

      downloadBlob(
        `${slug}-manifest.json`,
        new Blob([JSON.stringify(makeManifest(), null, 2)], { type: "application/json" })
      );
      downloadBlob(`${slug}-posting-checklist.txt`, new Blob([makeChecklist()], { type: "text/plain" }));
      exportStatus.textContent = "Downloaded 7 files";
    } catch (error) {
      exportStatus.textContent = "Export failed";
      console.error(error);
    } finally {
      exportButton.disabled = false;
    }
  });
})();
