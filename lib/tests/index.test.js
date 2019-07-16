const lib = require('../index');

describe('Stats', () => {
  describe('lib()', () => {
    it('should test custom assertion', () => {
      expect(lib.stats).toBeDefined();
      expect(lib.stats()).toEqual({
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
