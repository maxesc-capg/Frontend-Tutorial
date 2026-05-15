import { Component, inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from '../customer.service';
import { Customer } from '../model/Customer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-edit',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './customer-edit.html',
  styleUrl: './customer-edit.scss',
})
export class CustomerEdit implements OnInit {
  protected readonly dialogRef = inject(MatDialogRef<CustomerEdit>);
  protected readonly customerService = inject(CustomerService);
  protected readonly snackBar = inject(MatSnackBar);

  protected readonly id = signal<number | null>(null);
  protected readonly name = signal<string | null>(null);


  ngOnInit(): void {
    this.loadFormData();
  }

  loadFormData(): void {
    this.id.set(null);
    this.name.set(null);
  }

  onSave() {
    const id = this.id();
    const name = this.name();

    if (!name) {
      return;
    }

    /* Verificamos si el nombre ya existe */
    this.customerService.getCustomers().subscribe(customers => {
      const exists = customers.some(
        c => c.name.toLowerCase() === name.toLowerCase()
      )

      if (exists) {
        this.snackBar.open('Ya existe un cliente con ese nombre', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
        return;
      }
    })

    const customer = {id, name} as Customer;
    this.customerService.saveCustomers(customer).subscribe(() => {
      this.dialogRef.close(true);
    })
  }

  onClose() {
    this.dialogRef.close();
  }
}
