import { Component, inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../model/Customer';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from '../customer.service';
import { CustomerEdit } from '../customer-edit/customer-edit';
import { CategoryEditComponent } from '../../category/category-edit/category-edit';
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
  ) {}

  protected readonly customerService = inject(CustomerService);
  protected readonly dialog = inject(MatDialog);
  
  createCustomer() {
    const dialogRef = this.dialog.open(CustomerEdit, {
      data: {}
    })
    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.loadData();
    })
  }

  loadData(): void {
    this.customerService.getCustomers().subscribe(
      Customers => this.dataSource.data = Customers
    );
  }

  editCustomer(customer: Customer) {
    const dialogRef = this.dialog.open(CategoryEditComponent, {
      data: { customer }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return;
      this.loadData()
    })
  }

  ngOnInit(): void {
    this.loadData()
  }

}
