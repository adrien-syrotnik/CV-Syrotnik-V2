import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Tests3DComponent } from 'src/app/_components/tests-3D/tests-3D.component';

const routes = [
  {
    path: '',
    component: Tests3DComponent
  }
];

@NgModule({
  declarations: [Tests3DComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ThreePageModule { }