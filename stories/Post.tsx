import { UserProps } from './UserProps';

interface PostProps {
  user: UserProps
  timeStamp: Date
  imgSrc: string
  imgHeight: number
  description?: string
  groupName?: string
  numLikes?: number
  numComments?: number
}

function getFormattedTimestampString(timeStamp: Date): string {
  const dateNow: Date = new Date();
  const dTime = dateNow.getTime() - timeStamp.getTime();

  const dYear = dateNow.getFullYear() - timeStamp.getFullYear();
  if (dYear >= 1) {
    return `${dYear} year${dYear > 1 ? 's' : ''} ago`;
  }

  const intervals:Array<Array<any>> = [
    ['month', 2419200000], // 4 weeks
    ['week', 604800000],
    ['day', 86400000],
    ['hour', 3600000],
    ['minute', 60000],
    ['second', 1000]
  ];
  console.log(dTime);

  for (const [iName, iValue] of intervals) {
    const dInterval = Math.floor(dTime / iValue);
    if (dInterval >= 1) {
      return `${dInterval} ${iName}${dInterval > 1 ? 's' : ''} ago`;
    }
  }

  return 'Just now';
}

export function Post(props: PostProps) {
  return (
    <div className="flex flex-row gap-[16px]">
        <img className="w-[48px] h-[48px] object-cover rounded-full" src={props.user.avatarUrl} />
      <div className="flex flex-col gap-[16px]">
        <div>
          <p className="text-[16px]">
            <span className="text-[#000000]">{props.user.name}</span>
            {props.groupName !== undefined
              && <span className="text-[#828282]"> in {props.groupName}</span>
            }
          </p>
          <p className="text-[#828282]">{getFormattedTimestampString(props.timeStamp)}</p>
        </div>
        <img src={props.imgSrc} style={{ height: props.imgHeight || 300 }} />
        <p className="text-[20px]">{props.description}</p>
        <div className="flex flex-row gap-[16px]">
          <div className="flex flex-row gap-[8px]">
            <img className="inline" src="img/heart.svg" />
            <p className="inline text-[16px]">{props.numLikes || 0} like{props.numLikes !== 1 ? 's' : ''}</p>
          </div>
          <div className="flex flex-row gap-[8px]">
            <img className="inline" src="img/comment.svg" />
            <p className="inline text-[16px]">{props.numComments || 0} like{props.numComments !== 1 ? 's' : ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
}