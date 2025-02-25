import PropTypes from "prop-types";

export const CounterApp = ({value, counter}) => {

    CounterApp.PropTypes = {
        value: PropTypes.number.isRequired,
        counter: PropTypes.number.isRequired
    }

    return (
        <>
            <h1> CounterApp </h1>
            <h2> { value } </h2>
            <h3> { counter } </h3>
        </>
    )
}