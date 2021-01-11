import React, { Component } from "react";
import Order from '../../components/UI/Order/Order';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'; 
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let orders = this.props.orders.map(order => {
      return (
        <Order key={order.id} price={order.price} ingredients = {order.ingredients} />
      )
    })
    if(this.props.loading) {
      orders = <Spinner />
    }
    return (
      <div>
        {orders}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => {dispatch(actionTypes.fetchOrders())}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios));