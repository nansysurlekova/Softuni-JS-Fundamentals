function calculateRotations(bandName, albumName, songName) {
    
    const songDuration = Math.ceil((albumName.length * bandName.length * songName.length) / 2);
    const rotations = Math.ceil(songDuration / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
  }
  
  
  calculateRotations('Black Sabbath', 'Paranoid', 'War Pigs');
  calculateRotations('Rammstein', 'Sehnsucht', 'Engel');
  