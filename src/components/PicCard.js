import './Card.css';
import Family from '../../src/images/Familyc.jpg';


const PicCard = () => {
    return (
            <div className='container-fluid'>
                <div className='row gy-5'>
                    <div className='col'>
                        <div className='family_card'>
                            <div>
                            <div className='d-flex'>
                                <img src={Family} className='family' alt='Family Picture at birthday party for Liam' height='620' />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='bio-container'>
                           <div className=''>
                                <p className='bio'>Hello, I am a web developer focused on creating responsive, mobile first websites and apps.
                                I have graduated from the NuCamp Coding Bootcamp where I completed classes in Bootcamp, React and React Native.
                                When I am not coding I enjoy making music with Ableton and spending time with my family. My son and I love playing 
                                video games together and he's become a big Star Wars fan like his dad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default PicCard;