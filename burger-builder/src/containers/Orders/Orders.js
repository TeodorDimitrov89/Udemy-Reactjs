import React, { Component } from "react";
import Order from '../../components/UI/Order/Order';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'; 
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }

  componentDidMount() {
    axios.get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        for(let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        console.log(fetchedOrders)
        this.setState({loading: false, orders: fetchedOrders})
      })
      .catch(() => {
        this.setState({loading: false})
      })
  }

  render() {
    let orders = this.state.orders.map(order => {
      // let transformedIngredients = Object.keys(order.ingredients)
      //   .map(ingKey => {
      //       return [`${ingKey} (${order.ingredients[ingKey]})`].reduce((arr, el) => {
      //         return arr.concat(el)
      //     });
      //   })
        // console.log(transformedIngredients)
      return (
        <Order key={order.id} price={order.price} ingredients = {order.ingredients} />
      )
    })
    if(this.state.loading) {
      orders = <Spinner />
    }
    return (
      <div>
        {orders}
      </div>
    )
  }
}

export default withErrorHandler(Orders,axios);