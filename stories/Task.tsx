import '../app/index.css';

interface TaskProps {
  name: string
  description: string
  isCompleted: boolean
}

export function Task(props: TaskProps) {
  return (
    <div className="border border-[#D8D8D8] rounded-[8px] bg-slate-500">
      <input type="checkbox" className="appearance-none w-[25px] h-[25px]"></input>
      <p>{props.name}</p>
      <p>{props.description}</p>
    </div>
  );
}