import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user;
  paramsSubscription: Subscription
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.route.snapshot.params['id'];

    this.paramsSubscription = this.route.params.subscribe(
        (params) => {
          this.user = params['id'];
        });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
