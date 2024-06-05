// TODO: Replace with a proper class

export interface Color {
  r: number,
  g: number,
  b: number
}

export function colorFromString(str: string): Color {
  return {
    r: Number('0x' + str.slice(1, 3)),
    g: Number('0x' + str.slice(3, 5)),
    b: Number('0x' + str.slice(5))
  };
}

export function stringFromColor(col: Color): string {
  console.log(col);
  return '#' + Math.round(col.r).toString(16).padStart(2, '0') + Math.round(col.g).toString(16).padStart(2, '0') + Math.round(col.b).toString(16).padStart(2, '0');
}

export function computeLinearGradientAtPos(pos: number, col1: Color, col2: Color): Color {
  const ipos: number = 1 - pos;
  return {
    r: col1.r * pos + col2.r * ipos,
    g: col1.g * pos + col2.g * ipos,
    b: col1.b * pos + col2.b * ipos
  };
}