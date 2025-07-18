import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, Links, useLocation } from 'react-router-dom'
import { ProductContext } from "../utils/Context";
import Loading from './Loading';
import axios from '../utils/axios';




const Home = () => {
    const [products] = useContext(ProductContext);
    const {search}= useLocation();
    const category = decodeURIComponent(search.split("=")[1]);
    const [filterproducts, setfilterproducts] = useState(null)

    const getproductcategory = async ()=>{
        try {
            const {data} = await axios.get(`/products/category/${category}`);
            setfilterproducts(data)
            
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(()=>{
        
        if (!filterproducts || category =="undefined")
             setfilterproducts(products);
        if (category !="undefined") {

         setfilterproducts(products.filter((p) => p.category == category));

            // getproductcategory()

            }
    },[category,products])


    return ( products ?
        < >
            <div className='h-screen w-screen flex'>
                <Navbar />


                <div className='h-full w-[85%]  p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
                    {filterproducts && filterproducts.map((p, i) => (
                        <Link 
                        key={p.id}
                        to={`/details/${p.id}`}
                         className='card mr-3 mb-3  p-3 border shadow rounded w-[18%] h-[40vh] flex-col flex items-center justify-center '>

                        <div className='w-[70%] hover:scale-110 h-[80%] bg-contain bg-no-repeat bg-center  mb-3'
                            style={{ backgroundImage: `url(${p.image})` }}>

                        </div>
                        <h1 className='hover:text-blue-700 '> {p.title}</h1>

                    </Link>
                ))}

                </div>

            </div>
        </>:<Loading/>
        

    )

}

export default Home