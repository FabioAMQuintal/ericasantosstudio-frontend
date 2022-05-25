import { Tab, Row, Col, ListGroup } from 'react-bootstrap'
import './index.css'

const InfoContent = () => {
    return (
        <div className='main'>
            <div className='main-content'>
            <ListGroup className='fs-5 fw-light m-3 rounded'>
                <ListGroup.Item>
                    <h1>Somos especialistas em</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h4>✨ Morena Iluminada</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h4>💁‍♀️ Loiro</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h4>💁🏻‍♀️ Cortes de Long Bob / Short Bob / Chanel</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h4>👉 Tratamentos Capilares</h4>
                </ListGroup.Item>
            </ListGroup>
            </div>
        </div>
    )
}

export default InfoContent;

/* 
<h1 classNameName='fs-3 fw-light p-3'> Somos especialistas em:</h1>
            <Tab.Container defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <ListGroup classNameName='fs-5 fw-light m-3 rounded'>
                            <ListGroup.Item action href="#morenasiluminadas" variant='light'>
                                Morenas Iluminadas
                            </ListGroup.Item>
                            <ListGroup.Item action href="#loiros" variant='light'>
                                Loiros
                            </ListGroup.Item>
                            <ListGroup.Item action href="#cortes" variant='light'>
                                Cortes de Long Bob / Short Bob / Chanel
                            </ListGroup.Item>
                            <ListGroup.Item action href="#tratamentos" variant='light'>
                                Tratamentos capilares
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content classNameName='fs-5 fw-light m-3'>
                            <Tab.Pane eventKey="#morenasiluminadas">
                                links
                            </Tab.Pane>
                            <Tab.Pane eventKey="#loiros">
                                links
                            </Tab.Pane>
                            <Tab.Pane eventKey="#cortes">
                                Duas coisas que rejuvenescem qualquer cabelo: um bom corte e uma técnica moderna de luzes.

                                Nesse fio, realizamos um corte moderno aliado à técnica de luzes total blond.

                                ✨Essa técnica de iluminação, consiste em mechas que clareiam de 80 a 90% do cabelo, deixando-o praticamente loiro, mas com a raiz natural.

                                Para conquistar esse efeito com naturalidade e sem marcações são feitas mechas na horizontal e na diagonal, o esfumado de raiz e a finalização com o tonalizante no lavatório.
                            </Tab.Pane>
                            <Tab.Pane eventKey="#tratamentos">
                                links
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <br></br>

*/