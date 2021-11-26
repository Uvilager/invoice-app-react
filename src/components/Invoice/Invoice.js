import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import DeleteModal from "./DeleteModal/DeleteModal";
import Header from "./Header/Header";
import Form from "./Form/Form";
import DateFormat from "../Utilities/DateFormat";

import "./invoice.css";

function Invoice() {
    const params = useParams();
    const invoices = useSelector((state) => state.home.invoices);
    const found = invoices.find((invoice) => invoice.id === params.id);

    const [modalOpen, setModalOpen] = useState(false);
    const [invoiceEdit, setInvoiceEdit] = useState(false);

    return (
        <div className="home-container">
            <Header
                status={found.status}
                id={found.id}
                setModalOpen={setModalOpen}
                setInvoiceEdit={setInvoiceEdit}
            />

            <div className="invoice-details flex flex-column">
                <div className="top flex">
                    <div className="left flex flex-column">
                        <p>
                            <span>#</span>
                            {found.id}
                        </p>
                        <p>{found.description}</p>
                    </div>
                    <div className="right flex flex-column">
                        <p>{found.senderAddress.street}</p>
                        <p>{found.senderAddress.city}</p>
                        <p>{found.senderAddress.postCode}</p>
                        <p>{found.senderAddress.country}</p>
                    </div>
                </div>
                <div className="middle flex">
                    <div className="payment flex flex-column">
                        <h4>Invoice Date</h4>
                        <p>{DateFormat(found.createdAt)}</p>
                        <h4>Payment Date</h4>
                        <p>{DateFormat(found.paymentDue)}</p>
                    </div>
                    <div className="bill flex flex-column">
                        <h4>Bill To</h4>
                        <p>{found.clientName}</p>
                        <p>{found.clientAddress.street}</p>
                        <p>{found.clientAddress.city}</p>
                        <p>{found.clientAddress.postCode}</p>
                        <p>{found.clientAddress.country}</p>
                    </div>
                    <div className="send-to flex flex-column">
                        <h4>Sent To</h4>
                        <p>{found.clientEmail}</p>
                    </div>
                </div>
                <div className="bottom flex flex-column">
                    <div className="billing-items">
                        <div className="heading flex">
                            <p>Item Name</p>
                            <p>QTY</p>
                            <p>Price</p>
                            <p>Total</p>
                        </div>
                        <div className="item flex">
                            {found.items.map(
                                ({ name, quantity, price, total }) => (
                                    <div className="flex">
                                        <p>{name}</p>
                                        <p>{quantity}</p>
                                        <p>
                                            {price.toLocaleString("pt-br", {
                                                style: "currency",
                                                currency: "GBP",
                                            })}
                                        </p>
                                        <p>
                                            {total.toLocaleString("pt-br", {
                                                style: "currency",
                                                currency: "GBP",
                                            })}
                                        </p>
                                    </div>
                                ),
                            )}
                        </div>
                        <div className="total flex">
                            <p>Amount Due</p>
                            <p>
                                {found.total.toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "GBP",
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {invoiceEdit && (
                <Form setInvoiceEdit={setInvoiceEdit} invoice={found} />
            )}
            {modalOpen && (
                <DeleteModal id={found.id} setModalOpen={setModalOpen} />
            )}
            <div className="mobileTools flex">
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
    );
}

export default Invoice;
