/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YourPostsComponent } from './your-posts.component';

describe('YourPostsComponent', () => {
  let component: YourPostsComponent;
  let fixture: ComponentFixture<YourPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
