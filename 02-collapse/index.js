const btnVisible = document.querySelector(".collapsible__action--visible");
const btnHide = document.querySelector(".collapsible__action--hidden");
const content = document.querySelector(".collapsible__content");

// btnVisible.addEventListener("click", () => {
//   content.style.opacity = "0";
// });

// btnHide.addEventListener("click", () => {
//   content.style.opacity = "1";
// });

// c Animate 
const visibleAnimate = [
  {
    opacity: "0",
  },
];

const hideAnimate = [
  {
    opacity: "1",
  },
];

btnVisible.addEventListener("click", () => {
  content.animate(visibleAnimate, {
    duration: 400,
    fill: "forwards",
  });
});

btnHide.addEventListener("click", () => {
  content.animate(hideAnimate, {
    duration: 400,
    fill: "forwards",
  });
});
