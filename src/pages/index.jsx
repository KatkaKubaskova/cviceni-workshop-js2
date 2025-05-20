import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { WorkshopIntro } from '../components/WorkshopIntro';
import { Venue } from '../components/Venue';
import { Instructor } from '../components/Instructor';


const response = await fetch("http://localhost:4000/api/workshops/0");
const data = await response.json();
console.log(data);


/*
document.body.innerHTML += `
<h1> Název kurzu: ${data.data.title}</h1>
<p> ${data.data['title']}<p>
<p> ${data.data.description}</p>
<p> Instruktor: ${data.data.instructor.name} </p>
<p> Adresa konaní: ${data.data.venue.city}, ${data.data.venue.street}
`
*/


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <WorkshopIntro title={data.data.title} description={data.data.description} intro={data.data.intro} date={data.data.date} startTime={data.data.startTime} name={data.data.venue.name} city={data.data.venue.city} />
    <Instructor name={data.data.instructor.name} profession={data.data.instructor.profession} bio={data.data.instructor.bio} />
    <Venue name={data.data.venue.name} city={data.data.venue.city} street={data.data.venue.street} instructions={data.data.venue.instructions}/>
    
  </div>
);
