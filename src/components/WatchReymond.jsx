import React from "react";
import "../css/watchR.css";
import main1 from "../images/main1.png";
import main2 from "../images/main2.png";
import logo from "../images/logo.png";
import hero from "../images/hero.png";

// setTimeout(() => {
//   const darkMode = document.querySelector(".switch");

//   darkMode.addEventListener("click", () => {
//     document.body.classList.toggle("darkmode");
//   });

//   const menuHamburguesa = document.querySelector(".fa-bars");
//   const menuList = document.querySelector(".header__list");

//   menuHamburguesa.addEventListener("click", () => {
//     menuList.classList.toggle("mobile-btn");
//   });
// }, 100);

export const WatchReymond = () => {
  return (
    <div class="container">
      <header class="header__section">
        <div class="header__logo-contain">
          <i class="fa-solid fa-stopwatch"></i>

          <a class="header__logo" href="#">
            Honor
          </a>
        </div>
        <ul class="header__list">
          <li>
            <a class="active" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Smartphone</a>
          </li>
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div class="header__switch">
          <a class="header__button" href="#">
            Buy Now
          </a>
          <i class="fa-solid fa-bars"></i>
          <div class="switch">
            <i class="fa-regular fa-moon"></i>
            <i class="fa-solid fa-sun"></i>
          </div>
        </div>
      </header>
      <section class="hero__container-wrapper">
        <div class="hero__text-left">
          <h1 class="hero__title">Smartwatch</h1>
          <h4 class="hero__subtitle">ELEMENT SERIE</h4>
          <p class="hero__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            enim, aliquid molestias facilis quam vero expedita!
          </p>

          <div class="cover__container-cards">
            <article class="card">
              <h2 class="card__title">White</h2>
              <h4 class="card__subtitle">Element</h4>
              <img class="card__img" src={main1} alt={main1} />
            </article>
            <article class="card">
              <h2 class="card__title">Dark</h2>
              <h4 class="card__subtitle">Element</h4>
              <img class="card__img" src={main2} alt={main2} />
            </article>
            <article class="card">
              <h2 class="card__title">White</h2>
              <h4 class="card__subtitle">Element</h4>
              <img class="card__img" src={main1} alt={main1} />
            </article>
          </div>
        </div>
        <picture class="hero__img-right">
          {/* <img class="hero__clock" src={hero} alt={hero} /> */}
          <i class="fa-solid fa-circle-arrow-down"></i>
        </picture>
      </section>
    </div>
  );
};
