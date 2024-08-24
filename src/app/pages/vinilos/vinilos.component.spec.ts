import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinilosComponent } from './vinilos.component';

describe('VinilosComponent', () => {
  let component: VinilosComponent;
  let fixture: ComponentFixture<VinilosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinilosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
