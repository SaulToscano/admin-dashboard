export interface Permission {
  id: string;
  name: string;
  module: string; // Para agruparlos visualmente (ej. 'Usuarios', 'Clientes')
}

export interface Role {
  id: number;
  name: string;
  description: string;
  userCount: number; // Cuántos usuarios tienen este rol
  status: 'ACTIVE' | 'INACTIVE';
  permissions: string[]; // Arreglo con los IDs de los permisos asignados
}