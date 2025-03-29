function sleep(seconds) {
  const start = Date.now();
  while (Date.now() - start < seconds * 1000) {
  }
}
