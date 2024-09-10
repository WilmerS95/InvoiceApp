import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.css'
})
export class FormItemComponent {
  @Output() addItemEventEmitter = new EventEmitter();
  @Input() items: any[] = [];

  private counterId = Invoice.length;

  item: any = {
    product: '',
    price: '',
    quantity: '',
  }

  ngOnInit(): void {
    this.setCounterId();
  }

  onSubmit(itemForm: NgForm): void{
    if(itemForm.valid){
      this.addItemEventEmitter.emit({id: this.counterId, ...this.item});
      this.counterId ++;
  
      this.item = {
        product: '',
        price: '',
        quantity: '',
      };
    }
    itemForm.reset();
    itemForm.resetForm();
  }

  setCounterId(): void {
    if (this.items.length > 0) {
      const lastItem = this.items.reduce((prev, curr) => prev.id > curr.id ? prev : curr);
      this.counterId = lastItem.id + 1;
    } else {
      this.counterId = 1;
    };
  }
}
