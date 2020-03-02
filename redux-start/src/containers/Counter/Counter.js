import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
                <CounterControl label="Add 5" clicked={this.props.onAddCount} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCount} />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCount: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCount: () => { dispatch({ type: 'DECREMENT' }) },
        onAddCount: () => { dispatch({ type: 'ADD', payload: 5 }) },
        onSubtractCount: () => { dispatch({ type: 'SUBTRACT', payload: 5 }) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default Counter;