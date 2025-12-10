import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlagueComponent } from './pages/add-blague/add-blague.component';
import { ListBlagueComponent } from './pages/list-blague/list-blague.component';
import { SearchBlagueComponent } from './pages/search-blague/search-blague.component';
import { RandomComponent } from './random/random.component';

const routes: Routes = [
   { path: 'add', component: AddBlagueComponent },
     { path: 'random', component: RandomComponent },
  { path: 'list', component: ListBlagueComponent },
  { path: 'search', component: SearchBlagueComponent },

  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
