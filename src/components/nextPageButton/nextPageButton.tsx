import React from 'react'

import "./nextPageButton.scss";

const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    // alert ("next page!")
}

const NextPageButton = () => {
    return (
        <div className='next-page-button' onClick={handleClick}>
            <div className='next-page-button__upper-part'/>
            <span className='next-page-button__lower-part'>show next page</span>
        </div>
    );
}

export default NextPageButton;