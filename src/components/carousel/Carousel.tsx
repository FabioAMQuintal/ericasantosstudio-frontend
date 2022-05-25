import { Carousel, Row, Col } from 'react-bootstrap'
import chanel from '../../assets/chanel-5.jpg'
import loiro from '../../assets/loiro-5.jpg'
import longbob from '../../assets/longbob-5.jpg'
import shortbob from '../../assets/shortbob-5.jpg'
import morena from '../../assets/morenailuminada-5.jpg'
import tratamento from '../../assets/tratamento-5.jpg'
import './index.css'

const CarouselPersonal = () => {
    return (
        /*
        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={loiro} alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={longbob} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={shortbob} alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
        */
        
        <div id='main-caroulsel'>
            <Carousel className='carousel-fade'>
                <Carousel.Item interval={2000} className='imagem'>
                    <img
                        className="d-block w-100"
                        src={loiro}
                        alt="Loiro"
                    />
                    <Carousel.Caption>
                        <h3 className='tipo'>Loiro</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} className='imagem'>
                    <img
                        className="d-block w-100"
                        src={morena}
                        alt="Morena Iluminada"
                    />
                    <Carousel.Caption>
                        <h3 className='tipo'>Morena Iluminada</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} className='imagem'>
                    <img
                        className="d-block w-100"
                        src={chanel}
                        alt="Chanel"
                    />
                    <Carousel.Caption>
                        <h3 className='tipo'>Chanel</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} className='imagem'>
                    <img
                        className="d-block w-100"
                        src={shortbob}
                        alt="Short Bob"
                    />
                    <Carousel.Caption>
                        <h3 className='tipo'>Short Bob</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} className='imagem'>
                    <img
                        className="d-block w-100"
                        src={longbob}
                        alt="Long Bob"
                    />
                    <Carousel.Caption>
                        <h3 className='tipo'>Long Bob</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} className='imagem'>
                    <img
                        className="d-block w-100"
                        src={tratamento}
                        alt="Tratamento Químico"
                    />
                    <Carousel.Caption>
                        <h3 className='tipo'>Tratamento Químico</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default CarouselPersonal;

/* 
<Carousel className='align-content-center'>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={loiro}
                    alt="Loiro"
                />
                <Carousel.Caption>
                    <h3>Loiro</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={morena}
                    alt="Morena Iluminada"
                />
                <Carousel.Caption>
                    <h3>Morena Iluminada</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={chanel}
                    alt="Chanel"
                />
                <Carousel.Caption>
                    <h3>Chanel</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={shortbob}
                    alt="Short Bob"
                />
                <Carousel.Caption>
                    <h3>Short Bob</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={longbob}
                    alt="Long Bob"
                />
                <Carousel.Caption>
                    <h3>Long Bob</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={tratamento}
                    alt="Tratamento Químico"
                />
                <Carousel.Caption>
                    <h3>Tratamento Químico</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

*/