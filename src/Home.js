import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AugART/GW/Hero/LastDay/fst/unrec/Experiment/PC_Hero_-_Unrec_experimentEnglish__Last_Day1500X600._CB408380971_.jpg"
        alt=""
      />
      {/* Product id,title,price,rating,image */}
      <div className="home__row">
        <Product
          id="12445asd"
          title="Samsung Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)"
          price={13999}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71dujTTJDZL._SY550_.jpg"
        />
        <Product
          id="1244asdsa5"
          title="boAt Rockerz 400 Bluetooth Headphone with Super Extra Bass, Up to 8H Playtime, Dual Connectivity Modes, Foldable Earcups and Lightweight Design (Black/Blue)
by Boat"
          price={1999}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41zZu2zGsUL._AC_US160_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12445adw32"
          title="Lenovo Legion Y540 9th Gen Intel Core i5 15.6 inch FHD Gaming Laptop (8GB/512GB SSD/NVIDIA GTX 1650 4GB "
          price={63990}
          rating={5}
          image="https://m.media-amazon.com/images/I/81pl1o7uQ3L._AC_UY218_.jpg"
        />
        <Product
          id="12445efeq"
          title="DELL Inspiron 3493 14-inch Laptop (10th Gen Core i5-1035G1/8GB/512GB SSD/Win 10 + MS Office/Intel HD"
          price={57141}
          rating={3}
          image="https://m.media-amazon.com/images/I/51C5xKPAYVL._AC_UY218_.jpg"
        />
        <Product
          id="1244afjadlj5"
          title="HP Pavilion x360 Core i3 8th Gen 14-inch Touchscreen 2-in-1 Thin and Light Laptop (4GB/256GB SSD/Windows 10/MS Office/Inking "
          price={48577}
          rating={4}
          image="https://m.media-amazon.com/images/I/71TCCyACxgL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1244asdasasdasd5"
          title="TCL 163.9 cm (65 inches)  AI 4K Ultra HD Certified Android Smart LED TV 65P8S | Supreme with Farfield Voice Search (Black) (2019 "
          price={59999}
          rating={5}
          image="https://m.media-amazon.com/images/I/71m0WVrksrL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
