import { Component } from '@angular/core';
import { NgPersianDatepickerModule } from '../../../../projects/ng-persian-datepicker/src/lib/ng-persian-datepicker.module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgPersianDatepickerModule,ReactiveFormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  dateValue = new FormControl();
}
