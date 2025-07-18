import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [products] = useContext(ProductContext);
  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];
  // console.log(distinct_category);
  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()}
    ,${(Math.random() * 255).toFixed()},0.4)`;
  };




  return (
    <div>
      <nav className='w-[115%] h-full bg-[#063970] flex flex-col items-center pt-5'>
        <a className=' py-3 px-5 border text-xl rounded bg-yellow-400  font-bold hover:text-white border-yellow-200 text-black-500'
          href="/create">
          Add New Product
        </a>
        <hr className='w-[90%] pt-3 flex mt-3' />
        <h1 className='text-2xl w-[90%] pl-4 mb-3 text-white font-bold'>Category Filtter</h1>
        <div className=' w-[80%] '>
          {distinct_category.map((c, i) => (
            <Link
              key={i}
              to={`/?category=${c}`}
              className='flex items-center mb-2 hover:text-red-700 text-white rounded bg-[#5282d679] p-3'>
              <span style={{ backgroundColor: color() }} className=' rounded-full mr-2 w-[15px] h-[15px]  '>
              </span>{""} {c}
            </Link>))}


        </div>

      </nav>
    </div>
  )
}

export default Navbar