import './Card.css';
import Family from '../../src/images/Familyc.jpg';


const PicCard = () => {
    return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='family_card'>
                            <div>
                                <img src={Family} className='family' alt='' height='620' />
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='bio-container'>
                            <p className='bio'>This is my temporary short biography just to see how it will look. 
                            This is my temporary short biography just to see how it will look. 
                            This is my temporary short biography just to see how it will look.</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default PicCard;