# TITAN ARCHIVES — Survey Corps Database

Een interactieve single-page webapplicatie gebouwd met Vite, HTML, SCSS en JavaScript. De app haalt data op van de Attack on Titan API en toont personages met details.


## Functionaliteiten

- Lijst van Attack on Titan personages geladen via de API
- Klik op een personage om details te zien (regiment, beroep, gender, alias)
- Zoekfunctie om personages op te zoeken op naam
- Sorteren aan de hand van een select (A - Z EN Z - A)
- Filter knoppen: ALL, SCOUT, GARRISON, MILITARY, NOBILITY, MARLEYAN, FAVOURITES
- Pijlen met actieve/inactieve afbeeldingen bij klikken
- Hartje om personages als favoriet te markeren

## Gebruikte API

- [Attack on Titan API](https://api.attackontitanapi.com)

## Installatie

```bash
npm install
npm run dev
```

## Technische vereisten

| Vereiste | Waar in de code | Uitleg |
|---|---|---|
| **Elementen selecteren** | `main.js` - lijn 11, 12, 37, 63, 78, 79, 83, 89, 90, 148, 174, 193, 196, 205, 206, 210, 236, 237 | DOM-elementen worden geselecteerd met `querySelector()`, `querySelectorAll()` en `getElementById()` |
| **Elementen manipuleren** | `main.js` - lijn 47-50, 64-66, 78-80, 83-85, 99, 107-114, 119, 217, 220 | DOM-elementen worden aangepast met `textContent`, `innerHTML`, `classList`, `src` en `style.display` |
| **Events aan elementen koppelen** | `main.js` - lijn 29-40, 72-73, 116, 148, 174, 193, 210, 245, 253 | Events worden gekoppeld met `addEventListener()` voor `click`, `mousedown`, `mouseup`, `mouseleave`, `change` en `input` |
| **Constanten** | `main.js` - lijn 13, 14, 16, 131, 135, 206, 236, 237 | Constanten gedeclareerd met `const` voor DOM-elementen en waarden die niet opnieuw toegewezen worden |
| **Template literals** | `main.js` - lijn 78, 107-114, 132 | Template literals met backticks en `${...}` voor dynamische waarden in strings |
| **Iteratie over arrays** | `main.js` - lijn 64, 97, 130, 174, 196 | Arrays worden doorlopen met `for`-loop en `forEach()` |
| **Array-methodes** | `main.js` - lijn 164-169, 83, 137, 153-155, 162, 185-187, 216 | `filter()`, `some()`, `sort()`, `includes()`, `push()` |
| **Arrow functions** | `main.js` - lijn 16-27, 29-40, 72-73, 97, 116, 153-155, 161-169, 174, 185-187, 193, 239-242 | Arrow functions met syntax `() => {}` of `item => ...` |
| **Ternary operator** | `main.js` - lijn 56-57, 83-85, 101, 105, 112, 153-155, 185-187, 240-242 | `condition ? A : B` |
| **Callback functions** | `main.js` - lijn 16, 29-40, 63, 72-73, 97, 116, 148, 153, 161-169, 174 | Functies als argument bij `addEventListener()`, `forEach()`, `filter()`, `some()`, `sort()` en `IntersectionObserver()` |
| **Promises** | `main.js` - lijn 131-133 | `fetch()` retourneert een Promise, afgehandeld met `await` |
| **Async & Await** | `main.js` - lijn 127-143 | `async function loadCharacters()` gebruikt `await` voor `fetch()` en `response.json()` |
| **Observer API** | `main.js` - lijn 16-27 | `IntersectionObserver` detecteert wanneer lijstitems zichtbaar worden in de viewport en voegt de class `visible` toe |
| **Fetch** | `main.js` - lijn 131-133 | `fetch()` haalt charactergegevens op uit de Attack on Titan API per pagina |
| **JSON manipuleren** | `main.js` - lijn 135, 137, 162, 206, 213, 223 | `response.json()`, `data.results`, `JSON.parse()`, `JSON.stringify()` |
| **Formulier validatie** | `main.js` - lijn 193-201 | Zoekbalk valideert input via het `input` event en toont/verbergt items op basis van de ingevoerde naam |
| **LocalStorage** | `main.js` - lijn 82, 162, 206, 213, 215-220, 223 | `localStorage.getItem` en `localStorage.setItem` voor het opslaan en ophalen van favorieten |
| **Flexbox / CSS Grid** | `style.scss` - lijn 9, 12, 21, 25, 43, 61, 62, 66, 67, 79, 80, 140, 156, 180, 183, 192, 201 | `display: flex` en `display: grid` voor layout en positionering |
| **Vite** | `vite.config.js` | Project opgezet met Vite als development server en build tool |                                                                                                                                                                                 |


## Screenshots

### Hoofdscherm
![Hoofdscherm](/web-advanced-project/screenshots/home.png)

### Character details
![Character details](/web-advanced-project/screenshots/charachter.png)

### Filters en sortering
![Filters](/web-advanced-project/screenshots/filter.png)
![sortering](/web-advanced-project/screenshots/sort.png)

### Favorites
![Favorites](/web-advanced-project/screenshots/favs.png)

### responsive
![Responsive](/web-advanced-project/screenshots/responsive.png)

## Bronnen

- [Attack on Titan API](https://api.attackontitanapi.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [W3Schools](https://www.w3schools.com)
- [Vite docs](https://vitejs.dev)
- [AI: Claude (Anthropic)](https://claude.ai/share/d53624e3-6765-4040-8135-9b5731b7ac5f)

