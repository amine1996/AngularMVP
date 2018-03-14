import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { RawArticle } from '../models/rawArticle';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ArticleService {

  private dbArticlesUri: string = "http://localhost:3000/articles";

  constructor(private http: HttpClient) { }

  public getArticles(queryString: string = ""): Observable<Article[]> {
    return this.http.get<Article[]>(this.dbArticlesUri + queryString);
  }

  public deleteArticle(article: Article): Observable<Article> {
    return this.http.delete<Article>(this.dbArticlesUri + "/" + article.id);
  }

  public createArticle(rawArticle: RawArticle): Observable<RawArticle> {
    return this.http.post<RawArticle>(this.dbArticlesUri, rawArticle);
  }

  public modifyArticle(newArticle: Article) {
    return this.http.put<Article>(this.dbArticlesUri + "/" + newArticle.id, newArticle);
  }
}
