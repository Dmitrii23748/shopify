const btnVisible = document.querySelector(".collapsible__action--visible");
const btnHide = document.querySelector(".collapsible__action--hidden");
const content = document.querySelector(".collapsible__content");

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

const setting = {
  duration: 400,
  fill: "forwards",
};

const loadPage = () => {
  content.animate(hideAnimate, setting);
  btnVisible.animate(hideAnimate, setting);
  btnHide.animate(visibleAnimate, setting);
};

document.addEventListener("DOMContentLoaded", loadPage);

btnVisible.addEventListener("click", () => {
  content.animate(visibleAnimate, setting);
  btnVisible.animate(visibleAnimate, setting);
  btnHide.animate(hideAnimate, setting);
});

btnHide.addEventListener("click", () => {
  content.animate(hideAnimate, setting);
  btnVisible.animate(hideAnimate, setting);
  btnHide.animate(visibleAnimate, setting);
});
