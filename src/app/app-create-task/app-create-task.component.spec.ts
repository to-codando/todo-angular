import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCraeteTaskComponent } from './app-create-task.component';

describe('AppCraeteTaskComponent', () => {
  let component: AppCraeteTaskComponent;
  let fixture: ComponentFixture<AppCraeteTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCraeteTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCraeteTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
