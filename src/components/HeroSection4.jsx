import Anisha from "../assets/images/avatar-anisha.png"
import Ali from "../assets/images/avatar-ali.png"
import Watts from "../assets/images/avatar-richard.png"
import Button from "./Button"
function HeroSection4() {
    return (
        <section className="borde border-solid border-green-400 item-center -mx-2">
            <main className="bg-orange-600 flex flex-row items-center justify-between px-26 py-12">
                {/* Simplify.... */}
                <div>
                    <h1 className="borde border-solid border-violet-700 font-semibold text-5xl mt-[7%] text-white">
                        Simplify how your team<br />works today.
                    </h1>
                </div>
                
                {/* Get started */}
                <div>
                    <Button className="bg-white hover:bg-orange-600 font-bold text-orange-500 px-7 py-3 rounded-full shadow-md transition-colors" >Get Started</Button>
                </div>
            </main>
        </section>
    )
}
export default HeroSection4;