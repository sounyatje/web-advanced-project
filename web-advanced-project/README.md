# TITAN ARCHIVES — Survey Corps Database

| Vereiste                          | Waar in de code                                                                                                  | Uitleg                                                                                                                              |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Elementen selecteren**          | `main.js` – lijn **10, 11, 36, 46-49, 62, 77-82, 88-89, 147, 173, 192, 195-196, 204-205, 212-213, 216, 244-245** | DOM-elementen worden geselecteerd met `querySelector()`, `querySelectorAll()` en `getElementById()`.                                |
| **Elementen manipuleren**         | `main.js` – lijn **18, 28-39, 63-65, 77-83, 98, 106-113, 198, 208, 213, 223-227, 248-249**                       | DOM-elementen worden aangepast met `textContent`, `innerHTML`, `classList`, `src` en `style.display`.                               |
| **Events aan elementen koppelen** | `main.js` – lijn **28-39, 71-72, 115, 147, 173-190, 192-201, 207, 216, 253, 261**                                | Events worden gekoppeld met `addEventListener()` voor `click`, `mousedown`, `mouseup`, `mouseleave`, `change` en `input`.           |
| **Constanten**                    | `main.js` – lijn **12-13, 130, 134, 203-205, 212, 244-245**                                                      | Constanten worden gedeclareerd met `const` voor vaste waarden en DOM-elementen.                                                     |
| **Template literals**             | `main.js` – lijn **77, 106-113, 131**                                                                            | Template literals met backticks en `${...}` worden gebruikt om dynamische tekst en HTML op te bouwen.                               |
| **Iteratie over arrays**          | `main.js` – lijn **16, 63-65, 87-120, 129, 173-190, 195-200**                                                    | Arrays worden doorlopen met `forEach()` en een `for`-lus.                                                                           |
| **Array-methodes**                | `main.js` – lijn **82, 104, 136, 163-169, 221-222, 229**                                                         | Arraymethodes zoals `filter()`, `some()`, `includes()` en `push()` worden gebruikt om gegevens te verwerken.                        |
| **Arrow functions**               | `main.js` – lijn **15-40, 63, 71-72, 96, 115, 147, 163-169, 173-190, 192-201, 216, 253, 261**                    | Arrow functions (`=>`) worden gebruikt als callbacks en voor compacte functies.                                                     |
| **Ternary operator**              | `main.js` – lijn **55-56, 82-84, 100, 104, 111, 152-154, 184-186, 198, 248-249**                                 | De ternary operator (`voorwaarde ? waar : onwaar`) wordt gebruikt voor korte beslissingen.                                          |
| **Callback functions**            | `main.js` – lijn **15, 16, 28-39, 63, 71-72, 96, 115, 147, 163-169, 173-190, 192-201, 216, 253, 261**            | Callbackfuncties worden gebruikt bij `addEventListener()`, `forEach()`, `filter()`, `some()`, `sort()` en `IntersectionObserver()`. |
| **Promises**                      | `main.js` – lijn **130-134**                                                                                     | `fetch()` retourneert een Promise die wordt verwerkt met `await`.                                                                   |
| **Async & Await**                 | `main.js` – lijn **126-142**                                                                                     | `async function loadCharacters()` gebruikt `await` om asynchroon gegevens op te halen.                                              |
| **Observer API**                  | `main.js` – lijn **15-26, 91, 118**                                                                              | `IntersectionObserver` detecteert wanneer elementen zichtbaar worden en voegt de klasse `visible` toe.                              |
| **Fetch**                         | `main.js` – lijn **130-132**                                                                                     | `fetch()` haalt personages op uit de Attack on Titan API.                                                                           |
| **JSON manipuleren**              | `main.js` – lijn **81, 134, 136, 161, 212, 219, 231**                                                            | `response.json()`, `JSON.parse()` en `JSON.stringify()` worden gebruikt om JSON-gegevens te verwerken.                              |
| **Formulier validatie**           | `main.js` – lijn **192-201**                                                                                     | De zoekbalk valideert de invoer via het `input`-event en toont of verbergt personages op basis van de ingevoerde naam.              |
| **LocalStorage**                  | `main.js` – lijn **81, 161, 212, 219, 221, 231**                                                                 | `localStorage.getItem()` en `localStorage.setItem()` slaan favorieten lokaal op en halen ze terug op.                               |
| **Flexbox / CSS Grid**            | style.scss – lijn 9, 12, 21, 29, 43, 61, 66, 79-82, 139-158, 183-187, 200-212, 272-273, 296-298, 341-342, 347, 367-370, 466-467, 505-506, 510, 522, 540-542, 547-549, 573, 577, 594-597                                        | `display: flex` en `display: grid` worden gebruikt voor de lay-out en positionering van de pagina.                                  |
| **Vite**                          | `vite.config.js`                                                                                                 | Het project is opgezet met Vite als development server en build tool.                                                               |


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

