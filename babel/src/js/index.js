import search from "./search";
import "../css/index.css";
import render from "./render";

const id = prompt("Quién es ese pokemon?");

search(id)
  .then(data => {
    render(data);
  })
  .catch(error => {
    console.log(error);
  });
