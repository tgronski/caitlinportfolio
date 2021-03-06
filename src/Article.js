import React from "react";
import articles from "./data"
import "./Article.css"

class Article extends React.Component {

  render(){
  let id=parseInt(this.props.match.params.id.slice(1,2))
  let result=articles.filter(article=>article.id===id)[0]
  
  return (
    <div className="Article-Content">
      <div>
      <div className="Article-Byline-Title">
      <h4>{result.byline}</h4>
      <h1>{result.title}</h1>
      </div>
      {(result.firstphoto)
      ?(<div className="Content-Image"><img className="Photo" src={result.firstphoto} alt="article-main"/>
      <h5>{result.firstphotocredits}</h5></div>)
      :(null)}

      <h3>{result.articlePart1}</h3>
      <div className="Content-Image">
      <img className="Photo" src={result.secondphoto} alt="article-second" />
      <h5>{result.secondphotocredits}</h5></div>
      <h3>{result.articlePart2}</h3>
      </div>
    </div>
  );
  }
}

export default Article;
