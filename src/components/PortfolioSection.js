import './Portfolio.css';
import ReactNucamp from '../../src/images/ReactNuCampSite.png';
import BootcampSite from '../../src/images/BootcampSite.png';

const PortfolioSection = () => {
    return (
        <div className='container-fluid portfolioSection'>
            <div className='row'>
                <div>
                    <h2 className='portfolioTitle'>Portfolio Projects</h2>
                </div>
            </div>
                <div className='pt-5 fluid'>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card h-100">
                        <img src={ReactNucamp} class="card-img-top" alt="Hollywood Sign on The Hill"/>
                        <div class="card-body">
                            <h4 class="card-title">Nucamp React Site</h4>
                            <p class="card-text">
                            This is a site made during the Nucamp React class using React and Bootstrap.
                            </p>
                            <a type="button" class="btn btn-dark" href='http://www.github.com/drewell7/nucamp-site-react'>Github repository</a>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={BootcampSite} class="card-img-top" alt="Palm Springs Road"/>
                        <div class="card-body">
                            <h4 class="card-title">Bootstrap Music Store</h4>
                            <p class="card-text">
                            This is my project for the Bootstrap course. It is a website for a fictional online music equipment store. I named it Pro Sound studio and DJ equipment.
                            </p>
                            <a type="button" class="btn btn-dark" href='http://www.github.com/drewell7/profile-project'>Github repository</a>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers"/>
                        <div class="card-body">
                            <h5 class="card-title">Portfolio Project 3</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers"/>
                        <div class="card-body">
                            <h5 class="card-title">Portfolio Project 4</h5>
                            <p class="card-text">
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;