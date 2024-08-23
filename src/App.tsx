import Faqs from "./components/Faq";
import Footer from "./components/Footer";
import Home from "./components/home";
import JoinUs from "./components/joinus";
import Navbar from "./components/navbar";
import StepstoStart from "./components/stepstostart";
import Testimonials from "./components/testimonials";

export default function App() {
  return (
    <div className="min-h-screen w-full  flex flex-col justify-start items-center">
      <Navbar></Navbar>
      <Home></Home>
      <StepstoStart></StepstoStart>
      <Testimonials></Testimonials>
      <Faqs></Faqs>
      <JoinUs></JoinUs>
      <Footer></Footer>
    </div>
  )
}