export default function Card({ card, className = "" }) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={card.image} alt="illustration of title" />
      </div>
      <div className="card__content">
        <h3>{card.title}</h3>
        <p>{card.content}</p>
        {className && (
          <button className="btn--3">
            <a href="/">
              Read more <span>&rarr;</span>
            </a>
          </button>
        )}
      </div>
    </div>
  );
}
