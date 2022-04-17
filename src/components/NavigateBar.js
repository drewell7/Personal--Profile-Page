import { Navbar, NavbarBrand } from 'reactstrap';
import './Nav.css';
import DElogo from '../../src/images/DELogob.png';

const NavigateBar = () => {
    return (
        <Navbar sticky={'top'} dark color="dark">
            
            <NavbarBrand>
                <img src={DElogo} width="60" height="60" className='DEIcon' alt="" />
            </NavbarBrand>
                <div className='container'>
                    <div className='row'>
                        
                       
                       
                    </div>
                </div>
            </Navbar>
    );
};

export default NavigateBar;