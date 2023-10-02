import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'
import { Add } from 'iconsax-react'
import { DraggableImagePreview } from '@/components'
import { useSetRecoilState } from 'recoil'
import { careerCreateGlobalState } from '@/recoil'

interface Image {
  id: string
  url: string
  blob: Blob | null
}

export const MeetupImageSelector = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [images, setImages] = useState<Image[]>([])
  const setGlobalData = useSetRecoilState(careerCreateGlobalState)

  useEffect(() => {
    if (images.length === 1) {
      setShowMessage(true)
      setTimeout(() => {
        setShowMessage(false)
      }, 2000)
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
        const newImg = {
          id: file.name,
          url: URL.createObjectURL(file),
          blob: blob
        }

        setImages(prevImages => [...prevImages, newImg])

        // 이미지를 전역 상태 meetupImages 배열에 추가
        setGlobalData(prevData => ({
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

    const reorderedImages = [...images]
    const [movedImage] = reorderedImages.splice(result.source.index, 1)
    reorderedImages.splice(result.destination.index, 0, movedImage)
    setImages(reorderedImages)

    setGlobalData((prevData: any) => ({
      ...prevData,
      image: reorderedImages.map(img => img.blob)
    }))
  }

  // 이미지 삭제
  const handleImageDelete = (imageId: string) => {
    const updatedImages = images.filter(image => image.id !== imageId)
    setGlobalData((prevData: any) => ({
      ...prevData,
      image: updatedImages
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

// ------------------------ STRING ------------------------

// import styled from 'styled-components'
// import { useEffect, useState } from 'react'
// import Dropzone from 'react-dropzone'
// import { Add } from 'iconsax-react'
// import { DraggableImagePreview } from '@/components'
// import { useRecoilValue, useSetRecoilState } from 'recoil'
// import { careerCreateGlobalState } from '@/recoil'

// interface Image {
//   id: string
//   url: string
//   base64: string | null
// }

// export const MeetupImageSelector = () => {
//   const [showMessage, setShowMessage] = useState(false)
//   const [images, setImages] = useState<Image[]>([])
//   const setGlobalData = useSetRecoilState(careerCreateGlobalState)

//   const globalDate = useRecoilValue(careerCreateGlobalState)
//   console.log(globalDate.meetupImages)

//   useEffect(() => {
//     if (images.length === 1) {
//       setShowMessage(true)
//       setTimeout(() => {
//         setShowMessage(false)
//       }, 2000)
//     }
//   }, [images.length])

//   // Blob를 Base64 문자열로 변환하는 함수
//   const blobToBase64 = (blob: Blob): Promise<string> => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader()
//       reader.onload = () => {
//         if (reader.result && typeof reader.result === 'string') {
//           const base64String = reader.result.split(',')[1]
//           resolve(base64String)
//         } else {
//           reject(new Error('Failed to convert Blob to Base64.'))
//         }
//       }
//       reader.onerror = () => {
//         reject(new Error('Error reading Blob as Base64.'))
//       }
//       reader.readAsDataURL(blob)
//     })
//   }

//   // 업로드시
//   const handleImageUpload = async (acceptedFiles: File[]) => {
//     // if (images.length + acceptedFiles.length > 5) {
//     //   return
//     // }

//     for (const file of acceptedFiles) {
//       try {
//         const base64String = await blobToBase64(file)

//         const newImg = {
//           id: file.name,
//           url: URL.createObjectURL(file),
//           base64: base64String
//         }

//         setImages(prevImages => [...prevImages, newImg])

//         // 이미지를 전역 상태 meetupImages 배열에 추가
//         setGlobalData(prevData => ({
//           ...prevData,
//           meetupImages: [...prevData.meetupImages, base64String]
//         }))
//       } catch (error) {
//         console.error('Error converting Blob to Base64:', error)
//       }
//     }
//   }

//   // 순서 변경
//   const handleDragEnd = (result: any) => {
//     if (!result.destination) {
//       return
//     }

//     const reorderedImages = [...images]
//     const [movedImage] = reorderedImages.splice(result.source.index, 1)
//     reorderedImages.splice(result.destination.index, 0, movedImage)
//     setImages(reorderedImages)

//     setGlobalData((prevData: any) => ({
//       ...prevData,
//       meetupImages: reorderedImages.map(img => img.base64) // Base64 문자열로 변경
//     }))
//   }

//   // 이미지 삭제
//   const handleImageDelete = (imageId: string) => {
//     const updatedImages = images.filter(image => image.id !== imageId)
//     setGlobalData((prevData: any) => ({
//       ...prevData,
//       meetupImages: updatedImages.map(img => img.base64) // Base64 문자열로 변경
//     }))
//     setImages(updatedImages)
//   }

//   return (
//     <>
//       <TotalContainer>
//         <UploadZoneContainer>
//           <AddIcon />
//           <Dropzone onDrop={handleImageUpload}>
//             {({ getRootProps, getInputProps }) => (
//               <div {...getRootProps()}>
//                 <input {...getInputProps()} />
//                 <UploadZoneBox />
//               </div>
//             )}
//           </Dropzone>
//         </UploadZoneContainer>
//         <DraggableImagePreview
//           images={images}
//           onDragEnd={handleDragEnd}
//           onDeleteImage={handleImageDelete}
//         />
//       </TotalContainer>

//       {showMessage && (
//         <MessageContainer>
//           드래그로 사진 순서를 변경할 수 있습니다.
//         </MessageContainer>
//       )}
//     </>
//   )
// }

// const TotalContainer = styled.div`
//   width: 100%;
//   display: flex;
//   margin-top: 8px;
//   gap: 8px;
//   overflow-x: scroll;
//   padding-bottom: 8px;
// `

// const UploadZoneContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   position: relative;
// `

// const AddIcon = styled(Add)`
//   position: absolute;
//   cursor: pointer;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 1;
// `

// const UploadZoneBox = styled.div`
//   background-color: ${props => props.theme.greyScale.grey1};
//   width: 90px;
//   height: 90px;
//   border-radius: 8px;
//   cursor: pointer;
//   position: relative;

//   & > ${AddIcon} {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// `

// const MessageContainer = styled.div`
//   width: 250px;
//   height: 37px;
//   background-color: rgba(55, 65, 81, 0.8);
//   font-size: 14px;
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: fixed;
//   top: 45%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   border-radius: 4px;
//   z-index: 9999;
// `
