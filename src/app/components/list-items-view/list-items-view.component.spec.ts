import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemsViewComponent } from './list-items-view.component';

describe('ListItemsViewComponent', () => {
  let component: ListItemsViewComponent;
  let fixture: ComponentFixture<ListItemsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListItemsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
