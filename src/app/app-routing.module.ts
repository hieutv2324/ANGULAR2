import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IfElseComponent } from './components/if-else/if-else.component';
import { HomeComponent } from './components/home/home.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { NgforofComponent } from './components/ngforof/ngforof.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '1', component: IfElseComponent },
  { path: '2', component: DatabindingComponent },
  { path: '3', component: NgforofComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
