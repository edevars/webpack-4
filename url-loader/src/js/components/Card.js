import React from "react";

const Card = props => {
  const { name, image } = props.character;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="title">
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default Card;
