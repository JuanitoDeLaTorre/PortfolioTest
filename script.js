const headerLogo = document.querySelector("#logo");
const header = document.querySelector("#header");
const colorBlock = document.querySelector("#colorBlock");

const home = document.querySelector("#home");
const homeShadow = "rgb(218, 187, 14)"; //gold

const projects = document.querySelector("#projects");
const projectsShadow = "rgb(16, 175, 16)"; //green

const about = document.querySelector("#about");
const aboutShadow = "rgb(73, 127, 215)"; //blue

const contact = document.querySelector("#contact");
const contactShadow = "rgb(139, 52, 190)"; //purple

const resume = document.querySelector("#resume");
const resumeShadow = "rgb(255, 255, 255)"; //white

const navItems = [
  { element: home, shadow: homeShadow },
  { element: projects, shadow: projectsShadow },
  { element: about, shadow: aboutShadow },
  { element: contact, shadow: contactShadow },
  { element: resume, shadow: resumeShadow },
];

function trimColor(color) {
  return color.replace("rgb(", "").replace(")", "");
}

navItems.forEach((item) => {
  item.element.addEventListener("mouseover", () => {
    headerLogo.style.filter = `drop-shadow( 0px 0px 8px ${item.shadow})`;

    colorBlock.style.backgroundColor = `rgba(${trimColor(item.shadow)},0.3)`;
    colorBlock.style.animation =
      "2s swoop cubic-bezier(0.39, 0.17, 0.01, 0.98) forwards";
  });

  item.element.addEventListener("mouseout", () => {
    console.log(window.location.href);
    headerLogo.style.filter = `drop-shadow( 0px 0px 40px rgba(${trimColor(
      item.shadow
    )}, 1))`;

    colorBlock.style.animation = "none";
  });
});
