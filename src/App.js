//import { useState } from "react";
//import useApiData from "./hooks/useApiData";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  const DUMMY_DATA = [
    {
      id: Math.random(),
      title: "Emotions",
      preview:
        "The term ‘emotional investment’ implies that emotion can function as a resource, and that it can be invested into something.",
      author: "Nina",
      url: "https://en.wikipedia.org/wiki/Emotion_recognition",
    },
    {
      id: Math.random(),
      title: "Narratology",
      preview:
        "Narratology is the study of narrative. It developed from structuralist theory in the 1960s, during which literary texts comprised its field of research almost exclusively.",
      author: "Frederik",
      url: "https://en.wikipedia.org/wiki/Narratology",
    },
    {
      id: Math.random(),
      title: "Gameplay Loop",
      preview:
        "The gameplay loop is a common concept in conversations concerning the design and analysis of games, generally referring to repeated patterns of action and feedback that form during the engagement of a player with a game system.",
      author: "Miruna",
      url: "https://en.wikipedia.org/wiki/Twelve_Minutes",
    },
    {
      id: Math.random(),
      title: "Representation",
      preview: "The term representation originates from Latin and Old French denoting the act of bringing forth, exhibiting, and presenting.",
      author: "Ida",
      url: "https://en.wikipedia.org/wiki/Knowledge_representation_and_reasoning"
    }
  ];

  return (
    <div style={{position: "relative"}}>
      <NavBar />
      <Main data={DUMMY_DATA}></Main>
      <Footer />
    </div>
  );
};

export default App;
