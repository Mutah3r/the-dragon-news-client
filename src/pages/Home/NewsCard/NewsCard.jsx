import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const NewsCard = ({ news }) => {
    const { _id, title, author, details, image_url, total_view, rating } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='bg-light d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ms-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author.published_date).format("yyyy-mm-D")}</small></p>
                </div>
                <div>
                    <FaRegBookmark className='me-2' />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ?
                        <>{details}</>
                        : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1 d-flex align-items-center'>
                    
                    <Rating 
                        style={{ maxWidth: 100 }} 
                        value={rating.number}
                        readOnly 
                    />
                    <span className='ms-2'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-1' /> <>{total_view}</>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;