import React, { Component } from 'react';

import { connect } from 'react-redux';

import  * as actionCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}  />
                <hr />
                <button onClick={()=> {this.props.onStoreResult(this.props.ctr)}}>Store Result</button>
                
                <ul>
                    {this.props.result.map(el => {
                        return <li onClick={() => this.props.onRemoveResult(el.id)} key={el.id}>{el.result}</li>
                    })}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        result: state.res.result
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: (payload) => dispatch(actionCreators.add(payload)),
        onSubtractCounter: (payload) => dispatch(actionCreators.subtract(payload)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onRemoveResult: (id) => dispatch(actionCreators.removeResult(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);