import AboutUs from "./components/about-us/about-us";
import { LanguageProvider } from "./context/language-provider";
import OurGames from "./components/our-games";
import PartnersSection from "./components/partners";
import Layout from "./layout";

function App() {
  return (
    <LanguageProvider>
      <Layout>
        <AboutUs />
        <OurGames />
        <PartnersSection />
      </Layout>
    </LanguageProvider>
  );
}

export default App;
