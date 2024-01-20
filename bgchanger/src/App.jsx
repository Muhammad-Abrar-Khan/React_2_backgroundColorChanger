import { useState } from 'react'

function App() {
  const [color,setColor]=useState("aqua")

  return (
<div className="fixed w-full h-full flex justify-center items-center"
style={{backgroundColor:color}}>
      <div className="App w-1/2 fixed flex justify-center items-center gap-4 bg-gray-500 py-2.5  px-4 rounded">
          <button className=" text-white font-bold py-2 px-4 rounded" onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>
            Red
          </button>
          <button className=" text-white font-bold py-2 px-4 rounded" onClick={()=>setColor("green")} style={{backgroundColor:"green"}}>
            Green
          </button>
          <button className=" text-white font-bold py-2 px-4 rounded" onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>
            Blue
          </button>
          <button className=" text-white font-bold py-2 px-4 rounded" onClick={()=>setColor("orange")} style={{backgroundColor:"orange"}}>
            Orange
          </button>
          <button className=" text-white font-bold py-2 px-4 rounded" onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow"}}>
            Yellow
          </button>
        </div>
    </div>
 
  );
}

export default App;
