import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className='footer'>
            
            <FontAwesomeIcon icon={['fab', 'twitter']} border />
            
            <FontAwesomeIcon icon={['fab', 'facebook']} border />

            <FontAwesomeIcon icon={['fab', 'linkedin']} border />

            <FontAwesomeIcon icon={['fab', 'github']} border />

            <FontAwesomeIcon icon={['fab', 'google']} border />
            
        </footer>
    );
};

export default Footer;