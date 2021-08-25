import { Component, OnInit } from '@angular/core';
import { TravelappService } from '../services/travelapp.service';

@Component({
  selector: 'app-master-view1',
  templateUrl: './master-view1.component.html',
  styleUrls: ['./master-view1.component.scss']
})
export class MasterView1Component implements OnInit {
  public travelappImageSet1: any[] = [];

  constructor(
    private travelappService: TravelappService,
  ) {}

  ngOnInit() {
    this.travelappImageSet1 = this.travelappService.getData('Image Set 1');
  }
}
