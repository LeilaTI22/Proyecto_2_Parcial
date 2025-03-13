import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { MenuComponent } from "./pages/menu/menu.component";
import { LibroComponent } from './pages/libro/libro.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, RouterLink, LibroComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo_2';
}
