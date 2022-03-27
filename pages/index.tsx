import React from 'react'
import Navbar from '@components/Navbar/Navbar'

const apiUrl = '/api/avo'

const Home = () => {

  const [productList, setProductList] = React.useState<TProduct[]>([])

  React.useEffect(() => {
    window.fetch(apiUrl)
      .then(response => response.json())
      .then(({ data, dataLength }) => setProductList(data))
  }, []);
  
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>

      {productList.map(product => (
        <div key={product.id}>{product?.name }</div>
      ))}
    </div>
  )
}

export default Home