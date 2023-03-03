import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'


const Home: NextPage = () => {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState < string | null> (null);
  const handleClick = async ()=>{
    await axios.post('http://localhost:8080/api/v1/chat',{prompt})
    .then((res)=>{setResponse(res.data)})
    .catch((err)=>{console.log(err)})
  };

  return (
   <div className=' w-screen h-screen flex items-center justify-center p-24'>
    <Head>
        <title>Chat Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='w-full py-6 bg-[#1b2439] flex items-center justify-center  rounded-lg shadow-sm gap-6 flex-col '>
      <div className=' w-4/5 py-2   rounded-lg bg-[#232e47] flex items-center justify-center gap-1 shadow-md '>
        <input className='w-full h-full bg-transparent text-[#fbfbfb] font-semibold border-none outline-none ml-3' type='text' title='text' placeholder='Ask Anything to Ai....!'  onChange={(e)=>setPrompt(e.target.value)} value={prompt}/>
        <button className='border-none outline-none py-3 w-28 font-medium bg-[#161d2f] text-[#fbfbfb] rounded-md cursor-pointer transition ease-in-out mr-3 active:transform' onClick={handleClick}>Ask AI</button>
      </div>
      <div className='w-4/5 py-2 h-44 animate-pulse   rounded-lg bg-[#232e47] flex items-center justify-center gap-1 shadow-md '>
      <p className=' text-base font-semibold text-[#fbfbfb]'> {response} </p>
      </div>
    </div>
   </div>
  )
}

export default Home
