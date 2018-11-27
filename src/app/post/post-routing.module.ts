import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { PostComponent } from './post.component';
import { NgModule } from '@angular/core';
import { PostCreateComponent } from './post-create/post-create.component';
const routes: Routes = [
  { path: '', component: PostComponent, data: { title: extract('Post') } },
  { path: 'add-post', component: PostCreateComponent, data: { title: extract('Add Post') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PostRoutingModule {}
