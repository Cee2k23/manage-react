import logo from "../assets/images/logo.svg"
import Button from "./Button"

export default function NavBar() {
  return (
    <nav className="flex flex-row items-center justify-between gap-10 mx-auto w-[90%]">
      <img src={logo} alt="Manage" />
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-orange-500 cursor-pointer">Pricing</li>
        <li className="hover:text-orange-500 cursor-pointer">Products</li>
        <li className="hover:text-orange-500 cursor-pointer">About us</li>
        <li className="hover:text-orange-500 cursor-pointer">Careers</li>
        <li className="hover:text-orange-500 cursor-pointer">Community</li>
      </ul>
      <Button className="bg-orange-500 hover:bg-orange-600 font-semibold text-white px-6 py-2 rounded-full shadow-md transition-colors" >Get Started</Button>
    </nav>
  )
}
