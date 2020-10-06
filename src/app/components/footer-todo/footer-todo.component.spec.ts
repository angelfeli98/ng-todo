import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTodoComponent } from './footer-todo.component';

describe('FooterTodoComponent', () => {
  let component: FooterTodoComponent;
  let fixture: ComponentFixture<FooterTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
