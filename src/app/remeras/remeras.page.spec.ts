import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemerasPage } from './remeras.page';

describe('RemerasPage', () => {
  let component: RemerasPage;
  let fixture: ComponentFixture<RemerasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RemerasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
