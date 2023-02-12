import React from 'react'
import PropTypes from 'prop-types'

// {color, text} are props that are passed to Header component
const Button = ({ color, text, onClick }) => {

    return (
        <button 
            onClick={ onClick }
            style={{ backgroundColor: color }} className='btn'
        >
            { text }
        </button>
    )
}

Button.defaultProps = {
    color: 'steelBlue'
}

/* Source: https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/#:~:text=What%20are%20PropTypes%3F
 * PropTypes are mechanism that ensures that the passed value is of the correct datatype
 * This ensures that we don't receive error at the very end of our app
 * Before using PropTypes, we need to import them in the beginning of the file
 * They are often used after the component ends and starts with the name of the component
 * PropTypes are objects with key-value pair where the key is the name of the prop and value is the type/class by which they are defined
 * We can chain proptypes with isRequired to make sure a warning is shown if the prop is not provided
 */
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button