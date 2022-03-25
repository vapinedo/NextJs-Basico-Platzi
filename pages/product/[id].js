import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
    const router = useRouter();
    console.log(router)
    return (
        <div>
            <h3>Product item: {router.query.id}</h3>
        </div>
    )
}

export default ProductItem