import { Color } from '../utils/Color';

interface HeatGridProps {
  data: Array<number>,
  colorMin: string,
  colorMax: string,
  rowLabels?: Array<string>
  width?: number,
  height?: number,
  numRows: number,
  numCols: number
}

export function HeatGrid(props: HeatGridProps) {
  const colorMin: Color = Color.fromString(props.colorMin);
  const colorMax: Color = Color.fromString(props.colorMax);
  const hasLabels = props.rowLabels !== undefined;

  return (
    <div className="flex flex-col gap-[2px]" style={{ width: props.width, height: props.height }}>
      <div className="flex gap-[2px] flex-row justify-between">
        {Array(props.numCols).fill(0).map((_, i) => <p className="basis-full text-[16px] text-center">{props.rowLabels?.[i]}</p>)}
      </div>
      <div className={`grid flex-1 gap-[10px]`} style={{gridTemplateRows: `repeat(${props.numRows}, minmax(0, 1fr))`, gridTemplateColumns: `repeat(${props.numCols}, minmax(0, 1fr))`}}>
        {Array(props.numCols * props.numRows).fill(0).map((box, index) => <div className='basis-full' style={{ backgroundColor: Color.interpolateLinear(props.data[index], colorMin, colorMax).toString()}}></div>)}
      </div>
    </div>
  )
}