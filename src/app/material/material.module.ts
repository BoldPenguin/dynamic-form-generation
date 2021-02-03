import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton } from '@angular/material/radio';

const materialModules = [
  MatButtonModule,
  MatInputModule
];
@NgModule({
  imports: materialModules,
  exports: materialModules
})

export class MaterialModule { }
