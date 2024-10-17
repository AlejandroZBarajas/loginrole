import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersTableComponent } from './components/users-table/users-table.component';



@NgModule({
  declarations: [
    UserCardComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
