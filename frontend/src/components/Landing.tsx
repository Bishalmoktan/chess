import { Link } from "react-router-dom"
import board from "../assets/board.png"

const Landing = () => {
  return (
    <div className="py-8">
      <h1 className="text-white text-4xl font-bold text-center mb-8">Wanna play chess?</h1>
      <div className="flex gap-2 justify-center">
        <div>
        <img src={board} alt="Chess board" className="size-[600px]" />
        </div>
        <div>
          <h2 className="text-white text-xl">Start playing with others</h2>
         <Link to="/game"> <button className="bg-green-500 text-white py-2 px-6 rounded-md ">Play</button></Link>
        </div>
      </div>
    </div>
  )
}
export default Landing