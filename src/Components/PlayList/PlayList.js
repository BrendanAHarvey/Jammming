import React from 'react';

import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    render(){
        return (
            <div className="Playlist">
                <input deafultValue={'New Playlist'}
                        onChange={this.handleNameChange}/>
                <TrackList tracks={this.props.playlistTracks}
                            onRemove={this.props.onRemove}
                            isRemoval={true}/>
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }
}

export default Playlist;