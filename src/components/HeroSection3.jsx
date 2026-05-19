import Anisha from "../assets/images/avatar-anisha.png"
import Ali from "../assets/images/avatar-ali.png"
import Watts from "../assets/images/avatar-richard.png"
import Button from "./Button"
function HeroSection3() {
    return (
        <section className="borde border-solid border-green-400 ga-4 item-center justif-between mx-au">
                <h1 className="borde border-solid border-violet-700 font-bold text-5xl mt-[7%] text-blue-950 text-center w-full">
                    What they've said
                </h1><br /><br /><br /><br /><br />

                {/* container holding the reviewers */}
                <div className="borde border-solid border-violet-700 flex flex-row gap-7 justify-center">
                    {/* 1st reviewer */}
                    <div className="bg-gray-100 flex flex-col gap-4 px-4 py-7">
                        <img src={Anisha} alt="" className="borde border-solid border-violet-700 -mt-17.5 self-center w-20"/>
                        <p className="font-bold text-blue-950 text-center">Anisha Li</p>
                        <p className="font-semibold text-center text-gray-400">"Manage has supercharged our team's workflow. The<br />ability to maintain visibility on larger milestones at all times<br />keeps everyone motivated."</p>
                    </div>

                    {/* 2nd reviewer */}
                    <div className="bg-gray-100 flex flex-col gap-4 px-10 py-7">
                        <img src={Ali} alt="" className="borde border-solid border-violet-700 -mt-17.5 self-center w-20"/>
                        <p className="font-bold text-blue-950 text-center">Ali Bravo</p>
                        <p className="font-semibold text-center text-gray-400">"We have been able to cancel so many other subscriptions<br />since using Manage. There is no more cross-channel<br />confusion and everyone is much more focused."</p>
                    </div>

                    {/* last reviewer */}
                    <div className="bg-gray-100 flex flex-col gap-4 px-8 py-7">
                        <img src={Watts} alt="" className="borde border-solid border-violet-700 -mt-17.5 self-center w-20"/>
                        <p className="font-bold text-blue-950 text-center">Richard watts</p>
                        <p className="font-semibold text-center text-gray-400">Manage allows us to provide structure and process. It<br /> keeps us organized and focused. I can't stop recommending<br />them to everyone I talk to!"</p>
                    </div>
                </div><br /><br />
                {/* Get started */}
                <div className="borde border-dashed border-amber-600 flex flex-row justify-center">
                    <Button className="bg-orange-600 hover:bg-orange-700 font-semibold text-white px-7 py-3 rounded-full shadow-md transition-colors" >Get Started</Button>
                </div>
        </section>
    )
}
export default HeroSection3;