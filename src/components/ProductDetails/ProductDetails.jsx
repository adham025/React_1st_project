import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';

export default function ProductDetails() {

    let {id} = useParams();
    const[details,setDetails] = useState(null); 

    async function getProduct(){
     let {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
     setDetails(data);
    }

    useEffect(()=>{
        getProduct()
    },[])

  return (
    <div className='row my-5'>
        {details? <>
            <div className='col-md-4'>
    <img src={details.image} className='w-100' alt=''/>
        </div>
        <div className="col-md-8">
            <h1>{details.title}</h1>
            <p>{details.description}</p>
            <span>{details.category}</span>
            <div className="d-flex justify-content-between">
          <p>{details.price}</p>
          <p>
            {details.rating.rate}
            <i className="fa fa-star text-warning"></i>
          </p>
        </div>
        </div>
        </> : <Loader/>}
    </div>
  )
}
