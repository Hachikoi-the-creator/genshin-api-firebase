# Table of contents
- [Table of contents](#table-of-contents)
  - [How to use](#how-to-use)
    - [link/api/all](#linkapiall)
    - [link/api/by-name/:Name](#linkapiby-namename)
    - [link/api/by-element/:Element](#linkapiby-elementelement)
    - [link/api/by-nation/:Nation](#linkapiby-nationnation)
    - [link/api/by-weapon/:Weapon](#linkapiby-weaponweapon)
    - [link/api/by-nation-element/:Nation/:Element](#linkapiby-nation-elementnationelement)
  - [Contribute](#contribute)
  - [Further improvements](#further-improvements)
  - [Todo](#todo)
  - [Tuto for firebase](#tuto-for-firebase)
    - [Quirks](#quirks)
  - [Req options](#req-options)
  - [Lore src](#lore-src)


## How to use 
### link/api/all
- Get all Available characters

### link/api/by-name/:Name
- Get a sigle character, by name **Pascal Case** examples:
- `api/by-name/Hu Tao`
- `api/by-name/Jean`
- `api/by-name/Raiden Shogun`


### link/api/by-element/:Element
- Get all characters from a certain element **Pascal Case**
- Valid options :
  1. `api/by-element/Anemo`
  1. `api/by-element/Geo`
  1. `api/by-element/Pyro`
  1. `api/by-element/Hydro`
  1. `api/by-element/Electro`
  1. `api/by-element/Dendro`


### link/api/by-nation/:Nation
- Get all characters from a certain nation **Pascal Case**
- Valid options
  1. `api/by-nation/Sumeru`
  1. `api/by-nation/Mondstadt`
  1. `api/by-nation/Liyue`
  1. `api/by-nation/Inazuma`


### link/api/by-weapon/:Weapon
- Get all characters from a certain nation **Pascal Case**
- Valid options
  1. `api/by-weapon/Catalyst`
  1. `api/by-weapon/Sword`
  1. `api/by-weapon/Bow`
  1. `api/by-weapon/Sword`
  1. `api/by-weapon/Greatsword`
  1. `api/by-weapon/Polearn`


### link/api/by-nation-element/:Nation/:Element
- Get all characters from a certain nation **Pascal Case**
- **Order Matters**: Examples of valid combinations
  1. `api/by-nation-element/Sumeru/Sword`
  1. `api/by-nation-element/Mondstadt/Catalyst`
  1. `api/by-nation-element/Liyue/Greatsword`
  1. `api/by-nation-element/Inazuma/Polearn`

## Contribute
- Just add the caracter you want to update whit inside `/newCharas/index.js` and ask for a pull request, I'll add it later
- Same for updates on character data, while I decide how to make it better, or just create a page whit good UI to make all this easier, while also adding some images to every character lol

## Further improvements
- make needes changes after you add `"type": "module",` to package.json

## Todo
- Add encrypted password verification
- Check if the character already exist (by-name), before adding it

## Tuto for firebase
- install globally firebase-tools
- `firebase init functions` inside your project
- `cd functions && npm run serve` run functions locally, before deployment
- once everything is working as expected, `npm run deploy`, must have card linked tho
  - example url `http://localhost:5001/genshin-api-deployment/us-central1/app`, given after click on Emulator UI and waiting for a couple of seconds 
  - `genshin-api-deployment` name of your project
  - `us-central` API only deployment
  - `app` name of the function exported in **/functions/index.js**

### Quirks
- Be carefull when activating the charge as you go package, since the delay on the whole process can end up chargin you infinetly, and just give you an error..
- Cannot really import a Mongoose model, dunno why, must be within the routing/routes

## Req options
- `.params`: What goes inside the URL `URL/params`
- `.body`: What is sent whit a form,*www-form-urleconded* format
- `.headers`: Extra info about the request origin

## Lore src
[Wiki](https://genshin-impact.fandom.com/wiki/Collei/Lore)
[FCC API Tutorial](https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/)

**Dev note**
- the lore option is in reality the personality section, discovered that after finishing Mondo & Liyu, thus I'll personaly never change it, sounds cooler too!

