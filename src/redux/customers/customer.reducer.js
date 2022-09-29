const initialState = {
  pending: false,
  customers: [],
  error: null,
};

export function customersReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CUSTOMERS_PENDING":
      return {
        ...state,
        pending: true,
      };
    case "FETCH_CUSTOMERS_SUCCESS":
      return {
        ...state,
        pending: false,
        customers: action.payload,
      };
    case "FETCH_CUSTOMERS_ERROR":
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case "CUSTOMERS_DELETE":
      const toRemove = state.customers.findIndex(
        (x) => x.id === action.payload.id
      );
      state.customers.splice(toRemove, 1);
      return {
        ...state,
        pending: false,
        customers: [...state.customers],
      };
    case "CUSTOMER_ADD":
      return {
        ...state,
        pending: false,
        customers: [...state.customers, action.payload],
      };
    default:
      return state;
  }
}

export const getCustomers = (state) => state.customers;
export const getCustomersPending = (state) => state.pending;
export const getCustomersError = (state) => state.error;
