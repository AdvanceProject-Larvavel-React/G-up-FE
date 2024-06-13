import PropTypes from 'prop-types';
export const NavLink = (props) => {
    const { href, text } = props.data;
    return (
        <li><a href={href} style={styles.navLink}>{text}</a></li>
    )
}
NavLink.propTypes = {
    data: PropTypes.shape({
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
};

 const styles = {
        navLinkItem: {
            listStyleType: 'none',
        },
        navLink: {
            color: 'white',
            textDecoration: 'none',
            padding: '10px',
        },
};
