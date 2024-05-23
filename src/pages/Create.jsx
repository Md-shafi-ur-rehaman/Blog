import { useState } from "react";
import { useNavigate  } from "react-router-dom";


function Create(){
    const [title, setTitle] = useState('');
    const [body, setbody] = useState('');
    const [coverImg, setCoverImg] = useState('');
    const [authorName, setAuthorName] = useState('john doe');
    const [isPending, setIsPending] = useState(false);
    let navigateTo = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const blog ={title,body,coverImg,authorName}
        setTitle('');
        setbody('');
        setAuthorName('');
        setIsPending(true);
        try{
          const response = await fetch("http://localhost:3000/blogs",{
            method:'POST',
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
          });
          setIsPending(false);
          console.log('new blog added');
          navigateTo("/");
        }
        catch(error){
          console.log(error);
        }
    }

    return(
        <div className="w-full bg-indigo p-8 ">
            <h1 className="text-center font-bold text-2xl mb-6">Add a new blog</h1>
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
                    onChange={e => setTitle(e.target.value)}
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
                    onChange={e => setCoverImg(e.target.value)}
                />
                <label htmlFor="">Select authorName name</label>
                <div className="flex justify-between">
                    <select
                        className="border rounded-md p-2 w-[80%] "
                        name="authorName"
                        id=""
                        value={authorName}
                        onChange={(e)=> setAuthorName(e.target.value)}>
                        <option value='jonh doe'>john doe</option>
                        <option value='alexa'>alexa</option>
                    </select>
                    { !isPending
                      ?
                      <input
                        className="border rounded-md p-2 bg-black text-white cursor-pointer"
                        type="submit"
                        value="Create"
                      />
                      :
                      <button className="border rounded-md p-2 bg-black text-white" disabled>Adding blog...</button>
                    }
                </div>

            </form>
        </div>
    )
}

export default Create;
