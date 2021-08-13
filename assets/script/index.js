const arrowDown = document.querySelectorAll(".arrow-down");
const answer = document.querySelectorAll(".answer");
arrowDown.forEach((arrow) =>
  arrow.addEventListener("click", () => {
    console.log(arrow);
  })
);
