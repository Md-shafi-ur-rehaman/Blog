import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import {Temp} from './index';
import {BlogBox} from "../components/index"

function Blogs(){
    const {data : blogs, isLoading, error} = useFetch('http://localhost:3000/blogs');
    const [inputValue, setInputValue] = useState('');

    const article = [];
    if(blogs){

      blogs.forEach((item, i) => {
        console.log('Filter function is running ...');
        if(item.title.toLowerCase().indexOf(inputValue.toLowerCase()) === -1) return;
        article.push(
          <BlogBox id={item.id} title={item.title} coverImg={item.coverImg} index={i} key={i} />
        );
      })

    }

    return(
        <div className="w-full bg-[#f9f9f9] py-[30px]">
            <div className="max-w-[1240px] mx-auto ">
                <div className="w-full flex justify-center items-center my-4">
                  <input type="text"
                      className="border py-2 px-2 w-[25rem] rounded-md"
                      placeholder="Search blog..."
                      value={inputValue}
                      onChange={ (e) => setInputValue(e.target.value)}
                  />
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ss:grid-cols-1  gap-8 px-4 text-black">
                    {isLoading && <Temp data="loading.."/>}
                    {error && <Temp data={error} />}
                    {article}
                </div>
            </div>
        </div>
    )
}

export default Blogs;
