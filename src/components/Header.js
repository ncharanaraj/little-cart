import { Container, FormControl, Nav, Navbar, Dropdown, Badge, Button } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import './Styles.css'

const Header = () => {

   const {
        state: {cart},
        dispatch
    } = CartState()

  return (
    <Navbar bg='dark' variant='dark' style={{ height
    : 80 }}>
        <Container>
            <Navbar.Brand>
                <Link to='/'>Little Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl type="search"
              placeholder="Search" className='m-auto' style={{ width: 500 }}/>
            </Navbar.Text>
            <Nav>
                <Dropdown align="end">
                    <Dropdown.Toggle variant="success">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge className="mx-1">{cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ minWidth: 370 }} >

                        {cart.length > 0 ? (
                            <>
                                {
                                    cart.map((prod) => (
                                        <span className='cartItem' key={prod.id}>
                                            <img
                                                src={prod.image}
                                                className='cartItemImage'
                                                alt={prod.name}
                                            />
                                            <div className='cartItemDetails'>
                                                <span>{prod.name}</span>
                                                <span>₹ {prod.price.split(".")[0]}</span>
                                            </div>
                                            <AiFillDelete
                                                fontSize="20px"
                                                style={{ cursor: 'pointer'}}
                                                onClick={() =>
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: prod
                                                })}
                                            />
                                        </span>
                                    ))
                                }
                                <Link to='/cart'>
                                    <Button style={{margin: "0 10px",  width: "95%"}}>Go To Cart</Button>
                                </Link>
                            </>
                        ) : (
                            <span style={{ padding: 10 }}>Cart is Empty!</span>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header;