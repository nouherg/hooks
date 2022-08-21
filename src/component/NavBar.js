import React from 'react'
import { Navbar, FormControl } from 'react-bootstrap'
import ReactStars from "react-stars";

const NavBar = ({ title, handleChange, rate, ratingChanged }) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <div className="related_links">
                    <ul className="menu">
                    </ul>
                </div>
                <div>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        onChange={handleChange}
                        value={title}
                    />
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                        isHalf={true}
                        value={rate}
                    />
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar