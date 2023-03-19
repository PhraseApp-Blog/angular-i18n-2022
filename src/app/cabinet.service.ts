import { Cabinet } from './cabinet.model';

export class CabinetService {
  private localizedCabinets: {
    [locale in Locale]: Cabinet[];
  } = {
    'en-CA': [
      {
        imageUrl: 'assets/cabinets/mappy.jpg',
        name: 'Mappy Mini-cabinet',
        description: 'The original cat and mouse game.',
        addedAt: new Date(2021, 12, 22),
        storeCount: 1,
        price: 27.99,
      },
      {
        imageUrl: 'assets/cabinets/guitar-hero.jpg',
        name: 'Guitar Hero',
        description: "Shred with the best of 'em.",
        addedAt: new Date(2022, 5, 18),
        storeCount: 9,
        price: 7489.0,
      },
      {
        imageUrl: 'assets/cabinets/mario-bros.jpg',
        name: 'Super Mario Bros. Cabinet',
        description: 'One of our hottest cabinets.',
        addedAt: new Date(2022, 6, 1),
        storeCount: 0,
        price: 2195.99,
      },
      {
        imageUrl: 'assets/cabinets/pac-man.jpg',
        name: 'Pac-man 4ft Cabinet',
        description: 'Paco paco paco paco.',
        addedAt: new Date(2022, 4, 2),
        storeCount: 2,
        price: 249.99,
      },
    ],
    ar: [
      {
        imageUrl: 'assets/cabinets/mappy.jpg',
        name: 'خزانة مابي صغيرة',
        description: 'لعبة القط والفأر الأصلية',
        addedAt: new Date(2021, 12, 22),
        storeCount: 1,
        price: 27.99,
      },
      {
        imageUrl: 'assets/cabinets/guitar-hero.jpg',
        name: 'بطل الغيتار',
        description: 'ولعها مع أحسن اللاعبين',
        addedAt: new Date(2022, 5, 18),
        storeCount: 9,
        price: 7489.0,
      },
      {
        imageUrl: 'assets/cabinets/mario-bros.jpg',
        name: 'خزانة سوبر ماريو',
        description: 'من أكثر الخزانات شعبية',
        addedAt: new Date(2022, 6, 1),
        storeCount: 0,
        price: 2195.99,
      },
      {
        imageUrl: 'assets/cabinets/pac-man.jpg',
        name: 'خزانة باكمان 4 قدم',
        description: 'أكيد تتذكرها',
        addedAt: new Date(2022, 4, 2),
        storeCount: 2,
        price: 249.99,
      },
    ],
    fr: [
      {
        imageUrl: 'assets/cabinets/mappy.jpg',
        name: 'Mini-meuble Mappy',
        description: 'Le jeu original du chat et de la souris.',
        addedAt: new Date(2021, 12, 22),
        storeCount: 1,
        price: 27.99,
      },
      {
        imageUrl: 'assets/cabinets/guitar-hero.jpg',
        name: 'Guitar Hero',
        description: 'ولعها مع أحسن اللاعبين',
        addedAt: new Date(2022, 5, 18),
        storeCount: 9,
        price: 7489.0,
      },
      {
        imageUrl: 'assets/cabinets/mario-bros.jpg',
        name: 'خزانة سوبر ماريو',
        description: 'من أكثر الخزانات شعبية',
        addedAt: new Date(2022, 6, 1),
        storeCount: 0,
        price: 2195.99,
      },
      {
        imageUrl: 'assets/cabinets/pac-man.jpg',
        name: 'خزانة باكمان 4 قدم',
        description: 'أكيد تتذكرها',
        addedAt: new Date(2022, 4, 2),
        storeCount: 2,
        price: 249.99,
      },
    ],
  };

  public allFor(locale: Locale): Cabinet[] {
    return this.localizedCabinets[locale].slice();
  }
}
