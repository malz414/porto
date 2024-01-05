/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInDown");
          // You can add additional classes or logic here
        }
      });
    });

    // Select the elements you want to animate
    const elementsToAnimate = document.querySelectorAll(".card");

    // Observe each element
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });
