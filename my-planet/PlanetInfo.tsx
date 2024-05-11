// import React, { useState } from "react";
// import data from "../data.json";

// interface Planet {
//   name: string;
//   overview: {
//     content: string;
//     source: string;
//   };
//   structure: {
//     content: string;
//     source: string;
//   };
//   geology: {
//     content: string;
//     source: string;
//   };
//   rotation: string;
//   revolution: string;
//   radius: string;
//   temperature: string;
//   images: {
//     planet: string;
//     internal: string;
//     geology: string;
//   };
// }

// const PlanetInfo = () => {
//   const [filteredData, setFilteredData] = useState(data);

//   const handleNavLinkClick = (planetName: string) => {
//     const filtered = data.filter((planet) => planet.name === planetName);
//     setFilteredData(filtered);
//   };
//   // Define the type for the planetName parameter
//   function handlePlanetClick(planetName: string) {
//     // Your function implementation
//   }

//   Example usage
//   handlePlanetClick("Mercury");
//   return (
//     <div>
//       <nav>
//         <ul>
//           {data.map((planet) => (
//             <li key={planet.name}>
//               <button onClick={() => handleNavLinkClick(planet.name)}>
//                 {planet.name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <div>
//         {filteredData.map((planet) => (
//           <div key={planet.name}>
//             <h2>{planet.name}</h2>
//             <h3>Overview</h3>
//             <p>{planet.overview.content}</p>
//             <p>Rotation: {planet.rotation}</p>
//             <p>Revolution: {planet.revolution}</p>
//             <p>Radius: {planet.radius}</p>
//             <p>Temperature: {planet.temperature}</p>

//             <h3>Structure</h3>
//             <p>{planet.structure.content}</p>

//             <h3>Geology</h3>
//             <p>{planet.geology.content}</p>

//             {/* Render images */}
//             <img src={planet.images.planet} alt={planet.name} />
//             <img src={planet.images.internal} alt={`${planet.name} Internal`} />
//             <img src={planet.images.geology} alt={`${planet.name} Geology`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PlanetInfo;
