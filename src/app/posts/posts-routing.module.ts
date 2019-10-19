import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostsComponent } from "./posts.component";
import { PostFormComponent } from "./post-form/post-form.component";

const routes: Routes = [
  { path: "", component: PostFormComponent }
  // { path: "", component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
