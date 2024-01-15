import React from 'react'
import './relatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
    return (
        <div className="relatedproducts">
            <h1>Related products</h1>
            <hr />
            <div className="relatedproducts-item">
                {data_product.map((item, i) => {
                    return <Item onClick={window.scrollTo(0, 0)} key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default RelatedProducts