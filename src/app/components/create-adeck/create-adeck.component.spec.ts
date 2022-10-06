import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateADeckComponent } from './create-adeck.component';

describe('CreateADeckComponent', () => {
  let component: CreateADeckComponent;
  let fixture: ComponentFixture<CreateADeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateADeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateADeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
