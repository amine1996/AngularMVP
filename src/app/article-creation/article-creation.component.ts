import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from "../services/article.service"
import { RawArticle } from "../models/rawArticle"
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private articleService: ArticleService) {
    this.articleForm = fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      authors: ['', Validators.required]
    });
  }

  createArticle() {
    let myArticle: RawArticle = {
      title: this.articleForm.value.title,
      content: this.articleForm.value.content,
      authors: this.articleForm.value.authors
    }

    this.articleService.createArticle(myArticle).subscribe(() => {
      this.router.navigate(['/articles'])
    });
  }

  ngOnInit() {
  }

}
