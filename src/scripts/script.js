const open = document.querySelector(".open-icon");
const close = document.querySelector(".close-icon");
const nav = document.querySelector(".navigation");
const featuresArrow = document.querySelector("#features-arrow").parentElement;
const companyArrow = document.querySelector("#company-arrow").parentElement;
const featuresList = document.querySelector(".features-sublist");
const companyList = document.querySelector(".company-sublist");

open.addEventListener("click", function () {
  nav.style.transform = "translateX(0%)";
});
close.addEventListener("click", function () {
  nav.style.transform = "translateX(100%)";
});

featuresArrow.addEventListener("click", function () {
  if (featuresList.style.display === "none") {
    featuresList.style.display = "block";
  } else {
    featuresList.style.display = "none";
  }
});

companyArrow.addEventListener("click", function () {
  if (companyList.style.display === "none") companyList.style.display = "block";
  else companyList.style.display = "none";
});
