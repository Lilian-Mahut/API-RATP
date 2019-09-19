import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LigneComponent } from './ligne/ligne.component';


const routes: Routes = [
  { path: '', component: LigneComponent }
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: []
})
export class AppRoutingModule { }
