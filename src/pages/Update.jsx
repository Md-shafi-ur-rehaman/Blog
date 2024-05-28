import { useState } from "react";
import { useNavigate, useParams, Link  } from "react-router-dom";
import useFetch from "../Hooks/useFetch";


function Update({article}){

    const navigateTo = useNavigate();
    const [isPending, setIsPending] = useState(false);

    const [title, setTitle] = useState(article.title);
    const [content, setContent] = useState(article.content);
    const [cover_image, setCover_image] = useState(article.cover_image);


    const handleSubmit = async (e) =>{
        e.preventDefault();
        const last_updated_date = new Date().toISOString();
        const blog ={title,content,cover_image,last_updated_date};
        setTitle('');
        setContent('');
        setCover_image('')
        setIsPending(true);
        try{
          const response = await fetch(`http://localhost:3000/blogs/${article.id}`,{
            method:'PUT',
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
          });

          if(!response.ok){
            throw new Error()
          }
          setIsPending(false);
          navigateTo("/");
        }
        catch(error){
          console.log(error);
        }
    }

    return(
        <div className="w-full bg-indigo p-8 ">
          <div className="w-full">
            <h1 className="text-center font-bold text-2xl mb-6">Update blog</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col sm:px-20 md:px-30 lg:px-80">
                <label htmlFor="">Blog title</label>
                <input
                    className="border rounded-md p-2 mb-2"
                    type="text"
                    name="title"
                    id="title"
                    required
                    placeholder="Title here.."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="">Blog body</label>
                <textarea
                    className="border rounded-md p-2 mb-2"
                    name="body"
                    id="body"
                    cols="30"
                    rows="10"
                    required
                    placeholder="Blog body here.."
                    value={content}
                    onChange={(e)=> setContent(e.target.value)}
                ></textarea>
                <label htmlFor="">Blog cover image</label>
                <input
                    className="border rounded-md p-2 mb-2"
                    type="text"
                    name="title"
                    id="title"
                    required
                    placeholder="Title here.."
                    value={cover_image}
                    onChange={(e) => setCover_image(e.target.value)}
                />
                { !isPending
                  ?
                  <button onClick={handleSubmit} className="border rounded-md p-2 bg-black text-white cursor-pointer">Update</button>
                  :
                  <button className="border rounded-md p-2 bg-black text-white" disabled>Updating blog...</button>
                }
            </form>
          </div>
        </div>
    )
}

export default Update;
