import { CONFIG } from 'config/config'
import { IServerImage } from 'redux/api/product/product.decoders'

export const convertIImageToFiles = async (
  images: IServerImage[]
): Promise<File[]> => {
  return images.map(
    (image) =>
      new File([], `${CONFIG.REACT_APP_API_UPLOAD}${image.url}`, {
        type: 'image/jpeg',
      })
  )
}
