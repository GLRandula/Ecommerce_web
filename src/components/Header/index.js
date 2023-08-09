import React from 'react'
import { Link } from 'react-router-dom';

const navigation = [
  {
    name : 'HOME',
    path : '/'
  },
  {
    name : 'PRODUCTS',
    path : '/products'
  }
]

const Header = () => {
  return (
    <header className="text-yellow-300 body-font">
      <div className="container bg-slate-950 mx-30 flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex mx-20 cursor-pointer title-font font-medium items-center text-yellow-500 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-bold text-white">FRONZOR</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap mr-10 items-center text-base justify-center">
          {
            navigation.map((navigation) => {
              return (
                  <Link to={navigation.path} className="mr-14 text-lg font-bold hover:text-yellow-500">{navigation.name}</Link>
              )
            })
          }
          {/* <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
        </nav>
        <Link to={'/cart'} className="inline-flex items-center mr-24 text-white bg-yellow-500 border-0 py-3 px-4 focus:outline-none hover:bg-yellow-600 rounded text-base mt-4 md:mt-0">
          Go to Cart
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;
