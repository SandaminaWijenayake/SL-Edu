const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panelRemove();
    panel.classList.add("active");
  });
});

function panelRemove() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
