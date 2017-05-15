import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ServersService} from "../../services/servers.service";

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html',
    styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
    serverDetails;
    allowEdit;

    constructor(private Route: ActivatedRoute, private serverservice: ServersService) {
    }

    ngOnInit() {
        const serverid = this.Route.snapshot.params['id'];
        this.serverDetails = this.serverservice.getServer(serverid);
        this.Route.params.subscribe((params) => {
            this.serverDetails = this.serverservice.getServer(params['id']);
        });

        this.Route.queryParams.subscribe(
            (queryParams: Params) => {
                console.log(queryParams);
                this.allowEdit = (queryParams['allowedit'] == '1') ? true: false;
            }
        );
    }

    onUpdate() {

    }

}
