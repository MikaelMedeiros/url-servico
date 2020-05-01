import { Controller, Get, Param, Put, Post, Body } from '@nestjs/common';
import { ServicosService } from './servicos.service';
import { Servico } from './interfaces/servico.interface';
import { CreateServicoDto } from './dto/create-servico.dto';

@Controller('servicos')
export class ServicosController {
  constructor(private readonly servicosService: ServicosService) {}

  @Get()
  findAll(): Promise<Servico[]> {
    return this.servicosService.buscarTodos();
  }

  @Get(':ambiente')
  findByEnvironment(@Param('ambiente') ambiente): Promise<Servico[]> {
    return this.servicosService.buscarPorAmbiente(ambiente);
  }

  @Get(':nome')
  findByName(@Param('nome') nome): Promise<Servico> {
    return this.servicosService.buscarPeloNome(nome);
  }

  @Post()
  create(@Body() createServicoDto: CreateServicoDto): Promise<Servico> {
    return this.servicosService.criar(createServicoDto);
  }

  @Post('criar-varios')
  createMany(@Body() createServicosDto: CreateServicoDto[]): Promise<Servico[]> {
    return this.servicosService.criarVarios(createServicosDto);
  }
}
