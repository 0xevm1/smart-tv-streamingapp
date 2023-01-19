import React from 'react';
import Poster from "./components/Poster";
import './App.css';
import sampleTitleData from './apiData.json';

function App() {

    let titles = sampleTitleData.categories[0].items;

    let posterList : any = [];

    titles.map((title) =>
        posterList.push(<Poster name={title.name} cover={title.covers[1].url} key={title._id} id={title._id}/>)
    );

  return (
    <div className="makeitbetter-app">
        <h1>{sampleTitleData.categories[0].name + "(React + Typescript Rendition)"}</h1>

        <div id='poster'>
            {posterList};
        </div>

    </div>
  );
}

export default App;
