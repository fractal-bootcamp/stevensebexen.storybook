import { Message, MessagePosition, MessageProps } from './Message';

interface MessageThreadProps {
  currentUserId?: number
  messages?: MessageProps[]
  messageWidth?: number
  width?: number
}

export function MessageThread(props: MessageThreadProps) {

  const sortedMessages = props.messages?.sort((a, b) => a.timestamp > b.timestamp ? 1 : b.timestamp > a.timestamp ? -1 : 0);

  function getMessagePositionAtIndex(index: number) {
    if (!sortedMessages) { return MessagePosition.Island; }

    const currentSender = sortedMessages[index].sender.id;
    const previousSender = sortedMessages[index - 1]?.sender.id;
    const nextSender = sortedMessages[index + 1]?.sender.id;

    if (previousSender === currentSender) {
      if (nextSender === currentSender) {
        return MessagePosition.Middle;
      }
      else {
        return MessagePosition.Bottom;
      }
    }
    else {
      if (nextSender === currentSender) {
        return MessagePosition.Top;
      }
      else {
        return MessagePosition.Island;
      }
    }
  }

  return (
    <div className="flex flex-col gap-[8px]" style={{width: props.width || 600}}>
      {
        sortedMessages?.map((currentMessage, index) => {
          const currentMessageProps: MessageProps = {
            timestamp: currentMessage.timestamp,
            sender: {...currentMessage.sender},
            content: currentMessage.content,
            messagePosition: getMessagePositionAtIndex(index),
            isCurrentUser: props.currentUserId === currentMessage.sender.id,
            width: props.messageWidth || 475
          }
          // Timestamp as a key isn't *PERFECT* but I don't have a UID system here.
          return <Message key={currentMessage.timestamp.getMilliseconds()} timestamp={currentMessageProps.timestamp} sender={currentMessageProps.sender} content={currentMessageProps.content} messagePosition={currentMessageProps.messagePosition} isCurrentUser={currentMessageProps.isCurrentUser} width={currentMessageProps.width}></Message>
        })
      }
    </div>
  );
}