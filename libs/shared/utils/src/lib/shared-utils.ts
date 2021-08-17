export const getLocation = (location: string): string[] => {
  const locationArray = location.split('/')
  return locationArray.filter((string) => string !== '')
}
