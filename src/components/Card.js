export default function Card({ card }) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={card.image} alt="illustration of title" />
      </div>
      <h3>{card.title}</h3>
      <p>{card.content}</p>
    </div>
  );
}
