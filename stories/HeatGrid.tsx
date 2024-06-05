import { Color, colorFromString, computeLinearGradientAtPos, stringFromColor } from '../utils/Color';

interface HeatGridProps {
  data: Array<number>,
  colorMin: string,
  colorMax: string,
  numCols: number,
  numRows: number,
  rowLabels?: Array<string>
  width?: number,
  height?: number,
}

export function HeatGrid(props: HeatGridProps) {
  const colorMin: Color = colorFromString(props.colorMin);
  const colorMax: Color = colorFromString(props.colorMax);
  const hasLabels = props.rowLabels !== undefined;

  return (
    <div className="flex flex-col gap-[2px]" style={{ width: props.width, height: props.height }}>
      <div className="flex gap-[2px] flex-row justify-between">
        {props.rowLabels?.map(label => <p className="basis-full text-[16px] text-center">{label}</p>)}
      </div>
      <div className={`grid grow gap-[10px] grid-rows-${props.numRows} grid-cols-${props.numCols}`}>
        {Array(props.numCols * props.numRows).fill(0).map((box, index) => <div style={{ backgroundColor: stringFromColor(computeLinearGradientAtPos(props.data[index], colorMin, colorMax))}}></div>)}
      </div>
    </div>
  )
}