import title from "./title";
import "../css/index.css";

title();

if (module.hot) {
  module.hot.accept("./title", () => {
    title();
  });
}
