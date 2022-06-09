import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  let sortBtn = document.querySelector(".filter-menu").children;
  let sortItem = document.querySelector(".filter-item").children;

  for (let i = 0; i < sortBtn.length; i++) {
    sortBtn[i].addEventListener("click", function () {
      for (let j = 0; j < sortBtn.length; j++) {
        sortBtn[j].classList.remove("current");
      }

      this.classList.add("current");

      let targetData = this.getAttribute("data-target");

      for (let k = 0; k < sortItem.length; k++) {
        sortItem[k].classList.remove("active");
        sortItem[k].classList.add("delete");

        if (
          sortItem[k].getAttribute("data-item") == targetData ||
          targetData == "all"
        ) {
          sortItem[k].classList.remove("delete");
          sortItem[k].classList.add("active");
        }
      }
    });
  }
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="container">
          <ul className="filter-menu">
            <li data-target="all">All</li>
            <li data-target="male">Male</li>
            <li data-target="female">Female</li>
            <li data-target="kid">Kid</li>
          </ul>

          <ul className="filter-item">
            <li data-item="male">
              <img
                src="https://res.cloudinary.com/seidensticker/image/upload/ar_1:1,c_mfit,w_900,f_auto/production/product/1227/63/1227-63-image-3-5ea8c16216339.jpg"
                alt=""
              />
            </li>
            <li data-item="male">
              <img
                src="https://media.boohoo.com/i/boohoo/mzz70546_white_xl?$product_image_main_mobile$"
                alt=""
              />
            </li>
            <li data-item="female">
              <img
                src="https://i.pinimg.com/originals/8e/dc/0b/8edc0b484b3c9098181f72746653f63c.jpg"
                alt=""
              />
            </li>
            <li data-item="female">
              <img
                src="https://i.pinimg.com/originals/a3/dd/2c/a3dd2c9d7028a36f89291ac308497cca.jpg"
                alt=""
              />
            </li>
            <li data-item="kid">
              <img
                src="https://media.kasperskydaily.com/wp-content/uploads/sites/36/2020/02/11224850/smartphone-for-kids-featured.jpg"
                alt=""
              />
            </li>
            <li data-item="kid">
              <img
                src="https://images.ctfassets.net/cnu0m8re1exe/2elnw1rJ0HL8QqPOd3OtH5/c5b25256f2f8c7ba398ef21a2ca6504d/Kid-Thinking.jpg?w=650&h=433&fit=fill"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
