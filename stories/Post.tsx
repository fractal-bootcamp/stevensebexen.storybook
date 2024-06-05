import { UserProps } from './UserProps';

interface PostProps {
  user: UserProps
  timeStamp: Date
  imgSrc: string
  description?: string
  groupName?: string
  numLikes?: number
  numComments?: number
}

function getFormattedTimestampString(timeStamp: Date): string {
  const dateNow: Date = new Date();

  const dYear = dateNow.getFullYear() - timeStamp.getFullYear();
  if (dYear >= 1) {
    return `${dYear} year${dYear > 1 ? 's' : ''} ago`;
  }

  let dMonth = dateNow.getMonth() - timeStamp.getMonth();
  dMonth = dMonth < 0 ? dMonth + 12 : dMonth;
  if (dMonth >= 1) {
    return `${dMonth} month${dMonth > 1 ? 's' : ''} ago`;
  }

  const dTime = timeStamp.getTime() - dateNow.getTime();
  const intervals:Array<Array<any>> = [
    ['week', 604800000],
    ['day', 86400000],
    ['hour', 3600000],
    ['minute', 60000],
    ['second', 1000]
  ];

  for (const [iName, iValue] of intervals) {
    const dInterval = Math.round(dTime / iValue);
    if (dInterval >= 1) {
      return `${dInterval} ${iName}${dInterval > 1 ? 's' : ''} ago`;
    }
  }

  return 'Just now';
}

export function Post(props: PostProps) {
  return (
    <div className="flex flex-row">
      <div className="w-[48px] h-[48px]">
        <img className="object-cover rounded-full flex-0" src={props.user.avatarUrl} />
      </div>
      <div className="flex flex-col">
        <p className="text-[16px]">
          <span className="text-[#000000]">{props.user.name}</span>
          {props.groupName !== undefined
            && <span className="text-[#828282]"> in {props.groupName}</span>
          }
        </p>
        <p className="text-[#828282]">{getFormattedTimestampString(props.timeStamp)}</p>
        <img src={props.imgSrc} />
        <p className="text-[20px]">{props.description}</p>
        <div className="flex-row">
          <div className="flex-col">
            <img src="img/heart.svg" />
            <p className="text-[16px]">{props.numLikes || 0} like{props.numLikes !== 1 ? 's' : ''}</p>
          </div>
          <div className="flex-col">
            <img src="img/comment.svg" />
            <p className="text-[16px]">{props.numComments || 0} like{props.numComments !== 1 ? 's' : ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
}