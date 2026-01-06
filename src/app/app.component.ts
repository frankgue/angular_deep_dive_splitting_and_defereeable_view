import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_deep_dive_splitting_and_defereeable_view';
}
