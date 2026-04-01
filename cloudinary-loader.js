module.exports = function cloudinaryLoader({ src, width, quality }) {
  if (typeof src === 'string' && src.includes('res.cloudinary.com') && src.includes('/upload/')) {
    const qualityValue = quality || 'auto'
    return src.replace('/upload/', `/upload/f_auto,q_${qualityValue},w_${width}/`)
  }

  return src
}
