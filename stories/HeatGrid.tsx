import { Color } from '../utils/Color';

interface HeatGridProps {
  data: Array<number>,
  colorMin: string,
  colorMax: string,
  rowLabels?: Array<string>
  width?: number,
  height?: number,
}

export function HeatGrid(props: HeatGridProps) {
  const colorMin: Color = Color.fromString(props.colorMin);
  const colorMax: Color = Color.fromString(props.colorMax);
  const hasLabels = props.rowLabels !== undefined;

  return (
    <div className="flex flex-col gap-[2px]" style={{ width: props.width, height: props.height }}>
      <div className="flex gap-[2px] flex-row justify-between">
        {props.rowLabels?.map(label => <p className="basis-full text-[16px] text-center">{label}</p>)}
      </div>
      <div className={`grid grow gap-[10px] grid-rows-5 grid-cols-7`}>
        {Array(35).fill(0).map((box, index) => <div style={{ backgroundColor: Color.interpolateLinear(props.data[index], colorMin, colorMax).toString()}}></div>)}
      </div>
    </div>
  )
}