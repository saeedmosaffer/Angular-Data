import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {DetailsComponent} from "./posts/details/details.component";
import {AdminComponent} from "./admin/admin.component";
import {GuardService} from "./guard.service";
import {HomeComponent} from "./home/home.component";
import {PlaceholderComponent} from "./placeholder/placeholder.component";

const routes: Routes = [
  { path: 'posts', children: [
      { path: '', component: PostsComponent },
      { path: 'details/:id', component: DetailsComponent }
    ]
  },
  { path: 'admin', component: AdminComponent, canActivate: [GuardService] },
  { path: 'home', component: HomeComponent },
  { path: 'place', component: PlaceholderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
