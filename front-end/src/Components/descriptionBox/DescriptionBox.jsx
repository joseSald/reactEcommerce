import React from 'react'
import './descriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">reviews(122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem repudiandae possimus fugiat voluptatibus magnam temporibus numquam ducimus earum, dolorum culpa rem, deleniti minus saepe id aperiam, iste ipsa quisquam distinctio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis cum sit omnis, praesentium veniam, consequuntur deleniti atque eveniet labore soluta! Nesciunt dolor hic provident, omnis officiis iure libero velit.</p>
            </div>
        </div>
    )
}

export default DescriptionBox