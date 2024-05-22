export function isValidImage (file: File): boolean {
  const validTypes = ['image/jpeg', 'image/png', 'image/jpg']
  return validTypes.includes(file.type)
}