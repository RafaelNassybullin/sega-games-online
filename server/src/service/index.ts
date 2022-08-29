import { Request, Response } from 'express';
import Sega from '../model';

export default class Service {

    static async getData(_: Request, res: Response) {
        try {
            const data = await Sega.find().sort({ _id: -1 });
            res.json(data);
        } catch {
            res.status(500).json([]);
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const data = await Sega.findById(req.params['id']);
            res.json(data);
        } catch (error) {
            res.status(404).json(["Error"]);
        }
    }

    static async getCategory(req: Request, res: Response) {
        const { category } = req.params;
        try {
            const data = await Sega.find({ category }).sort({ _id: -1 });
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json(["Error"]);
        }
    }

    static async saveData(req: Request, res: Response) {
        const data = new Sega(req.body);
        try {
            const insertedData = await data.save();
            res.status(201).json(insertedData);
        } catch (error) {
            res.status(400).json(["Error"]);
        }
    }

    static async editData(req: Request, res: Response) {
        try {
            const updated = await Sega.updateOne(
                { _id: req.params['id'] },
                { $set: req.body }
            );
            res.status(200).json(updated);
        } catch (error) {
            res.status(400).json(["Error"]);
        }
    }

    static async deleteDatas(req: Request, res: Response) {
        try {
            const deleteData = await Sega.deleteOne({
                _id: req.params['id'],
            });
            res.status(200).json(deleteData);
        } catch (error) {
            res.status(400).json(["Error"]);
        }
    }

}