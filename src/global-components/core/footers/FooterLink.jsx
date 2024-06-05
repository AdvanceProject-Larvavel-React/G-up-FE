import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FooterLink = (props) => {
    const { href, text, icon } = props.data;
    return (
        <li style={styles.listItem}>
            <a href={href} style={styles.navLink}>
                {icon && <FontAwesomeIcon icon={icon} style={styles.icon} />}
                {text}
            </a>
        </li>
    );
};

FooterLink.propTypes = {
    data: PropTypes.shape({
        href: PropTypes.string.isRequired,
        text: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
        ]).isRequired,
        icon: PropTypes.object, // For FontAwesome icons
    }).isRequired,
};

const styles = {
    navLink: {
        color: 'white',
        textDecoration: 'none',
        padding: '10px',
    },
    listItem: {
        marginBottom: '10px',
    },
    icon: {
        marginRight: '5px',
    },
};

export default FooterLink;
