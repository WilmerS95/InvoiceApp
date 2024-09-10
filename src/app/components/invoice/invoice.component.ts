import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsViewComponent } from '../list-items-view/list-items-view.component';
import { TotalComponent } from '../total/total.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../models/item';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    InvoiceViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    ListItemsViewComponent,
    TotalComponent,
    FormItemComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  constructor(private service: InvoiceService) { }
  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  removeItem(id: number) {
    this.invoice = this.service.remove(id)
    //this.invoice.items = this.invoice.items.filter(item => item.id != id);
  }

  addItem(item: Item){
    this.invoice = this.service.save(item);
  }
}
