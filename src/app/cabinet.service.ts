import { Cabinet } from './cabinet.model';

export class CabinetService {
  private cabinets: Cabinet[] = [
    {
      imageUrl: 'assets/cabinets/mappy.jpg',
      name: '',
      name_en: 'Mappy Mini-cabinet',
      name_ar: 'خزانة مابي صغيرة',
      description: '',
      description_en: 'The original cat and mouse game.',
      description_ar: 'لعبة القط والفأر الأصلية',
      addedAt: new Date(2021, 12, 22),
      storeCount: 1,
      price: 27.99,
    },
    {
      imageUrl: 'assets/cabinets/guitar-hero.jpg',
      name: '',
      name_en: 'Guitar Hero',
      name_ar: 'بطل الغيتار',
      description: '',
      description_en: "Shred with the best of 'em.",
      description_ar: 'ولعها مع أحسن اللاعبين',
      addedAt: new Date(2022, 5, 18),
      storeCount: 9,
      price: 7489.0,
    },
    {
      imageUrl: 'assets/cabinets/mario-bros.jpg',
      name: '',
      name_en: 'Super Mario Bros. Cabinet',
      name_ar: 'خزانة سوبر ماريو',
      description: '',
      description_en: 'One of our hottest cabinets.',
      description_ar: 'من أكثر الخزانات شعبية',
      addedAt: new Date(2022, 6, 1),
      storeCount: 0,
      price: 2195.99,
    },
    {
      imageUrl: 'assets/cabinets/pac-man.jpg',
      name: '',
      name_en: 'Pac-man 4ft Cabinet',
      name_ar: 'خزانة باكمان 4 قدم',
      description: '',
      description_en: 'Paco paco paco paco.',
      description_ar: 'أكيد تتذكرها',
      addedAt: new Date(2022, 4, 2),
      storeCount: 2,
      price: 249.99,
    },
  ];

  public allFor(locale: string): Cabinet[] {
    return this.cabinets.map((c: Cabinet) => {
      const { description, name, ...others } = c;

      return {
        name: locale === 'ar' ? c.name_ar : c.name_en,
        description:
          locale === 'ar'
            ? c.description_ar
            : c.description_en,
        ...others,
      };
    });
  }
}
