import { User } from "@domain/models/user/user";

export const usersMock: User[] = [
  { id: 1, name: 'Juan Pérez', email: 'juan.perez@logistics.com', role: 'ADMIN', status: 'ACTIVE', lastLogin: new Date() },
  { id: 2, name: 'Maria Garcia', email: 'm.garcia@logistics.com', role: 'USER', status: 'ACTIVE', lastLogin: new Date() },
  { id: 3, name: 'Roberto Slim', email: 'r.slim@audit.mx', role: 'AUDITOR', status: 'PENDING', lastLogin: new Date() },
  { id: 4, name: 'Lucia Fernandez', email: 'l.fer@logistics.com', role: 'USER', status: 'INACTIVE', lastLogin: new Date() },
  { id: 5, name: 'Carlos Slim', email: 'c.slim@logistics.com', role: 'ADMIN', status: 'ACTIVE', lastLogin: new Date() },
];