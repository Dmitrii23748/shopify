const btnVisible = document.querySelector(".collapsible__action--visible");
const btnHide = document.querySelector(".collapsible__action--hidden");
const content = document.querySelector(".collapsible__content");

btnVisible.addEventListener("click", () => {
  content.style.opacity = "0";
});

btnHide.addEventListener("click", () => {
  content.style.opacity = "1";
});
