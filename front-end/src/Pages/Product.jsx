import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/breadcrums/Breadcrum'
import ProductDisplay from '../Components/productDisplay/ProductDisplay'
import DescriptionBox from '../Components/descriptionBox/DescriptionBox'
import RelatedProducts from '../Components/relatedProducts/RelatedProducts'

const Product = () => {
    const { all_products } = useContext(ShopContext)
    const { productId } = useParams();
    const product = all_products.find((e) => e.id === Number(productId))
    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
}

export default Product