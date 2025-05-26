export function handleDragStart(e) {
  const shipContainer = e.target.closest(".ship-container");
  if (!shipContainer) {
    return;
  }
  shipContainer.style.opacity = 0.4;
}

export function handleDragEnd(e) {
  const shipContainer = e.target.closest(".ship-container");
  if (!shipContainer) {
    return;
  }
  shipContainer.style.opacity = 1;
}

export function handleDragOver(e) {
  console.log(e);
}
