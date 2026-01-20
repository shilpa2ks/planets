import { normalizeImagePath } from "../imageUtils";

describe("imageUtils", () => {
  describe("normalizeImagePath", () => {
    it("converts relative path starting with ./ to absolute path", () => {
      const input = "./assets/planet-mercury.svg";
      const expected = "/assets/planet-mercury.svg";

      expect(normalizeImagePath(input)).toBe(expected);
    });

    it("converts multiple relative paths correctly", () => {
      expect(normalizeImagePath("./assets/geology-mercury.png")).toBe(
        "/assets/geology-mercury.png"
      );
      expect(normalizeImagePath("./assets/planet-venus.svg")).toBe(
        "/assets/planet-venus.svg"
      );
    });

    it("returns already absolute paths unchanged", () => {
      const input = "/assets/planet-earth.svg";

      expect(normalizeImagePath(input)).toBe(input);
    });

    it("returns full URLs unchanged", () => {
      const input = "https://example.com/image.png";

      expect(normalizeImagePath(input)).toBe(input);
    });

    it("returns empty string for empty input", () => {
      expect(normalizeImagePath("")).toBe("");
    });

    it("handles paths with multiple segments", () => {
      expect(normalizeImagePath("./public/assets/images/planet.svg")).toBe(
        "/public/assets/images/planet.svg"
      );
    });
  });
});
