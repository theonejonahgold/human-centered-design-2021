# Body Language

Body language overbrengen met tekst chat.

[Live link](https://hcd-chat.netlify.app)

# Week 2

Voor week twee ben ik aan de slag gegaan met het uitwerken van het idee van de chat app in meerdere vormen. Hierbij heb ik twee concepten bedacht die ik heb gevormd tot statische prototypes.

De manier waarop de lichaamstaal wordt ingeladen is via de webcam die de gezichtsuitdrukking opmeet. De emotie achter het bericht wordt daarmee meegestuurd in de tekst chat in een verhalende vorm, bijvoorbeeld "'Hoi!', zei Eric blij".

## Concepten

### Concept 1

Concept 1 is een losstaande chat app waarbij de lichaamstaal functie is ingebouwd.

[Prototype](https://www.sketch.com/s/5bcec281-b984-4030-9f80-94a91d68a552/a/9PWyPkQ/play)

### Concept 2

Concept 2 is een plug-in voor meerdere chat-apps die de berichten aanvult met de functie.

[Prototype](https://www.sketch.com/s/5bcec281-b984-4030-9f80-94a91d68a552/a/25e05Oy/play)

## Tweede testsessie

### User Scenarios

#### Concept 1

Je hebt net de nieuwe chat-app Emotion chat gedownloadt. Het unieke selling point van deze chat app is dat je de emotie achter het bericht kan meesturen. Een paar van je vrienden hebben de app ook al gedownload, dus je kan gelijk beginnen met gebruiken. Je hebt net een berichtje gekregen van een oude bekende vriendin Fatima, en wilt daar graag op reageren.

#### Concept 2

Je hebt net een nieuw programma gedownloadt genaamd Emotion chat. Dit programma haakt in meerdere chat apps om de berichten die je verstuurt aan te vullen met de emotie die achter het bericht zit. Je bent erg opgewonden om het uit te proberen in een van je favoriete vriendengroepen, en stuurt ze een berichtje.

### Vragen

- **Wat vind je ervan dat de feature geïntegreerd is in een unieke app?:** Raar, omdat de afbeelding niet heel duidelijk is in het prototype, of het een webcam is of niet.
- **Wat mis je in deze implementatie?**: Feedback is erg minimaal en prima, maar kleur, lettertype, animatie samen kan veel duidelijker zijn voor de gebruiker en eventueel ook intuïtiever werken. Dat samen met andere manieren van input.
- **Hoe zie je de situatie dat je vrienden overstappen naar deze app voor je?:** Zeer interessant. Een integratie in andere apps lijkt hem de beste optie.
- **Wat vind je van de plug-in implementatie tegenover de losstaande chat app?:** Eigenlijk al beantwoord, maar een integratie met andere chat apps lijkt veel fijner
- **Hoe makkelijk is het navigeren met een muis naar pop-ups?:** Dat is geen probleem.

### Opmerkingen van tijdens het gesprek

- Voeg meerdere bronnen toe om lichaamstaal op te pikken.
- Breidt de manieren waarop emotie wordt getoond uit.
- Niet te veel popups achter elkaar, gezien dat erg vermoeiend kan worden.
- Implementatie eigen emoticons maken best geinig.
- Beweging worden pas wel duidelijk als ze gekoppeld zijn aan een emotie, en dus bekend zijn.
- Directe feedback is belangrijk, dus niet wachten totdat Eric klaar is met input.

### Samenvatting

De manier waarop de prototypes waren opgezet kwam niet lekker over op Eric. Omdat er geen directe interactie is, kon hij geen goede indruk krijgen van de werking van de interactie. Hierdoor was het lastig om de verschillende iteraties te testen.

### Wat ik meeneem naar de volgende iteratie

- Focussen op het experimenteren van drie aspecten.
  - Input van lichaamstaal.
  - Tonen van lichaamstaal.
  - Flows van het verzenden van berichten.
- De functies conceptualiseren als een plug-in voor andere chat apps.

# Week 1

Voor de eerste testsessie hadden we vrij weinig tijd om wat op te zetten. We moesten snel denken, en kwamen al snel op iets wat werkt met facial recognition. Nadat ik en Roy wat onderzoek hadden gedaan hiernaar, bleek dat het makkelijk te implementeren is met JavaScript. Alles is namelijk al voorgekauwd, emotion recognition en al.

We hebben dus een kleine chat app gemaakt die met de afgelezen gezichtsemotie een kleurtje geeft aan het tekstbericht.

## Eerste testsessie

De eerste testsessie was voornamelijk een kennismaking met Eric. Leren wat hij leuk en belangrijk vindt. Wel samen met een korte test van de experimenten die we klaar hadden gezet.

### Vragen

- **Wat doet u voornamelijk in uw vrij tijd?**: Lezen, films kijken, naar buiten, online gamen met mensen, rondjes rijden, muziek maken.
- **Wat vind u vervelend aan het gebruik van emoji’s?**: Vind emoties moeilijk in te schatten, omdat mensen emoties verschillend ervaren. Moeilijk om in te schatten wat voor lading achter een zin zit zonder lichaamstaal. Emojis is altijd maar de vraag of iemand dat meent.

### Hoe ging de test

Het testen zelf ging goed. De eerste indruk van het experiment was positief. Eric ging zelfs een beetje spelen met camera. Hij probeerde meerdere emoties uit, en vond het verder intuïtief werken.

### Wat was de feedback?

- Sommige mensen kunnen kleuren niet goed zien, dus dat als enige manier gebruiken is niet toegankelijk.
- Dit experiment komt lichtelijk als verwacht, gezien hij wel had vernomen dat een camera nodig zou zijn.
- Tekst analyse zou ook een mooi datapunt zijn, naast gezichtsemotie.

### Wat neem ik mee?

Van het kennismakingsgesprek neem ik het volgende mee:

- Gebruikt vaker computer, maar zit ook op zijn telefoon.
- Chat voornamelijk met kennissen en vrienden, niet vaak met vreemdelingen.
- Videobelt vaak tijdens het spelen van spelletjes.

Van de test neem ik het volgende mee:

- Meer doen dan alleen achtergrondkleur aanpassen, of iets anders doen dan achtergrondkleur aanpassen.
- Kijken naar meer opties dan alleen gezichtsuitdrukking aflezen.
