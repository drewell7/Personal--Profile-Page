import './Card.css';
import Bootcamp_Certificate from '../../src/images/Bootcamp_Certificate.jpg';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const CertCard = () => {
    return (
        <div className='container-fluid' >
            <div className='row'>
            <div className='col'>
                <div className='icon'>
                <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>
      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#3b5998' }}>
        <MDBIcon fab icon='facebook-f' size='lg' />
      </MDBBtn>
      <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='#'>
        <MDBIcon fab icon='github' />
      </MDBBtn>
                </div>
                </div>
                <div className='col'>
                    <div className='cert_card'>
                        <div>
                            <img src={Bootcamp_Certificate} className='certificate' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertCard;