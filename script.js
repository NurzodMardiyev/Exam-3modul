"use strict";

let userName = document.querySelector("#userName"),
  phoneNumber = document.querySelector("#phoneNumber"),
  userAdress = document.querySelector("#userAdress"),
  nameId = document.querySelector("#nameId"),
  phoneId = document.querySelector("#phoneId"),
  adressId = document.querySelector("#adressId"),
  submit = document.querySelector("#submit"),
  noneOption = document.querySelector("#noneOption"),
  options = document.querySelector(".options"),
  thin = document.querySelector("#thin"),
  medium = document.querySelector("#medium"),
  thick = document.querySelector("#thick"),
  productThickness = document.querySelector("#productThickness"),
  smSizes = document.querySelectorAll(".sms"),
  productSize = document.querySelector("#productSize");

// User Information Enter

submit.addEventListener("click", () => {
  nameId.innerHTML = `
    <span id="nameId">${userName.value}</span>
  `;
  phoneId.innerHTML = `
    <span id="phoneId">${phoneNumber.value}</span>
  `;
  adressId.innerHTML = `
    <span id="adressId">${userAdress.value}</span>
  `;
});

// Thickness Section

noneOption.addEventListener("click", () => {
  options.classList.toggle("optionsDisplay");
  console.log("none");

  thin.addEventListener("click", () => {
    productThickness.innerHTML = `
    <span id="productThickness">${thin.value}</span>
    `;
  });
  medium.addEventListener("click", () => {
    productThickness.innerHTML = `
    <span id="productThickness">${medium.value}</span>
    `;
  });
  thick.addEventListener("click", () => {
    productThickness.innerHTML = `
    <span id="productThickness">${thick.value}</span>
    `;
  });
});

// Size Section

let obj = {
  sm23: "23sm",
  sm33: "33sm",
  sm55: "55sm",
};

smSizes.forEach(function (aTegi) {
  aTegi.addEventListener("click", () => {
    smSizes.forEach((item) => {
      // item.classList.remove("size__active");
      console.log("none");
    });
    aTegi.classList.add("siza__active");
    // console.log("none");
    productSize.innerHTML = `
    <a>${obj.sm23}</a>
    `;
  });
});

// On Pizza Section

let objOnPizz = {
  tomato: "Tomato",
  packet: "Packet Cocumber",
};

let tomato = document.querySelector("#tomato"),
  productOnPizza1 = document.querySelector("#productOnPizza");

tomato.addEventListener("click", () => {
  productOnPizza1.innerHTML = `
  <span id="productOnPizza1">${objOnPizz.tomato}</span>
              <span id="productOnPizza2">Pickled cucumber</span>
              <span id="productOnPizza3">Olive</span>
  `;
});
