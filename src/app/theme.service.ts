import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly themeKey = 'user-theme'
  constructor() {
    this.loadTheme()
  }

  
  getTheme():'light' | 'dark'{
    return (localStorage.getItem(this.themeKey) as 'light' | 'dark') || 'light'
  }
  setTheme(theme:'light' | 'dark'):void{
    localStorage.setItem(this.themeKey, theme)
    document.body.classList.remove('light-theme','dark-theme')
    document.body.classList.add(`${theme}-theme`)
  }

  loadTheme():void{
    const theme= this.getTheme()
    document.body.classList.add(`${theme}-theme`)
  }
}

