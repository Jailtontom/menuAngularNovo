import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-vote-taker',
    templateUrl: './app-vote-taker.component.html',
    styleUrls: ['./app-vote-taker.component.css']
})
export class AppVoteTakerComponent implements OnInit {

    agreed = 0;
    disagreed = 0;
    voters = ['Narco', 'Celeritas', 'Bombasto'];

    constructor() { }

    ngOnInit() { }

    onVoted(agreed: boolean) {
        agreed ? this.agreed++ : this.disagreed++;
    }
}
