export interface TaskProps {
  name?: string
  description?: string
  isCompleted?: boolean
  width?: number
  onClick?: () => void
}

export function Task(props: TaskProps) {
  return (
    <div className="border rounded-[8px]" style={{ width: props.width || 300, backgroundColor: props.isCompleted ? '#E2FFE5' : '#FFFFFF', borderColor: props.isCompleted ? 'rgb(184 196 182)' : '#D8D8D8' }} onClick={props.onClick}>
      <div className="flex flex-row">
        <div className="flex pl-[18px] pr-[13px] py-4 justify-center items-center">
          <div className="flex-0 w-[25px] h-[25px] border rounded-[8px]" style={{ backgroundColor: props.isCompleted ? '#359845' : '#FFFFFF', borderColor: props.isCompleted ? 'rgb(36 124 49)' : '#D8D8D8' }}></div>
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="text-[18px]">{props.name}</p>
          <p className="text-[13px] text-[#7D7D7D]">{props.description}</p>
        </div>
      </div>
    </div>
  );
}