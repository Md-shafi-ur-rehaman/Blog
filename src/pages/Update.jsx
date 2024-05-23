import { useState } from "react";
import { useNavigate, useParams, Link  } from "react-router-dom";
import useFetch from "../Hooks/useFetch";


function Update({article}){

    const navigateTo = useNavigate();
    const [isPending, setIsPending] = useState(false);

    const [title, setTitle] = useState(article.title);
    const [body, setbody] = useState(article.body);
    const [coverImg, setCoverImg] = useState(article.coverImg);
    const [authorName, setAuthorName] = useState(article.authorName);


    const handleSubmit = async (e) =>{
        e.preventDefault();

        const blog ={title,body,coverImg,authorName}
        setTitle('');
        setbody('');
        setAuthorName('');
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
                    value={body}
                    onChange={(e)=> setbody(e.target.value)}
                ></textarea>
                <label htmlFor="">Blog cover image</label>
                <input
                    className="border rounded-md p-2 mb-2"
                    type="text"
                    name="title"
                    id="title"
                    required
                    placeholder="Title here.."
                    value={coverImg}
                    onChange={(e) => setCoverImg(e.target.value)}
                />
                <label htmlFor="">Select author name</label>
                <div className="flex justify-between">
                    <select
                        className="border rounded-md p-2 w-[80%] "
                        name="authorName"
                        id=""
                        value={authorName}
                        onChange={(e)=> setAuthorName(e.target.value)}
                    >
                        <option value='jonh doe'>john doe</option>
                        <option value='alexa'>alexa</option>
                    </select>
                    { !isPending
                      ?
                      <button onClick={handleSubmit} className="border rounded-md p-2 bg-black text-white cursor-pointer">Update</button>
                      :
                      <button className="border rounded-md p-2 bg-black text-white" disabled>Updating blog...</button>
                    }
                </div>

            </form>
          </div>
        </div>
    )
}

export default Update;
