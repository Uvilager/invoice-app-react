import React from "react";
import { Link } from "react-router-dom";

import "./invoice.css";
import iconRight from "../../../assets/icon-arrow-right.svg";

function Invoice({ id, paymentDue, clientName, total, status }) {
    const options = { day: "2-digit", month: "short", year: "numeric" };

    function DateFormat(date) {
        const data = new Date(date);
        return new Date(
            `${data.getUTCFullYear()}/${
                data.getUTCMonth() + 1
            }/${data.getUTCDate()}`,
        ).toLocaleString("en-IE", options);
    }

    return (
        <div>
            <Link className="invoice flex" to={`/Invoice/${id}`} key={id}>
                <div className="left flex">
                    <p className="tracking-number">
                        <span>#</span>
                        {id}
                    </p>
                    <span className="due-date">
                        Due {DateFormat(paymentDue)}
                    </span>
                    <span className="person">{clientName}</span>
                </div>
                <div className="right flex">
                    <span className="price">
                        {total.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "GBP",
                        })}
                    </span>
                    <div className={`status-button flex ${status}`}>
                        <div className="status-ball"></div>
                        <span>{status}</span>
                    </div>
                    <div className="icon">
                        <img src={iconRight} alt="" />
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Invoice;
