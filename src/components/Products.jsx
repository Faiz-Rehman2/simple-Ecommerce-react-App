import React from 'react';

const Products = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center my-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data ? (
          data.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="max-w-sm max-h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg h-24 w-full object-contain p-2" src={item.image} alt={item.title} />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">RS: {item.price}</p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to Cart
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-xl font-bold text-center col-span-4">Loading..</h1>
        )}
      </div>
    </div>
  );
};

export default Products;
