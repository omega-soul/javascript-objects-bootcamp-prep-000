<<<<<<< HEAD
var playlist = {Object};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return {};
}
=======
var object = {playlist}; 
>>>>>>> dccb7e585f5861c79c67de85dd26e079c592b0dd
