import {decrement, increment} from "../actions";
import {connect} from "react-redux";
import Counter from "../components/Counter";

let stateToPropertiesMapper         = state => {
    return {
        value: state.value
    }
}
const dispatcherToPropertiesMapper=(dispatcher)=>{

    return {
        increment : ()=> (increment(dispatcher)),
        decrement : ()=> (decrement(dispatcher))
    }

}


const CounterApp = connect(stateToPropertiesMapper,
    dispatcherToPropertiesMapper)(Counter)


export default CounterApp;
