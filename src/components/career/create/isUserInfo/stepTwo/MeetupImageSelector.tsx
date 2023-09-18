import styled from 'styled-components'
import { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Add } from 'iconsax-react'
import { DraggableImagePreview } from '@/components'
import { useSetRecoilState } from 'recoil'
import { CareerCreateGlobalState } from '../..'

interface Image {
  id: string
  url: string
  blob: Blob | null
}

export const MeetupImageSelector = () => {
  const [images, setImages] = useState<Image[]>([])
  const setGlobalData = useSetRecoilState(CareerCreateGlobalState)

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
    acceptedFiles.forEach(file => {
      encodeImageToBlob(file, blob => {
        const newImg = {
          id: file.name,
          url: URL.createObjectURL(file),
          blob: blob
        }
        setImages(prevImages => [...prevImages, newImg])

        // 이미지를 전역 상태 meetupImages 배열에 추가
        setGlobalData(prevData => ({
          ...prevData,
          meetupImages: [...prevData.meetupImages, blob]
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

    setGlobalData((prevData: any) => ({
      ...prevData,
      meetupImages: reorderedImages.map(img => img.blob)
    }))
  }

  // 이미지 삭제
  const handleImageDelete = (imageId: string) => {
    const updatedImages = images.filter(image => image.id !== imageId)
    setGlobalData((prevData: any) => ({
      ...prevData,
      meetupImages: updatedImages
    }))
    setImages(updatedImages)
  }

  return (
    <>
      <Title>
        이미지를 등록 해주세요.<span>(최대 5장)</span>
      </Title>
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

  & > span {
    color: ${props => props.theme.greyScale.grey6};
    font-size: 14px;
    font-weight: 400;
  }
`
