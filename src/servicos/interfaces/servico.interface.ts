import { Document } from "mongoose";

export interface Servico extends Document{
  id?: string;
  codigo: number;
  nome: string;
  url: string;
  tipo: number;
  sistema?: number;
  exluido: boolean;
  ambiente: string;
}