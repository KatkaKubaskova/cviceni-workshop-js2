import './index.css'

export const WorkshopIntro = ({ title, description, date, price, capacity, tags }) => (
  <section>
    <h1>{title}</h1>
    <p>{description}</p>
    <p><strong>Datum:</strong> {date}</p>
    <p><strong>Cena:</strong> {price} Kč</p>
    <p><strong>Kapacita:</strong> {capacity} účastníků</p>
    <p><strong>Témata:</strong> {tags.join(', ')}</p>
  </section>
);