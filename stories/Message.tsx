// Whether the Message is the top, middle, or bottom of a "block" of messages from the same user.
export const enum MessagePosition {
  Top = 'message-position--top',
  Middle = 'message-position--middle',
  Bottom = 'message-position--bottom',
  Island = 'message-position--island'
}

interface UserProps {
  id: number
  avatarUrl: string
}

export interface MessageProps {
  timestamp: Date
  sender: UserProps
  content?: string
  messagePosition?: MessagePosition
  isCurrentUser?: boolean
  width?: number
}

function getBorderRadius(isCurrentUser: boolean, messagePosition: MessagePosition | undefined): string {
  if (isCurrentUser) {
    switch (messagePosition) {
      case MessagePosition.Top:
        return '16px 16px 16px 0px';
        break;
      case MessagePosition.Middle:
        return '0px 16px 16px 0px';
        break;
      case MessagePosition.Bottom:
        return '0px 16px 16px 16px';
        break;
      case MessagePosition.Island:
        return '16px 16px 16px 16px';
    }
  }
  else {
    switch (messagePosition) {
      case MessagePosition.Top:
        return '16px 16px 0px 16px';
        break;
      case MessagePosition.Middle:
        return '16px 0px 0px 16px';
        break;
      case MessagePosition.Bottom:
        return '16px 0px 16px 16px';
        break;
      case MessagePosition.Island:
        return '16px 16px 16px 16px';
        break;
    }
  }
  return '16px 16px 16px 16px';
}

function getMargins(messagePosition: MessagePosition | undefined) {
  switch(messagePosition) {
    case MessagePosition.Top:
      return '2px 0px 0px 0px';
      break;
    case MessagePosition.Middle:
      return '0px 0px 0px 0px';
      break;
    case MessagePosition.Bottom:
      return '0px 0px 2px 0px';
      break;
    case MessagePosition.Island:
      return '2px 0px 2px 0px';
      break;
  }
  return '0px';
}

export function Message(props: MessageProps) {
  return (
    <div className={`flex gap-[23px] ${props.isCurrentUser ? 'flex-row' : 'flex-row-reverse'}`} style={{ width: props.width || 400, alignSelf: props.isCurrentUser ? 'flex-start' : 'flex-end'}}>
      <div className="w-[48px] h-[48px] flex-none">
        <img className="object-cover rounded-full" src={props.sender.avatarUrl}></img>
      </div>
      <div className="px-[23px] py-[15px] min-w-0" style={{
        backgroundColor: (props.isCurrentUser ? '#74C2FF' : '#D9D9D9'),
        borderRadius: getBorderRadius(Boolean(props.isCurrentUser), props.messagePosition),
        margin: getMargins(props.messagePosition)
      }}>
        <div className="text-[16px] break-words">{props.content}</div>
      </div>
    </div>
  )
}