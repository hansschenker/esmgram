import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// ionic
import { IonicModule } from "@ionic/angular";
// firestore api import
import { FirestoreApiModule } from "./../firestore-api/firestore-api.module";

import { PostsRoutingModule } from "./posts-routing.module";
import { PostsComponent } from "./posts.component";
import { PostListComponent } from "./components/post-list/post-list.component";
import { PostAddComponent } from "./components/post-add/post-add.component";
import { PostEditComponent } from "./components/post-edit/post-edit.component";
import { PostDetailsComponent } from "./components/post-details/post-details.component";

@NgModule({
  declarations: [
    PostsComponent,
    PostListComponent,
    PostAddComponent,
    PostEditComponent,
    PostDetailsComponent
  ],
  exports: [
    PostsComponent,
    PostListComponent,
    PostAddComponent,
    PostEditComponent,
    PostDetailsComponent
  ],
  imports: [CommonModule, IonicModule, FirestoreApiModule, PostsRoutingModule]
})
export class PostsModule {}
