import "reflect-metadata";
import "dotenv/config";


import express from "express";
import cors from 'cors';
import AppDataSource from "./database";



const app = express();

app.use(express.json());
app.use(cors());

// AppDataSource

import { Links } from "./database/entities/Links";

const linksRepository = AppDataSource.getRepository(Links)   

app.get('/links', async (request, response) => {
    const allLinks = await linksRepository.find()

    return response.json(allLinks);
})

app.post('/link', async (request, response) => {
    const body: any = request.body;

    const {label, url } = body

    const createLink = await linksRepository.create({
        label,
        url
    })

    // console.log(body)
    await linksRepository.save(createLink)
    return response.status(201).json();

})

app.put('/link/:id', async (request, response) => {
    const linkId = request.params.id;
    const {label, url}: any = request.body;

    const id = Number(linkId);

    const update = await linksRepository
        .createQueryBuilder()
        .update()
        .set({
            label: label,
            url: url
        })
        .where("id = :id")
        .setParameters({ id })
        .execute();

    return response.status(201).json();
})

app.delete('/link/:id/delete', async (request, response) => {
    const linkId = request.params.id;

    const id = Number(linkId);

    const linkRemove = await linksRepository.findOneBy({
        id,
    });

    await linksRepository.remove(linkRemove);

    return response.status(200).json();
})




export { app };