import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IfElseComponent } from './components/if-else/if-else.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '1', component: IfElseComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
