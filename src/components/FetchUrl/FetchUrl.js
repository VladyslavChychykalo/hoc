import React, { Component } from "react";
import withFetch from "../hoc/withFetch";
import ErrorNotification from "./ErrorNotification/ErrorNotification";
import Loader from "./Loader/Loader";
import ArticleList from "./ArticleList/ArticleList";

const mapper = articles => {
  return articles.map(({ objectID: id, url: link, ...props }) => ({
    id,
    link,
    ...props
  }));
};

class FetchUrl extends Component {
  render() {
    const { data, isLoading, error } = this.props;

    console.log(data);

    let articles = [];

    if (data.hits) {
      articles = mapper(data.hits);
    }

    return (
      <div>
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {articles.length > 0 && <ArticleList items={articles} />}
      </div>
    );
  }
}

export default withFetch("https://hn.algolia.com/api/v1/search?query=react")(
  FetchUrl
);
