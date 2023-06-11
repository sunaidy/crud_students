import { Test, TestingModule } from '@nestjs/testing';
import { EstudianteController } from './estudiante.controller';
import { EstudianteService } from './estudiante.service';

describe('EstudianteController', () => {
  let estudianteController: EstudianteController;
  let estudianteService: EstudianteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstudianteController],
      providers: [EstudianteService],
    }).compile();

    estudianteService = module.get<EstudianteService>(EstudianteService);
    estudianteController = module.get<EstudianteController>(EstudianteController);
  });

  describe('findAll', () => {
    it('should return an array of student', async () => {
      const result = [];
      jest.spyOn(estudianteService, 'findAll').mockImplementation(() => result);

      expect(await estudianteController.findAll()).toBe(result);
    });
  });

  describe('create', () => {
    it('create new student', async () => {
      const result = {
        "id": 1,
        "first_name": "angel",
        "last_name": "jauregui",
        "email": "sd@fh.com",
        "age": 26,
        "grade": "12"
    };
      jest.spyOn(estudianteService, 'create').mockImplementation(() => result);

      expect(await estudianteController.create(result));
    });
  });
});
