import React from "react";

import "./homeForm.css";
import { ReactComponent as ArrowLeft } from "../../assets/icon-arrow-left.svg";

function Form({ setInvoiceOpen }) {
    return (
        <div className="invoiceHolder flex">
            <div className="invoice-wrapper">
                <div
                    className="mobile-back"
                    onClick={() => setInvoiceOpen(false)}
                >
                    <ArrowLeft />
                    <span>Go Back</span>
                </div>
                <p className="createOrEdit">New Invoice</p>
                <section>
                    <p>Bill From</p>
                    <div className="BillFrom">
                        <div className="flex flex-column">
                            <label>Street Address</label>
                            <input className=""></input>
                        </div>
                        <div className="group-one">
                            <div className="flex flex-column">
                                <label>City</label>
                                <input className=""></input>
                            </div>
                            <div className="flex flex-column">
                                <label>Post Code</label>
                                <input className=""></input>
                            </div>
                            <div className="flex flex-column">
                                <label>Country</label>
                                <input name=""></input>
                            </div>
                        </div>
                    </div>
                    <p>Bill To</p>
                    <div className="BillTo">
                        <div className="flex flex-column">
                            <label>Client’s Name</label>
                            <input className=""></input>
                        </div>
                        <div className="flex flex-column">
                            <label>Client’s Email</label>
                            <input className=""></input>
                        </div>
                        <div className="flex flex-column">
                            <label>Street Address</label>
                            <input className=""></input>
                        </div>
                        <div className="group-one">
                            <div className="flex flex-column">
                                <label>City</label>
                                <input className=""></input>
                            </div>
                            <div className="flex flex-column">
                                <label>Post Code</label>
                                <input className=""></input>
                            </div>
                            <div className="flex flex-column">
                                <label>Country</label>
                                <input name=""></input>
                            </div>
                        </div>
                        <div className="group-two">
                            <div className="flex flex-column">
                                <label>Invoice Date</label>
                                <input className=""></input>
                            </div>
                            <div className="flex flex-column">
                                <label>Payment Terms</label>
                                <input className=""></input>
                            </div>
                        </div>
                        <div className="flex flex-column">
                            <label>Project Description</label>
                            <input className=""></input>
                        </div>
                    </div>
                </section>
                <div className="flex button-wrapper">
                    <button
                        className="discard"
                        onClick={() => setInvoiceOpen(false)}
                    >
                        Discard
                    </button>
                    <div className="flex right">
                        <button className="draft">Save as Draft</button>
                        <button className="save">Save & Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
