import * as mongoose from 'mongoose';

export const ServicoSchema = new mongoose.Schema({
  codigo: Number,
  nome: String,
  url: String,
  tipo: Number,
  sistema: Number,
  excluido: Boolean, 
  ambiente: String,
})