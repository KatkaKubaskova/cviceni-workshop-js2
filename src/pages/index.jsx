import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { WorkshopIntro } from './components/WorkshopIntro';
import { Instructor } from './components/Instructor';
import { Venue } from './components/Venue';



const response = await fetch("http://localhost:4001/api/workshops")
const data await = await response.json();
console.log(data);



document.querySelector('#root').innerHTML = render(
  <div className="container">
    
    <WorkshopIntro
      title={workshop.title}
      description={workshop.description}
      date={workshop.date}
      price={workshop.price}
      capacity={workshop.capacity}
      tags={workshop.tags}
    />
    <Instructor
      name={workshop.instructor.name}
      bio={workshop.instructor.bio}
      email={workshop.instructor.email}
    />
    <Venue
      name={workshop.venue.name}
      city={workshop.venue.city}
      address={workshop.venue.address}
    />

  </div>
);