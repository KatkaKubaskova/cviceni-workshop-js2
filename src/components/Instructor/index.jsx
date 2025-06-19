import './index.css'

export const Instructor = ({ name, bio, email }) => (
  <section>
    <h2>Instruktor</h2>
    <p><strong>Jméno:</strong> {name}</p>
    <p>{bio}</p>
    <p><strong>E-mail:</strong> <a href={`mailto:${email}`}>{email}</a></p>
  </section>
);