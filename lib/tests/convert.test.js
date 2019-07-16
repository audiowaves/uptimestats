const convert = require('../convert');

describe('Convert', () => {
  describe('secondsToMinutes()', () => {
    it('should convert seconds to minutes', () => {
      expect(convert.secondsToMinutes(-1)).toEqual(0);
      expect(convert.secondsToMinutes(0)).toEqual(0);
      expect(convert.secondsToMinutes(1)).toEqual(0);
      expect(convert.secondsToMinutes(59)).toEqual(0);
      expect(convert.secondsToMinutes(60)).toEqual(1);
      expect(convert.secondsToMinutes(180)).toEqual(3);
      expect(convert.secondsToMinutes(181)).toEqual(3);
    });
  });

  describe('bytesToMegabytes()', () => {
    it('should convert bytes to MB', () => {
      expect(convert.bytesToMegabytes(-1)).toEqual(0);
      expect(convert.bytesToMegabytes(0)).toEqual(0);
      expect(convert.bytesToMegabytes(1)).toEqual(0);
      expect(convert.bytesToMegabytes(1024)).toEqual(0);
      expect(convert.bytesToMegabytes(1048576)).toEqual(1);
      expect(convert.bytesToMegabytes(2097152)).toEqual(2);
    });
  });

  describe('bytesToGigabytes()', () => {
    it('should convert bytes to GB', () => {
      expect(convert.bytesToGigabytes(-1)).toEqual(0);
      expect(convert.bytesToGigabytes(0)).toEqual(0);
      expect(convert.bytesToGigabytes(1)).toEqual(0);
      expect(convert.bytesToGigabytes(1024)).toEqual(0);
      expect(convert.bytesToGigabytes(1048576)).toEqual(0);
      expect(convert.bytesToGigabytes(2097152)).toEqual(0);
      expect(convert.bytesToGigabytes(1073741824)).toEqual(1);
    });
  });
});
