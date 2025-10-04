export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string) {
  // Remove accidental double slashes
  return `${basePath}${path}`.replace(/\/\/+/g, "/");
}