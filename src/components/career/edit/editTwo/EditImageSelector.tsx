import { DraggableImagePreview } from '@/components'
import { editImageAtom } from '@/recoil'
import { Add } from 'iconsax-react'
import { useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import styled from 'styled-components'

interface Image {
  id: string
  url: string
  blob: Blob | null
}
export const EditImageSelector = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [images, setImages] = useState<Image[]>([])
  const setEditImage = useSetRecoilState(editImageAtom)
  const initialImages = useRecoilValue(editImageAtom)

  useEffect(() => {
    if (images.length === 1) {
      setShowMessage(true)
      const timer = setTimeout(() => {
        setShowMessage(false)
      }, 1000)

      return () => clearTimeout(timer)
    }
    if (!initialImages.file) {
      return
    }

    const previewImages = initialImages.file
      .filter(blob => blob instanceof Blob)
      .map((blob, idx) => ({
        id: `image-${idx}`,
        url: URL.createObjectURL(blob),
        blob
      }))

    setImages(previewImages)

    return () => {
      images.forEach(image => URL.revokeObjectURL(image.url))
    }
  }, [images.length])

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
    if (images.length + acceptedFiles.length > 5) {
      return
    }

    acceptedFiles.forEach(file => {
      encodeImageToBlob(file, blob => {
        const uniqueId = `${file.name}-${Date.now()}`
        const newImg = {
          id: uniqueId,
          url: URL.createObjectURL(file),
          blob: blob
        }

        setImages(prevImages => [...prevImages, newImg])

        setEditImage((prevData: any) => ({
          ...prevData,
          file: prevData.file ? [...prevData.file, blob] : [blob]
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

    setEditImage((prevData: any) => ({
      ...prevData,
      file: reorderedImages.map(img => img.blob)
    }))
  }

  // 이미지 삭제
  const handleImageDelete = (imageId: string) => {
    const updatedImages = images.filter(image => image.id !== imageId)
    setImages(updatedImages)

    setEditImage((prevData: any) => ({
      ...prevData,
      file: updatedImages.map(img => img.blob)
    }))
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

      {showMessage && (
        <MessageContainer>
          드래그로 사진 순서를 변경할 수 있습니다.
        </MessageContainer>
      )}
    </>
  )
}

const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 8px;
  gap: 8px;
  overflow-x: scroll;
  padding-bottom: 8px;
`

const UploadZoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const AddIcon = styled(Add)`
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

const UploadZoneBox = styled.div`
  background-color: ${props => props.theme.greyScale.grey1};
  width: 90px;
  height: 90px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;

  & > ${AddIcon} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
const MessageContainer = styled.div`
  width: 250px;
  height: 37px;
  background-color: rgba(55, 65, 81, 0.8);
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  z-index: 9999;
`
