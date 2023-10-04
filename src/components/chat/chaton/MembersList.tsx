import { Fixer, Member } from 'components/index'
import { getMembers } from 'api/index'
import { useQuery } from '@tanstack/react-query'

export const MembersList = ({ roomid }) => {
  const {
    data: members,
    // isLoading,
    // isError
  } = useQuery(['chatMembers', roomid], () => {
    return getMembers(roomid)
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
