import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaspiKzComponent } from './kaspi-kz.component';

describe('KaspiKzComponent', () => {
  let component: KaspiKzComponent;
  let fixture: ComponentFixture<KaspiKzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KaspiKzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaspiKzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
