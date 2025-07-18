import React, { useContext, useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { ProductContext } from '../utils/Context';
import {  nanoid} from "nanoid";
import { toast } from 'react-toastify';

const Create = () => {
     const navigate =  useNavigate();
      const [products, setproducts] = useContext(ProductContext)

    const [title, settitle] = useState("");
    const [image, setimgea] = useState("");
    const [category, setcategory] = useState("");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");
     const addproducthandler=(e) =>{
        e.preventDefault();
         if(title.trim().length < 5 ||
          image.trim().length < 5 || 
          category.trim().length < 5 ||
           price.trim().length < 1 || 
         description.trim().length < 5
         ){
            alert("Each and every input must have atleast 4 characters");
            return;
        }


        const product={         
            id:nanoid(),
            title,
            image,
            category,
            price,
            description
        };
        setproducts([...products,product]);
        localStorage.getItem(
            "products",
            JSON.stringify([...products,product])

            );
            toast.success("product Added successfully")
        navigate("/");
        
        
     }
    return (
        <form 
          onSubmit={addproducthandler}
         className='p-[5%] w-screen h-screen flex flex-col items-center'>
            <h1 className=' mb-5 w-1/2 text-3xl'>Add New Product</h1>
            <input type="url"
                placeholder='image link'
                className='text-1xl bg-zinc-100 p-3 w-1/2 rounded mb-3 '
                onChange={(e) => setimgea(e.target.value)}
                value={image}
            />
            <input type="text"
                placeholder='title'
                className='text-1xl bg-zinc-100 p-3 w-1/2 rounded mb-3 '
                onChange={(e) => settitle(e.target.value)}
                value={title}
            />
            <div className='w-1/2 flex items-center justify-between'>
                <input type="text"
                    placeholder='category'
                    className='text-1xl bg-zinc-100 p-3 w-[48%] rounded mb-3 '
                    onChange={(e) => setcategory(e.target.value)}
                    value={category}
                />
                <input type="number"
                    placeholder='Price'
                    className='text-1xl bg-zinc-100 p-3 w-[48%] rounded mb-3 '
                    onChange={(e) => setprice(e.target.value)}
                    value={price}
                />


            </div>
            <textarea
                onChange={(e) => setdescription(e.target.value)} placeholder='Enter product description here..'
                value={description}
                className='text-1xl bg-zinc-100 p-3 w-1/2 rounded mb-3 '
                rows="10">

            </textarea>
            <div className='w-1/2'>
                <button className=' py-2 px-5 border rounded border-red-200 text-white bg-red-500'>

                    Add New Product
                </button>

            </div>

        </form>
    )
}

export default Create