// src/app/models/flavor.ts

export class Flavor {
  id: number;
  name: string;
  description: string;
  imageUrl: string;

  constructor(id: number, name: string, description: string, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

const chocolate = new Flavor(
  1,
  'Chocolate',
  'A rich and creamy chocolate ice cream.',
  'https://example.com/images/chocolate.jpg'
);

const vanilla = new Flavor(
  2,
  'Vanilla',
  'A classic and smooth vanilla ice cream.',
  'https://example.com/images/vanilla.jpg'
);

// You can export the instances if you want to use them elsewhere in your code
export { chocolate, vanilla };
