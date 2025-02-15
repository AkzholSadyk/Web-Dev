import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Apple iPhone 13 128Gb черный',
      city: 'ТЕЛЕФОНЫ и ГАДЖЕТЫ',
      rating: '4.5★',
      photo: `/assets/image.png`,
      price: 120000,
      info2: 'Apple iPhone 13 128Gb черный'
    },
    {
      id: 1,
      name: 'Apple iPhone 16 Pro Max 256Gb черный',
      city: 'ТЕЛЕФОНЫ и ГАДЖЕТЫ',
      rating: '5★',
      photo: `/assets/apple16.png`,
      price : 687856,
      info2: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе. Флагманская модель с тончайшими рамками корпуса обладает эргономичным дизайном, высокой ударо- и влагозащитой. Дополнена передней панелью Ceramic Shield последнего поколения и задней – из особого текстурированного стекла с матовой поверхностью. В серии несколько вариантов смартфонов – на 1Тб, на 256Гб, а также iphone 16 pro max 512GB в черном, титановом, белом цвете и новом нежном оттенке Desert Titanium.'
    },
    {
      id: 2,
      name: 'Велосипед BMC Switzerland Teammachine SLR01 THREE 28 дюйм 2023 голубой',
      city: 'Спорт и отдых',
      rating: '5★',
      photo: `/assets/kaspi-velo.png`,
      price: 4760000 ,
      info2: 'Тип........дорожный, шоссейный \n Материал рамы........карбон \n Количество скоростей........22 \n Размер колес........28" \n  Тип тормозов........дисковые гидравлические   \n  Вилка........карбон   \n   Тип тормозов........дисковые гидравлические     \n         Вес........6.7 кг         \n      Цвет........голубой          \n    Год........2023       \n         Страна-производитель........Швейцария   \n   Гарантия........2 года    \n'
    },
    {
      id: 3,
      name: ' Apple MacBook Pro 16.2" / 36 Гб / SSD 1024 Гб / macOS / MX303RU/A',
      city: 'Компьютеры',
      rating: '5★',
      photo: `/assets/appleMac.png`,
      price: 2800000,
      info2: 'Максимальная частота процессора4520.0 МГц ПроцессорApple M4 Max Базовая частота процессора4520.0 МГц'
    },
    {
      id: 4,
      name: 'Электрочайник BEREKE BR-810 серый',
      city: 'Бытовая техника',
      rating: '4.8★',
      photo: `/assets/tea.png`,
      price: 1979,
      info2: 'Безопасность.........блокировка крышки, блокировка включения без воды, отключение при закипании, защита от перегрева, Автоотключение при закипании, отключение при снятии с подставки'
    },
    {
      id: 5,
      name: 'Детское пюре Gerber чернослив 80 г',
      city: 'Детское товары',
      rating: '4.9★',
      photo: `/assets/gerner.png`,
      price: 624,
      info2: 'Специальный способ приготовления позволяет сохранить вкус, запах и цвет натуральных овощей и фруктов. Изготовлено из низкоаллергенных ингредиентов. С 4 месяцев для первого прикорма.Состав: вода (72%), пюре из чернослива (28%).'
    },
    {
      id: 6,
      name: 'Шуруповерт 691444820',
      city: 'Строительство и ремонт',
      rating: '2.1★',
      photo: `/assets/erasyl.png`,
      price: 7110,
      info2: 'Ударная аккумуляторная дрель-шуруповёрт. Благодаря быстрозажимному патрону, смена оснасти не занимает много времени. Профессиональная система 48 Ватт с аккумуляторами и зарядными устройствами. В комплект входит: 2 аккумулятора, 1 зарядное устройство и набор из 23 насадок. Это профессиональная дрель шуруповерт работает в любых местах. инструмент для ремонта, универсальный шуруповёрт, строительный материал. Отличный аналог других известных брендов, патрон обеспечивает смену бит и сверл за считанные секунды. Обрезиненная рукоятка, подсветка рабочей зоны. Двигатель защищен от перегрузок. У скоростное зарядное устройство - время полного заряда 1 час. В комплекте идут гибкий вал и набор оснастки, в удобном кейсе'
    },
    {
      id: 7,
      name: 'Samsung QE98QN90DAUXCE 249 см серый',
      city: 'ТЕЛЕВИЗОРЫ и АУДИОТЕХНИКА',
      rating: '5★',
      photo: `/assets/samsung.png`,
      price: 4999990 ,
      info2: 'Мощность звука60.0 Вт.........СабвуферНет.......Дополнительные возможности звука'
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}