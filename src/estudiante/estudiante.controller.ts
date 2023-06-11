import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { estudiante } from './interfaces/estudiante.interface';

@Controller("estudiante")
export class EstudianteController {
  constructor(private estudianteService: EstudianteService) {}

  @Post()
  async create(@Body() CreateEstudianteDto: CreateEstudianteDto) {
    this.estudianteService.create(CreateEstudianteDto);
  }

  @Get()
  async findAll(): Promise<estudiante[]> {
    return this.estudianteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.estudianteService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEstudianteDto: UpdateEstudianteDto) {
    return this.estudianteService.update(+id, updateEstudianteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.estudianteService.remove(+id);
  }
}
