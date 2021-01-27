import PropTypes from 'prop-types'
import Button from './Elements/Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{ title }</h1>
            <Button 
                color={!showAdd ? 'green': 'red'} 
                text={!showAdd ? 'Add': 'Close'} 
                onClick={ () => onAdd() } 
            S/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Temp Title'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}


// CSS in JSX
// const headingStyle = {
//     color: 'red', 
//     textAlign: 'center'
// }

export default Header
