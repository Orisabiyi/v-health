const testimonials = [
  {
    id: 1,
    image: "images/user-avatar.png",
    username: "Edward Newgate",
    user_job: "Founder Circle",
    testimonial:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
  },
  {
    id: 2,
    image: "images/patient-avatar.png",
    username: "Emma Johnson",
    user_job: "Patient",
    testimonial:
      "Using this virtual healthcare platform has been a game-changer for me. I can easily schedule appointments, consult with healthcare providers, and access my medical records from anywhere. It's convenient, efficient, and has greatly improved my healthcare experience.",
  },
  {
    id: 3,
    image: "images/doctor-avatar.png",
    username: "Dr. Alex Nguyen",
    user_job: "Primary Care Physician",
    testimonial:
      "As a primary care physician, I've been impressed by the capabilities of this virtual healthcare platform. It enables me to connect with patients remotely, review their medical history, and provide quality care without the need for in-person visits. It's a valuable tool that enhances patient-provider communication and improves healthcare outcomes.",
  },
  {
    id: 4,
    image: "images/admin-avatar.png",
    username: "Rachel Smith",
    user_job: "Healthcare Administrator",
    testimonial:
      "Managing healthcare operations is made easier with this virtual healthcare platform. It centralizes patient data, streamlines administrative tasks, and ensures smooth communication between patients and providers. It's an essential tool for modern healthcare delivery, providing convenience and efficiency for both patients and healthcare professionals.",
  },
];

export default function Testimonial() {
  return (
    <section className="section section-testimonial">
      <div className="testimonial__container">
        <h2>What our customer are saying</h2>
        Testimonial Container
      </div>
    </section>
  );
}
