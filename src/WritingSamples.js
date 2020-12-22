import React from "react";
import articles from "./data"
import "./WritingSamples.css"
import { Link } from "react-router-dom";


function WritingSamples(){
  return (
    <div className="WritingSamples">
      {articles.map((article)=>(
        <div className="Article" key={article.id}>
        <div  ><img className="Photo" src={article.mainphoto} alt="article-image"/></div>
        <div className="Description">
          <p>{article.date}</p>
          <Link className="DescriptionTitle" to={`/writingsamples/:${article.id}`}><h1>{article.title}</h1></Link>
          <p>{article.intro}</p>
          <Link className="BlueLink" to={`/writingsamples/:${article.id}`}>Read More</Link>
        </div>
      </div>
      ))}

    </div>
  );
}


export default WritingSamples;