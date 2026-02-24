import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutParentComponent } from './layout-parent.component';

describe('LayoutParentComponent', () => {
  let component: LayoutParentComponent;
  let fixture: ComponentFixture<LayoutParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutParentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
