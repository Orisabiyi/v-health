import Download from "./Download";
import Header from "./Header";
import Provider from "./Provider";
import Service from "./Service";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Service />
      <Provider />
      <Download />
    </div>
  );
}
