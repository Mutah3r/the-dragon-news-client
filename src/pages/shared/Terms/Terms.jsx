import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Our Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quaerat, ab esse itaque doloremque pariatur incidunt. Rem dolor accusantium vitae quo sunt, soluta dolorum labore excepturi tempora facilis tempore. Odit vel error laudantium, officia repellat atque sint. Modi, at reprehenderit?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;