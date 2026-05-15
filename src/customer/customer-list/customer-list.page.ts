import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../model/Customer';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customer-list',
  imports: [MatButtonModule,
        MatIconModule,
        MatTableModule,
        CommonModule],
  templateUrl: './customer-list.page.html',
  styleUrl: './customer-list.page.scss',
})
export class CustomerListPage implements OnInit {
  dataSource = new MatTableDataSource<Customer>();
  displayedColumns: string[] = ['id', 'name', 'action'];

  constructor(
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customerService.getCategories().subscribe(
      Customers => this.dataSource.data = Customers
    );
  }

}
