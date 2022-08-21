import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-stars";

const MovieCard = ({ movie, }) => {
    return (
        <div>
            <Card style={{ width: '19rem',  display: 'flex', justifyContent:'space-between' , flexWrap:'wrap' , marginLeft: '50px'}} className="mx-4 my-3">
                <Card.Img variant="top" src={movie.url} style={{ height: "500px" }} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            isHalf={true}
                            value={movie.rate}
                            edit={false}
                        />
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
