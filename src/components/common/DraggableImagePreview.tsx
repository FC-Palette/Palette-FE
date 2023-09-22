import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableProvided
  // DraggableStateSnapshot
} from 'react-beautiful-dnd'
import styled from 'styled-components'

interface Image {
  id: string
  url: string
}

interface DraggableImagePreviewProps {
  images: Image[]
  onDragEnd: (result: DropResult) => void
  onDeleteImage: (imageId: string) => void
}

export const DraggableImagePreview: React.FC<DraggableImagePreviewProps> = ({
  images,
  onDragEnd,
  onDeleteImage
}) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="image-list"
        direction="horizontal">
        {provided => (
          <StyledDropZone
            {...provided.droppableProps}
            ref={provided.innerRef}>
            {images.map((image, index) => (
              <Draggable
                key={image.id}
                draggableId={image.id}
                index={index}>
                {(
                  provided: DraggableProvided
                  // snapshot: DraggableStateSnapshot
                ) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <StyledContainer>
                      <StyledImage
                        src={image.url}
                        alt={`사진 ${index}`}
                        style={{
                          width: '90px', // 원하는 너비로 조절
                          height: '90px', // 자동으로 높이 조절
                          borderRadius: '8px'
                        }}
                      />
                      <StyledSVG
                        onClick={() => onDeleteImage(image.id)}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect
                          width="24"
                          height="24"
                          rx="6"
                          fill="#111827"
                        />
                        <path
                          d="M7.33398 7.33301L16.6667 16.6657"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.33355 16.6657L16.6663 7.33301"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </StyledSVG>
                    </StyledContainer>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </StyledDropZone>
        )}
      </Droppable>
    </DragDropContext>
  )
}

const StyledDropZone = styled.div`
  height: auto;
  display: flex;
  gap: 8px;
  background-color: white;
  z-index: 1;
`
const StyledContainer = styled.div`
  position: relative;
`

const StyledImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 8px;
  position: relative;
`

const StyledSVG = styled.svg`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 24px;
  height: 24px;
`
