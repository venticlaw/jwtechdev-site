document.querySelectorAll('[data-checklist]').forEach((list, index) => {
  const key = `jw-article-checklist-${location.pathname}-${index}`;
  const boxes = Array.from(list.querySelectorAll('input[type="checkbox"]'));
  const progress = list.querySelector('.check-progress');
  const saved = JSON.parse(localStorage.getItem(key) || '[]');
  boxes.forEach((box, boxIndex) => {
    box.checked = saved.includes(boxIndex);
  });
  const update = () => {
    const checked = boxes.reduce((count, box) => count + (box.checked ? 1 : 0), 0);
    if (progress) progress.textContent = `${checked} of ${boxes.length} checked`;
    localStorage.setItem(key, JSON.stringify(boxes.flatMap((box, boxIndex) => box.checked ? [boxIndex] : [])));
  };
  boxes.forEach((box) => box.addEventListener('change', update));
  update();
});

document.querySelectorAll('[data-choice-tool]').forEach((tool) => {
  const buttons = Array.from(tool.querySelectorAll('button[data-result]'));
  const result = tool.querySelector('.tool-result');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.toggle('is-active', item === button));
      if (result) result.textContent = button.dataset.result;
    });
  });
});
