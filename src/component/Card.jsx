import React from "react";

const Card = ({
  brandLogo,
  company,
  date,
  post,
  tag1,
  tag2,
  pay,
  location,
}) => {
  return (
    <div className="card">
      <div className="top">
        <img src={brandLogo} alt={company} />
        <button>{date}</button>
      </div>

      <div className="center">
        <h3>{company}</h3>
        <span>{location}</span>
        <h2>{post}</h2>

        <div className="tag">
          <h4>{tag1}</h4>
          <h4>{tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <h3>{pay}</h3>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default Card;
