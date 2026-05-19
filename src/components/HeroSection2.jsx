import HeroImg from "../assets/images/illustration-intro.svg"
import Button from "./Button"
function HeroSection2() {
    return (
        <section className="borde border-solid border-red-500 flex flex-row gap-4 items-center justify-between mx-auto w-[90%]">
            <div className="borde border-solid border-red-500 flex flex-col items-start gap-7 mb-64">
                <h1 className="text-5xl font-bold leading-15 text-blue-950">
                    What's different about<br />Manage?
                </h1>
                <p className="font-bold text-gray-400">Manage provides all the functionality your<br />team needs, without the complexity. Our<br />software is tailor-made for modern digital<br /> product teams.</p>
            </div>

{/* div holdin' 1, 2, 3 */}
            <div className="flex flex-col gap-8 w-[45%]">
                {/* 01 */}
                <div className="borde border-solid border-pink-500">
                    <div className="flex flex-row gap-7 items-center">
                        <p className="bg-orange-500 font-semibold text-white px-6 py-2 rounded-full shadow-md w-[11%]">01</p>
                        <p className="font-bold text-blue-950">Track company-wide progress</p>
                    </div>
                    
                    <div className="w-[84%]">
                        <p className="font-semibold pl-24 text-gray-400">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                    </div>
                </div>

                {/* 02 */}
                <div className="borde border-solid border-pink-500">
                    <div className="flex flex-row gap-7 items-center">
                        <p className="bg-orange-500 font-semibold text-white px-6 py-2 rounded-full shadow-md w-[11%]">02</p>
                        <p className="font-bold text-blue-950">Advanced built-in reports</p>
                    </div>
                    
                    <div className="w-[84%]">
                        <p className="font-semibold pl-24 text-gray-400">Set internal delivery estimates and track progress toward<br />company goals. Our customisable dashboard helps you<br />build out the reports you need to keep key stakeholders<br />informed.</p>
                    </div>
                </div>

                {/* 03 */}
                <div className="borde border-solid border-pink-500">
                    <div className="flex flex-row gap-7 items-center">
                        <p className="bg-orange-500 font-semibold text-white px-6 py-2 rounded-full shadow-md w-[11%]">03</p>
                        <p className="font-bold text-blue-950">Everything you need in one place</p>
                    </div>
                    
                    <div className="w-[84%]">
                        <p className="font-semibold pl-24 text-gray-400">Stop jumping from one service to another to<br />communicate, store files, track tasks and share<br />documents. Manage offers an all-in-one team<br />productivity solution.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection2;