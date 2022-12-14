import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap"

const AddMovie = ({ handleAdd }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [rate, setRate] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            title,
            url,
            rate,
        };
        handleAdd(newMovie);
    }

    return (
        <div className="adding-movie">
            <Button variant="primary" onClick={handleShow}>
                Add Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        TITLE:
                        <input type="text" className="form-control" placeholder="enter title here" onChange={(e) => setTitle(e.target.value)} value={title} />
                        URL:
                        <input type="url" className="form-control" placeholder="enter url here" onChange={(e) => setUrl(e.target.value)} value={url} />
                        RATE:
                        <input type="text" className="form-control" placeholder="enter rate here" onChange={(e) => setRate(e.target.value)} value={rate} />
                        <Button variant="primary" type="submit">
                            SUBMIT
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddMovie
