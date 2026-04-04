export interface PieChart {
  labels: string[];
  datasets: PieDataset[]
}

interface PieDataset {
  data: number[];
  backgroundColor: string[],
  hoverBackgroundColor: string[]
}

export interface LineChart {
  labels: string[];
  datasets: LineDataset[]
}

interface LineDataset {
  label: string;
  data: number[];
  fill: boolean;
  borderColor: string;
  tension: number;
}
