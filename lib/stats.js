const v8 = require('v8');
const convert = require('./convert');

function getUptime() {
  return `${convert.secondsToMinutes(process.uptime())} min`;
}

function stats() {
  const mem = process.memoryUsage();

  return {
    nodejsVersion: process.version,
    uptime: getUptime(),
    processMemory: `${convert.bytesToMegabytes(mem.rss)} MB`,
    maxHeapAvailable: `${convert.bytesToGigabytes(v8.getHeapStatistics().total_available_size)} Gb`,
    v8heapTotal: `${convert.bytesToMegabytes(mem.heapTotal)} MB`,
    v8heapUsed: `${convert.bytesToMegabytes(mem.heapUsed)} MB`,
    v8cppObjects: `${convert.bytesToMegabytes(mem.external)} MB`
  };
}

module.exports = {
  stats
};
