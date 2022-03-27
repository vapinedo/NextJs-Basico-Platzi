import React from 'react'
import { useRouter } from 'next/router'

const apiUrl = '/api/avo/'

const ProductItem = () => {

    const [product, setProduct] = React.useState<TProduct>()
    const { query: { id } } = useRouter()

    React.useEffect(() => {
        if (id) {
            window 
                .fetch(apiUrl + id)
                .then(res => res.json())
                .then(data => setProduct(data))
        }
    }, [id])

    return (
        <div>
            <h3>Product item: {product?.name}</h3>
        </div>
    )
}

export default ProductItem