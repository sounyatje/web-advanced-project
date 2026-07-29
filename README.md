# TITAN ARCHIVES — Survey Corps Database

Een interactieve single-page webapplicatie gebouwd met Vite, HTML, SCSS en JavaScript. De app haalt data op van de Attack on Titan API en toont personages met details.

## Functionaliteiten

- Lijst van Attack on Titan personages geladen via de API
- Klik op een personage om details te zien (regiment, beroep, gender, alias)
- Zoekfunctie om personages te filteren op naam
- Filter knoppen: ALL, SCOUT, GARRISON, MILITARY, NOBILITY, MARLEYAN, FAVOURITES
- Sorteren aan de hand van een select (A - Z EN Z - A)
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
| Elementen selecteren | main.js - lijn 11, 12, 37, 47-50, 63, 78-80, 83, 89, 90, 146, 171, 186, 197, 200, 207, 210, 187, 184, 226, 227 | querySelector, querySelectorAll, getElementById |
| Elementen manipuleren | main.js - lijn 78,79,99,107 | textContent, innerHTML, classList |
| Events aan elementen koppelen | main.js - lijn 72, 200 | addEventListener |
| Constanten | main.js - lijn 13,14,16 | const ... |
| Template literals | main.js - lijn 107-114,131| ${....} |
| Iteratie over arrays | main.js - lijn 64,97,129,186 | for en forEach |
| Array methodes | main.js - lijn 161-166, 151, 83, 166, 189, 205, 136, 209 | filter, some, sort, includes, push, filter|
| Arrow functions | main.js |
| Ternary operator | main.js |
| Callback functions | main.js |
| Promises | main.js |
| Async & Await | main.js |
| Observer API | main.js |
| Fetch | main.js |
| JSON manipuleren | main.js |
| Formulier validatie | main.js |
| LocalStorage | main.js |
| Flexbox / CSS Grid | style.scss |
| Vite | vite.config.js |

## Screenshots

*(nog toe te voegen)*

## Bronnen

- [Attack on Titan API](https://api.attackontitanapi.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [W3Schools](https://www.w3schools.com)
- [Vite docs](https://vitejs.dev)
- [AI: Claude (Anthropic)](https://claude.ai/share/d53624e3-6765-4040-8135-9b5731b7ac5f)

