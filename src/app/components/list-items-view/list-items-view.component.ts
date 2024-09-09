import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'app-list-items-view',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-items-view.component.html',
  styleUrl: './list-items-view.component.css'
})
export class ListItemsViewComponent {
  @Input() items: Item[] = [];
}
