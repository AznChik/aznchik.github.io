import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';
import { NovelComponent } from './pages/novel/novel.component';
import { WeatherComponent } from './pages/weather/weather.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomeComponent },
  { path: 'about-me', component: AboutComponent },
  { path: 'music-app', component: MusicComponent },
  { path: 'novel-app', component: NovelComponent },
  { path: 'weather-app', component: WeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
