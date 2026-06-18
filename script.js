
const productsData = [
    {
        id: 'amphibia_1',
        name: 'ВОСТОК АМФИБИЯ 2403',
        price: 9800,
        category: 'men',
        series: 'amphibia',
        image: 'img/catalog 1.png',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Сапфировое',
            width: '37 мм',
            height: '47 мм',
            thickness: '11.7 мм'
        }
    },
    {
        id: 'amphibia_2',
        name: 'ВОСТОК АМФИБИЯ 2415',
        price: 13100,
        category: 'men',
        series: 'amphibia',
        image: 'img/catalog 2.png',
        discount: '-22% до 13 июля',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Минеральное',
            width: '39 мм',
            height: '49 мм',
            thickness: '12.5 мм'
        }
    },
    {
        id: 'amphibia_3',
        name: 'ВОСТОК АМФИБИЯ 2425',
        price: 12500,
        category: 'men',
        series: 'amphibia',
        image: 'img/catalog 3.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Кожа/Сталь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Сапфировое',
            width: '37 мм',
            height: '47 мм',
            thickness: '11.7 мм'
        }
    },
    {
        id: 'amphibia_4',
        name: 'ВОСТОК АМФИБИЯ 2435',
        price: 9800,
        category: 'women',
        series: 'amphibia',
        image: 'img/catalog 4.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Женские',
            waterproof: '100 м',
            glass: 'Сапфировое',
            width: '34 мм',
            height: '44 мм',
            thickness: '10.5 мм'
        }
    },
    {
        id: 'amphibia_5',
        name: 'ВОСТОК АМФИБИЯ 2445',
        price: 15300,
        category: 'men',
        series: 'amphibia',
        image: 'img/catalog 5.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Сталь',
            gender: 'Мужские',
            waterproof: '100 м',
            glass: 'Сапфировое',
            width: '36 мм',
            height: '46 мм',
            thickness: '11.2 мм'
        }
    },
    {
        id: 'amphibia_6',
        name: 'ВОСТОК АМФИБИЯ 2455',
        price: 26950,
        category: 'kids',
        series: 'amphibia',
        image: 'img/catalog 6.jpg',
        discount: '-22% до 13 июля',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '44 мм',
            height: '42 мм',
            thickness: '9 мм'
        }
    },
    {
        id: 'amphibia_7',
        name: 'ВОСТОК АМФИБИЯ 2465',
        price: 8000,
        category: 'women',
        series: 'amphibia',
        image: 'img/catalog 7.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Женские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },
    {
        id: 'amphibia_8',
        name: 'ВОСТОК АМФИБИЯ 2475',
        price: 8000,
        category: 'women',
        series: 'amphibia',
        image: 'img/catalog 8.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Женские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },
    {
        id: 'amphibia_9',
        name: 'ВОСТОК АМФИБИЯ 2485',
        price: 8000,
        category: 'men',
        series: 'amphibia',
        image: 'img/catalog 9.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },


    {
        id: 'commanderskie_1',
        name: 'КОМАНДИРСКИЕ 2403',
        price: 12500,
        category: 'men',
        series: 'commanderskie',
        image: 'img/catalog 2.1.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Кожа/Сталь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Сапфировое',
            width: '37 мм',
            height: '47 мм',
            thickness: '11.7 мм'
        }
    },
    {
        id: 'commanderskie_2',
        name: 'КОМАНДИРСКИЕ 2415',
        price: 13500,
        category: 'men',
        series: 'commanderskie',
        image: 'img/catalog 2.2.jpg',
        discount: '-15% до 20 июля',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Минеральное',
            width: '39 мм',
            height: '49 мм',
            thickness: '12.5 мм'
        }
    },
    {
        id: 'commanderskie_3',
        name: 'КОМАНДИРСКИЕ 2425',
        price: 11800,
        category: 'men',
        series: 'commanderskie',
        image: 'img/catalog 2.3.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Мужские',
            waterproof: '100 м',
            glass: 'Сапфировое',
            width: '36 мм',
            height: '46 мм',
            thickness: '11.2 мм'
        }
    },
    {
        id: 'commanderskie_4',
        name: 'КОМАНДИРСКИЕ 2435',
        price: 9200,
        category: 'women',
        series: 'commanderskie',
        image: 'img/catalog 2.4.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Женские',
            waterproof: '100 м',
            glass: 'Сапфировое',
            width: '34 мм',
            height: '44 мм',
            thickness: '10.5 мм'
        }
    },
    {
        id: 'commanderskie_5',
        name: 'КОМАНДИРСКИЕ 2445',
        price: 14800,
        category: 'men',
        series: 'commanderskie',
        image: 'img/catalog 2.5.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Сталь',
            gender: 'Мужские',
            waterproof: '100 м',
            glass: 'Сапфировое',
            width: '36 мм',
            height: '46 мм',
            thickness: '11.2 мм'
        }
    },
    {
        id: 'commanderskie_6',
        name: 'КОМАНДИРСКИЕ 2455',
        price: 25950,
        category: 'kids',
        series: 'commanderskie',
        image: 'img/catalog 2.6.jpg',
        discount: '-22% до 13 июля',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '44 мм',
            height: '42 мм',
            thickness: '9 мм'
        }
    },
    {
        id: 'commanderskie_7',
        name: 'КОМАНДИРСКИЕ 2465',
        price: 8500,
        category: 'women',
        series: 'commanderskie',
        image: 'img/catalog 2.7.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Женские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },
    {
        id: 'commanderskie_8',
        name: 'КОМАНДИРСКИЕ 2475',
        price: 7800,
        category: 'women',
        series: 'commanderskie',
        image: 'img/catalog 2.8.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Женские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },
    {
        id: 'commanderskie_9',
        name: 'КОМАНДИРСКИЕ 2485',
        price: 8200,
        category: 'men',
        series: 'commanderskie',
        image: 'img/catalog 2.9.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },

    {
        id: 'vostok_1',
        name: 'ВОСТОК КЛАССИКА 2403',
        price: 9800,
        category: 'women',
        series: 'vostok',
        image: 'img/catalog 3.1.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Женские',
            waterproof: '100 м',
            glass: 'Сапфировое',
            width: '34 мм',
            height: '44 мм',
            thickness: '10.5 мм'
        }
    },
    {
        id: 'vostok_2',
        name: 'ВОСТОК КЛАССИКА 2415',
        price: 10500,
        category: 'women',
        series: 'vostok',
        image: 'img/catalog 3.2.jpg',
        discount: '-10% до 1 августа',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Женские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },
    {
        id: 'vostok_3',
        name: 'ВОСТОК КЛАССИКА 2425',
        price: 11200,
        category: 'women',
        series: 'vostok',
        image: 'img/catalog 3.3.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Женские',
            waterproof: '100 м',
            glass: 'Сапфировое',
            width: '34 мм',
            height: '44 мм',
            thickness: '10.5 мм'
        }
    },
    {
        id: 'vostok_4',
        name: 'ВОСТОК КЛАССИКА 2435',
        price: 9200,
        category: 'men',
        series: 'vostok',
        image: 'img/catalog 3.4.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Сапфировое',
            width: '37 мм',
            height: '47 мм',
            thickness: '11.7 мм'
        }
    },
    {
        id: 'vostok_5',
        name: 'ВОСТОК КЛАССИКА 2445',
        price: 13800,
        category: 'men',
        series: 'vostok',
        image: 'img/catalog 3.5.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Сталь',
            gender: 'Мужские',
            waterproof: '100 м',
            glass: 'Сапфировое',
            width: '36 мм',
            height: '46 мм',
            thickness: '11.2 мм'
        }
    },
    {
        id: 'vostok_6',
        name: 'ВОСТОК КЛАССИКА 2455',
        price: 22950,
        category: 'kids',
        series: 'vostok',
        image: 'img/catalog 3.6.jpg',
        discount: '-22% до 13 июля',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '44 мм',
            height: '42 мм',
            thickness: '9 мм'
        }
    },
    {
        id: 'vostok_7',
        name: 'ВОСТОК КЛАССИКА 2465',
        price: 7800,
        category: 'women',
        series: 'vostok',
        image: 'img/catalog 3.7.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Женские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },
    {
        id: 'vostok_8',
        name: 'ВОСТОК КЛАССИКА 2475',
        price: 8500,
        category: 'men',
        series: 'vostok',
        image: 'img/catalog 3.8.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },
    {
        id: 'vostok_9',
        name: 'ВОСТОК КЛАССИКА 2485',
        price: 9500,
        category: 'women',
        series: 'vostok',
        image: 'img/catalog 3.9.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Женские',
            waterproof: '100 м',
            glass: 'Сапфировое',
            width: '34 мм',
            height: '44 мм',
            thickness: '10.5 мм'
        }
    },

    {
        id: 'attache_1',
        name: 'АТТАШЕ 2403',
        price: 15300,
        category: 'men',
        series: 'attache',
        image: 'img/catalog 4.1.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Сталь',
            gender: 'Мужские',
            waterproof: '100 м',
            glass: 'Сапфировое',
            width: '36 мм',
            height: '46 мм',
            thickness: '11.2 мм'
        }
    },
    {
        id: 'attache_2',
        name: 'АТТАШЕ 2415',
        price: 16500,
        category: 'men',
        series: 'attache',
        image: 'img/catalog 4.2.jpg',
        discount: '-15% до 20 июля',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Сапфировое',
            width: '37 мм',
            height: '47 мм',
            thickness: '11.7 мм'
        }
    },
    {
        id: 'attache_3',
        name: 'АТТАШЕ 2425',
        price: 14800,
        category: 'men',
        series: 'attache',
        image: 'img/catalog 4.3.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Кожа/Сталь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Сапфировое',
            width: '37 мм',
            height: '47 мм',
            thickness: '11.7 мм'
        }
    },
    {
        id: 'attache_4',
        name: 'АТТАШЕ 2435',
        price: 11200,
        category: 'women',
        series: 'attache',
        image: 'img/catalog 4.4.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Женские',
            waterproof: '100 м',
            glass: 'Сапфировое',
            width: '34 мм',
            height: '44 мм',
            thickness: '10.5 мм'
        }
    },
    {
        id: 'attache_5',
        name: 'АТТАШЕ 2445',
        price: 17200,
        category: 'men',
        series: 'attache',
        image: 'img/catalog 4.5.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Минеральное',
            width: '39 мм',
            height: '49 мм',
            thickness: '12.5 мм'
        }
    },
    {
        id: 'attache_6',
        name: 'АТТАШЕ 2455',
        price: 28950,
        category: 'kids',
        series: 'attache',
        image: 'img/catalog 4.6.jpg',
        discount: '-22% до 13 июля',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '44 мм',
            height: '42 мм',
            thickness: '9 мм'
        }
    },
    {
        id: 'attache_7',
        name: 'АТТАШЕ 2465',
        price: 9800,
        category: 'women',
        series: 'attache',
        image: 'img/catalog 4.7.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Женские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },
    {
        id: 'attache_8',
        name: 'АТТАШЕ 2475',
        price: 9200,
        category: 'women',
        series: 'attache',
        image: 'img/catalog 4.8.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Женские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },
    {
        id: 'attache_9',
        name: 'АТТАШЕ 2485',
        price: 10500,
        category: 'men',
        series: 'attache',
        image: 'img/catalog 4.9.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },

    {
        id: 'retro_1',
        name: 'ВОСТОК РЕТРО 2403',
        price: 8000,
        category: 'women',
        series: 'retro',
        image: 'img/catalog 5.1.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Женские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },
    {
        id: 'retro_2',
        name: 'ВОСТОК РЕТРО 2415',
        price: 8500,
        category: 'women',
        series: 'retro',
        image: 'img/catalog 5.2.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Женские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },
    {
        id: 'retro_3',
        name: 'ВОСТОК РЕТРО 2425',
        price: 7800,
        category: 'women',
        series: 'retro',
        image: 'img/catalog 5.3.jpg',
        discount: '-10% до 1 августа',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Женские',
            waterproof: '100 м',
            glass: 'Сапфировое',
            width: '34 мм',
            height: '44 мм',
            thickness: '10.5 мм'
        }
    },
    {
        id: 'retro_4',
        name: 'ВОСТОК РЕТРО 2435',
        price: 9200,
        category: 'men',
        series: 'retro',
        image: 'img/catalog 5.4.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Сапфировое',
            width: '37 мм',
            height: '47 мм',
            thickness: '11.7 мм'
        }
    },
    {
        id: 'retro_5',
        name: 'ВОСТОК РЕТРО 2445',
        price: 12800,
        category: 'men',
        series: 'retro',
        image: 'img/catalog 5.5.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Сталь',
            gender: 'Мужские',
            waterproof: '100 м',
            glass: 'Сапфировое',
            width: '36 мм',
            height: '46 мм',
            thickness: '11.2 мм'
        }
    },
    {
        id: 'retro_6',
        name: 'ВОСТОК РЕТРО 2455',
        price: 21950,
        category: 'kids',
        series: 'retro',
        image: 'img/catalog 5.6.jpg',
        discount: '-22% до 13 июля',
        specs: {
            country: 'Россия',
            movement: 'Автоматический',
            material: 'Нержавеющая сталь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '44 мм',
            height: '42 мм',
            thickness: '9 мм'
        }
    },
    {
        id: 'retro_7',
        name: 'ВОСТОК РЕТРО 2465',
        price: 7500,
        category: 'women',
        series: 'retro',
        image: 'img/catalog 5.7.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Женские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },
    {
        id: 'retro_8',
        name: 'ВОСТОК РЕТРО 2475',
        price: 8200,
        category: 'men',
        series: 'retro',
        image: 'img/catalog 5.8.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Мужские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },
    {
        id: 'retro_9',
        name: 'ВОСТОК РЕТРО 2485',
        price: 8900,
        category: 'women',
        series: 'retro',
        image: 'img/catalog 5.9.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            movement: 'Механические часы с ручным заводом',
            material: 'Латунь',
            gender: 'Женские',
            waterproof: '200 м',
            glass: 'Стеклопластик',
            width: '38 мм',
            height: '45 мм',
            thickness: '11 мм'
        }
    },
    {
        id: 'accessories_1',
        name: 'РЕМЕШОК КОЖАНЫЙ КЛАССИК',
        price: 2900,
        category: 'accessories',
        series: 'accessories',
        image: 'img/catalog 6.1.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            material: 'Натуральная кожа',
            color: 'Черный',
            width: '20 мм',
            length: '120/80 мм',
            clasp: 'Пряжка'
        }
    },
    {
        id: 'accessories_2',
        name: 'РЕМЕШОК СТАЛЬНОЙ МИЛАНСКИЙ',
        price: 3500,
        category: 'accessories',
        series: 'accessories',
        image: 'img/catalog 6.2.jpg',
        discount: '-10% до 1 августа',
        specs: {
            country: 'Россия',
            material: 'Нержавеющая сталь',
            color: 'Серебристый',
            width: '22 мм',
            length: '130/80 мм',
            clasp: 'Застежка-бабочка'
        }
    },
    {
        id: 'accessories_3',
        name: 'РЕМЕШОК ТКАНЕВЫЙ НАТО',
        price: 1800,
        category: 'accessories',
        series: 'accessories',
        image: 'img/catalog 6.3.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            material: 'Нейлон',
            color: 'Оливковый',
            width: '20 мм',
            length: '260 мм',
            clasp: 'Пряжка'
        }
    },
    {
        id: 'accessories_4',
        name: 'ЗАСТЕЖКА-БАБОЧКА ДЛЯ РЕМЕШКА',
        price: 1200,
        category: 'accessories',
        series: 'accessories',
        image: 'img/catalog 6.4.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            material: 'Нержавеющая сталь',
            color: 'Серебристый',
            width: '18-22 мм',
            type: 'Застежка-бабочка'
        }
    },
    {
        id: 'accessories_5',
        name: 'ЗАСТЕЖКА-ПРЯЖКА КЛАССИК',
        price: 800,
        category: 'accessories',
        series: 'accessories',
        image: 'img/catalog 6.5.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            material: 'Нержавеющая сталь',
            color: 'Золотистый',
            width: '20 мм',
            type: 'Пряжка'
        }
    },
    {
        id: 'accessories_6',
        name: 'САПФИРОВОЕ СТЕКЛО ДЛЯ ВОСТОК',
        price: 4500,
        category: 'accessories',
        series: 'accessories',
        image: 'img/catalog 6.6.jpg',
        discount: '-15% до 13 июля',
        specs: {
            country: 'Россия',
            material: 'Сапфировое стекло',
            diameter: '37 мм',
            thickness: '1.2 мм',
            type: 'Плоское'
        }
    },
    {
        id: 'accessories_7',
        name: 'МИНЕРАЛЬНОЕ СТЕКЛО ВОСТОК',
        price: 1800,
        category: 'accessories',
        series: 'accessories',
        image: 'img/catalog 6.7.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            material: 'Минеральное стекло',
            diameter: '39 мм',
            thickness: '1.5 мм',
            type: 'Выпуклое'
        }
    },
    {
        id: 'accessories_8',
        name: 'КОРОБКА ДЛЯ ЧАСОВ ДЕРЕВЯННАЯ',
        price: 3800,
        category: 'accessories',
        series: 'accessories',
        image: 'img/catalog 6.8.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            material: 'Дерево (орех)',
            color: 'Коричневый',
            seats: '2 места',
            type: 'Коробка для часов'
        }
    },
    {
        id: 'accessories_9',
        name: 'ПОДСТАВКА ДЛЯ ЧАСОВ ДЕРЕВЯННАЯ',
        price: 2500,
        category: 'accessories',
        series: 'accessories',
        image: 'img/catalog 6.9.jpg',
        discount: '',
        specs: {
            country: 'Россия',
            material: 'Дерево',
            color: 'Прозрачный',
            type: 'Подставка-подушка'
        }
    },
];


