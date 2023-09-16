import styled from 'styled-components'
import { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Add } from 'iconsax-react'
import { DraggableImagePreview } from '@/components'

interface Image {
  id: string
  url: string
  blob: Blob | null
}

export const MeetupImageSelector = () => {
  const [images, setImages] = useState<Image[]>([])
  console.log(images)

  // 기존 createObjectURL(file) => 클라이언트 로컬에서만 확인 가능한 객체
  // const handleImgDrop = acceptedFiles => {
  //   const newImg = acceptedFiles.map(file => ({
  //     id: file.name,
  //     url: URL.createObjectURL(file)
  //   }))
  //   setImages([...images, ...newImg])
  // }

  // base64 인코딩
  // function encodeImageToBase64(file, callback) {
  //   const reader = new FileReader()
  //   reader.onload = () => {
  //     const base64Image = reader.result
  //     callback(base64Image)
  //   }
  //   reader.readAsDataURL(file)
  // }

  // const handleImgDrop = acceptedFiles => {
  //   acceptedFiles.forEach(file => {
  //     // 이미지를 Base64로 인코딩하여 images 배열에 추가
  //     encodeImageToBase64(file, base64Image => {
  //       const newImg = {
  //         id: file.name,
  //         url: base64Image
  //       }
  //       setImages(prevImages => [...prevImages, newImg])
  //     })
  //   })
  // }

  // blob 형식 (제일 효율적인듯함)
  const encodeImageToBlob = (file: File, callback: (blob: Blob) => void) => {
    const reader = new FileReader()
    reader.onload = () => {
      const blob = new Blob([reader.result as ArrayBuffer], { type: file.type })
      callback(blob)
    }
    reader.readAsArrayBuffer(file)
  }

  const handleImgDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      encodeImageToBlob(file, blob => {
        const newImg = {
          id: file.name,
          url: URL.createObjectURL(file),
          blob: blob
        }
        setImages(prevImages => [...prevImages, newImg])
      })
    })
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return
    }

    const reorderedImages = [...images]
    const [movedImage] = reorderedImages.splice(result.source.index, 1)
    reorderedImages.splice(result.destination.index, 0, movedImage)
    setImages(reorderedImages)
  }

  const handleImageDelete = (imageId: string) => {
    const updatedImages = images.filter(image => image.id !== imageId)
    setImages(updatedImages)
  }

  return (
    <>
      <Title>이미지를 등록 해주세요.</Title>
      <TotalContainer>
        <UploadZoneContainer>
          <AddIcon />
          <Dropzone onDrop={handleImgDrop}>
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
  margin: 30px 0;
  gap: 8px;
  overflow-x: scroll;
`

const UploadZoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const UploadZoneBox = styled.div`
  background-color: ${props => props.theme.greyScale.grey1};
  width: 90px;
  height: 90px;
  border-radius: 8px;
  cursor: pointer;
`

const AddIcon = styled(Add)`
  position: absolute;
  cursor: pointer;
`

const Title = styled.div`
  margin-top: 32px;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.greyScale.grey6};
`
