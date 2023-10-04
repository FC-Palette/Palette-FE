import { Fixer, Member } from 'components/index'
import { getMembers } from 'api/index'
import { useQuery } from '@tanstack/react-query'
import { roomIdState } from 'recoil/index'
import { useRecoilValue } from 'recoil'
export const MembersList = () => {
  const roomId = useRecoilValue(roomIdState)

  const {
    data: members
    // isLoading,
    // isError
  } = useQuery(['chatMembers', roomId], () => {
    return getMembers(roomId)
  })

  console.log(members)
  return (
    <Fixer $center={true}>
      {members &&
        members.response &&
        members.response.map(m => (
          <Member
            key={m.memberId}
            memberId={m.memberId}
            url={m.profileImgUrl}
            name={m.nickName}
            host={m.host}
          />
        ))}
    </Fixer>
  )
}
