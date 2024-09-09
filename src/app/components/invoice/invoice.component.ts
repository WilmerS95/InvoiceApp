import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  constructor(private service: InvoiceService){}
  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }
}
