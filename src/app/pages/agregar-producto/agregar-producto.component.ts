import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.scss'
})
export class AgregarProductoComponent implements OnInit {

  checked = false;

  validateForm!: FormGroup<{
    productName: FormControl<string>;
    productDescription: FormControl<string>;
    productPrice: FormControl<number>;
    productBidding: FormControl<boolean>;
  }>;

  constructor( private formBuilder: NonNullableFormBuilder, private message: NzMessageService
  ) {}

  ngOnInit(): void{
    this.validateForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: [0.0, Validators.required],
      productBidding: [true]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.message.create('notice', `Los datos se agregaron correctamente`);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
