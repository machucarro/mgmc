import { RouterModule, Routes } from '@angular/router';
import { WalletsComponent } from './wallets/wallets.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { OverviewComponent } from './overview/overview.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {path: 'wallets', component: WalletsComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'overview', component: OverviewComponent},
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  {path: '**', redirectTo: '/overview'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
