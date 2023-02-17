const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    panelRemove();
    question.classList.add("active");
  });
});

function panelRemove() {
  questions.forEach((question) => {
    question.classList.remove("active");
  });
}
