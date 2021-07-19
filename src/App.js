import Header from './Components/Header'

import React, { useState, Component } from 'react'


function App() {
  const [albumData, setAlbumData] = useState(null);
  const [searchKey, setSearchKey] = useState('');

  const getInfo = async () => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${searchKey}/photos`).then(resp => resp.json()).then(data => {
      console.log('got the info');
      setAlbumData(data);
    });
  };

  const onSearchKeyChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div className='container'>
      <h1>Challenge 2</h1>
      <Header />

      <form className="form-control" onSubmit={(e) => {
        e.preventDefault();
        console.log('searching ...');
        if (searchKey !== '') {
          console.log('getting info');
          getInfo();
        } else {
          console.log('key is empty');
        }
      }}>
        <input type='text' placeholder="Enter an album ID" value={searchKey} onChange={(e) => onSearchKeyChange(e)} /><br></br>
        <button type="button" type='submit' className="btn">Search</button>
      </form>

        <div className="grid">
          <div className="albumGrid">
              {
                albumData !== null &&
                albumData.map(album =>
                  <div className="albumLists">
                    <img className="imgSize" src={album.thumbnailUrl} alt={album.title} />
                    <h3 className="info-item">{album.title}</h3>
                  </div>)
              }


            </div>

        </div>


    </div>
  );

}

export default App;
