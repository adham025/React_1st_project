import React, { useContext, useState } from 'react'
import { CounterContext } from '../../Context/CounterContext'
import { useNavigate } from 'react-router-dom'

export default function Cart() {

const [apiError,setApiError] = useState(null)
let navigate = useNavigate();
let {count, setCount} = useContext(CounterContext)
console.log(count);


async function addToCart(values){
    try {
        setApiError(null);
        let {data} = await axios.post(`https://fakestoreapi.com/carts`, values)
    console.log(data);
    if(data.message == "Added successfully"){
        <div class="alert alert-danger" role="alert">
        Added
      </div>
    }
} catch (error) {
    console.log(error);
    setApiError(error.response.data.message);
  }
}



  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount(Math.random()*10)} className='btn btn-danger'>Change Count</button>
    </div>
  )
}
