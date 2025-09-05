export const getAssetPath = (path: string) => {
  try {
    // For development
    if (import.meta.env.DEV) {
      return path;
    }
    
    // For production
    return `/celestia-uae-vision${path}`;
  } catch (error) {
    console.error('Error loading asset:', path);
    return path;
  }
};
