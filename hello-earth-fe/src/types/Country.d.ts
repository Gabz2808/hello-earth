export interface Country {
  [x: string]: any;
  name: {
    common: string;
    official: string;
  };
  capital?: string[];
  population: number;
  flags: {
    png: string;
    svg: string;
  };
}
