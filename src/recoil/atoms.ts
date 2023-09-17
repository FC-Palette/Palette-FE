import { atom } from 'recoil'

// Atoms 는 상태(state)의 일부를 나타냅니다. Atoms 는 어떤 컴포넌트에서나 읽고 쓸 수 있습니다.
export const modalOnState = atom<boolean>({
  key: 'modalOnState',
  default: false
})
//사용할 컴포넌트에서
//const [modalOn, setModalOn] = useRecoilState(modalOnState);
//setModalOn(!modalOn)

export const showMembersState = atom<boolean>({
  key: 'showMembersState',
  default: true
})
