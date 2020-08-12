import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/FreedomSale20/Banners/Updates/V228931899_IN_CEPC_AugART20_Electronics-page-graphics_Aug20_store_hedder_1500.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>YOur Shopping Basket is empty...</h2>
            <p>
              You have no items in your basket. TO buy one or click "Add to
              basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {/* {List of all products}          */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket?.length > 0 && (
        <div className="checkout__right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
