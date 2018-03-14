import { Component, OnInit } from '@angular/core';
import { Article } from "../models/article";
import { ArticleService } from "../services/article.service";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  private _articles: Observable<Article[]>;
  private queryString: string = "";

  public articleModified: Article;

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) {
    this.articleModified = { id: "", title: "", content: "", authors: "" };
  }

  articles(): Observable<Article[]> {
    return this._articles;
  }

  deleteArticle(article: Article) {
    this.articleService.deleteArticle(article).subscribe(() => {
      this._articles = this.articleService.getArticles(this.queryString);
    });
  }

  modifyArticle(article: Article) {
    this.articleModified = article;
  }

  modifiedArticle(article: Article) {
    this.articleModified = { id: "", title: "", content: "", authors: "" };
    this._articles = this.articleService.getArticles(this.queryString);
  }

  ngOnInit() {
    let url = this.activatedRoute.snapshot['_routerState'].url;

    if (url.indexOf("?") != -1)
      this.queryString = url.substr(url.indexOf("?"));

    this._articles = this.articleService.getArticles(this.queryString);
    this._articles.subscribe();
  }

}
