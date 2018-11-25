import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RestaurantDetailsComponent} from "./restaurant-details.component";

const routes: Routes = [
  {
    path: '',
    component: RestaurantDetailsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantDetailsRoutingModule {}
