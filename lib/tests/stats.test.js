const stats = require('../stats').stats;

describe('Stats', () => {
  describe('getStats()', () => {
    it('should return valid object', () => {
      expect(stats()).toEqual({
        nodejsVersion: expect.any(String),
        maxHeapAvailable: expect.any(String),
        processMemory: expect.any(String),
        uptime: expect.any(String),
        v8cppObjects: expect.any(String),
        v8heapTotal: expect.any(String),
        v8heapUsed: expect.any(String),
      });
    });
  });
});
