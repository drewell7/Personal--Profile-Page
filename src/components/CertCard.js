import './Card.css';
import Bootcamp_Certificate from '../../src/images/Bootcamp_Certificate.jpg';

const CertCard = () => {
    return (
        <div className='container-fluid' >
            <div className='row'>
            <div className='col'>
                
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