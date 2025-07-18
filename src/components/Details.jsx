import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
// import axios from '../utils/axios'
import Loading from './Loading'

const Detals = () => {
   const navgate=useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [product, setproduct] = useState(null)
  const {id}= useParams();
  
  //  const getsingleproduct=async()=>{
  //   try {
  //     const{data}=await axios.get(`/products/${id}`);
  //     setproduct(data);
      
  //   } catch (error) {
  //     console.log(error)
      
  //   }
  //  };
   useEffect(() =>{
    if(!product){
      setproduct(products.filter((p)=>p.id == id ) [0])

    
    }
    // getsingleproduct();
   })

   const Productdeletehandler = ()=>{
    const filteredproducts= products.filter((p) => p.id !==id);

    setproducts(filteredproducts);
    localStorage.setItem("products",JSON.stringify(filteredproducts));
    navgate("/");
   

   }



  return ( product ?
    <div className='w-[80%] h-full m-auto p-[10%] flex items-center  py-[10%] px-[5%]' >
      <img className='w-[60%] h-[100%]  object-contain mr-8'
        src={`${product.image}`} alt="" />
      <div className='content  w-[60%] mr-[5%]'>
        <h1 className='text-3xl'>{product.title}</h1>
        <h3 className='text-zinc-400 my-3'>{product.category}</h3>
        <h2 className='text-red-500'>{product.price}</h2>
        <p className='mb-8 mt-3'>{product.description}</p>
        <Link to={`/edit/${product.id}`} className=' py-2 px-5 border rounded border-blue-700 bg-blue-600 text-white'>Edit</Link>
        <button  onClick={ ()=> Productdeletehandler (product.id)} className=' py-2 px-5 border rounded border-red-400 bg-red-500 text-black-300 ml-5'>Delete</button>
      </div>
    </div> :<Loading/>
  )
}

export default Detals