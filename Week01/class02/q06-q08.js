var foods = [
              'Popcorn',
              'Potato chips',
              'Shrimp',
              'Chicken rice',
              'Poutine',
              'Tacos',
              'Toast',
              'French Toast',
              'Crab',
              'Pho',
              'Lasagna',
              'Brownie',
              'Lobster',
              'Donuts',
              'Ice cream',
              'Hamburger',
              'Sushi',
              'Chocolate',
              'Pizza'
            ];
var pho = foods.indexOf('Pho')+1;
console.log('Pho ranking ' + pho);
var donuts = foods.indexOf('Donuts');
foods.splice(donuts, 1);
var favFifthFoods = foods.slice(5-1, 11-1);
console.log(favFifthFoods);
console.log(foods);
