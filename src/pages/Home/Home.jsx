import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import TopCourse from "../../components/TopCourse/TopCourse";
import AboutUs from "../../components/AboutUs/AboutUs";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Educations from "../../components/Educations/Educations";
import Events from "../../components/Events/Events";
import OurTeacher from "../../components/OurTeacher/OurTeacher";
import Post from "../../components/Post/Post";
import Subscribe from "../../components/Subscribe/Subscribe";
// import Test from "../../components/Test/Test";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <TopCourse />
      <AboutUs />
      <ChooseUs />
      <Educations />
      <Events />
      <OurTeacher />
      <Post />
      <Subscribe />
      {/* <Test/> */}
    </>
  );
}

export default Home;
