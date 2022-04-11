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
                            <MDBBtn className='m-1' style={{ backgroundColor: '#66C40E' }} href='tel:+13853155788'>
                                <FaPhoneAlt className='icon' />
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#C40E0E' }} href='mailto:derekewell@gmail.com'>
                                <FaRegEnvelope className='icon' />
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='http://www.linkedin.com/in/derek-ewell'>
                                <FaLinkedin className='icon' />
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='http://www.github.com/drewell7'>
                                <FaGithub className='icon' />
                            </MDBBtn>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='http://www.facebook.com/derek.ewell'>
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