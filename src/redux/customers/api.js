import {
  fetchCustomersPending,
  fetchCustomersSuccess,
  fetchCustomersError,
  deleteCustomersSuccess,
  addCustomerSuccess
} from "./customer.action";

export function fetchCustomers() {
  return (dispatch) => {
    dispatch(fetchCustomersPending());
    fetch("https://northwind.vercel.app/api/customers")
      .then((res) => res.json())
      .then((res) => {
        dispatch(fetchCustomersSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchCustomersError(error));
      });
  };
}

export function deleteCustomers(customer) {
  return (dispatch) => {
    dispatch(fetchCustomersPending());
    fetch(`https://northwind.vercel.app/api/customers/${customer.id}`, {
      method: "DELETE",
    })
      .then(() => dispatch(deleteCustomersSuccess(customer)))
      .catch((error) => {
        dispatch(fetchCustomersError(error));
      });
  };
}

export function addCustomer(customer) {
  return (dispatch) => {
    dispatch(fetchCustomersPending());
    fetch("https://northwind.vercel.app/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
    })
      .then((response) => response.json())
      .then((data) => dispatch(addCustomerSuccess(data)))
      .catch((error) => {
        dispatch(fetchCustomersError(error));
      });
  };
}
