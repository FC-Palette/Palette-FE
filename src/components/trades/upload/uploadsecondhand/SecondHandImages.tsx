import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'
import { Add } from 'iconsax-react'
import { DraggableImagePreview } from 'components/index'
import { useSetRecoilState } from 'recoil'
import { secondhandcreateglobalstate } from 'recoil/index'
import { centralise } from 'styles/index'

interface Image {
  id: string
  url: string
  blob: Blob | null
}

export const SecondHandImages = () => {
  const [tradesImages, setTradesImages] = useState<Image[]>([])

  const setSecondHandGlobalState = useSetRecoilState(
    secondhandcreateglobalstate
  )

  useEffect(() => {
    if (tradesImages.length === 1) {
    }
  }, [tradesImages.length])

  // blob
  const encodeImageToBlob = (file: File, callback: (blob: Blob) => void) => {
    const reader = new FileReader()
    reader.onload = () => {
      const blob = new Blob([reader.result as ArrayBuffer], { type: file.type })
      callback(blob)
    }
    reader.readAsArrayBuffer(file)
  }

  // 업로드시

  const handleImageUpload = (acceptedFiles: File[]) => {
    if (tradesImages.length + acceptedFiles.length > 5) {
      return
    }

    acceptedFiles.forEach(file => {
      encodeImageToBlob(file, blob => {
        const newImg = {
          id: file.name,
          url: URL.createObjectURL(file),
          blob: blob
        }
        setTradesImages(prevTradesImages => [...prevTradesImages, newImg])

        // 이미지를 전역 images 배열에 추가
        setSecondHandGlobalState(prevData => ({
          ...prevData,
          tradesImages: [...prevData.tradesImages, blob]
        }))
      })
    })
  }
  // 순서 변경
  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return
    }

    const reorderedImages = [...tradesImages]
    const [movedImage] = reorderedImages.splice(result.source.index, 1)
    reorderedImages.splice(result.destination.index, 0, movedImage)
    setTradesImages(reorderedImages)

    setSecondHandGlobalState((prevData: any) => ({
      ...prevData,
      tradesImages: reorderedImages.map(img => img.blob)
    }))
  }

  // 이미지 삭제
  const handleImageDelete = (imageId: string) => {
    const updatedImages = tradesImages.filter(image => image.id !== imageId)
    setSecondHandGlobalState((prevData: any) => ({
      ...prevData,
      tradesImages: updatedImages
    }))
    setTradesImages(updatedImages)
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
          images={tradesImages}
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
  flex-direction: column;
  ${centralise}
  position: relative;
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
