import React from "react";
import download from "../Assets/download.png";
import { downloadImage } from "../Utils";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={photo.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="d-flex">
            <p className="card-text">{prompt}</p>
            <button
              type="button"
              onClick={() => downloadImage(_id, photo)}
              className="btn ml-auto mt-auto"
            >
              <img
                src={download}
                alt="download"
                width="20px"
                className="w-6 h-6 object-contain invert"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
