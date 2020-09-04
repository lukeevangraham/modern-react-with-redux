import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: `I Still Haven't Found What I'm Looking For`, duration: '4:05'},
        { title: `No Scrubs`, duration: '2:30'},
        { title: `Deeper`, duration: '3:30'},
        { title: `Just Let Go`, duration: '3:37'}
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})