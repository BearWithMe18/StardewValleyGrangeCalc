import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrangeItem } from './grange-item';

describe('GrangeItem', () => {
  let component: GrangeItem;
  let fixture: ComponentFixture<GrangeItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrangeItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrangeItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
