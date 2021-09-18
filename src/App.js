import "./styles.css";
import react, { useState } from "react";
var songDictionary = {
  Rock: ["song1", "song2", "song3"],
  Metal: ["song4", "song5", "song6"],
  Psychedelic: ["song7", "song8"]
};
var category = Object.keys(songDictionary);
//var categoryOne = Object.keys(songDictionary["Rock"]);
// console.log(categoryOne.length);
export default function App() {
  // var [song, setSong] = useState("");
  var [song1, setSong1] = useState("");
  var [song2, setSong2] = useState("");
  var [song3, setSong3] = useState("");
  function clickHandler(currItem) {
    var songsInCategory = songDictionary[currItem];
    song1 = songsInCategory[0];
    setSong1(song1);
    song2 = songsInCategory[1];
    setSong2(song2);
    song3 = songsInCategory[2];
    setSong3(song3);

    //console.log(songsInCategory.length);
  }
  return (
    <div className="App">
      <h1>Music playlist {"🎵"}</h1>
      <h2></h2>
      {category.map(function (currItem) {
        return (
          <span
            onClick={() => clickHandler(currItem)}
            style={{
              padding: "1rem",
              cursor: "pointer",
              backgroundColor: "lightblue",
              margin: "1.5rem 1rem",
              borderRadius: "1rem"
            }}
          >
            {currItem}
          </span>
        );
      })}
      <ul
        style={{
          listStyle: "none",
          textAlign: "left",
          margin: "2.5rem 3rem"
        }}
      >
        <li className="listItem">{song1}</li>
        <li className="listItem">{song2}</li>
        <li className="listItem">{song3}</li>
      </ul>
    </div>
  );
}
