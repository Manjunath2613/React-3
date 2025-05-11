import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`)
        if (!response.ok) throw new Error('Product not found')
        const data = await response.json()
        setProduct(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) return <div>Loading product details...</div>
  if (error) return <div>Error: {error}</div>
  if (!product) return <div>Product not found</div>

  return (
    <div>
      <h2>Product Details</h2>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/products" style={{ color: '#0066cc', textDecoration: 'none' }}>
          ← Back to Products
        </Link>
      </div>
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '20px',
        maxWidth: '500px',
        backgroundColor: '#f9f9f9'
      }}>
        <h3 style={{ marginTop: 0 }}>{product.ProductName}</h3>
        <p><strong>ID:</strong> {product.id}</p>
        <p><strong>Description:</strong> {product.Description}</p>
        <p><strong>Quantity in Stock:</strong> {product.Quantity}</p>
        <p><strong>Price:</strong> ${product.Price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductDetail