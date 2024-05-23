import {Link} from "react-router-dom";

function BlogBox(props){
  return(
    <Link key={props.index} to={`/blogs/${props.id}`}>
        <div  className="bg-white w-full h-30 rounded-xl overflow-hidden drop-shadow-md">
            <img src={props.coverImg} alt="img" className="h-56 w-full object-cover" />
            <div className="p-5">
                <h3 className="folt-blod text-2xl ">{props.title}</h3>
            </div>
        </div>
    </Link>
  )
}

export default BlogBox;
