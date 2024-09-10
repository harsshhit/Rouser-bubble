import Layout from "./components/Layout";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import ContentSection1 from "./components/ContentSection1";
import ContentSection2 from "./components/ContentSection2";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <ContentSection />
      <ContentSection1 />
      <ContentSection2 />
      <FooterSection />
    </Layout>
  );
};

export default App;
