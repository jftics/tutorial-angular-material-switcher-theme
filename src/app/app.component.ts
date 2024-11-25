import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from "./demo/demo.component";
import { ThemeService } from './theme.service';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-material-switcher-theme';

  theme: 'light' | 'dark'

  constructor(private themeService: ThemeService){
    this.theme = themeService.getTheme()
  }

  toggleTheme():void{
    this.theme = this.theme === 'light' ? 'dark':'light'
    this.themeService.setTheme(this.theme)
  }

}
