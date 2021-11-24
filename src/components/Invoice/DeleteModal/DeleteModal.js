import React from "react";
import reactDom from "react-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import * as invoiceActions from "../../../redux/Invoices/invoice-actions";

import "./delete-modal.css";

function DeleteModal({ setModalOpen, id }) {
    function closeModal({ target, currentTarget }) {
        if (target === currentTarget) {
            setModalOpen(false);
        }
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function deleteInvoice() {
        console.log(id);
        dispatch(invoiceActions.removeInvoice(id));
        navigate("/");
    }

    return reactDom.createPortal(
        <div>
            <section className="DeleteModal flex" onClick={closeModal}>
                <div className="Modal">
                    <h1>Confirm Deletion</h1>
                    <p>
                        Are you sure you want to delete invoice #{id}? This
                        action cannot be undone.
                    </p>

                    <div className="Buttons">
                        <button
                            className="Cancel"
                            onClick={() => setModalOpen(false)}
                        >
                            Cancel
                        </button>
                        <button className="Delete" onClick={deleteInvoice}>
                            Delete
                        </button>
                    </div>
                </div>
            </section>
        </div>,
        document.getElementById("portal"),
    );
}

export default DeleteModal;
