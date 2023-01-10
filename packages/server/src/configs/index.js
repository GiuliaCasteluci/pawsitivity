export const PORT = process.env.PORT || 3001;
export const API_URL = process.env.API_URL ? `/${process.env.API_URL}` : '/api';
export const DB_URL = process.env.DB_URL || 'mongodb+srv://Paws:FSWDApril2022@cluster0.xkylv6y.mongodb.net/?retryWrites=true&w=majority';
export const jwtConfig = {
    secret: process.env.JWT_SECRET || 'jwt-secret',
    tokenLife: '7d',
}