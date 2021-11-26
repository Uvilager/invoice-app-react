import React from "react";
import { Link } from "react-router-dom";

import "./invoice.css";
import iconRight from "../../../assets/icon-arrow-right.svg";
import DateFormat from "../../Utilities/DateFormat";

function Invoice({ id, paymentDue, clientName, total, status }) {
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
