import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ApiJsonConsumerComponent } from './api-json-consumer.component';

describe('ApiJsonConsumerComponent', () => {
  let component: ApiJsonConsumerComponent;
  let fixture: ComponentFixture<ApiJsonConsumerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiJsonConsumerComponent]
    });
    fixture = TestBed.createComponent(ApiJsonConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
