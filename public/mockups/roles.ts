import { Permission, Role } from "@domain/models/role/role";

export const permissionsMock: Permission[] = [
  { id: 'usr_view', name: 'Ver Usuarios', module: 'Usuarios' },
  { id: 'usr_create', name: 'Crear Usuarios', module: 'Usuarios' },
  { id: 'usr_edit', name: 'Editar Usuarios', module: 'Usuarios' },
  { id: 'usr_del', name: 'Eliminar Usuarios', module: 'Usuarios' },
  
  { id: 'cli_view', name: 'Ver Clientes', module: 'Clientes' },
  { id: 'cli_verify', name: 'Verificar Clientes', module: 'Clientes' },
  { id: 'cli_suspend', name: 'Suspender Clientes', module: 'Clientes' },
  
  { id: 'sys_config', name: 'Configuración Global', module: 'Sistema' },
];

export const rolesMock: Role[] = [
  { 
    id: 1, 
    name: 'Super Administrador', 
    description: 'Acceso total a todas las funciones del sistema.', 
    userCount: 2, 
    status: 'ACTIVE',
    permissions: ['usr_view', 'usr_create', 'usr_edit', 'usr_del', 'cli_view', 'cli_verify', 'cli_suspend', 'sys_config']
  },
  { 
    id: 2, 
    name: 'Atención al Cliente', 
    description: 'Gestión básica de clientes y visualización de usuarios.', 
    userCount: 8, 
    status: 'ACTIVE',
    permissions: ['usr_view', 'cli_view', 'cli_verify']
  },
  { 
    id: 3, 
    name: 'Auditor', 
    description: 'Acceso de solo lectura para revisión de procesos.', 
    userCount: 3, 
    status: 'ACTIVE',
    permissions: ['usr_view', 'cli_view']
  }
];