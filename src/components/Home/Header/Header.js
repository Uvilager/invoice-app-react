import React, { useState } from "react";
import "./header.scss";

import plusIcon from "../../../assets/icon-plus.svg";
import { ReactComponent as ArrowDown } from "../../../assets/icon-arrow-down.svg";
import { ReactComponent as Check } from "../../../assets/icon-check.svg";

function Header({ length, setInvoiceOpen, filterValue, filters }) {
    const [filterMenu, filterMenuToggle] = useState(false);

    return (
        <div className="header flex">
            <div className="left flex flex-column">
                <h1>Invoices</h1>
                <span>There are {length} total invoices</span>
            </div>
            <div className="right flex">
                <button
                    className="filter flex"
                    onClick={() => {
                        filterMenuToggle(!filterMenu);
                    }}
                >
                    <span>Filter by status</span>
                    <ArrowDown />
                    {filterMenu && (
                        <ul className="filter-menu">
                            <li
                                className="flex"
                                onClick={() => {
                                    if (filters === "draft") {
                                        filterValue("");
                                    } else filterValue("draft");
                                }}
                            >
                                <div
                                    className={`checkbox flex ${
                                        filters === "draft" ? "active" : ""
                                    }`}
                                >
                                    {filters === "draft" ? <Check /> : ""}
                                </div>
                                Draft
                            </li>
                            <li
                                className="flex"
                                onClick={() => {
                                    if (filters === "pending") {
                                        filterValue("");
                                    } else filterValue("pending");
                                }}
                            >
                                <div
                                    className={`checkbox flex ${
                                        filters === "pending" ? "active" : ""
                                    }`}
                                >
                                    {filters === "pending" ? <Check /> : ""}
                                </div>
                                Pending
                            </li>
                            <li
                                className="flex"
                                onClick={() => {
                                    if (filters === "paid") {
                                        filterValue("");
                                    } else filterValue("paid");
                                }}
                            >
                                <div
                                    className={`checkbox flex ${
                                        filters === "paid" ? "active" : ""
                                    }`}
                                >
                                    {filters === "paid" ? <Check /> : ""}
                                </div>
                                Paid
                            </li>
                        </ul>
                    )}
                </button>
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
