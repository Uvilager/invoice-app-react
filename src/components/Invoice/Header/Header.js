import React from "react";
import { Link } from "react-router-dom";

import "./invoiceHeader.css";
import { ReactComponent as ArrowLeft } from "../../../assets/icon-arrow-left.svg";

function Header({ status, id, setModalOpen, setInvoiceEdit }) {
    return (
        <div className="wrapper">
            <Link to="/" className="hover">
                <ArrowLeft />
                <span>Go Back</span>
            </Link>
            <div className="invoice-header flex">
                <div className="left flex">
                    <span>Status</span>
                    <div className={`status-button flex ${status}`}>
                        <div className="status-ball"></div>
                        <span>{status}</span>
                    </div>
                </div>
                <div className="right flex">
                    <button
                        className="edit"
                        onClick={() => {
                            setInvoiceEdit(true);
                        }}
                    >
                        Edit
                    </button>
                    <button
                        className="delete"
                        onClick={() => {
                            setModalOpen(true);
                        }}
                    >
                        Delete
                    </button>
                    <button className="mark">Mark as Paid</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
