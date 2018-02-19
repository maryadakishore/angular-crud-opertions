import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmformComponent } from './epmform.component';

describe('EpmformComponent', () => {
  let component: EpmformComponent;
  let fixture: ComponentFixture<EpmformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
