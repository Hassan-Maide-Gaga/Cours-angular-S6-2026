import { User } from "../core/models/user.model";

export const MOCK_USERS: User[] = [
    {
        id: 1,
        email: "admin@example.com",
        password: "admin123",
        role: "ADMIN",
        fullName: "Admin User"
    },
    {
        id: 2,
        email: "patient@example.com",
        password: "patient123",
        role: "PATIENT",
        fullName: "John Doe"
    },
    {
        id: 3,
        email: "medecin@example.com",
        password: "medecin123",
        role: "MEDECIN",
        fullName: "Dr. Smith"
    },
    {
        id: 4,
        email: "secretaire@example.com",
        password: "secretaire123",
        role: "SECRETAIRE",
        fullName: "Jane Doe"
    },
]