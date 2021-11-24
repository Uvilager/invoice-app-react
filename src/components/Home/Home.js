import React, { useState } from "react";
import { useSelector } from "react-redux";
import Invoice from "./Invoices/Invoice";
import Header from "./Header/Header";
import Form from "../Form/Form";

export default function Home() {
    const invoices = useSelector((state) => state.home.invoices);
    const invoicesLength = invoices.length;

    const [invoiceOpen, setInvoiceOpen] = useState(false);

    return (
        <div>
            <Header length={invoicesLength} setInvoiceOpen={setInvoiceOpen} />
            {invoices.map((invoice) => (
                <Invoice key={invoice.id} {...invoice} />
            ))}
            {invoiceOpen && <Form setInvoiceOpen={setInvoiceOpen} />}
        </div>
    );
}
