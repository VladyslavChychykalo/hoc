import React from "react";
import passProps from "../hoc/passProps";

const Article = ({ title, text }) => (
  <article>
    <h2>{title}</h2>
    <p>{text}</p>
  </article>
);

export default passProps({ title: "Article2", text: "article2" })(Article);
