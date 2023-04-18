const headerLogo = document.querySelector("#logo");
const header = document.querySelector("#header");
console.log(header);
const colorBlock = document.querySelector("#colorBlock");

const aboutContainer = document.querySelector(".aboutContainer");
const aboutH1 = document.querySelector("#aboutH1");

const theMan = document.querySelector("#theMan");
const theMyth = document.querySelector("#theMyth");
const theLegend = document.querySelector("#theLegend");

const theManLI = document.querySelector("#theManLI");
const theMythLI = document.querySelector("#theMythLI");
const theLegendLI = document.querySelector("#theLegendLI");

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

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// header.addEventListener("mouseover", () => {
//   console.log("hi");
//   console.log(isInViewport(document.querySelector("#swag")));
// });

setInterval(() => {
  if (isInViewport(aboutH1)) {
    about.style.borderBottom = "solid white 1px";
    aboutH1.style.opacity = "1";
  } else {
    about.style.borderBottom = "none";
  }
  console.log(isInViewport(aboutContainer));
}, 1000);

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

[theManLI, theMythLI, theLegendLI].forEach((item) => {
  console.log(item);
  item.addEventListener("mouseover", () => {
    if (item == theManLI) {
      theMan.style.opacity = "1";

      theMyth.style.opacity = "0";
      theLegend.style.opacity = "0";
    } else if (item == theMythLI) {
      theMyth.style.opacity = "1";

      theMan.style.opacity = "0";
      theLegend.style.opacity = "0";
    } else if (item == theLegendLI) {
      theLegend.style.opacity = "1";

      theMan.style.opacity = "0";
      theMyth.style.opacity = "0";
    }
  });
});

aboutContainer.addEventListener("mouseout", () => {
  //   [theMan, theMyth, theLegend].forEach((item) => {
  //     item.style.opacity = "0";
  //   });

  theMan.style.opacity = "1";
  theMyth.style.opacity = "0";
  theLegend.style.opacity = "0";
});
