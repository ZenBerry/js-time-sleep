function sleep(seconds, fps=60) {
  let start = Date.now();
  const end = start + seconds * 1000;
  while (Date.now() < end) {
    if (Date.now() - start > 1000/fps) {
      console.log('Tick!');
      start = Date.now();
    }
  }
}

// sleep for 100 seconds with a refresh rate of 24 fps
// sleep(100, 24) 

// sleep for 8 hours with a default refresh rate
// sleep(28800)

// SERIOUSLY
