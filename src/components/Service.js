import Card from "./Card";

const cards = [
  {
    image: "images/search-doctor.svg",
    title: "Search doctor",
    content:
      "Choose your doctor from thousands of specialist, general, and trusted hospitals",
  },

  {
    image: "images/drug-container.svg",
    title: "Online pharmacy",
    content:
      "Buy  your medicines with our mobile application with a simple delivery system",
  },

  {
    image: "images/consultation-illustration.svg",
    title: "Consultation",
    content:
      "Free consultation with our trusted doctors and get the best recomendations",
  },

  {
    image: "images/info-illustration.svg",
    title: "Details info",
    content:
      "Free consultation with our trusted doctors and get the best recomendations",
  },

  {
    image: "images/first-aid-kit.svg",
    title: "Emergency care",
    content:
      "You can get 24/7 urgent care for yourself or your children and your lovely family",
  },

  {
    image: "images/tracking-illustration.svg",
    title: "Tracking",
    content: "Track and save your medical history and health data ",
  },
];

export default function Service() {
  return (
    <section className="section section-service">
      <h2>Our services</h2>
      <p>
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>

      <div className="service__card">
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </section>
  );
}
