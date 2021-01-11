import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
import order from '../../components/UI/Order/Order';

const purchaseBurgerSuccess = (id, orderData) => {
  return {
      type: actionTypes.PURCHASE_BUGRER_SUCCESS,
      orderId: id,
      orderData: orderData
  };
};

const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BUGRER_FAIL,
    error: error
  };
};


export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BUGRER_START,
  }
}


export const purchaseBurger = (orderData) => {
  return dispatch  => {
      dispatch(purchaseBurgerStart())
      axios.post('/orders.json', orderData)
      .then(response => {
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};


export const purchaseInit = () => {
    return {
      type: actionTypes.PURCHASE_INIT
    }
};



export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  }
}
export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  }
}

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  }
}



export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart())
    axios.get('/orders.json')
    .then(response => {
      const fetchedOrders = [];
      for(let key in response.data) {
        fetchedOrders.push({
          ...response.data[key],
          id: key
        });
      }
      dispatch(fetchOrdersSuccess(fetchedOrders));
    })
    .catch((error) => {
      dispatch(fetchOrdersFail(error));
    });
  }
}