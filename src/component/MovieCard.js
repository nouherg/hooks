import React from "react";
import { Button , Card } from "react-bootstrap";
import { Link } from "react-router-dom";
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
                    <div className="d-flex justify-content-around">
                       <Link to='/trailer'  target="_blank">
                       <Button variant="primary">
                        more details
                       </Button>
                       </Link>
                       <div>
        <Button className='button' variant="primary"
                       type="button"
                       onClick={(e) => {
                         e.preventDefault();
                         window.location.href=`${movie.trailer}`; 
                         }}> watch the trailer 
       </Button>
    </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
