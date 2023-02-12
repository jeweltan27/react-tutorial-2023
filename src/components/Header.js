import React from 'react' // not needed anymore
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = (e) => {
        console.log('click')
        console.log(e)
    }

    return (
        <header className='header'>
            {/* <h1 style={headingStyle}>Task Tracker</h1> */}
            <h1>{ title }</h1>

            {/* Reusable components with different props */}
            <Button 
                color='green' 
                text='Add new task'
                onClick={onClick}
            />
            <Button color='blue' text='Pending task?'/>
            <Button color='red' text='Delete a task'/>

        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}

export default Header