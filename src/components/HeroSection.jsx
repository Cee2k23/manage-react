import HeroImg from "../assets/images/illustration-intro.svg"
import Button from "./Button"
function HeroSection() {
    return (
        <section className="borde border-solid border-red-500 flex flex-row items-center justify-between mx-auto my-24 w-[90%]">
            <div className="flex flex-col items-start gap-7">
                <h1 className="text-6xl font-bold leading-15 text-blue-950">
                    Bring everyone<br />together to build<br />better products.
                </h1>
                <p className="font-bold text-gray-400">Manage makes it simple for software teams<br />to plan day-to-day tasks while keeping the<br />larger team goals in view.</p>
                <Button className="bg-orange-500 hover:bg-orange-600 font-semibold text-white px-6 py-2 rounded-full shadow-md transition-colors" >Get Started</Button>
            </div>

            <div className="w-[45%]">
                <img src={HeroImg} alt="" className="w-full"/>
            </div>
        </section>
    )
}
export default HeroSection;