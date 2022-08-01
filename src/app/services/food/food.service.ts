import { Injectable } from '@angular/core';
import { count } from 'rxjs';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(Food => Food.id == id)!;
  }




  getAllFoodByTag(tag: string): Foods[] {
    if(tag == 'All')
    return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAllTag():Tag[]{
    return[
    {name: 'All', count: 8},
    {name: 'FastFood', count: 4},
    {name: 'Pizza', count: 2},
    {name: 'Lunch', count: 3},
    {name: 'SlowFood', count: 2},
    {name: 'Hamburger', count: 1},
    {name: 'Fry', count: 1},
    {name: 'Soup', count: 1},





    ]


  }


  getAll():Foods[] {
    return [
      {
      id: 1,
      name: 'Pepperoni Pizza',
      price: 11,
      cookTime: '40-50',
      favorite: true,
      origns: ['india', 'asia'],
      star: 4.0,
      imageUrl: '/assets/food-1.jpg',
      tags: ['Pizza','1'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 5,
        cookTime: '40-50',
        favorite: false,
        origns: ['india', 'asia'],
        star: 3.0,
        imageUrl: '/assets/food-2.jpg',
        tags: ['2','1'],
        },
        {
          id: 3,
          name: 'Hamburger',
          price: 6,
          cookTime: '40-50',
          favorite: false,
          origns: ['india', 'asia'],
          star: 3.0,
          imageUrl: '/assets/food-3.jpg',
          tags: ['2','1'],
          },
          {
            id: 4,
            name: 'French fries',
            price: 3,
            cookTime: '40-50',
            favorite: false,
            origns: ['india', 'asia'],
            star: 3.0,
            imageUrl: '/assets/food-4.jpg',
            tags: ['2','1'],
            },
            {
              id: 5,
              name: 'qeeq',
              price: 4,
              cookTime: '40-50',
              favorite: false,
              origns: ['india', 'asia'],
              star: 3.0,
              imageUrl: '/assets/food-5.jpg',
              tags: ['2','1'],
              },
              {
                id: 6,
                name: 'qeeq',
                price: 17,
                cookTime: '40-50',
                favorite: false,
                origns: ['india', 'asia'],
                star: 3.0,
                imageUrl: '/assets/food-6.jpg',
                tags: ['2','1'],
                },
                {
                  id: 7,
                  name: 'qeeq',
                  price: 10,
                  cookTime: '40-50',
                  favorite: false,
                  origns: ['india', 'asia'],
                  star: 3.0,
                  imageUrl: '/assets/food-7.jpg',
                  tags: ['2','1'],
                  },
                  {
                    id: 8,
                    name: 'qeeq',
                    price: 15,
                    cookTime: '40-50',
                    favorite: false,
                    origns: ['india', 'asia'],
                    star: 3.0,
                    imageUrl: '/assets/food-8.jpg',
                    tags: ['2','1'],
                    }
    ]
  }


}
