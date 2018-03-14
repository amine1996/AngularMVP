import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService } from "./services/article.service";
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ArticleModificationComponent } from './article-modification/article-modification.component';
import { ArticleSearchFormComponent } from './article-search-form/article-search-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'create',
    component: ArticleCreationComponent
  },
  {
    path: 'search',
    component: ArticleSearchFormComponent
  },
  {
    path: 'index',
    component: LandingPageComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    ArticleModificationComponent,
    ArticleSearchFormComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
