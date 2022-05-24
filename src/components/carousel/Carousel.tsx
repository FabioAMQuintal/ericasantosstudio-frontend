import { Carousel } from 'react-bootstrap'
import chanel from '../../assets/chanel.jpg'
import loiro from '../../assets/loiro.jpg'
import longbob from '../../assets/longbob.jpg'
import shortbob from '../../assets/shortbob.jpg'
import morena from '../../assets/morenailuminada.jpg'
import tratamento from '../../assets/tratamento.jpg'

const CarouselPersonal = () => {
    return (
        <Carousel>
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
    )
}

export default CarouselPersonal;