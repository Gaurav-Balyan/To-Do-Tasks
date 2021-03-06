import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { CanActivateTodosGuard } from '../guards/can-activate-todos.guard';
import { TodosResolver } from '../resolvers/todos.resolver';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    CanActivateTodosGuard,
    TodosResolver
  ]
})
export class AppRoutingModule { }
