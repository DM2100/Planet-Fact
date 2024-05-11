import { useState } from "react";
import Data from "../data.json";

export const JupiterInfo = () => {
  const [showStructure, setShowStructure] = useState(false);
  const [showGeology, setShowGeology] = useState(false);
  const mercuryData = Data.find((planet) => planet.name === "Jupiter");

  const handleStructureClick = () => {
    setShowStructure(!showStructure);
    setShowGeology(false); // Closing geology when structure is clicked
  };

  const handleGeologyClick = () => {
    setShowGeology(!showGeology);
    setShowStructure(false); // Closing structure when geology is clicked
  };

  if (!mercuryData) {
    return null;
  }

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-lg-6 mt-3">
          <img
            src={
              showStructure
                ? mercuryData.images.internal
                : showGeology
                ? mercuryData.images.geology
                : mercuryData.images.planet
            }
            alt={
              showStructure
                ? "Internal Structure"
                : showGeology
                ? "Surface Geology"
                : "Planet Mercury"
            }
            className="mt-5 planet-img"
          />
        </div>
        <div className="col-lg-6 mt-3">
          <h1 className="text-white planet-name my-5">{mercuryData.name}</h1>
          {!showStructure && !showGeology && (
            <div>
              <p className=" planet-description">
                {mercuryData.overview.content}
              </p>
              <span className="text-source text-start">Source:</span>
              <a
                href={mercuryData.overview.source}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 styled-link"
              >
                Wikipedia
              </a>
            </div>
          )}
          {showStructure && (
            <div>
              <p className=" planet-description">
                {mercuryData.structure.content}
              </p>
              <span className="text-source text-start">Source:</span>
              <a
                href={mercuryData.structure.source}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 styled-link"
              >
                Wikipedia
              </a>
            </div>
          )}
          {showGeology && (
            <div>
              <p className=" planet-description">
                {mercuryData.geology.content}
              </p>
              <span className="text-source text-start">Source:</span>
              <a
                href={mercuryData.geology.source}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 styled-link"
              >
                Wikipedia
              </a>
            </div>
          )}

          <div className="mt-3 col-lg-12">
            <button
              className={`styled-btn mt-2 d-flex align-items-center justify-content-start ${
                !showStructure && !showGeology ? "active-btn" : ""
              }`}
              onClick={() => {
                setShowStructure(false);
                setShowGeology(false);
              }}
            >
              <span className="styled-number me-2 text-start">01</span>
              <span className="mx-auto styled-bg">OVERVIEW</span>
            </button>
          </div>
          <div className="mt-3 col-lg-12">
            <button
              className={`styled-btn mt-2 d-flex align-items-center justify-content-start ${
                showStructure ? "active-btn" : ""
              }`}
              onClick={handleStructureClick}
            >
              <span className="styled-number me-2 text-start">02</span>
              <span className="mx-auto styled-bg">INTERNAL STRUCTURE</span>
            </button>
          </div>
          <div className="mt-3 col-lg-12">
            <button
              className={`styled-btn mt-2 d-flex align-items-center justify-content-start ${
                showGeology ? "active-btn" : ""
              }`}
              onClick={handleGeologyClick}
            >
              <span className="styled-number me-2 text-start">03</span>
              <span className="mx-auto styled-bg">SURFACE GEOLOGY</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-5 pt-5">
        <div className="col-lg-3 mb-4">
          <div className="styled-card">
            <p className="styled-info">Rotation</p>
            <h1 className="info-text">{mercuryData.rotation}</h1>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="styled-card">
            <p className="styled-info">Revolution</p>
            <h1 className="info-text">{mercuryData.revolution}</h1>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="styled-card">
            <p className="styled-info">Radius</p>
            <h1 className="info-text">{mercuryData.radius}</h1>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className="styled-card">
            <p className="styled-info">Temperature</p>
            <h1 className="info-text">{mercuryData.temperature}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
