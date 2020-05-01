import { Test, TestingModule } from '@nestjs/testing';
import { ServicosController } from './servicos.controller';

describe('Servicos Controller', () => {
  let controller: ServicosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicosController],
    }).compile();

    controller = module.get<ServicosController>(ServicosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
