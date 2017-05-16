import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, CanDeactivate, Params, Router} from "@angular/router";
import {ServersService} from "../../services/servers.service";
import {CanComponentDeactivate} from "../../services/can-deactivate-guard.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html',
    styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivate<CanComponentDeactivate> {
    serverDetails;
    serverName;
    changesSaved = false;

    constructor(private Route: ActivatedRoute, private serverservice: ServersService, private router: Router) {
    }

    ngOnInit() {
        const serverid = this.Route.snapshot.params['id'];
        this.serverDetails = this.serverservice.getServer(serverid);
        this.Route.params.subscribe((params) => {
            this.serverDetails = this.serverservice.getServer(params['id']);
            this.serverName = this.serverDetails.name;
        });

    }

    onUpdate(event, serverId) {
        event.preventDefault();
        console.log(this.serverName);
        this.serverservice.updateServer(serverId, {name: this.serverName, status: this.serverDetails.status});
        this.changesSaved = true;
        this.router.navigate(['../'], {relativeTo: this.Route});
    }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        if ( ! this.changesSaved) {
            return confirm('Are you sure you want to move');
        } else {
            return true;
        }
    }

}
