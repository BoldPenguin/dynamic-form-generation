import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const materialModules = [MatButtonModule, MatInputModule, MatSelectModule];
@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule {}
