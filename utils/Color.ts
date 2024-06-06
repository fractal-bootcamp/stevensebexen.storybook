export class Color {

  r: number
  g: number
  b: number

  constructor (r: number, g: number, b: number) {
    this.r = Math.round(Math.max(0, Math.min(255, r)));
    this.g = Math.round(Math.max(0, Math.min(255, g)));
    this.b = Math.round(Math.max(0, Math.min(255, b)));
  }

  static fromString(str: string): Color {
    return new Color(
      Number('0x' + str.slice(1, 3)),
      Number('0x' + str.slice(3, 5)),
      Number('0x' + str.slice(5))
    );
  }
  
  static interpolateLinear(pos: number, col1: Color, col2: Color): Color {
    const cpos = Math.max(0, Math.min(1, pos));
    const ipos: number = 1 - cpos;
    return new Color(
      col1.r * ipos + col2.r * cpos,
      col1.g * ipos + col2.g * cpos,
      col1.b * ipos + col2.b * cpos
    )
  }

  toString(): string {
    return '#' + Math.round(this.r).toString(16).padStart(2, '0') + Math.round(this.g).toString(16).padStart(2, '0') + Math.round(this.b).toString(16).padStart(2, '0');
  }

}