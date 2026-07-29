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

| Vereiste                          | Waar in de code                                                                                                  | Uitleg                                                                                                                                                                                                                                                          |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Elementen selecteren**          | `main.js` - lijn 11, 12, 37, 47-50, 63, 78-80, 83, 89, 90, 146, 171, 186, 197, 200, 207, 210, 187, 184, 226, 227 | DOM-elementen worden geselecteerd met `querySelector()`, `querySelectorAll()` en `getElementById()`.                                                                                                                                                            |
| **Elementen manipuleren**         | `main.js` - lijn 47-50, 79-80, 187, 197, 78, 107, 19, 64, 65, 99                                                 | DOM-elementen worden aangepast met onder andere `textContent`, `innerHTML`, `classList`, `src` en `style.display`.                                                                                                                                              |
| **Events aan elementen koppelen** | `main.js` - lijn 29-40, 72-73, 116, 146, 172, 184, 200, 235, 245                                                 | Events worden aan elementen gekoppeld met `addEventListener()`, bijvoorbeeld voor `click`, `mousedown`, `mouseup`, `mouseleave`, `change` en `input`.                                                                                                           |
| **Constanten**                    | `main.js` - lijn 13, 14, 16, 130, 134, 196, 226, 227                                                             | Er worden constanten gedeclareerd met `const`, bijvoorbeeld voor DOM-elementen en andere waarden die niet opnieuw toegewezen worden.                                                                                                                            |
| **Template literals**             | `main.js` - lijn 78, 107-114, 131                                                                                | Template literals worden gebruikt met backticks en `${...}` om dynamische waarden in strings te plaatsen.                                                                                                                                                       |
| **Iteratie over arrays**          | `main.js` - lijn 64, 97, 129, 186                                                                                | Arrays worden doorlopen met een `for`-loop en `forEach()`.                                                                                                                                                                                                      |
| **Array-methodes**                | `main.js` - lijn 161-166, 151, 83, 166, 189, 205, 136, 209                                                       | Er worden verschillende array-methodes gebruikt, zoals `filter()`, `some()`, `sort()`, `includes()` en `push()`.                                                                                                                                                |
| **Arrow functions**               | `main.js` - lijn 17, 29-40, 72-73, 97, 116, 161-166, 171, 172, 184, 186, 200, 235, 243                           | Arrow functions worden gebruikt met de syntax `() => {}` of bijvoorbeeld `item => ...`.                                                                                                                                                                         |
| **Ternary operator**              | `main.js` - lijn 57, 84-85, 112, 152-153, 177-178, 189, 231-232                                                  | De ternary operator gebruikt de vorm `condition ? A : B` om afhankelijk van een conditie een waarde te bepalen.                                                                                                                                                 |
| **Callback functions**            | `main.js` - lijn 16, 29-40, 63, 72-73, 97, 116, 146, 151, 161-166, 171                                           | Functies worden als argument meegegeven aan andere functies, bijvoorbeeld bij `addEventListener()`, `forEach()`, `filter()`, `some()`, `sort()` en `IntersectionObserver()`. Er wordt ook een callback binnen een callback gebruikt bij `filter()` en `some()`. |
| **Promises**                      | `main.js` - lijn 130-131                                                                                         | `fetch()` retourneert een Promise. Met `await` wordt gewacht tot deze Promise is afgehandeld.                                                                                                                                                                   |
| **Async & Await**                 | `main.js` - lijn 126-141                                                                                         | De functie `loadCharacters()` is een `async` functie en gebruikt `await` om te wachten op de resultaten van `fetch()` en `response.json()`.                                                                                                                     |
| **Observer API**                  | `main.js` - lijn 16-27                                                                                           | `IntersectionObserver` detecteert wanneer elementen zichtbaar worden in de viewport. Vervolgens wordt de class `visible` toegevoegd.                                                                                                                            |
| **Fetch**                         | `main.js` - lijn 130-131                                                                                         | Met `fetch()` worden charactergegevens opgehaald uit de Attack on Titan API.                                                                                                                                                                                    |
| **JSON manipuleren**              | `main.js` - lijn 134, 136, 213                                                                                   | JSON wordt verwerkt met `response.json()`. De resultaten worden uit `data.results` gehaald en favorites worden met `JSON.stringify()` opgeslagen.                                                                                                               |
| **Formulier validatie**           | —                                                                                                                | Niet van toepassing. Het project bevat geen formulier waarvoor gegevens gevalideerd moeten worden.                                                                                                                                                              |
| **LocalStorage**                  | `main.js` - lijn 54, 90, 196, 205-213                                                                            | `localStorage` wordt gebruikt om favoriete characters op te slaan, op te halen en te verwijderen. Hiervoor worden `JSON.parse()` en `JSON.stringify()` gebruikt.                                                                                                |
| **Flexbox / CSS Grid**            | `style.scss` - lijn 9, 12, 21, 25, 43, 61, 62, 66, 67, 79, 80, 140, 156, 180, 183, 192, 201                      | Flexbox en CSS Grid worden gebruikt voor de layout, positionering en structuur van de verschillende onderdelen van de applicatie.                                                                                                                               |
| **Vite**                          | `vite.config.js`                                                                                                 | Vite wordt gebruikt als development server en build tool voor het project.                                                                                                                                                                                      |


## Screenshots

*(nog toe te voegen)*

## Bronnen

- [Attack on Titan API](https://api.attackontitanapi.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [W3Schools](https://www.w3schools.com)
- [Vite docs](https://vitejs.dev)
- [AI: Claude (Anthropic)](https://claude.ai/share/d53624e3-6765-4040-8135-9b5731b7ac5f)

