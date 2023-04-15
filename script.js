const headerLogo = document.querySelector("#logo");

const home = document.querySelector("#home");
const homeShadow = "drop-shadow( 0px 0px 8px rgb(218, 187, 14)"; //gold

const projects = document.querySelector("#projects");
const projectsShadow = "drop-shadow( 0px 0px 8px rgb(16, 175, 16)"; //green

const about = document.querySelector("#about");
const aboutShadow = "drop-shadow( 0px 0px 8px rgb(73, 127, 215)"; //blue

const contact = document.querySelector("#contact");
const contactShadow = "drop-shadow( 0px 0px 8px rgb(139, 52, 190)"; //purple

const resume = document.querySelector("#resume");
const resumeShadow = "drop-shadow( 0px 0px 8px rgba(255, 255, 255, 0.8))"; //white

const navItems = [
  { element: home, shadow: homeShadow },
  { element: projects, shadow: projectsShadow },
  { element: about, shadow: aboutShadow },
  { element: contact, shadow: contactShadow },
  { element: resume, shadow: resumeShadow },
];

console.log(navItems[0].shadow);

navItems.forEach((item) => {
  item.element.addEventListener("mouseover", () => {
    console.log(item.shadow);
    headerLogo.style.filter = item.shadow;
  });
});
