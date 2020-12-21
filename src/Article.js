import React from "react";
import articles from "./data"

class Article extends React.Component {

  render(){
  let id=parseInt(this.props.match.params.id.slice(1,2))
  let result=articles.filter(article=>article.id===id)[0]
  
  return (
    <div className="Article">
      <h1>{result.title}</h1>
    </div>
  );
  }
}

export default Article;
