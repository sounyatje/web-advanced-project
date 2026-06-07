# TITAN ARCHIVES — Survey Corps Database

Een interactieve single-page webapplicatie gebouwd met Vite, HTML, SCSS en JavaScript.
De app haalt data op van de Attack on Titan API en toont personages met details.

## Wat doet de app?

- Lijst van Attack on Titan personages geladen via de API
- Klik op een personage om details te zien (regiment, beroep, gender, alias)
- Zoekfunctie om personages te filteren op naam
- Filter knoppen: ALL, SCOUT, GARRISON, WARRIOR, FAVOURITES
- Pijlen met actieve/inactieve afbeeldingen bij klikken
- Hartje om personages als favoriet te markeren

## Nog te doen

- Favorieten opslaan via LocalStorage
- Favorieten filter laten werken
- Sorteerfunctie toevoegen
- Responsive design
- Character afbeelding tonen bij selectie
- Pijlen om door personages te navigeren

## Gebruikte API

- [Attack on Titan API](https://api.attackontitanapi.com)

## Installatie

```bash
npm install
npm run dev
```

## Technische vereisten

| Concept | Waar |
|---|---|
| DOM selectie | `document.querySelector`, `querySelectorAll` |
| DOM manipulatie | `createElement`, `innerHTML`, `textContent` |
| Events | `addEventListener` op items, knoppen, input |
| Constanten | `const allCharacters`, `const leftOriginal` |
| Template literals | `item.innerHTML = \`...\`` |
| Array iteratie | `forEach` op characters en knoppen |
| Array methodes | `filter`, `some`, `flatMap`, `map` |
| Arrow functions | overal in de code |
| Ternary operator | `character.groups.length > 0 ? ... : ...` |
| Promises | `.then()` op fetch |
| Fetch | `fetch('https://api.attackontitanapi.com/characters')` |
| JSON | `response.json()` |
| LocalStorage | nog te doen |

## Gebruikte bronnen

- [Attack on Titan API](https://api.attackontitanapi.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [W3Schools](https://www.w3schools.com)
- [Vite docs](https://vitejs.dev)
- [AI: Claude (Anthropic)](https://claude.ai/share/d53624e3-6765-4040-8135-9b5731b7ac5f)

## Screenshots

*binnenkort toegevoegd*
