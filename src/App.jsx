import { useState } from "react"

function App() {
  const [color, setColor] = useState("lavender")

  return (
    <>
      <div className="w-full h-screen duration-200 flex justify-center items-center text-center"
      style={{backgroundColor: color}} >
        <div>
          <h1 className=" text-4xl font-bold text-gray-700 mb-4">Welcome to background color changer 🎨</h1><br/>
          <h2 className=" text-2xl font-semibold text-gray-700">Select any color to change the background</h2>
        </div>
        
        <div className="fixed bottom-0 left-0 right-0 flex flex-wrap justify-center p-4">
          <div className="flex flex-wrap justify-center bg-white rounded-xl p-4 gap-x-8 shadow-md">
            <button onClick={() => setColor("red")}
            className="outline-none py-2 px-4 text-white rounded-3xl shadow-lg"
            style={{backgroundColor: "red"}}>Red</button>

            <button onClick={() => setColor("blue")}
            className="outline-none py-2 px-4 text-white rounded-3xl shadow-lg"
            style={{backgroundColor: "blue"}}>Blue</button>

            <button onClick={() => setColor("green")}
            className="outline-none py-2 px-4 text-white rounded-3xl shadow-lg"
            style={{backgroundColor: "green"}}>Green</button>

            <button onClick={() => setColor("yellow")}           
            className="outline-none py-2 px-4 rounded-3xl shadow-lg"
            style={{backgroundColor: "yellow"}}>Yellow</button>

            <button onClick={() => setColor("orange")}           
            className="outline-none py-2 px-4 rounded-3xl shadow-lg"
            style={{backgroundColor: "orange"}}>Orange</button>

            <button onClick={() => setColor("pink")}
            className="outline-none py-2 px-4 rounded-3xl shadow-lg"
            style={{backgroundColor: "pink"}}>Pink</button>

            <button onClick={() => setColor("purple")}
            className="outline-none py-2 px-4 text-white rounded-3xl shadow-lg"
            style={{backgroundColor: "purple"}}>Purple</button>

            <button onClick={() => setColor("turquoise")}           
            className="outline-none py-2 px-4 rounded-3xl shadow-lg"
            style={{backgroundColor: "turquoise"}}>Turquoise</button>

            <button onClick={() => setColor("teal")}           
            className="outline-none py-2 px-4 text-white rounded-3xl shadow-lg"
            style={{backgroundColor: "teal"}}>Teal</button>

            <button onClick={() => setColor("brown")}           
            className="outline-none py-2 px-4 text-white rounded-3xl shadow-lg"
            style={{backgroundColor: "brown"}}>Brown</button>

            <button onClick={() => setColor("black")}
            className="outline-none py-2 px-4 text-white rounded-3xl shadow-lg"
            style={{backgroundColor: "black"}}>Black</button>

            <button onClick={() => setColor("white")}
            className="outline-none py-2 px-4 rounded-3xl shadow-lg"
            style={{backgroundColor: "white"}}>White</button>
          </div>
        </div>
      </div>      
    </>
  )
}

export default App
