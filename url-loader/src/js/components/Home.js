import React, { useState, useEffect } from "react";
import Card from "./Card";
import Animation from "./Animation";

const Home = () => {
  const [characters, useCharacters] = useState({
    results: []
  });

  const [loading, useLoading] = useState(true);
  const [page, usePage] = useState(1);
  const [visible, useVisible] = useState(true);

  const fetchData = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const data = await response.json();
    useCharacters({
      results: [].concat(characters.results, data.results)
    });
    if (page != data.info.pages) {
      usePage(page + 1);
    } else {
      useVisible(false);
    }

    useLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const loadMore = () => {
    useLoading(true);
    fetchData(false);
  };

  return (
    <>
      <section className="CardsContainer">
        <div className="grid">
          {characters.results.map(character => (
            <Card key={character.id} character={character} />
          ))}
        </div>
        {loading && (
          <div className="animationContainer">
            <Animation />
          </div>
        )}
        {visible && <button onClick={loadMore}>Cargar más</button>}
      </section>
    </>
  );
};

export default Home;
