// import { DateSeperator } from 'components/index'
// export const MessageItem = ({
//   message,
//   isSender,
//   createdAt,
//   showTimestamp,
//   showMsgActions,
//   toggleMsgActions,
//   isDateSeparator,
//   date
// }) => {
//   return (
//     <>
//       {isDateSeparator && (
//         <DateSeperator
//           date={date}
//           $isFirst={!isDateSeparator}
//         />
//       )}
//       {isSender && (
//         <Sender
//           message={
//             message.type === 'text' ? (
//               message.text
//             ) : (
//               <SubjectDetail $shared={true} />
//             )
//           }
//           $sender={message.sender}
//           createdAt={message.createdAt}
//           showCreatedTime={showTimestamp}
//           showMsgActions={openMsgActionsIndex === index}
//           toggleMsgActions={() => toggleMsgActions(index)}
//         />
//       )}
//       {isRecipient && (
//         <Recipient
//           message={
//             message.type === 'text' ? (
//               message.text
//             ) : (
//               <SubjectDetail $shared={true} />
//             )
//           }
//           $sender={message.sender}
//           createdAt={message.createdAt}
//           showCreatedTime={showTimestamp}
//           showMsgActions={openMsgActionsIndex === index}
//           toggleMsgActions={() => toggleMsgActions(index)}
//         />
//       )}
//     </>
//   )
// }
