import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WabiPocComponent } from './wabi-poc.component';

describe('WabiPocComponent', () => {
  let component: WabiPocComponent;
  let fixture: ComponentFixture<WabiPocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WabiPocComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WabiPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
