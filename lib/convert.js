function secondsToMinutes(seconds) {
  if (seconds < 0) {
    seconds = 0;
  }

  return Math.floor(seconds / 60);
}

function bytesToMegabytes(bytes) {
  if (bytes < 0) {
    bytes = 0;
  }

  return Math.round(bytes / 1024 / 1024 * 100) / 100;
}

function bytesToGigabytes(bytes) {
  if (bytes < 0) {
    bytes = 0;
  }

  return Math.round(bytes / 1024 / 1024 / 1024 * 100) / 100;
}

module.exports = {
  secondsToMinutes,
  bytesToMegabytes,
  bytesToGigabytes
};
