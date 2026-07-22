import { Component, signal } from '@angular/core';
import { BarChart } from '@app/shared/charting/components/bar-chart/bar-chart';

@Component({
  selector: 'app-dashboard',
  imports: [BarChart],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class Dashboard {
  testData = signal([
    {
      y: 'Vit/Min/Prot/Unconv Diet(Human/Animal)',
      x: 54906,
    },
    {
      y: 'Cosmetics',
      x: 52219,
    },
    {
      y: 'Nuts/Edible Seed',
      x: 5737,
    },
    {
      y: 'Vegetables/Vegetable Products',
      x: 5085,
    },
    {
      y: 'Bakery Prod/Dough/Mix/Icing',
      x: 3978,
    },
    {
      y: 'Soft Drink/Water',
      x: 3965,
    },
    {
      y: 'Fruit/Fruit Prod',
      x: 3726,
    },
    {
      y: 'Fishery/Seafood Prod',
      x: 3256,
    },
    {
      y: 'Cereal Prep/Breakfast Food',
      x: 2551,
    },
    {
      y: 'Mult Food Dinner/Grav/Sauce/Special',
      x: 2433,
    },
    {
      y: 'Milk/Butter/Dried Milk Prod',
      x: 2283,
    },
    {
      y: 'Dietary Conventional Foods/Meal Replacements',
      x: 2224,
    },
    {
      y: 'Snack Food Item',
      x: 1806,
    },
    {
      y: 'Baby Food Products',
      x: 1507,
    },
    {
      y: 'Candy W/O Choc/Special/Chew Gum',
      x: 1474,
    },
    {
      y: 'Coffee/Tea',
      x: 1389,
    },
    {
      y: 'Ice Cream Prod',
      x: 1307,
    },
    {
      y: 'Choc/Cocoa Prod',
      x: 1296,
    },
    {
      y: 'Powder Formula INFANT FORMULA',
      x: 972,
    },
    {
      y: 'Prep Salad Prod',
      x: 957,
    },
    {
      y: 'Cheese/Cheese Prod',
      x: 694,
    },
    {
      y: 'Whole Grain/Milled Grain Prod/Starch',
      x: 611,
    },
    {
      y: 'Egg/Egg Prod',
      x: 587,
    },
    {
      y: 'Food Additives (Human Use)',
      x: 517,
    },
    {
      y: 'Spices, Flavors And Salts',
      x: 515,
    },
    {
      y: 'Dressing/Condiment',
      x: 511,
    },
    {
      y: 'Soup',
      x: 478,
    },
    {
      y: 'Food Sweeteners (Nutritive)',
      x: 389,
    },
    {
      y: 'Filled Milk/Imit Milk Prod',
      x: 381,
    },
    {
      y: 'Meat, Meat Products and Poultry',
      x: 350,
    },
    {
      y: 'Macaroni/Noodle Prod',
      x: 324,
    },
    {
      y: 'Beverage Bases/Conc/Nectar',
      x: 236,
    },
    {
      y: 'Medical Foods, N.E.C.',
      x: 221,
    },
    {
      y: 'Vegetable Oils',
      x: 207,
    },
    {
      y: 'Vegetable Protein Prod',
      x: 168,
    },
    {
      y: 'Gelatin/Rennet/Pudding Mix/Pie Filling',
      x: 133,
    },
    {
      y: 'Alcoholic Beverage',
      x: 88,
    },
    {
      y: 'Miscellaneous Food Related Items',
      x: 78,
    },
    {
      y: 'Ready to Serve Formula INFANT FORMULA',
      x: 67,
    },
    {
      y: 'Color Additiv Food/Drug/Cosmetic',
      x: 57,
    },
    {
      y: 'Formula, Form Unspecified INFANT FORMULA',
      x: 15,
    },
    {
      y: 'Food Service/Conveyance',
      x: 14,
    },
    {
      y: 'Liquid Concentrate Formula INFANT FORMULA',
      x: 12,
    },
    {
      y: 'Formula Raw Material INFANT FORMULA',
      x: 6,
    },
    {
      y: 'Edible Insects and Insect-derived Foods',
      x: 1,
    },
  ]);
}
