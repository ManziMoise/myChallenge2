import PropTypes from 'prop-types'


const Header = ({title}) => {
    return(
        <header className= 'header'>
            <h2>{title}</h2>
        </header>
    )
}

Header.defaultProps = {
    title: 'Photo Album',
}
Header.propTypes = {
        title: PropTypes.string.isRequired,
}

export default Header