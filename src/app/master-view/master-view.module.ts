import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { IgxBadgeModule, IgxListModule, IgxIconModule, IgxButtonModule, IgxAvatarModule, IgxCalendarModule, IgxCardModule, IgxGridModule, IgxActionStripModule, IgxToggleModule, IgxDropDownModule, IgxNavigationDrawerModule, IgxDialogModule, IgxInputGroupModule } from "igniteui-angular";
import { FormsModule } from "@angular/forms";
import { DashboardsComponent } from './dashboards/dashboards.component';

@NgModule({
  declarations: [
    MasterViewComponent,
    MyTasksComponent,
    DashboardsComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxBadgeModule,
    IgxListModule,
    IgxIconModule,
    IgxButtonModule,
    IgxAvatarModule,
    IgxCalendarModule,
    FormsModule,
    IgxCardModule,
    IgxGridModule,
    IgxActionStripModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxNavigationDrawerModule,
    IgxDialogModule,
    IgxInputGroupModule
  ]
})
export class MasterViewModule {
}
