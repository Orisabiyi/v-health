import Card from "./Card";

const articles = [
  {
    image: "images/doctor-patient.png",
    title: "Disease detection, check up in the laboratory",
    content:
      "In this case, the role of the health laboratory is very important to do a disease detection...",
  },
  {
    image: "images/lab-doctor.png",
    title: "Herbal medicines that are safe for consumption",
    content:
      "In this case, the role of the health laboratory is very important to do a disease detection...",
  },
  {
    image: "images/facial-care.png",
    title: "Natural care for healthy facial skin",
    content:
      "In this case, the role of the health laboratory is very important to do a disease detection...",
  },
];

export default function Article() {
  return (
    <section className="section section-article">
      <h2 className="header-sec-1">Check out our latest article</h2>
      <div className="article__cards">
        {articles.map((article) => (
          <Card card={article} className="article" key={article.title} />
        ))}
      </div>
      <button className="btn btn--1">View all</button>
    </section>
  );
}
