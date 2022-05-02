import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/Pet";

export const home = (req: Request, res: Response) => {
  let title: string = "Todos os animais";
  let banner: string = "allanimals.jpg";
  let menu = createMenuObject("all");
  let list = Pet.getAll();

  res.render("pages/page", {
    title,
    banner,
    menu,
    list,
  });
};

export const dogs = (req: Request, res: Response) => {
  let title: string = "Todos os cachorros";
  let banner: string = "banner_dog.jpg";
  let menu = createMenuObject("dog");
  let list = Pet.getFromType("dog");

  res.render("pages/page", {
    title,
    banner,
    menu,
    list,
  });
};

export const cats = (req: Request, res: Response) => {
  let title: string = "Todos os gatos";
  let banner: string = "banner_cat.jpg";
  let menu = createMenuObject("cat");
  let list = Pet.getFromType("cat");

  res.render("pages/page", {
    title,
    banner,
    menu,
    list,
  });
};

export const fishes = (req: Request, res: Response) => {
  let title: string = "Todos os peixes";
  let banner: string = "banner_fish.jpg";
  let menu = createMenuObject("fish");
  let list = Pet.getFromType("fish");

  res.render("pages/page", {
    title,
    banner,
    menu,
    list,
  });
};
