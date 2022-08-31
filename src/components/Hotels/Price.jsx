import React from "react";
import "./bookingdetails.css";

const Price = () => {
    return (
        <div>
            <div className="d-flex flex-column p-3 mt-2 price-booking">
                <div className="d-flex flex-row justify-content-between">
                    <div className="price-price">Price</div>
                    <div className="price-price">LKR 27,500.00</div>
                </div>
                <div className="price-currency mb-2">(Your currency)</div>
                <div className="d-flex flex-row justify-content-between">
                    <div className="price-price">Property currency</div>
                    <div className="price-price">US $76.22</div>
                </div>
                <div className="price-currency">in US $</div>
                <div className="price-currency">(for 3 nights & all guests)</div>
            </div>
        </div>
    );
}

export default Price;