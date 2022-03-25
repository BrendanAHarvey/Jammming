import React from 'react';

import './PlayList.css';

class Playlist extends React.Component {
    render(){
        return (
            <div className="Playlist">
                <input deafultValue={'New Playlist'}/>
                {/* <TrackLiist /> */}
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;