import { Fixer, Member } from 'components/index'
// import { getMembers } from 'api/index'
// import { useQuery } from '@tanstack/react-query'
// import { useEffect, useState } from 'react'

export const MembersList = () => {
  // const [members, SetMembers] = useState([])

  // useEffect(() => {
  //   const fetchMembers = async () => {
  //     const res = await getMembers()
  //     SetMembers(res)
  //     return
  //   }
  // }, [members])

  return (
    <Fixer $center={true}>
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
    </Fixer>
  )
}
