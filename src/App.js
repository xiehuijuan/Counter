import React, { Component } from 'react';
import store from './store';
import { increment, decrement } from './action'
import { Provider, connect } from 'react-redux'

function Counter(props) {
  return (
    <div className="App">
      <h3>计数器: {props.counter}</h3>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state
  }
};
const mapDispatchToProps = dispatch => {
  return {
    increment() {
      dispatch(increment(10))
    },
    decrement() {
      dispatch(decrement(5))
    }
  }
};
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    )
  }
}

export default App;
