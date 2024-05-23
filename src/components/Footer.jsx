import {FaTwitter, FaInstagram, FaGithub, FaFacebook, FaLinkedin} from 'react-icons/fa';

export default function Footer(){
    return(
        <div className="w-full bg-[#02044A] text-gray-300 pt-4 pb-6 px-2">
            <div className="max-w-[1240px mx-auto grid grid-cols-2 md:grid-cols-4 place-items-center border-b-2 border-gry-600 py-1">
                <div>
                    <h6 className="font-bold uppercase py-2">Solutions</h6>
                    <ul>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase py-2">Solutions</h6>
                    <ul>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Marketing</li>
                    </ul>
                </div>

                <div className="col-span-2 pt-2 md:pt-2">
                    <p className="font-bold uppercase">Subscribe to our Newsletter</p>
                    <p className="py-4">The lates news, articles and resourcessent to your indox weekly.</p>
                    <form className="flex flex-col sm:flex-row justify-between items-center">
                        <input type="email" className="w-full sm:w-[70%] p-2 mb-1 sm:mb-0 rounded-md " placeholder="Enter youremail"/>
                        <button className="w-full  sm:w-[20%] p-2 rounded-md bg-[#00B86E]">Subscribe</button>
                    </form>
                </div>

            </div>

            <div className="flex flex-col max-w-[1240px] px-2 py-2 pt-2 m-auto justify-between items-center sm:flex-row text-center text-gray-500">
                <p>2024 Shafi, All rights reserved.</p>
                <div className='flex justify-between sm:w-[300px]  text-2xl gap-3'>
                    <FaLinkedin/>
                    <FaGithub/>
                    <FaTwitter/>
                    <FaInstagram/>
                </div>
            </div>
        </div>
    )
}
