import { requestCreateResponseProps } from '@/types'

export const collectUserData = (
  careerCreateData: requestCreateResponseProps
): FormData => {
  const formData = new FormData()
  // string
  formData.append('category', careerCreateData.category || '')
  formData.append('type', careerCreateData.type || '')
  formData.append('sex', careerCreateData.sex || '')
  formData.append('title', careerCreateData.title || '')
  formData.append('description', careerCreateData.description || '')
  formData.append('place', careerCreateData.place || '')
  formData.append('week', careerCreateData.week || '')
  formData.append('time', careerCreateData.time || '')
  formData.append('progressTime', careerCreateData.progressTime || '')

  // number
  formData.append(
    'headCount',
    careerCreateData.headCount ? careerCreateData.headCount.toString() : ''
  )

  // boolean
  formData.append('onOff', careerCreateData.onOff ? 'true' : 'false')

  // array
  if (careerCreateData.jobs && careerCreateData.jobs.length > 0) {
    careerCreateData.jobs.forEach((job, index) => {
      formData.append(`jobs[${index}]`, job)
    })
  }

  if (careerCreateData.positions && careerCreateData.positions.length > 0) {
    careerCreateData.positions.forEach((position, index) => {
      formData.append(`positions[${index}]`, position)
    })
  }

  if (careerCreateData.days && careerCreateData.days.length > 0) {
    careerCreateData.days.forEach((day, index) => {
      formData.append(`days[${index}]`, day)
    })
  }

  const imageBlobs = careerCreateData.image
  if (imageBlobs && imageBlobs.length > 0) {
    for (let i = 0; i < imageBlobs.length; i++) {
      formData.append(`image${i}`, imageBlobs[i])
    }
  }

  return formData
}
