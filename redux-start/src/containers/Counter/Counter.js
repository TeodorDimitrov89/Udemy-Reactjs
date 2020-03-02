import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCount} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCount} />
                <CounterControl label="Add 50" clicked={this.props.onAddCount} />
                <CounterControl label="Subtract 150" clicked={this.props.onSubtractCount} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result: {}</button>
                <ul>
                    {this.props.storeResult.map(strResult => (
                        <li key={strResult.id} onClick={() => { this.props.onDeleteResult(strResult.id) }}>{strResult.value}</li>
                    ))}

                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storeResult: state.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCount: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCount: () => { dispatch({ type: actionTypes.DECREMENT }) },
        onAddCount: () => { dispatch({ type: actionTypes.ADD, value: 50 }) },
        onSubtractCount: () => { dispatch({ type: actionTypes.SUBTRACT, value: 150 }) },
        onStoreResult: () => { dispatch({ type: actionTypes.STORE_RESULT }) },
        onDeleteResult: (id) => { dispatch({ type: actionTypes.DELETE_RESULT, id: id }) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default Counter;