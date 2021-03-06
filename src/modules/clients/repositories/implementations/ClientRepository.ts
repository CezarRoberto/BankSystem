
import { ICreateClientDTO } from "@modules/clients/dtos/ICreateClientDTO";
import { Client } from "@prisma/client";
import prismaClient from "@shared/infra/prisma";
import { IClientRepository } from "../IClientRepository";

class ClientRepository implements IClientRepository {
    async create({ name, cpf, email, password, company_id, credits, amount }: ICreateClientDTO): Promise<Client> {
        const client = await prismaClient.client.create({
            data: {
                name,
                cpf,
                password,
                email,
                company_id,
                credits,
                amount
            }
        })
        return client
    }

    async findById(id: string): Promise<Client> {
        const client = await prismaClient.client.findUnique({
            where: { id }
        })
        return client as Client
    }

    async findAll(): Promise<Client[]> {
        const clients = await prismaClient.client.findMany();
        return clients
    }

    async findByEmail(email: string): Promise<Client> {
        const client = await prismaClient.client.findFirst({
            where: { email }
        })

        return client as Client
    }
    async findAllByBank(company_id: string): Promise<Client[]> {
        const clients = await prismaClient.client.findMany({
            where: {company_id}
        })

        return clients
    }
    
    async deleteById(id: string): Promise<Client> {
        const client = await prismaClient.client.delete({
            where: { id }
        })

        return client
    }

}

export { ClientRepository }