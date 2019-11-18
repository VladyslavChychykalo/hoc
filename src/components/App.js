import React from "react";
import Article1 from "./Article1/Article1";
import Article2 from "./Article2/Article2";
import FetchUrl from "./FetchUrl/FetchUrl";

const App = () => (
  <>
    <Article1 title="Article1" text="article1" />
    <Article2 />
    <FetchUrl />
  </>
);

export default App;
