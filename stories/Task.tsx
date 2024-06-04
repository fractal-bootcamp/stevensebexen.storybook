interface TaskProps {
  name?: string
  description?: string
  isCompleted?: boolean
  width?: number
}

export function Task(props: TaskProps) {
  return (
    <div className="border border-[#D8D8D8] rounded-[8px]" style={{ width: props.width, backgroundColor: props.isCompleted ? '#E2FFE5' : '#FFFFFF' }}>
      <div className="flex flex-row">
        <div className="flex pl-[18px] pr-[13px] py-4 justify-center items-center">
          <input type="checkbox" className="appearance-none flex-0 w-[25px] h-[25px] border border-[#D8D8D8] rounded-[8px] bg-white
            checked:bg-[#359845]" checked={props.isCompleted}></input>
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="text-[18px]">{props.name}</p>
          <p className="text-[13px] text-[#7D7D7D]">{props.description}</p>
        </div>
      </div>
    </div>
  );
}