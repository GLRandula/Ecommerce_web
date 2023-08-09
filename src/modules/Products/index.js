import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import Categories from '../../components/Categories';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(20);
    const [totalProducts, setTotalProducts] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
       const fetchProducts = async () => {
        const response = await fetch(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${(currentPage - 1) * productsPerPage}`);
        const data = await response.json();
        setProducts(data.products);
        setTotalProducts(data.total);
       };
       fetchProducts();
    }, [currentPage]);

    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const handleSearch = async () => {
      if (searchQuery.trim() === '') {
          return;
      }

      const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
      const data = await response.json();
      setProducts(data.products);
      setTotalProducts(data.total);
      setCurrentPage(1); 
  };
   return (
        <div>
          <Categories />
          <div className="flex flex-col text-center w-full mt-20">
            <h2 className="text-xs text-orange-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
          </div>
          <div className="flex items-center justify-center mt-4">
                <input
                    type="text"
                    placeholder="Search products"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 px-4 py-2 border rounded-l-lg focus:outline-none"
                />
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 bg-gray-800 text-white rounded-r-lg hover:bg-gray-950 focus:outline-none"
                >
                Search
                </button>
            </div>
          {products.length > 0 ? (
            <>
              <ProductCard products={products} />
              <div className="flex justify-center mt-4">
                {pageNumbers.map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`px-3 py-2 mx-1 mb-6 bg-yellow-400 hover:bg-yellow-600 text-black rounded-lg visited:bg-gray-950 visited:text-white 
                    ${currentPage === pageNumber ?'bg-blue-700' : ''}`}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div>Loading.....</div>
          )}
        </div>
    );
};

export default Products;

// import React, { useEffect, useState } from 'react';
// import ProductCard from '../../components/ProductCard';
// import Categories from '../../components/Categories';


// const Products = () => {

//     const [products, setProducts] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [productsPerPage] = useState(20);
//     const [totalProducts, setTotalProducts] = useState(0);
//     const [searchQuery, setSearchQuery] = useState('');

//     useEffect(() => {
//        const fetchProducts = async () => {
//         const response = await fetch('https://dummyjson.com/products')
//         const data = await response.json()
//         setProducts(data.products)
//        }
//     fetchProducts()
//     }, [currentPage]);
   
//     const totalPages = Math.ceil(totalProducts / productsPerPage);

//     const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

//     const handleSearch = async () => {
//       if (searchQuery.trim() === '') {
//           return;
//       }

//       const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
//       const data = await response.json();
//       setProducts(data.products);
//       setTotalProducts(data.total);
//       setCurrentPage(1); 
//   };

//     return (
//       <div>
//         <div className="flex items-center justify-center mt-4">
//           <input
//             type="text"
//             placeholder="Search products"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-64 px-4 py-2 border rounded-l-lg focus:outline-none"
//           />
//           <button
//             onClick={handleSearch}
//             className="px-4 py-2 bg-gray-700 text-white rounded-r-lg hover:bg-gray-950 focus:outline-none"
//           >
//             Search
//           </button>
//         </div>
//         <Categories />
//         <div className="flex flex-col text-center w-full mt-20">
//           <h2 className="text-xs text-orange-500 tracking-widest font-medium title-font mb-1">
//             PRODUCTS
//           </h2>
//           <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
//             ALL PRODUCTS
//           </h1>
//         </div>

//         {products.length > 0 ? (
//           <>
//             <ProductCard products={products} />
//             <div className="flex justify-center mt-4">
//               {pageNumbers.map((pageNumber) => (
//                 <button
//                   key={pageNumber}
//                   onClick={() => setCurrentPage(pageNumber)}
//                   className={`px-3 py-2 mx-1 mb-6 bg-gray-700 hover:bg-gray-950 text-white rounded-lg ${
//                     currentPage === pageNumber ? "bg-blue-700" : ""
//                   }`}
//                 >
//                   {pageNumber}
//                 </button>
//               ))}
//             </div>
//           </>
//         ) : (
//           <div>Loading.....</div>
//         )}
//       </div>
//     );
    
// }

// export default Products;
