import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedMaterialModule } from '@wabi-poc/shared/material';
import { SharedPrimengModule } from '@wabi-poc/shared/primeng';

const modules = [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule];

const modulesMaterial: any = [SharedMaterialModule];

const primengModule: any = [SharedPrimengModule];

const components: any = [];

const directives: any = [];

const pipes: any = [];

@NgModule({
  imports: [...modules, ...modulesMaterial, ...primengModule],
  declarations: [...components, ...pipes, ...directives],
  providers: [...pipes],
  entryComponents: [],
  exports: [...components, ...modules, ...modulesMaterial, ...primengModule, ...pipes, ...directives],
})
export class SharedModule {}
