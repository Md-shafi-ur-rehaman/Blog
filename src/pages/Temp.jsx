import { Link } from "react-router-dom";

function Temp(props){
  return(
    <div className="w-full h-[70vh] px-8 py-5 flex justify-center items-center">
      <div className="">
        <h1 className="font-bold">{props.data}</h1>
        <Link to="/" className="cursor-pointer">Back to Home page</Link>
      </div>
    </div>
  )
}

export default Temp;
