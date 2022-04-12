import './Portfolio.css';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const PortfolioSection = () => {
    return (
        <div className='container-fluid'>
            <div className='portfolioSection'>
                <div className='row'>
                    <div className='portfolioTitle'>
                        <h2>Portfolio Projects Coming Soon!</h2>
                    </div>
                </div>
                <div className='pt-5'>
            <div className='row'>
                
                <div className='col'>
                    <Card>
                        <CardImg
                            alt="Card image cap"
                            src=""
                            top
                            width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                        </CardBody>
                    </Card>
                </div>
                <div className='col'>
                    <Card>
                        <CardImg
                            alt="Card image cap"
                            src=""
                            top
                            width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                        </CardBody>
                    </Card>
                </div>
                <div className='col'>
                    <Card>
                        <CardImg
                            alt="Card image cap"
                            src=""
                            top
                            width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                        </CardBody>
                    </Card>
                </div>
                <div className='col'>
                    <Card>
                        <CardImg
                            alt="Card image cap"
                            src=""
                            top
                            width="100%"
                        />
                        <CardBody>
                        <CardTitle tag="h5">
                            Card title
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                        </CardBody>
                    </Card>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;