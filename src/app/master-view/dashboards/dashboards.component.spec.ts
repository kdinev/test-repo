import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxListModule, IgxAvatarModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxGridModule, IgxActionStripModule } from 'igniteui-angular';
import { DashboardsComponent } from './dashboards.component';

describe('DashboardsComponent', () => {
  let component: DashboardsComponent;
  let fixture: ComponentFixture<DashboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxGridModule, IgxActionStripModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
