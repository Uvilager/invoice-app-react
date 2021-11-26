import React from "react";

import "./form.css";
import { ReactComponent as ArrowLeft } from "../../../assets/icon-arrow-left.svg";

function Form({ setInvoiceEdit, invoice }) {
    return (
        <div className="invoiceHolder flex">
            <div className="invoice-wrapper">
                <div
                    className="mobile-back"
                    onClick={() => setInvoiceEdit(false)}
                >
                    <ArrowLeft />
                    <span>Go Back</span>
                </div>
                <p className="createOrEdit">
                    Edit <span>#</span>
                    {invoice.id}
                </p>
                <section>
                    <p>Bill From</p>
                    <div className="BillFrom">
                        <div className="flex flex-column">
                            <label>Street Address</label>
                            <input
                                className=""
                                defaultValue={invoice.senderAddress.street}
                            ></input>
                        </div>
                        <div className="group-one">
                            <div className="flex flex-column">
                                <label>City</label>
                                <input
                                    className=""
                                    defaultValue={invoice.senderAddress.city}
                                ></input>
                            </div>
                            <div className="flex flex-column">
                                <label>Post Code</label>
                                <input
                                    className=""
                                    defaultValue={
                                        invoice.senderAddress.postCode
                                    }
                                ></input>
                            </div>
                            <div className="flex flex-column">
                                <label>Country</label>
                                <input
                                    name=""
                                    defaultValue={invoice.senderAddress.country}
                                ></input>
                            </div>
                        </div>
                    </div>
                    <p>Bill To</p>
                    <div className="BillTo">
                        <div className="flex flex-column">
                            <label>Client’s Name</label>
                            <input
                                className=""
                                defaultValue={invoice.clientName}
                            ></input>
                        </div>
                        <div className="flex flex-column">
                            <label>Client’s Email</label>
                            <input
                                className=""
                                defaultValue={invoice.clientEmail}
                            ></input>
                        </div>
                        <div className="flex flex-column">
                            <label>Street Address</label>
                            <input
                                className=""
                                defaultValue={invoice.clientAddress.street}
                            ></input>
                        </div>
                        <div className="group-one">
                            <div className="flex flex-column">
                                <label>City</label>
                                <input
                                    className=""
                                    defaultValue={invoice.clientAddress.city}
                                ></input>
                            </div>
                            <div className="flex flex-column">
                                <label>Post Code</label>
                                <input
                                    className=""
                                    defaultValue={
                                        invoice.clientAddress.postCode
                                    }
                                ></input>
                            </div>
                            <div className="flex flex-column">
                                <label>Country</label>
                                <input
                                    name=""
                                    defaultValue={invoice.clientAddress.country}
                                ></input>
                            </div>
                        </div>
                        <div className="group-two">
                            <div className="flex flex-column">
                                <label>Invoice Date</label>
                                <input
                                    className=""
                                    defaultValue={invoice.createdAt}
                                ></input>
                            </div>
                            <div className="flex flex-column">
                                <label>Payment Terms</label>
                                <input
                                    className=""
                                    defaultValue={invoice.paymentDue}
                                ></input>
                            </div>
                        </div>
                        <div className="flex flex-column">
                            <label>Project Description</label>
                            <input
                                className=""
                                defaultValue={invoice.description}
                            ></input>
                        </div>
                    </div>
                </section>
                <div className="flex button-invoice-wrapper">
                    <button
                        className="cancel"
                        onClick={() => setInvoiceEdit(false)}
                    >
                        Cancel
                    </button>
                    <button className="saveChanges">Save Changes</button>
                </div>
            </div>
        </div>
    );
}

export default Form;
