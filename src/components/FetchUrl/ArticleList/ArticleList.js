import React from "react";
import ArticleListItem from "./ArticleListItem/ArticleListItem";
import PropTypes from "prop-types";
import Toggle from "../../hoc/Toggle";

const ArticleList = ({ items }) => (
  <ul>
    {items.map(({ id, link, title }) => (
      <li key={id}>
        <Toggle>
          {({ isOpen, toggle }) => (
            <div>
              <button onClick={toggle}> {isOpen ? "Hide" : "Show"}</button>
              {isOpen && <ArticleListItem link={link} title={title} />}
            </div>
          )}
        </Toggle>
      </li>
    ))}
  </ul>
);

ArticleList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ArticleList;
