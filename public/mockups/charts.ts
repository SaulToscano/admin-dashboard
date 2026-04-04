import { BarChart, DashboardKpis, LineChart, PieChart } from "@domain/models/home/chart";

export const pieChart: PieChart = {
  labels: ['Pagado', 'Pendiente', 'Parcialmente pagado'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#06b6d4', '#f97316', '#6b7280'],
      hoverBackgroundColor: ['#22d3ee', '#fb923c', '#9ca3af']
    },
  ]
}

export const lineChart: LineChart = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
  datasets: [
    {
      label: 'Transacciones realizadas',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: '#06b6d4',
      tension: 0.4,
    },
    {
      label: 'Productos vendidos',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      borderColor: '#f97316',
      tension: 0.4,
    },
    {
      label: 'Clientes nuevos',
      data: [10, 22, 38, 50, 72, 84, 90],
      fill: false,
      borderColor: '#6b7280',
      tension: 0.4,
    },
  ],
};

export const barChart: BarChart = {
  labels: ['Tijuana', 'San Diego', 'Mexicali', 'Ensenada', 'Calexico'],
  datasets: [
    {
      label: 'Operaciones por sucursal',
      backgroundColor: '#06b6d4',
      data: [120, 95, 80, 45, 60]
    }
  ]
};

export const dashboardKpis: DashboardKpis = {
  totalSales: 1250400,
  activeClients: 142,
  pendingOperations: 24,
  monthlyGrowth: 15.5
};