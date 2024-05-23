import React from "react";
import {useState} from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { Update } from "./index";

function Article(){
    const [isDeletePending, setIsDeletePending]= useState(false);
    const [isUpdatePending, setIsUpdatePending]= useState(false);

    let navigateTo = useNavigate();
    const {id} = useParams();
    const {data : article, isLoading, error} = useFetch(`http://localhost:3000/blogs/${id}`);

    const handleDelete = async () => {
      setIsDeletePending(true);
      try{
        const response = await fetch(`http://localhost:3000/blogs/${article.id}`,{
          method:'DELETE'
        });
        console.log('deleted blog');
        setIsDeletePending(false);
        navigateTo("/");
      }
      catch(error){
        console.log(error);
      }
    }

    return(
        <div className="w-full pb-10 bg-[#f9f9f9]">
            <div className="max-w-[1240px] mx-auto">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div> }
                {!isUpdatePending && article &&
                <article className="grid lg:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1
                gap-8  px-4 pt-5 lg:pt-8 text-black">

                    <div className="sm:col-span-2 ">
                        <img src={article.coverImg} alt="img" className="h-56 w-full object-cover" />
                        <h1 className="font-bold text-2xl my-1 pt-5">{article.title}</h1>
                        <div className="pt-5">
                            <p className="text-lg font-normal indent-8	text-justify antialiased">{article.body}</p>
                        </div>
                    </div>

                    <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]">
                        <div>
                            <img src={article.authorPic} alt="" className="p-2 w-32 h-32 rounded-full mx-auto object-cover"/>
                            <h1 className="font-bold text-2xl text-center text-gray-900 pt-3">{article.authorName}</h1>
                            <p className="text-center text-gray-900 font-medium">{article.authorTagline}</p>
                        </div>
                    </div>
                    { !isDeletePending ?
                      <button
                      className="px-4 py-2 rounded-lg border bg-red-700	text-white cursor-pointer"
                      onClick={handleDelete}>Delete Blog</button>
                      :
                      <button disabled
                      className="px-4 py-2 rounded-lg border bg-red-700	text-white cursor-pointer"
                      >Delete Blog...</button>
                    }
                    <button className="px-4 py-2 rounded-lg border bg-indigo-700	text-white cursor-pointer"
                      onClick={()=>setIsUpdatePending(!isUpdatePending)}>Update Blog</button>
                </article>}

                { isUpdatePending && <Update article={article}/>}

            </div>
        </div>
    )
}

export default Article;
