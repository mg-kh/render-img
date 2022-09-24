import React from "react";
// component
import ImageLoader from "../components/ImageLoader";

import "./page.css";

const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <article>
      <section>
        <h2 className="title">Lazy Load Demo</h2>
        <div className="gap"></div>
        <div className="container">
          <ImageLoader
            style={{ width: "200px", margin: "auto" }}
            src="/images/mac-lg.jpg"
            placeHolderSrc="/images/mac-sm.jpg"
            errorSrc="/images/mac-sm-fallback.jpg"
            lazyload={true}
          />
          <div className="small-gap"></div>
          <ImageLoader
            style={{ width: "200px", margin: "auto" }}
            src="/images/mac-lg.jpg"
            placeHolderSrc="/images/mac-sm.jpg"
            errorSrc="/images/mac-sm-fallback.jpg"
            lazyload={true}
          />
          <ImageLoader
            style={{ width: "200px", margin: "auto" }}
            src="/images/mac-lg.jpg"
            placeHolderSrc="/images/mac-sm.jpg"
            errorSrc="/images/mac-sm-fallback.jpg"
            lazyload={true}
          />
          <ImageLoader
            style={{ width: "200px", margin: "auto" }}
            src="/images/mac-lg.jpg"
            placeHolderSrc="/images/mac-sm.jpg"
            errorSrc="/images/mac-sm-fallback.jpg"
            lazyload={true}
          />
          <div className="gap"></div>
          <ImageLoader
            style={{ width: "200px", margin: "auto" }}
            src="/images/mac-lg.jpg"
            placeHolderSrc="/images/mac-sm.jpg"
            errorSrc="/images/mac-sm-fallback.jpg"
            lazyload={true}
          />
        </div>
      </section>
    </article>
  );
};

export default Page;
