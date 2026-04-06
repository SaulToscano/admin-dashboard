export interface Client {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  status: 'ACTIVE' | 'SUSPENDED' | 'UNVERIFIED';
  registrationDate: Date;
  rating: number; // Reputación de 1 a 5 estrellas
  activeOrders: number; // Paquetes en tránsito (compras o ventas)
  avatar?: string;
}