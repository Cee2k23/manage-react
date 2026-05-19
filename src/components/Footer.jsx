import Button from "./Button"
import logo from "../assets/images/logo.svg"
import fb from "../assets/images/icon-facebook.svg"
import yt from "../assets/images/icon-youtube.svg"
import x from "../assets/images/icon-twitter.svg"
import p from "../assets/images/icon-pinterest.svg"
import ig from "../assets/images/icon-instagram.svg"
function Footer() {
    return (
        <section className="borde border-solid border-green-400 item-center -mx-2 -my-10">
            <main className="borde border-solid border-amber-300 bg-gray-900 flex flex-row items-center gap-12 px-26 py-12">
                {/* div holding manage & social icons */}
                <div className="borde border-solid border-amber-300 flex flex-col gap-20 w-[23%]">
                    <div><img src={logo} alt="Manage" /></div>

                    <div className="borde border-solid border-amber-300 flex flex-row gap-2.5">
                        <div><img src={fb} alt="FB" /></div>
                        <div><img src={yt} alt="YT" /></div>
                        <div><img src={x} alt="X" /></div>
                        <div><img src={p} alt="Pinterst" /></div>
                        <div><img src={ig} alt="IG" /></div>
                    </div>
                </div>

                {/* Home, Pricing.... */}
                <div className="borde border-solid border-yellow-300 flex flex-row gap-56 w-[41%]">
                    <div className="borde border-solid border-yellow-300 font-semibold leading-8">
                        <p className=" text-gray-400">Home</p>
                        <p className=" text-gray-400">Pricing</p>
                        <p className=" text-gray-400">Products</p>
                        <p className=" text-gray-400">About Us</p>
                    </div>

                    <div className="borde border-solid border-yellow-300 font-semibold leading-8">
                        <p className=" text-gray-400">Careers</p>
                        <p className=" text-gray-400">Community</p>
                        <p className=" text-gray-400">Privacy Policy</p>
                    </div>
                </div>

                <div className="borde border-solid border-amber-300 flex flex-col font-semibold gap-14">
                    <div className="borde border-solid border-amber-300 flex flex-row gap-2 ml-59 self-start">
                        {/* Input tag */}
                        <input className="bg-white font-semibold px-4 py-3 rounded-full text-gray-500" type="text" placeholder="Updates in your inbox...." />
                        {/* Go */}
                        <Button className="bg-orange-500 hover:bg-orange-600 font-bold text-white px-7 py-3 rounded-full shadow-md transition-colors" >Go</Button>
                    </div>
                    {/* copyright */}
                    <p className="borde border-solid border-amber-300 text-end text-gray-400">Copyright 2020. All Rights Reserved.</p>
                </div>
            </main>
        </section>
    )
}
export default Footer;