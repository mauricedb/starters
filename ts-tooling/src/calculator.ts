export type Logger = (...data: any[]) => void

export class Calculator {
  constructor(private logger: Logger) {}

  add(x: number, y: number): number {
    const sum = x + y;
    
    this.logger(`${x} + ${y} = ${sum}`);

    return sum;
  }
}

