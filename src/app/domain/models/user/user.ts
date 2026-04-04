export interface User {
  id: number;
  name: string;
  email: string;
  role: 'ADMIN' | 'USER' | 'AUDITOR';
  status: 'ACTIVE' | 'INACTIVE' | 'PENDING';
  lastLogin: Date;
  avatar?: string;
}