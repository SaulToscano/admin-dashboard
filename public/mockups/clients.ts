import { Client } from "@domain/models/client/client";

export const clientsMock: Client[] = [
  { id: 1, fullName: 'Ana Sofía López', email: 'ana.lopez99@gmail.com', phone: '664 123 4567', status: 'ACTIVE', registrationDate: new Date('2025-11-10'), rating: 4.8, activeOrders: 2 },
  { id: 2, fullName: 'Pedro Martínez', email: 'pedromtz_85@hotmail.com', phone: '619 987 6543', status: 'UNVERIFIED', registrationDate: new Date('2026-03-20'), rating: 0, activeOrders: 0 },
  { id: 3, fullName: 'Carla Ruiz', email: 'carla.ventas@yahoo.com', phone: '81 5555 4444', status: 'ACTIVE', registrationDate: new Date('2026-01-15'), rating: 5.0, activeOrders: 5 },
  { id: 4, fullName: 'Miguel Ángel Torres', email: 'miguel.torres@outlook.com', phone: '213 555 0199', status: 'SUSPENDED', registrationDate: new Date('2026-04-01'), rating: 2.1, activeOrders: 0 },
  { id: 5, fullName: 'Valeria Castro', email: 'valecast@gmail.com', phone: '664 777 8888', status: 'ACTIVE', registrationDate: new Date('2026-02-05'), rating: 4.5, activeOrders: 1 },
];