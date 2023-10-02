import { Fixer, Member } from 'components/index'
import { getMembers } from 'api/index'
import { useQuery } from '@tanstack/react-query'

export const MembersList = ({ roomid }) => {
  const {
    data: members,
    isLoading,
    isError
  } = useQuery(['chatMembers', roomid], () => {
    return getMembers(roomid)
  })
  /**
 * 		{
			"memberId" : 3, 
			"prifileImgUrl" : "https://",
			"nickName" : "고슴도치",
	    "host" : 2
		},
 */
  console.log(members)
  return (
    <Fixer $center={true}>
      {members &&
        members.map(m => (
          <Member
            memberId={m.memberId}
            url={m.profileImgUrl}
            name={m.nickName}
            host={m.host}
          />
        ))}
      {/* <Member />
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
      <Member /> */}
    </Fixer>
  )
}
