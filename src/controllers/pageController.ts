import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
  let title: string = "Todos os animais";
  let banner: string = "allanimals.jpg";
  let menu = createMenuObject("all");

  res.render("pages/page", {
    title,
    banner,
    menu,
  });
};

export const dogs = (req: Request, res: Response) => {
  let title: string = "Todos os cachorros";
  let banner: string = "banner_dog.jpg";
  let menu = createMenuObject("dog");

  res.render("pages/page", {
    title,
    banner,
    menu,
  });
};

export const cats = (req: Request, res: Response) => {
  let title: string = "Todos os gatos";
  let banner: string = "banner_cat.jpg";
  let menu = createMenuObject("cat");

  res.render("pages/page", {
    title,
    banner,
    menu,
  });
};

export const fishes = (req: Request, res: Response) => {
  let title: string = "Todos os peixes";
  let banner: string = "banner_fish.jpg";
  let menu = createMenuObject("fish");

  res.render("pages/page", {
    title,
    banner,
    menu,
  });
};
