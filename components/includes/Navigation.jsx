"use client"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SlMagnifier } from "react-icons/sl";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="tw-bg-[transparent!important] tw-mt-5">
      <div className='container'>
        <Navbar.Brand href="#home">Hairchat.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div 
            className="d-flex tw-border tw-border-gray-200 tw-border-solid tw-bg-white tw-rounded-lg tw-items-center tw-max-w-[300px!important]"
          >
            <span className='tw-pl-2'>
              <SlMagnifier className='tw-text-gray-300' />
            </span>
            <input type="text" className="form-control tw-bg-[transparent] tw-border-[transparent!important] search-input" placeholder='Search domain' />
          </div>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#home">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation