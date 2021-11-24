import React from "react";
import "./header.scss";

import plusIcon from "../../../assets/icon-plus.svg";

function Header({ length, setInvoiceOpen }) {
    return (
        <div className="header flex">
            <div className="left flex flex-column">
                <h1>Invoices</h1>
                <span>There are {length} total invoices</span>
            </div>
            <div className="right flex">
                <div className="filter flex">FILTER</div>
                <div
                    className="new-invoice flex"
                    onClick={() => {
                        setInvoiceOpen(true);
                    }}
                >
                    <div className="plus-circle flex">
                        <img src={plusIcon} alt=""></img>
                    </div>

                    <p>New Invoice</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
