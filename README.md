# Click'n'Menu

## Context

Do you plan your weekly menu, like I do ? If yes, you also have to shop every week to fill the fridge, the shelves and ensure that everything goes smoothly when you come back home, exhausted after a hard 11-hour long sprint planning on a Monday evening.

However, you are faillible, as every human is on a Monday evening. You don't know every recipe by heart. You forget some ingredients when planning your delicious week. The [blank sheet syndrom](https://www.hercampus.com/school/uprm/blank-page-syndrome-causes-symptoms-and-treatments/) kicks in and you don't know what to eat on Wednesday. Dreadful sensation, especially when you are a student.

But I digress.

This personal project is my attempt to resolve such trivial yet terrible point of contention in my (maybe your) daily life. I've had enough forgetting that my [hachis parmentier](https://www.aftouch-cuisine.com/recipe/hachis-parmentier-150.htm) needs [red Porto Wine](https://en.wikipedia.org/wiki/Port_wine) (well, not mine especially), or that my unparalleled [Cookeo's Cantonnese Rice](https://mycookeo.fr/recette-cookeo/riz-cantonais.html) expects not only [lardons (bacon bits for the uncultured swines)](https://en.wikipedia.org/wiki/Lardon) but also [shrimps](https://shrimps.com/) (got'em !).

You get the gist of it.

## Planned features

- [ ] Main feature: 1-click menu generation. (I still need to make some research on this but) You can discriminate between evening meals and mid-day meals.
- [ ] Ingredient list automatically generated when clicking: now you're sure to not forget anything while shopping.
- [ ] Manage your meals and ingredients, create your own recipes.
- [ ] Later on, tap on the Collective mind (totally a banger to come) to generate directly from a common user database.
- [ ] Tweak your preferences if you're gluten-free, veggie, or even full meat.
- [ ] ... That's a lot to plan already.

## Roadmap

- [ ] Write the first version of this Readme.md.
- [ ] Database entities management. We need to know what we meddle with before writing any code.
- [ ] Technological choice. Most likely Java, because I want this project to come up quickly and I'm most used to it, but subject to change. Y'know, might be fun to write it in Golang maybe ?
- [ ] Set up the project structure, depending on the technology.
- [ ] Auto-generation of a whole menu: 14 meals.
- [ ] Dispatch them on 7x2 days.
- [ ] Distinction between evening meals and mid-day meals.
- [ ] We'll see after that.

## Decisions, journaling and brainstorming

- 23/01/2022 22h: I'm glad I started this README.md. I tried three times to start this project, but my work made me realize that I loved writing in Markdown, and that a good, laid-out documentation was really nice to have. So I'll start with that. (time spend: 01:00:00)
- 24/01/2022 21h30: I think I'll go for MongoDB, mainly for two reasons. For a starter, I may need the flexibility needed for this project, as I may have to juggle with a lot of different options in the future (namely, a meal can have dozens of variations / switches such as vegan, vegetarian, meat-free, gluten-free, etc). I don't know yet exactly, but I feel like I'll have to add a lot of columns or logic behind the backscenes if I go on an SQL mission. Document-based databases seems sexier in that regard. The second reason is that I subscribed on a MongoDB cluster and have yet to use it, so, here we go. I'll start describing in a whiteboard my data structure.
- 24/01/2022 22h: Yeah, I'll go with MongoDB. I guess it's also time to learn another language aside from Java then. I'll look up into what works well with Mongo so that it won't be as much of a hassle as it seems. I think it's reasonable to assume I won't represent a week in database. Maybe, much later, I'll have to store the weeks passing to prevent recurrency in meal selections. Cool option, I keep it in the back of this README.md.

## Entities

It should look like something like this:

![Data structure v1](https://user-images.githubusercontent.com/7883320/150863949-ca00be03-26f6-47d4-9a34-45ef8d8e190c.png)

Pretty straigh-forward, I don't know if you can handle enum types in MongoDB, but I'll manage. I also think this structure is pretty decent for a starter, it allows for some pretty quick changes if ever needed. A week is simply composed of 14 differents, randomly selected meals for the moment, so I don't have the need for a structure yet, but I'll have to think about it. Something like <current_day> >> <current_day + 7>, and sending each member a pair.
