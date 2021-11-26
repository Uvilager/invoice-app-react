import * as actionTypes from "./invoice-types";

export const addInvoice = (invoiceID) => {
    return {
        type: actionTypes.ADD_INVOICE,
        payload: {
            id: invoiceID,
        },
    };
};

export const removeInvoice = (invoiceID) => {
    return {
        type: actionTypes.REMOVE_INVOICE,
        payload: {
            id: invoiceID,
        },
    };
};

export const updateInvoice = (invoiceID) => {
    return {
        type: actionTypes.UPDATE_INVOICE,
        payload: {
            id: invoiceID,
        },
    };
};
