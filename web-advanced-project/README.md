# TITAN ARCHIVES — Survey Corps Database

Een interactieve single-page webapplicatie gebouwd met Vite, HTML, SCSS en JavaScript. De app haalt data op van de Attack on Titan API en toont personages met details.

Dit is een interactieve single-page webapplicatie over de personages uit de anime Attack on Titan. De applicatie toont een lijst van alle personages uit de serie, opgehaald via de Attack on Titan API.

De gebruiker kan de lijst sorteren van A tot Z of van Z tot A via een dropdown. Via de filterknopen bovenaan kan je de personages filteren per categorie zoals Scout Regiment, Garrison, Military Police, Nobility en Marleyan Military. Er is ook een zoekbalk waarmee je snel een personage op naam kan opzoeken.

Als je op een personage klikt, verschijnt er rechts een foto van het personage samen met gedetailleerde informatie zoals het regiment, beroep, gender en alias. Je kan ook navigeren via de pijlen links en rechts zonder telkens op de lijst te klikken.

Elk personage heeft een hartje. Door erop te klikken voeg je het personage toe aan je favorieten. Klik je opnieuw, dan wordt het verwijderd uit de favorieten. Je favorieten zijn terug te vinden via de aparte favorietenfilter en worden opgeslagen zodat ze bewaard blijven na het herladen van de pagina.

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
| **Flexbox / CSS Grid**            | style.scss – lijn 9, 12, 21, 29, 43, 61, 66, 79-82, 139-158, 183-187, 200-212, 272-273, 296-298, 341-342, 347, 367-370, 466-467, 505-506, 510, 522, 540-542, 547-549, 573, 577, 594-597                                          | `display: flex` en `display: grid` worden gebruikt voor de lay-out en positionering van de pagina.                                  |
| **Vite**                          | `vite.config.js`                                                                                                 | Het project is opgezet met Vite als development server en build tool.                                                               |



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

