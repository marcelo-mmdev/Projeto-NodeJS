import { Request, Response } from "express";
import { subjectRepository } from "../repositories/subjectRepository";

export class SubjectController {
    async create(req: Request, res: Response){
        // return res.json('Tudo certoo com o controller')
        // O certo aqui seria instalar uma lib
        const {name} = req.body

        if (!name) {
            return res.status(400).json({message: "O name é obrigatório"})
        }
        try {
            //temos duas formas de trabalhar com typeORM que é Active record e Data Mapper
            const newSubject = subjectRepository.create({
                name
            })
            await subjectRepository.save(newSubject)
            return res.status(201).json(newSubject)
            // console.log(newSubject) 
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Error'})
        }
    }
}