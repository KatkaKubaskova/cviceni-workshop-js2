import './index.css'

export const Venue = ({ name, city, address }) => (
  <section>
    <h2>Místo konání</h2>
    <p><strong>{name}</strong></p>
    <p>{address}</p>
    <p>{city}</p>
  </section>
);