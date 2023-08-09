import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({products = []}) => {
  return (
    <section className="text-gray-600 body-font mx-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
         {console.log(products, 'product')}
        {
            
            products.map((product) => {
                console.log(product, 'product')
                const {id, title, price, description, category, thumbnail} = product;
                return (
                  <Link to={`http://localhost:3000/products/${id}`} className="lg:w-1/4 mx-10 my-5 bg-white px-5 py-5 w-full border-spacing-4 border border-opacity-50 rounded-lg shadow-md border-secondary">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt={title}
                        className="object-contain object-center w-full h-full block"
                        src={thumbnail}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {title}
                      </h2>
                      <p className="mt-2 text-xl">${price}</p>
                    </div>
                  </Link>
                )
            })
        }
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
