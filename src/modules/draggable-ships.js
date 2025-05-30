let draggedShip = null;

export function handleDragStart(e) {
  const shipContainer = e.target.closest(".ship-container");
  if (!shipContainer) {
    return;
  }
  draggedShip = shipContainer;
  shipContainer.style.opacity = 0.4;
}

export function handleDragEnd(e) {
  const shipContainer = e.target.closest(".ship-container");
  if (!shipContainer) {
    return;
  }
  shipContainer.style.opacity = 1;
  draggedShip = null;
}

export function handleDragOver(e) {
  e.preventDefault();
  return false;
}

export function handleDragEnter(e) {
  e.target.classList.add("over");
}

export function handleDragLeave(e) {
  e.target.classList.remove("over");
}

export function handleDrop(e) {
  e.preventDefault();
  const dropCell = e.target.closest(".col");
  if (!dropCell || !draggedShip) {
    return;
  }

  const board = dropCell.closest(".player");
  const shipLength = parseInt(draggedShip.getAttribute("data-length"));
  
  const x = dropCell.getAttribute("data-x");
  const y = dropCell.getAttribute("data-y");

  dropCell.appendChild(draggedShip);
  dropCell.classList.add("ship");

  for (let i = 0; i < shipLength; i++) {
    const targetCell = board.querySelector(`.col[data-x="${x}"][data-y="${y + i}"]`);
    targetCell.classList.add("ship");
  }
}