let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    const user = firebase.auth().currentUser;
    if (user) {
        firebase.database().ref('carts/' + user.uid).set(cart);
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    if (cartCount) cartCount.textContent = totalItems;
}

function renderCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    const cartTotalDiv = document.getElementById('cartTotal');

    if (!cartItemsDiv || !cartTotalDiv) return;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div class="cart-empty">Корзина пуста</div>';
        cartTotalDiv.innerHTML = 'Итого: 0 ₽';
        updateCartFooter();
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price.toLocaleString()} ₽ x ${item.quantity}</div>
                </div>
                <button class="cart-item-remove" data-index="${index}">×</button>
            </div>
        `;
    });

    cartItemsDiv.innerHTML = html;
    cartTotalDiv.innerHTML = `Итого: ${total.toLocaleString()} ₽`;
    updateCartFooter();

    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(btn.dataset.index);
            cart.splice(index, 1);
            saveCart();
            renderCart();
        });
    });
}

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    saveCart();
    showNotification(`${name} добавлен в корзину!`);
}

function showNotification(message) {
    const existing = document.querySelector('.custom-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">✅</span>
            <span class="notification-text">${message}</span>
        </div>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function updateCartFooter() {
    const footer = document.getElementById('cartFooter');
    if (footer) {
        footer.style.display = cart.length > 0 ? 'flex' : 'none';
    }
}


function renderProducts() {
    const catalogGrid = document.getElementById('catalogGrid');
    if (!catalogGrid) return;

    catalogGrid.innerHTML = '';

    productsData.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.category = product.category || 'all';
        card.dataset.series = product.series || '';
        card.dataset.name = product.name;
        card.dataset.price = product.price;

        const specs = product.specs || {};

        let hoverHtml = `
            <div class="product-hover-info">
                <div class="product-hover-title">📋 Характеристики</div>
                <div class="product-hover-grid">
        `;

        const specItems = {
            'Страна': specs.country,
            'Тип механизма': specs.movement,
            'Материал': specs.material,
            'Пол': specs.gender,
            'Водозащита': specs.waterproof,
            'Стекло': specs.glass,
            'Ширина': specs.width,
            'Высота': specs.height,
            'Толщина': specs.thickness
        };

        let hasSpecs = false;
        for (const [label, value] of Object.entries(specItems)) {
            if (value && value !== '') {
                hasSpecs = true;
                hoverHtml += `
                    <div class="product-hover-item">
                        <span class="label">${label}</span>
                        <span class="value">${value}</span>
                    </div>
                `;
            }
        }

        if (!hasSpecs) {
            hoverHtml += `
                <div class="product-hover-item" style="grid-column: 1/-1; text-align:center; color:rgba(255,255,255,0.5);">
                    Информация отсутствует
                </div>
            `;
        }

        hoverHtml += `
                </div>
                <button class="add-to-cart">В корзину</button>
            </div>
        `;

        card.innerHTML = `
            ${product.discount ? `<div class="discount-badge">${product.discount}</div>` : ''}
            <img src="${product.image || 'https://via.placeholder.com/280x260?text=No+Image'}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/280x260?text=No+Image'">
            <div class="product-title">${product.name}</div>
            <div class="product-price">${product.price.toLocaleString()} ₽</div>
            ${hoverHtml}
        `;
        catalogGrid.appendChild(card);
    });


    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.product-card');
            const name = card.dataset.name;
            const price = parseInt(card.dataset.price);
            addToCart(name, price);
        });
    });

    window.allProducts = Array.from(document.querySelectorAll('.product-card'));
    applyFilters();
    updateCategoryCounts();
    updateSeriesCounts();

    console.log(`✅ Отрисовано ${productsData.length} товаров`);
}


let activeSeriesFilter = null;
let activeCategoryFilter = 'all';

function applyFilters() {
    const products = window.allProducts || Array.from(document.querySelectorAll('.product-card'));

    const activeCategoryLink = document.querySelector('.menu-text a.active-category');
    const menuCategory = activeCategoryLink ? activeCategoryLink.dataset.category : 'all';

    const currentCategory = activeCategoryFilter !== 'all' ? activeCategoryFilter : menuCategory;

    products.forEach(product => {
        const productCategory = product.dataset.category || 'all';
        const productSeries = product.dataset.series || '';

        const matchesCategory = currentCategory === 'all' || productCategory === currentCategory;
        const matchesSeries = !activeSeriesFilter || productSeries === activeSeriesFilter;

        if (matchesCategory && matchesSeries) {
            product.classList.remove('hidden');
            product.classList.add('visible');
        } else {
            product.classList.remove('visible');
            product.classList.add('hidden');
        }
    });

    const grid = document.getElementById('catalogGrid');
    if (!grid) return;

    let emptyMsg = grid.querySelector('.empty-category-msg');
    const visibleCount = document.querySelectorAll('.product-card.visible').length;

    if (visibleCount === 0 && document.querySelectorAll('.product-card').length > 0) {
        if (!emptyMsg) {
            emptyMsg = document.createElement('p');
            emptyMsg.className = 'empty-category-msg';
            emptyMsg.style.cssText = `
                grid-column: 1 / -1;
                text-align: center;
                padding: 60px 20px;
                color: #999;
                font-size: 18px;
            `;
            emptyMsg.textContent = '😕 Товаров в этой категории пока нет';
            grid.appendChild(emptyMsg);
        }
        emptyMsg.style.display = 'block';
    } else if (emptyMsg) {
        emptyMsg.style.display = 'none';
    }
}


function setupSeriesFilters() {
    const seriesItems = document.querySelectorAll('.series-item');

    seriesItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            const seriesKey = this.dataset.series;

            const isActive = this.classList.contains('active-filter-series');

            seriesItems.forEach(el => el.classList.remove('active-filter-series'));

            if (isActive) {
                activeSeriesFilter = null;
            } else {
                activeSeriesFilter = seriesKey;
                this.classList.add('active-filter-series');
            }

            applyFilters();
        });
    });
}


function updateCategoryCounts() {
    const allProducts = document.querySelectorAll('.product-card');
    const categories = ['all', 'men', 'women', 'kids', 'accessories'];

    categories.forEach(cat => {
        let count;
        if (cat === 'all') {
            count = allProducts.length;
        } else {
            count = Array.from(allProducts).filter(p => p.dataset.category === cat).length;
        }
        const filterItem = document.querySelector(`.filter-category[data-filter="${cat}"]`);
        if (filterItem) {
            const oldCount = filterItem.querySelector('.category-count');
            if (oldCount) oldCount.remove();

            const span = document.createElement('span');
            span.className = 'category-count';
            span.textContent = count;
            filterItem.appendChild(span);
        }
    });
}


function updateSeriesCounts() {
    const allProducts = document.querySelectorAll('.product-card');
    const seriesItems = document.querySelectorAll('.series-item');

    seriesItems.forEach(item => {
        const seriesKey = item.dataset.series;
        const count = Array.from(allProducts).filter(p => p.dataset.series === seriesKey).length;

        const oldCount = item.querySelector('.series-count');
        if (oldCount) oldCount.remove();

        const span = document.createElement('span');
        span.className = 'series-count';
        span.textContent = count;
        item.appendChild(span);
    });
}


function setupFilterDropdown() {
    const filterToggle = document.getElementById('filterToggle');
    const filterBody = document.getElementById('filterBody');
    const filterCategories = document.querySelectorAll('.filter-category');

    if (filterToggle && filterBody) {
        filterToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            filterBody.classList.toggle('open');
        });
    }

    filterCategories.forEach(category => {
        category.addEventListener('click', function () {
            const filterValue = this.dataset.filter;

            activeSeriesFilter = null;
            document.querySelectorAll('.series-item').forEach(el => el.classList.remove('active-filter-series'));

            filterCategories.forEach(c => c.classList.remove('active-filter'));
            this.classList.add('active-filter');

            activeCategoryFilter = filterValue;

            const menuLinks = document.querySelectorAll('.menu-text a');
            menuLinks.forEach(link => {
                if (link.dataset.category === filterValue) {
                    link.classList.add('active-category');
                } else {
                    link.classList.remove('active-category');
                }
            });

            applyFilters();

            if (filterBody) {
                filterBody.classList.remove('open');
            }

            const catalog = document.getElementById('catalog');
            if (catalog) {
                setTimeout(() => {
                    catalog.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
        });
    });

    const menuLinks = document.querySelectorAll('.menu-text a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            const category = this.dataset.category;

            filterCategories.forEach(c => {
                c.classList.toggle('active-filter', c.dataset.filter === category);
            });

            activeCategoryFilter = category;

            activeSeriesFilter = null;
            document.querySelectorAll('.series-item').forEach(el => el.classList.remove('active-filter-series'));

            if (filterBody) {
                filterBody.classList.remove('open');
            }
        });
    });
}


document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 DOM загружен, инициализация...');

    // Меню категорий
    const categoryLinks = document.querySelectorAll('.menu-text a');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            categoryLinks.forEach(l => l.classList.remove('active-category'));
            this.classList.add('active-category');

            const category = this.dataset.category;
            activeCategoryFilter = category;

            document.querySelectorAll('.filter-category').forEach(c => {
                c.classList.toggle('active-filter', c.dataset.filter === category);
            });

            activeSeriesFilter = null;
            document.querySelectorAll('.series-item').forEach(el => el.classList.remove('active-filter-series'));

            applyFilters();

            const catalog = document.getElementById('catalog');
            if (catalog) {
                setTimeout(() => {
                    catalog.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });


    renderProducts();


    setupSeriesFilters();


    setupFilterDropdown();


    if (typeof Swiper !== 'undefined') {
        new Swiper('.swiper', {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
            }
        });
    }


    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeCart = document.getElementById('closeCart');
    const goToCheckoutBtn = document.getElementById('goToCheckout');

    if (cartBtn && cartModal && modalOverlay) {
        function openCart() {
            renderCart();
            cartModal.classList.add('active');
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            updateCartFooter();
        }

        function closeCartModal() {
            cartModal.classList.remove('active');
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        cartBtn.addEventListener('click', openCart);
        if (closeCart) closeCart.addEventListener('click', closeCartModal);
        modalOverlay.addEventListener('click', closeCartModal);
    }

    if (goToCheckoutBtn) {
        goToCheckoutBtn.addEventListener('click', function () {
            closeCartModal();
            showNotification('🛒 Переход к оформлению заказа...');
        });
    }

    updateCartCount();
    updateCartFooter();


    const mainAddToCartBtn = document.getElementById('mainAddToCart');
    if (mainAddToCartBtn) {
        mainAddToCartBtn.addEventListener('click', () => {
            addToCart('ВОСТОК АМФИБИЯ 2403', 9800);
        });
    }


    if (typeof ymaps !== 'undefined') {
        ymaps.ready(initMap);
    }

    function initMap() {
        var myMap = new ymaps.Map("map", {
            center: [55.052, 60.107],
            zoom: 16,
            controls: ['zoomControl', 'fullscreenControl']
        });

        var myPlacemark = new ymaps.Placemark([55.052, 60.107], {
            hintContent: 'TIMELESS FASHION',
            balloonContent: '<strong>Магазин часов</strong><br>просп. Автозаводцев, 50<br>г. Миасс, 456300<br>+7 (908) 709-48-25'
        }, {
            preset: 'islands#redIcon',
            iconColor: '#000000'
        });

        myMap.geoObjects.add(myPlacemark);
    }

    console.log('✅ Сайт загружен! Всего товаров: ' + productsData.length);
});


const modal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const closeModal = document.querySelector('.close-modal');
const logoutBtn = document.getElementById('logoutBtn');

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        if (modal) modal.classList.add('active');
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        if (modal) modal.classList.remove('active');
        clearErrors();
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            clearErrors();
        }
    });
}

if (showRegister) {
    showRegister.addEventListener('click', () => {
        if (loginForm) loginForm.style.display = 'none';
        if (registerForm) registerForm.style.display = 'block';
        clearErrors();
    });
}

if (showLogin) {
    showLogin.addEventListener('click', () => {
        if (registerForm) registerForm.style.display = 'none';
        if (loginForm) loginForm.style.display = 'block';
        clearErrors();
    });
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.success-message').forEach(el => el.style.display = 'none');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function logoutUser() {
    if (confirm('Вы уверены, что хотите выйти?')) {
        localStorage.removeItem('currentUser');

        if (firebase.auth() && firebase.auth().signOut) {
            firebase.auth().signOut().catch((error) => {
                console.error('Ошибка выхода из Firebase:', error);
            });
        }

        if (loginBtn) {
            loginBtn.textContent = 'ВХОД';
            loginBtn.style.fontSize = '16px';
            loginBtn.style.maxWidth = 'none';
            loginBtn.style.overflow = 'visible';
            loginBtn.style.textOverflow = 'clip';
        }
        if (logoutBtn) logoutBtn.style.display = 'none';

        showNotification('Вы вышли из аккаунта');
    }
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', logoutUser);
}

const submitRegister = document.getElementById('submitRegister');
if (submitRegister) {
    submitRegister.addEventListener('click', () => {
        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value;
        const successEl = document.getElementById('registerSuccess');

        if (!name) {
            document.getElementById('regNameError').style.display = 'block';
            return;
        } else {
            document.getElementById('regNameError').style.display = 'none';
        }

        if (!validateEmail(email)) {
            document.getElementById('regEmailError').style.display = 'block';
            return;
        } else {
            document.getElementById('regEmailError').style.display = 'none';
        }

        if (password.length < 6) {
            document.getElementById('regPasswordError').style.display = 'block';
            return;
        } else {
            document.getElementById('regPasswordError').style.display = 'none';
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return firebase.database().ref('users/' + user.uid).set({
                    name: name,
                    email: email,
                    createdAt: new Date().toISOString()
                });
            })
            .then(() => {
                if (successEl) {
                    successEl.style.display = 'block';
                    successEl.textContent = 'Регистрация успешна! Теперь войдите.';
                    successEl.style.color = '#27ae60';
                }

                setTimeout(() => {
                    if (registerForm) registerForm.style.display = 'none';
                    if (loginForm) loginForm.style.display = 'block';
                    clearErrors();
                    document.getElementById('loginEmail').value = email;
                }, 1500);
            })
            .catch((error) => {
                if (successEl) {
                    successEl.style.display = 'block';
                    successEl.textContent = 'Ошибка: ' + error.message;
                    successEl.style.color = '#e74c3c';
                }
            });
    });
}

const submitLogin = document.getElementById('submitLogin');
if (submitLogin) {
    submitLogin.addEventListener('click', () => {
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const successEl = document.getElementById('loginSuccess');

        if (!validateEmail(email)) {
            document.getElementById('loginEmailError').style.display = 'block';
            return;
        } else {
            document.getElementById('loginEmailError').style.display = 'none';
        }

        if (password.length < 6) {
            document.getElementById('loginPasswordError').style.display = 'block';
            return;
        } else {
            document.getElementById('loginPasswordError').style.display = 'none';
        }

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (successEl) {
                    successEl.style.display = 'block';
                    successEl.textContent = 'Добро пожаловать!';
                    successEl.style.color = '#27ae60';
                }

                firebase.database().ref('carts/' + user.uid).once('value').then((snapshot) => {
                    const data = snapshot.val();
                    if (data) {
                        cart = data;
                        saveCart();
                        renderCart();
                    }
                });

                setTimeout(() => {
                    if (modal) modal.classList.remove('active');
                    firebase.database().ref('users/' + user.uid).once('value').then((snapshot) => {
                        const userData = snapshot.val();
                        if (loginBtn) {
                            if (userData && userData.name) {
                                loginBtn.textContent = userData.name;
                            } else {
                                loginBtn.textContent = user.email.split('@')[0];
                            }
                        }
                        if (logoutBtn) logoutBtn.style.display = 'inline-flex';
                    });
                    clearErrors();
                }, 1000);
            })
            .catch((error) => {
                if (successEl) {
                    successEl.style.display = 'block';
                    successEl.textContent = 'Ошибка входа: ' + error.message;
                    successEl.style.color = '#e74c3c';
                }
            });
    });
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        firebase.database().ref('users/' + user.uid).once('value').then((snapshot) => {
            const userData = snapshot.val();
            if (loginBtn) {
                if (userData && userData.name) {
                    loginBtn.textContent = userData.name;
                } else {
                    loginBtn.textContent = user.email.split('@')[0];
                }
            }
            if (logoutBtn) logoutBtn.style.display = 'inline-flex';
        });

        firebase.database().ref('carts/' + user.uid).once('value').then((snapshot) => {
            const data = snapshot.val();
            if (data && data.length > 0) {
                cart = data;
                saveCart();
                renderCart();
            }
        });
    } else {
        if (loginBtn) loginBtn.textContent = 'ВХОД';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
});

console.log('✅ Firebase для авторизации и корзины инициализирован');


let orders = JSON.parse(localStorage.getItem('orders')) || [];


function openAdminPanel() {
    console.log('📂 Открытие админ-панели...');
    const panel = document.getElementById('adminPanel');
    const overlay = document.getElementById('adminOverlay');
    if (panel && overlay) {
        panel.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        renderOrders();
        console.log('✅ Админ-панель открыта');
    } else {
        console.error('❌ Элементы админ-панели не найдены!');
    }
}


function closeAdminPanel() {
    console.log('📂 Закрытие админ-панели...');
    const panel = document.getElementById('adminPanel');
    const overlay = document.getElementById('adminOverlay');
    if (panel && overlay) {
        panel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        console.log('✅ Админ-панель закрыта');
    }
}


function renderOrders() {
    const container = document.getElementById('adminOrders');
    const totalOrders = document.getElementById('totalOrders');
    const totalRevenue = document.getElementById('totalRevenue');
    const totalItems = document.getElementById('totalItems');

    if (!container) return;

    if (orders.length === 0) {
        container.innerHTML = '<div class="orders-empty">📭 Заказов пока нет</div>';
        if (totalOrders) totalOrders.textContent = '0';
        if (totalRevenue) totalRevenue.textContent = '0 ₽';
        if (totalItems) totalItems.textContent = '0';
        return;
    }


    const stats = orders.reduce((acc, order) => {
        acc.count++;
        acc.revenue += order.total || 0;
        acc.items += order.items ? order.items.reduce((sum, item) => sum + item.quantity, 0) : 0;
        return acc;
    }, { count: 0, revenue: 0, items: 0 });

    if (totalOrders) totalOrders.textContent = stats.count;
    if (totalRevenue) totalRevenue.textContent = stats.revenue.toLocaleString() + ' ₽';
    if (totalItems) totalItems.textContent = stats.items;


    let html = '';
    orders.forEach((order, index) => {
        const statusClass = order.status === 'completed' ? 'completed' :
            order.status === 'cancelled' ? 'cancelled' : 'pending';
        const statusText = order.status === 'completed' ? '✅ Выполнен' :
            order.status === 'cancelled' ? '❌ Отменен' : '⏳ В обработке';

        html += `
            <div class="order-card" data-index="${index}">
                <div class="order-header">
                    <span class="order-id">📦 Заказ #${order.id || index + 1}</span>
                    <span class="order-date">📅 ${order.date || new Date().toLocaleDateString()}</span>
                    <span class="order-status ${statusClass}">${statusText}</span>
                </div>
                <div class="order-items">
                    ${order.items ? order.items.map(item => `
                        <div class="order-item">
                            <span class="order-item-name">${item.name} × ${item.quantity}</span>
                            <span class="order-item-price">${(item.price * item.quantity).toLocaleString()} ₽</span>
                        </div>
                    `).join('') : ''}
                </div>
                <div class="order-total">Итого: ${(order.total || 0).toLocaleString()} ₽</div>
                <div class="order-actions">
                    ${order.status !== 'completed' && order.status !== 'cancelled' ? `
                        <button class="btn-complete" onclick="updateOrderStatus(${index}, 'completed')">✅ Выполнить</button>
                        <button class="btn-cancel" onclick="updateOrderStatus(${index}, 'cancelled')">❌ Отменить</button>
                    ` : ''}
                    <button class="btn-delete" onclick="deleteOrder(${index})">🗑 Удалить</button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}


