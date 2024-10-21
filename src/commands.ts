import exp from "constants";
import { Recipe, RecipeType } from "./recipe";
import { Store } from "./stores/store.type";

export async function list(store: Store<RecipeType[]>, args: string[]) {
  if (args) {
    console.error(`Error: The list command should not have any argument.`);
    return;
  }
  const recipe = new Recipe(store);
  const recipes = await recipe.readAll();
  const formatted = recipes
    .map((recipe) => `- [${recipe.id}] ${recipe.name}`)
    .join("\n");
  console.log("Your recipes:");
  console.log(formatted);
}

export async function details(store: Store<RecipeType[]>, args: string[]) {
  const id = +args[0];
  if (isNaN(id)) {
    console.error(`Error: ID must be number.`);
    return
  }
  const recipe = new Recipe(store);
  const recipes = await recipe.readAll();
  const found = recipes.find((recipe) => recipe.id === id);
  if (found !== undefined) {
    console.log(`ID: ${found.id} \nName: ${found.name}`);
  } else {
    console.error(`Error: Recipe with ID: ${id} doese not found.`);
  }
}

export async function create(store: Store<RecipeType[]>, args: string[]) {
  if (args.length === 0) {
    console.error(`Error: The create command should have an argument.`);
    return;
  }
  const recipe = new Recipe(store);
  const recipes = await recipe.add({
    id: number;
  name: string;
  });
 
}