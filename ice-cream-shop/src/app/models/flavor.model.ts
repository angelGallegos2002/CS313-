// src/app/models/flavor.ts

export class Flavor {
  id: number;
  name: string;
  description: string;
  size:string;

  constructor(id: number, name: string, description: string, size: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.size = size;
  }
}




