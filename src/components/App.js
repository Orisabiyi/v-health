import Article from "./Article";
import Download from "./Download";
import Footer from "./Footer";
import Header from "./Header";
import Provider from "./Provider";
import Service from "./Service";
import Testimonial from "./Testimonial";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Service />
        <Provider />
        <Download />
        <Testimonial />
        <Article />
      </main>

      <Footer />
    </>
  );
}
