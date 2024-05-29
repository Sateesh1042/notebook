import Hero from "./components/Hero";
import FeaturedProducts from "./FeaturedProducts";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import useTitle from "../../hooks/useTitle";
const HomePage = () => {
  useTitle("Access Latest Computer Science E Books");
  return (
    <main>
      <Hero/>
      <FeaturedProducts/>
      <Testimonials/>
      <Faq/>
    </main>
  )
}

export default HomePage
