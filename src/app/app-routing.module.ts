import { NftsComponent } from './nfts/nfts.component';
import { CoinsComponent } from './coins/coins.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"coins", component: CoinsComponent},
  {path:"nfts", component: NftsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
