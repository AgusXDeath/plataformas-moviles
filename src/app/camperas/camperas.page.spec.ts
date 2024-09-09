import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamperasPage } from './camperas.page';

describe('CamperasPage', () => {
  let component: CamperasPage;
  let fixture: ComponentFixture<CamperasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CamperasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
