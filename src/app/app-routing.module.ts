
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStoryComponent } from './create-story/create-story.component';

const routes: Routes = [
  { path: '', component: CreateStoryComponent },
  { path: 'create', component: CreateStoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
