import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { userlistPage } from './userlist.page';

describe('UserlistPage', () => {
  let component: userlistPage;
  let fixture: ComponentFixture<userlistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(userlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
