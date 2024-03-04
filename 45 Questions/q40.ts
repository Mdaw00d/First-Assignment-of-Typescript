40
function makeAlbum(artist: {artistName: string, albumTitle: string, numberOfTracks?: number}): void {
    console.log('Name: '+ artist.artistName + ', Album Name: '+ artist.albumTitle+ 'numberoftrack: '+artist.numberOfTracks);
}




let dictionery = {
    artistName: 'Rihanna',
    albumTitle: 'Pop',
    numberOfTracks: 11

};

let dictionery2 = {
    artistName: 'Talha Anjum',
    albumTitle: 'wrap'

};

let dictionery3 = {
    artistName: 'Asim Azher',
    albumTitle: 'Classical'

}

makeAlbum(dictionery);
makeAlbum(dictionery2);
makeAlbum(dictionery3);