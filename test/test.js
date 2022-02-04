const assert = require('assert');
const fs= require('fs');

const odsDir = "dist/assets/vendor/ontario-design-system";

describe('Site generation', function() {
  describe('root index.html present', function() {
    it('should generate a root index.html', function() {
      assert(fs.existsSync("dist/index.html"));
    });
  });
  describe('Ontario design system inclusion', function() {
    it('should copy over the design system assets', function() {
      assert(fs.existsSync(odsDir), "Expected directory for design system not found");
      const actualLength = fs.readdirSync(odsDir).length;
      const expectedLength = 7
      assert(actualLength === expectedLength, `The expected number of files in design system directory were not found, expected ${expectedLength}, got ${actualLength}`);
    });
  });
  describe('Site CSS file present', function() {
    it('Should copy over the site CSS file', function() {
      assert(fs.existsSync("dist/assets/css/style.css"));
    });
  });
});