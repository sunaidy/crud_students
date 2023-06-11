import { Injectable } from '@nestjs/common';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { estudiante } from './interfaces/estudiante.interface';

@Injectable()
export class EstudianteService {
  private estudiantes: estudiante[] = [];

  create(estudiante: estudiante) {
    this.estudiantes.push(estudiante);
  }

  findAll(): estudiante[] {
    return this.estudiantes;
  }

  findOne(id: number) {
    return this.estudiantes.find((obj)=>{(obj.id == id)})
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    this.estudiantes = this.estudiantes.map((obj)=>obj.id == id ? {...obj, ...updateEstudianteDto}:obj )
    return this.estudiantes;
  }

  remove(id: number) {
    this.estudiantes = this.estudiantes.filter((obj)=>{(obj.id !== id)})
    return this.estudiantes;
  }
}