function updateOrderStatus(index, status) {
    if (orders[index]) {
        orders[index].status = status;
        saveOrders();
        renderOrders();
        showNotification(`Статус заказа #${index + 1} изменен на "${status}"`);
    }
}


function deleteOrder(index) {
    if (confirm(`Удалить заказ #${index + 1}?`)) {
        orders.splice(index, 1);
        saveOrders();
        renderOrders();
        showNotification('Заказ удален');
    }
}


function saveOrders() {
    localStorage.setItem('orders', JSON.stringify(orders));
}


function createOrderFromCart() {
    if (cart.length === 0) {
        showNotification('Корзина пуста!');
        return;
    }

    const order = {
        id: Date.now(),
        date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
        items: cart.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity
        })),
        total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        status: 'pending'
    };

    orders.unshift(order);
    saveOrders();


    cart = [];
    saveCart();
    renderCart();

    showNotification('✅ Заказ оформлен! Спасибо за покупку!');


    const panel = document.getElementById('adminPanel');
    if (panel && panel.classList.contains('active')) {
        renderOrders();
    }
}


document.addEventListener('DOMContentLoaded', function () {
    console.log('🛠 Настройка админ-панели...');


    const profileBtn = document.getElementById('profileBtn');
    if (profileBtn) {
        console.log('✅ Кнопка профиля найдена');

        profileBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            console.log('👆 Клик по иконке профиля');

            const user = auth.currentUser;
            console.log('👤 Текущий пользователь:', user ? user.email : 'не авторизован');

            if (user) {
                const isAdmin = user.email === 'admin@timeless.com';
                console.log('👑 Админ?', isAdmin);

                if (isAdmin) {
                    openAdminPanel();
                } else {
                    showNotification('🔒 Доступ только для администратора');
                }
            } else {
                showNotification('⚠️ Войдите в аккаунт для доступа к админ-панели');
                const loginBtn = document.getElementById('loginBtn');
                if (loginBtn) loginBtn.click();
            }
        });
    } else {
        console.warn('⚠️ Кнопка профиля не найдена!');
    }


    const adminClose = document.getElementById('adminClose');
    if (adminClose) {
        adminClose.addEventListener('click', closeAdminPanel);
    }


    const adminOverlay = document.getElementById('adminOverlay');
    if (adminOverlay) {
        adminOverlay.addEventListener('click', closeAdminPanel);
    }


    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const panel = document.getElementById('adminPanel');
            if (panel && panel.classList.contains('active')) {
                closeAdminPanel();
            }
        }
    });


    const goToCheckoutBtn = document.getElementById('goToCheckout');
    if (goToCheckoutBtn) {

        const newBtn = goToCheckoutBtn.cloneNode(true);
        goToCheckoutBtn.parentNode.replaceChild(newBtn, goToCheckoutBtn);

        newBtn.addEventListener('click', function () {
            const user = auth.currentUser;
            if (!user) {
                showNotification('⚠️ Войдите в аккаунт для оформления заказа');
                const loginBtn = document.getElementById('loginBtn');
                if (loginBtn) loginBtn.click();
                return;
            }
            createOrderFromCart();
            closeCartModal();
        });
    }

    console.log('✅ Админ-панель настроена');
    console.log('📊 Для входа в админ-панель используйте: admin@timeless.com');
});