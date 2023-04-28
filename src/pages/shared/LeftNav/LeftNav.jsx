import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-dragon-news-server-mutah3r.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, []);

    return (
        <div className='sticky-top'>
            <h4>All Categories</h4>
            <div className='ps-4'>
                {
                    categories.map(category => {
                        return (
                            <p key={category.id}>
                                <Link to={`category/${category.id}`} className='text-secondary text-decoration-none'>{category.name}</Link>
                            </p>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default LeftNav;