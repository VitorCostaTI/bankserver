import { Test, TestingModule } from '@nestjs/testing';
import { ExtratoController } from './extrato.controller';

describe('ExtratoController', () => {
  let controller: ExtratoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtratoController],
    }).compile();

    controller = module.get<ExtratoController>(ExtratoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
