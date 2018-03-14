import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-search-form',
  templateUrl: './article-search-form.component.html',
  styleUrls: ['./article-search-form.component.css']
})
export class ArticleSearchFormComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.searchForm = this.fb.group({
      title: "",
      content: "",
      authors: "",
      titleQueryType: ["contain", Validators.required],
      contentQueryType: ["contain", Validators.required],
      authorsQueryType: ["contain", Validators.required]
    });
  }

  searchArticles() {
    let searchQuery = {};
    let formValues = this.searchForm.value;

    if (formValues.title != "") {
      if (formValues.titleQueryType == "contain")
        searchQuery['title_like'] = formValues.title;
      else if (formValues.titleQueryType == "match")
        searchQuery['title'] = formValues.title;
    }

    if (formValues.content != "") {
      if (formValues.contentQueryType == "contain")
        searchQuery['content_like'] = formValues.content;
      else if (formValues.contentQueryType == "match")
        searchQuery['content'] = formValues.content;
    }

    if (formValues.authors != "") {
      if (formValues.authorsQueryType == "contain")
        searchQuery['authors_like'] = formValues.authors;
      else if (formValues.authorQueryType == "match")
        searchQuery['authors'] = formValues.authors;
    }

    console.log(searchQuery);

    this.router.navigate(['/articles'], { queryParams: searchQuery })
  }

  ngOnInit() {

  }

}
