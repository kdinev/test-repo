import { Component, OnInit } from '@angular/core';
import { TravelAppService } from '../../services/travel-app.service';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {
  public travelAppArticlesSource1: any[] = [];
  public northwindCategories: any[] = [];

  constructor(
    private travelAppService: TravelAppService,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.travelAppService.getData('Articles Source 1').subscribe(data => this.travelAppArticlesSource1 = data);
    this.northwindService.getData('Categories').subscribe(data => this.northwindCategories = data);
  }
}
