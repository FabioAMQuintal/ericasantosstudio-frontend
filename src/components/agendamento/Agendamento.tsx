import { Button } from 'react-bootstrap'

const Agendamento = () => {
    return (
        <div className="d-flex flex-column justify-content-center p-3">
            <Button variant='success' href='https://api.whatsapp.com/send?phone=5511952946085' target='_blank' rel="noreferrer">
                AGENDAMENTOS VIA WHATSAPP
            </Button>
            <div className='d-flex justify-content-center'>
                <p>
                    Estamos localizados na Zona Sul de SP! 
                    <br />
                    <br />
                    <a href='https://goo.gl/maps/5BhB3yrGXXAzUXEU7' target='_blank' rel="noreferrer"><strong>Rua Dolcinópolis, 145 | São Paulo - SP</strong></a>
                    <br />

                </p>
            </div>

        </div>
    )
}

export default Agendamento;