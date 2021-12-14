import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

export default class ArticleList extends React.Component {
  state = {
   articles: []
  }
 
  componentDidMount() {
   axios.get(`https://www.jalirani.com/files/barstool.json`)
  .then(res => {
     const articles = res.data;
     this.setState({ articles });
    })
  }
 
  render() {
   return (
    <ul>
     { this.state.articles.map(article => 
     <li>
       <h1>
         <a target="_blank" href={article.url}>
         {article.title}
         </a>
         </h1>
       <img 
          src={article.thumbnail.location + article.thumbnail.images.small} 
          alt={article.title}
        />
        <p>
        <img 
          src={article.author.avatar}
          alt={article.author.name}
          />
        &nbsp;{article.author.name}</p>
        <p>Amount of comments: {article.comment_count}</p>
      </li>)}
    </ul>
   )
  }
 }