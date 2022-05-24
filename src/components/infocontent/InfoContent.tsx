import { Tab, Row, Col, ListGroup } from 'react-bootstrap'

const InfoContent = () => {
    return (
        <div>
            <h1 className='text-center fs-3 fw-light m-l-10'> Somos especialistas em</h1>
            <br></br>
            <Tab.Container defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <ListGroup className='fs-5 fw-light m-3' variant='flush'>
                            <ListGroup.Item action href="#morenasiluminadas" className="bg-secondary text-white">
                                Morenas Iluminadas
                            </ListGroup.Item>
                            <ListGroup.Item action href="#loiros" className="bg-secondary text-white">
                                Loiros
                            </ListGroup.Item>
                            <ListGroup.Item action href="#cortes" className="bg-secondary text-white">
                                Cortes de Long Bob / Short Bob / Chanel
                            </ListGroup.Item>
                            <ListGroup.Item action href="#tratamentos" className="bg-secondary text-white">
                                Tratamentos capilares
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content className='fs-5 fw-light m-3'>
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
        </div>
    )
}

export default InfoContent;