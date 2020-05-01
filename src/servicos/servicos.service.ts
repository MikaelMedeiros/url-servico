import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Servico } from './interfaces/servico.interface';
import { CreateServicoDto } from './dto/create-servico.dto';

@Injectable()
export class ServicosService {
  constructor(@InjectModel('Servicos') private readonly servicoModel: Model<Servico>) {}

  async buscarTodos(): Promise<Servico[]> {
    return await this.servicoModel.find();
  }

  async buscarPorAmbiente(ambiente): Promise<Servico[]> {
    return await this.servicoModel.find({ambiente: ambiente});
  }

  async buscarPeloNome(nome: string): Promise<Servico> {
    return await this.servicoModel.findOne({nome: nome});
  }

  async criar(servico: CreateServicoDto): Promise<Servico> {
    const novoServico = new this.servicoModel(servico);
    return await novoServico.save();
  }

  async criarVarios(servicos: CreateServicoDto[]): Promise<Servico[]> {
    return await this.servicoModel.insertMany(servicos);
  }
}
