import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiJsonTableComponent } from './api-json-table.component';

describe('ApiJsonTableComponent', () => {
  let component: ApiJsonTableComponent;
  let fixture: ComponentFixture<ApiJsonTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiJsonTableComponent]
    });
    fixture = TestBed.createComponent(ApiJsonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
