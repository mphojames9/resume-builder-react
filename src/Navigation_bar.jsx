import {Button, Container, Navbar, Modal} from 'react-bootstrap'

function NanBarComponent(){

    return (
        <Navbar expand='sm'>
            <Navbar.Brand href='/'>Shopping Store</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Button>Cart 0 Iteams</Button>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default NanBarComponent