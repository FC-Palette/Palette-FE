import styled from 'styled-components'
import { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Add } from 'iconsax-react'
import { DraggableImagePreview } from 'components/index'
import { useSetRecoilState } from 'recoil'
import { tradescreateglobalstate } from 'recoil/index'

interface Image {
  id: string
  url: string
  blob: Blob | null
}

export const PurchaseImages = () => {
  const [images, setImages] = useState<Image[]>([])
  const setTradesGlobalState = useSetRecoilState(tradescreateglobalstate)

  // blob
  const encodeImageToBlob = (file: File, callback: (blob: Blob) => void) => {
    const reader = new FileReader()
    reader.onload = () => {
      const blob = new Blob([reader.result as ArrayBuffer], { type: file.type })
      callback(blob)
    }
    reader.readAsArrayBuffer(file)
  }

  const handleImageUpload = (acceptedFiles: File[]) => {
    if (images.length + acceptedFiles.length > 5) {
      return
    }

    acceptedFiles.forEach(file => {
      encodeImageToBlob(file, blob => {
        const newImg = {
          id: file.name,
          url: URL.createObjectURL(file),
          blob: blob
        }
        setImages(prevImages => [...prevImages, newImg])

        // 이미지를 전역 images 배열에 추가
        setTradesGlobalState(prevData => ({
          ...prevData,
          images: [...prevData.images, blob]
        }))
      })
    })
  }
  // 순서 변경
  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return
    }

    const reorderedImages = [...images]
    const [movedImage] = reorderedImages.splice(result.source.index, 1)
    reorderedImages.splice(result.destination.index, 0, movedImage)
    setImages(reorderedImages)

    setTradesGlobalState((prevData: any) => ({
      ...prevData,
      images: reorderedImages.map(img => img.blob)
    }))
  }

  // 이미지 삭제
  const handleImageDelete = (imageId: string) => {
    const updatedImages = images.filter(image => image.id !== imageId)
    setTradesGlobalState((prevData: any) => ({
      ...prevData,
      images: updatedImages
    }))
    setImages(updatedImages)
  }

  return (
    <>
      <TotalContainer>
        <UploadZoneContainer>
          <AddIcon />
          <Dropzone onDrop={handleImageUpload}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <UploadZoneBox />
              </div>
            )}
          </Dropzone>
        </UploadZoneContainer>
        <DraggableImagePreview
          images={images}
          onDragEnd={handleDragEnd}
          onDeleteImage={handleImageDelete}
        />
      </TotalContainer>
    </>
  )
}
const TotalContainer = styled.div`
  width: 380px;
  display: flex;
  margin-top: 8px;
  gap: 8px;
  overflow-x: scroll;
`

const UploadZoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
`

const UploadZoneBox = styled.div`
  background-color: ${props => props.theme.greyScale.grey1};
  width: 90px;
  height: 90px;
  border-radius: 8px;
`

const AddIcon = styled(Add)`
  position: absolute;
`
