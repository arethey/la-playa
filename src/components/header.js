import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/components/header.css"

import { Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => {
  return (
    <header id="home">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="https://static.wixstatic.com/media/60a143_0c01a3dc48984d2aa1e22282a99289f6~mv2.jpg/v1/fill/w_120,h_50,al_c,q_80,usm_0.66_1.00_0.01/60a143_0c01a3dc48984d2aa1e22282a99289f6~mv2.webp"
            className="img-fluid"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#rooms">Rooms</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#home">
          <img
            src="https://static.wixstatic.com/media/60a143_0c01a3dc48984d2aa1e22282a99289f6~mv2.jpg/v1/fill/w_120,h_50,al_c,q_80,usm_0.66_1.00_0.01/60a143_0c01a3dc48984d2aa1e22282a99289f6~mv2.webp"
            className="img-fluid"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#rooms">
                Rooms
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
      <div className="container">
        <div className="row">
          <div
            className="col-md-8 mt-5 mt-md-0 content d-flex flex-column justify-content-center"
            data-aos="fade-right"
          >
            <h1 className="logo display-1 mb-0">LA PLAYA ESTRELLA</h1>
            <h5 className="mb-0">AN ESCAPE TO YOUR OWN OASIS</h5>
          </div>
          <div className="col-md-4 my-5 my-md-0" data-aos="fade-left">
            <div className="bg-light p-3">
              <form>
                <div className="form-group">
                  <label htmlFor="checkIn">Check In</label>
                  <input type="date" className="form-control" id="checkIn" />
                </div>
                <div className="form-group">
                  <label htmlFor="checkOut">Check Out</label>
                  <input type="date" className="form-control" id="checkOut" />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="adults">Adults</label>
                    <input type="number" className="form-control" id="adults" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="kids">Kids</label>
                    <input type="number" className="form-control" id="kids" />
                  </div>
                </div>
                <button type="submit" className="btn bg-main-color btn-block">
                  Reserve
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
