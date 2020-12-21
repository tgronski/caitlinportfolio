import React from "react";
import articles from "./data"
import "./Article.css"

class Article extends React.Component {

  render(){
  let id=parseInt(this.props.match.params.id.slice(1,2))
  let result=articles.filter(article=>article.id===id)[0]
  
  return (
    <div className="Article">
      <div>
      <h4>{result.byline}</h4>
      <h1>{result.title}</h1>
      <img className="Photo" src={result.firstphoto} />
      <h5>{result.firstphotocredits}</h5>
      <h3>{result.articlePart1}</h3>
      <img className="Photo" src={result.secondphoto} />
      <h5>{result.secondphotocredits}</h5>
      <h3>{result.articlePart2}</h3>
      </div>
    </div>
  );
  }
}

export default Article;
