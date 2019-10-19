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
import { PostFormComponent } from './post-form/post-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostsComponent,
    PostListComponent,
    PostAddComponent,
    PostEditComponent,
    PostDetailsComponent,
    PostFormComponent
  ],
  exports: [
    PostsComponent,
    PostListComponent,
    PostAddComponent,
    PostEditComponent,
    PostDetailsComponent
  ],
  imports: [CommonModule, IonicModule, FirestoreApiModule, PostsRoutingModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, ReactiveFormsModule]
})
export class PostsModule {}
