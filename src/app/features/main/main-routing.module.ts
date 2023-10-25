import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'features',
    component: MainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
