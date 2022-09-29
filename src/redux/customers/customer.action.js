export function fetchCustomersPending() {
    return {
        type: 'FETCH_CUSTOMERS_PENDING'
    }
}

export function fetchCustomersSuccess(payload) {
    return {
        type: 'FETCH_CUSTOMERS_SUCCESS',
        payload: payload
    }
}
export function addCustomerSuccess(payload) {
    return {
        type: 'CUSTOMER_ADD',
        payload: payload
    }
}


export function deleteCustomersSuccess(payload) {
    return {
        type: 'CUSTOMERS_DELETE',
        payload: payload
    }
}

export function fetchCustomersError() {
    return {
        type: 'FETCH_CUSTOMERS_ERROR'
    }
}