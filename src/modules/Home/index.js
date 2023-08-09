import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero';
import Products from '../../components/ProductCard';
import FeatureCard from '../../components/FeatureCard';
import Categories from '../../components/Categories';
import StatCard from '../../components/StatCard';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';

function Home() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch('https://dummyjson.com/products?limit=12')
        const data = await response.json()
        console.log(data)
        setProducts(data.products)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <Hero />
      <Categories />
      <h2 className='text-5xl font-bold text-center mt-20'>Top Products</h2>
      {
        products.length > 0 ?
        <ProductCard products = {products} />
        :
        <div>Loading....</div>
      }
      
      {/* <StatCard /> */}
      <Footer />
    </div>
  )
}

export default Home;
