import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTeamplateComponent } from './home-teamplate.component';

describe('HomeTeamplateComponent', () => {
  let component: HomeTeamplateComponent;
  let fixture: ComponentFixture<HomeTeamplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTeamplateComponent]
    });
    fixture = TestBed.createComponent(HomeTeamplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
