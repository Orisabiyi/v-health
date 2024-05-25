export default function TestimonialCard({ testimonial, index, curIndex }) {
  return (
    <div
      className="testimonial__card"
      style={{ transform: `translateX(${100 * (index - curIndex)}%)` }}
    >
      <div className="testimonial__profile">
        <div className="testimonial__profile-img">
          <img src={testimonial.image} alt="testimonee avatar" />
        </div>

        <div className="testimonial__profile-content">
          <h3>{testimonial.username}</h3>
          <p>{testimonial.user_job}</p>
        </div>
      </div>
      <div className="testimonial__content">{testimonial.testimonial}</div>
    </div>
  );
}
