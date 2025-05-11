import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products')
        if (!response.ok) throw new Error('Network response was not ok')
        const data = await response.json()
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) return <div>Loading products...</div>

  return (
    <div>
      <h2>Products List</h2>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>ID</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Product</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Stock</th>
            <th style={{ padding: '12px', border: '1px solid #ddd' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{product.id}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                <Link to={`/products/${product.id}`} style={{ color: '#0066cc', textDecoration: 'none' }}>
                  {product.ProductName}
                </Link>
              </td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{product.Quantity}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>${product.Price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products