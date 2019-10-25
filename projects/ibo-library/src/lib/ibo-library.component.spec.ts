import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IboLibraryComponent } from './ibo-library.component';

describe('IboLibraryComponent', () => {
  let component: IboLibraryComponent;
  let fixture: ComponentFixture<IboLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IboLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IboLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
