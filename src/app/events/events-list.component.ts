import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsList {
  eventOne = {
    name: 'Angular Connect',
    date: '9/12/2012',
    time: '10:00 am',
    price: '599.00',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1035 DT',
      city: 'London',
      country: 'UK'
    }
  };

}
