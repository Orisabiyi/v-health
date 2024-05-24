import Download from "./Download";
import Header from "./Header";
import Provider from "./Provider";
import Service from "./Service";
import Testimonial from "./Testimonial";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Service />
      <Provider />
      <Download />
      <Testimonial />
    </div>
  );
}
