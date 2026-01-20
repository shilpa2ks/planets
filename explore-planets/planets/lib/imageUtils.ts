/**
 * Normalize image paths from relative format to absolute format
 * Converts "./assets/image.png" to "/assets/image.png"
 */
export function normalizeImagePath(path: string): string {
  if (!path) return "";
  return path.startsWith("./") ? path.replace("./", "/") : path;
}
