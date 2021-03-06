import { Client } from "@prisma/client"
import { ICreateClientDTO } from "../dtos/ICreateClientDTO"

interface IClientRepository {
    create({name, cpf, email, password, company_id, credits, amount}: ICreateClientDTO): Promise<Client>
    findById(id: string): Promise<Client>
    findAll(): Promise<Client[]>
    findByEmail(email: string): Promise<Client>
    deleteById(id: string): Promise<Client>
    findAllByBank(company_id: string): Promise<Client[]>
}

export {IClientRepository}