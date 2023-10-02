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
  const [image, setImage] = useState<Image[]>([])
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
    if (image.length + acceptedFiles.length > 5) {
      return
    }

    acceptedFiles.forEach(file => {
      encodeImageToBlob(file, blob => {
        const newImg = {
          id: file.name,
          url: URL.createObjectURL(file),
          blob: blob
        }
        setImage(previmage => [...previmage, newImg])

        // 이미지를 전역 image 배열에 추가
        setTradesGlobalState(prevData => ({
          ...prevData,
          image: [...prevData.image, blob]
        }))
      })
    })
  }
  // 순서 변경
  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return
    }

    const reorderedimage = [...image]
    const [movedImage] = reorderedimage.splice(result.source.index, 1)
    reorderedimage.splice(result.destination.index, 0, movedImage)
    setImage(reorderedimage)

    setTradesGlobalState((prevData: any) => ({
      ...prevData,
      image: reorderedimage.map(img => img.blob)
    }))
  }

  // 이미지 삭제
  const handleImageDelete = (imageId: string) => {
    const updatedimage = image.filter(image => image.id !== imageId)
    setTradesGlobalState((prevData: any) => ({
      ...prevData,
      image: updatedimage
    }))
    setImage(updatedimage)
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
          images={image}
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
