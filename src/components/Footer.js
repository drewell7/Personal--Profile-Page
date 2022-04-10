import './Footer.css';
import { FaGithub, FaLinkedin, FaFacebook, FaPhoneAlt, FaRegEnvelope, FaReact } from 'react-icons/fa';
import { MDBBtn } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='contactTitle'>
                            <h2>Contact</h2>
                        </div>
                        <div className='contact'>
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
                        </div>
                    </div>
                    <div className='col'>
                        <div className='sig-container'>
                            <p className='sig'>This website was created by Derek Ewell using React.js <FaReact className='rLogo' /></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;