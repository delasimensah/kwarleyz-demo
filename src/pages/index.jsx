// sections
import Header from "../components/home-sections/header";
import SectionOne from "../components/home-sections/section-one";
import SectionTwo from "../components/home-sections/section-two";
import SectionThree from "../components/home-sections/section-three";
import SectionFour from "../components/home-sections/section-four";
import SectionFive from "../components/home-sections/section-five";
import SectionSix from "../components/home-sections/section-six";
import SectionSeven from "../components/home-sections/section-seven";
import SectionEight from "../components/home-sections/section-eight";
import SectionNine from "../components/home-sections/section-nine";
import SectionTen from "../components/home-sections/section-ten";

// components
import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
    </Layout>
  );
};

export default Home;
