import { createClient } from "contentful";

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

const client = createClient({
  space: "vlsqjnkstcez",
  accessToken: "GPqtNifehcFeg-XCShcBBG4uRrNT6CWH4gUTmmA2Haw",
});

const Home = ({ slides, sectionOneContent }) => {
  return (
    <Layout>
      {slides.length && <Header slides={slides} />}
      {sectionOneContent && <SectionOne content={sectionOneContent} />}
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

export async function getStaticProps() {
  try {
  } catch (error) {}

  const response = await client.getEntries({ content_type: "homeSlider" });
  const res2 = await client.getEntry("262N6xOoZNvk8LkGEIZSUn");

  const slides = response.items.map((item) => {
    return {
      id: item.sys.id,
      image: {
        src: `https:${item.fields.image.fields.file.url}`,
        height: item.fields.image.fields.file.details.image.height,
        width: item.fields.image.fields.file.details.image.width,
      },
      heading: item.fields.heading,
      description: item.fields.description,
    };
  });

  const sectionOneContent = {
    image: {
      src: `https:${res2.fields.image.fields.file.url}`,
      height: res2.fields.image.fields.file.details.image.height,
      width: res2.fields.image.fields.file.details.image.width,
    },
    title: res2.fields.title,
    text: res2.fields.text,
  };

  return {
    props: {
      slides,
      sectionOneContent,
    },
  };
}
