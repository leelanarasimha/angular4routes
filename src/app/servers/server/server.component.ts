import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServersService} from "../../services/servers.service";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverdetails;
  constructor(private serverservice: ServersService, private Route: ActivatedRoute) {

  }

  ngOnInit() {

    let serverid = this.Route.snapshot.params['id'];
    this.serverdetails = this.serverservice.getServer(serverid);
    this.Route.params.subscribe(
        (params) => {
          serverid = params['id'];
          this.serverdetails = this.serverservice.getServer(serverid);
        }
    );
  }

}
