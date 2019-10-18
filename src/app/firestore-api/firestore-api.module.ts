import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//  Firestor
import { AngularFireModule } from "@angular/fire";
import { environment } from "../../environments/environment";
import { FirestoreDataService } from "./firestore-data.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [FirestoreDataService]
})
export class FirestoreApiModule {}
