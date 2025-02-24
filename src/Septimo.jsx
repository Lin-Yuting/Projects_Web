import PropTypes from "prop-types";

export const Septimo = ({title, subtitle}) => {

    Septimo.PropTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    }

    return (
        <>
            <h2> {title} </h2>
            <h3> {subtitle} </h3>
        </>
    )
}