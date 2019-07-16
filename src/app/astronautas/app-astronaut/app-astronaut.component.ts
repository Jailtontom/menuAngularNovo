import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { MissionService } from '../mission.service';

@Component({
    selector: 'app-astronaut',
    templateUrl: './app-astronaut.component.html',
    styleUrls: ['./app-astronaut.component.css']
})
export class AppAstronautComponent implements OnInit {

    @Input() astronaut: string;
    mission = '<no mission announced>';
    confirmed = false;
    announced = false;
    subscription: Subscription;

    constructor(private missionService: MissionService) {
        this.subscription = missionService.missionAnnounced$.subscribe(
            mission => {
                this.mission = mission;
                this.announced = true;
                this.confirmed = false;
            });
    }

    ngOnInit() { }

    confirm() {
        this.confirmed = true;
        this.missionService.confirmMission(this.astronaut);
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }


}
