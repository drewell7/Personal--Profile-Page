import './Footer.css';
import { FaGithub, FaLinkedin, FaFacebook, FaReddit, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import { MDBBtn } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <footer className='footer'>
            <MDBBtn className='m-1' style={{ backgroundColor: '#66C40E' }} href='#'>
                <FaPhoneAlt className='icon' />
            </MDBBtn>
            <MDBBtn className='m-1' style={{ backgroundColor: '#C40E0E' }} href='#'>
                <FaRegEnvelope className='icon' />
            </MDBBtn>
            <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
                <FaLinkedin className='icon' />
            </MDBBtn>
            <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='#'>
                <FaGithub className='icon' />
            </MDBBtn>
            <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                <FaFacebook className='icon' />
            </MDBBtn>
            <MDBBtn className='m-1' style={{ backgroundColor: '#ff4500' }} href='#'>
                <FaReddit className='icon' />
            </MDBBtn>
            
            
        </footer>
    );
};

export default Footer;