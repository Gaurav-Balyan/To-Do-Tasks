import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './routing/app-routing.module';

// Components
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListFooterComponent } from './components/todo-list-footer/todo-list-footer.component';
import { TodoListHeaderComponent } from './components/todo-list-header/todo-list-header.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { TodosComponent } from './components/todos/todos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Services
import { TodoDataService } from './services/todo-data.service';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListFooterComponent,
    TodoListHeaderComponent,
    TodoListItemComponent,
    SignInComponent,
    TodosComponent,
    TodoListItemComponent,
    PageNotFoundComponent,
    TodosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    AuthService,
    SessionService,
    TodoDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
