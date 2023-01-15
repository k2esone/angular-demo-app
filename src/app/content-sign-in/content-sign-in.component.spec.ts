import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSignInComponent } from './content-sign-in.component';

describe('ContentSignInComponent', () => {
  let component: ContentSignInComponent;
  let fixture: ComponentFixture<ContentSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
