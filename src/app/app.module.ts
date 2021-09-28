import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { IgxBadgeModule, IgxListModule, IgxIconModule, IgxButtonModule, IgxAvatarModule, IgxCalendarModule, IgxCardModule, IgxGridModule, IgxActionStripModule, IgxInputGroupModule, IgxToggleModule, IgxDropDownModule, IgxNavigationDrawerModule, IgxDialogModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTasksComponent,
    DashboardsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    IgxInputGroupModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxNavigationDrawerModule,
    IgxDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
