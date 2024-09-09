import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuzosPage } from './buzos.page';

describe('BuzosPage', () => {
  let component: BuzosPage;
  let fixture: ComponentFixture<BuzosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
