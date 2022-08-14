import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrauntWebsiteComponent } from './restraunt-website.component';

describe('RestrauntWebsiteComponent', () => {
  let component: RestrauntWebsiteComponent;
  let fixture: ComponentFixture<RestrauntWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestrauntWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrauntWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
