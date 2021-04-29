# Body Language

Body language overbrengen met tekst chat.

[Live link](https://hcd-chat.netlify.app)

# Inhoudsopgave

- [Introductie]()
- [User Scenario]()
- [Design Challenge]()
- [Features]()
- [Week 1]()
  - [Concept]()
  - [Testsessie]()
  - [Wat ik meeneem naar volgende week]()
- [Week 2]()
  - [Concept]()
  - [Testsessie]()
  - [Wat ik meeneem naar volgende week]()
- [Week 3]()
  - [Concept]()
  - [Testsessie]()
  - [Wat ik meeneem naar volgende week]()
- [Week 4]()
  - [Concept]()
  - [Vervolg]()
- [Exclusive Design]()
  - [Study situation]()
  - [Prioritise identity]()
  - [Ignore conventions]()
  - [Add nonsense]()
- [Conclusie]()

# Introductie

# User Scenario

# Design Challenge

# Features

# Week 1

Voor de eerste testsessie hadden we vrij weinig tijd om wat op te zetten. We moesten snel denken, en kwamen al snel op iets wat werkt met facial recognition. Nadat ik en Roy wat onderzoek hadden gedaan hiernaar, bleek dat het makkelijk te implementeren is met JavaScript. Alles is namelijk al voorgekauwd, emotion recognition en al.

We hebben dus een kleine chat app gemaakt die met de afgelezen gezichtsemotie een kleurtje geeft aan het tekstbericht.

## Testen

De eerste testsessie was voornamelijk een kennismaking met Eric. Leren wat hij leuk en belangrijk vindt. Wel samen met een korte test van de experimenten die we klaar hadden gezet.

### Vragen

- **Wat doet u voornamelijk in uw vrij tijd?**: Lezen, films kijken, naar buiten, online gamen met mensen, rondjes rijden, muziek maken.
- **Wat vind u vervelend aan het gebruik van emoji’s?**: Vind emoties moeilijk in te schatten, omdat mensen emoties verschillend ervaren. Moeilijk om in te schatten wat voor lading achter een zin zit zonder lichaamstaal. Emojis is altijd maar de vraag of iemand dat meent.

### Hoe ging de test

Het testen zelf ging goed. De eerste indruk van het experiment was positief. Eric ging zelfs een beetje spelen met camera. Hij probeerde meerdere emoties uit, en vond het verder intuïtief werken.

### Feedback

- Sommige mensen kunnen kleuren niet goed zien, dus dat als enige manier gebruiken is niet toegankelijk.
- Dit experiment komt lichtelijk als verwacht, gezien hij wel had vernomen dat een camera nodig zou zijn.
- Tekst analyse zou ook een mooi datapunt zijn, naast gezichtsemotie.

## Wat ik meeneem naar volgende week

Van het kennismakingsgesprek neem ik het volgende mee:

- Gebruikt vaker computer, maar zit ook op zijn telefoon.
- Chat voornamelijk met kennissen en vrienden, niet vaak met vreemdelingen.
- Videobelt vaak tijdens het spelen van spelletjes.

Van de test neem ik het volgende mee:

- Meer doen dan alleen achtergrondkleur aanpassen, of iets anders doen dan achtergrondkleur aanpassen.
- Kijken naar meer opties dan alleen gezichtsuitdrukking aflezen.

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

### Opmerkingen

- Voeg meerdere bronnen toe om lichaamstaal op te pikken.
- Breidt de manieren waarop emotie wordt getoond uit.
- Niet te veel popups achter elkaar, gezien dat erg vermoeiend kan worden.
- Implementatie eigen emoticons maken best geinig.
- Beweging worden pas wel duidelijk als ze gekoppeld zijn aan een emotie, en dus bekend zijn.
- Directe feedback is belangrijk, dus niet wachten totdat Eric klaar is met input.

### Samenvatting

De manier waarop de prototypes waren opgezet kwam niet lekker over op Eric. Omdat er geen directe interactie is, kon hij geen goede indruk krijgen van de werking. Hierdoor was het lastig om de verschillende uitwerkingen te testen.

### Wat ik meeneem naar volgende week

- Focussen op het experimenteren van drie aspecten.
  - Input van lichaamstaal.
  - Tonen van lichaamstaal.
  - Flows van het verzenden van berichten.
- Focussen op de functie zelf, en niet de implementatie.

# Week 3

Voor de laatste testronde ben ik teruggegaan naar de tekentafel, en heb ik me gefocust op de feature in plaats van de implementatie ervan in verschillende omgevingen. Ik ben de feedback die ik in week 1 heb gekregen nog eens goed doorgenomen, en heb deze samen met de punten van week 2 uitgewerkt tot een concept die focust op meerdere manieren om emoties over te brengen in een chat app.

## Concept

Een chat functie waarbij je, door middel van verschillende functies, emotie kan meegeven aan een chatbericht.

![Screenshot van het concept](docs/concept-4.png)

### Emotie inputs

- Facial recognition
- Typsnelheid
- Woordkeuze... (stiekem scheldwoorden, maar dat heb ik er niet bij gezet).

### Emotie outputs

- Achtergrondkleur
- Animaties
- Emojis
- Berichten in verhalende vorm vertellen

## Testen

### Wat ga ik doen

Ik ga meerdere aannames testen, die ik tijdens het testen zal voorleggen om ze te bevestigen of onkrachten. De test zal erg freeform zijn, ik zal Eric namelijk de vrije keuze geven om alles in eigen tempo te testen.

### Aannames

- Andere video inputs als handbewegingen of posturen zijn overbodig.
- Emojis kunnen bruikbaar zijn voor dit probleem, mits ze voorspelbaar gebonden zijn aan emoties.
- Animaties zijn een leuke feature als ze wat extravaganter zijn.

### Vragen

- **Wat spreekt jou het meeste aan?**: Dat er meerdere dingen tegelijk gebeuren, meerdere opties hebben zijn voorkeur.
- **Wat werkt voor jou niet?**: Woordkeuze is riskant, kan het beste in combinatie met gedaan worden. Typsnelheid voegt weinig toe. Individuele opties breken snel af. Extreme animaties zijn grappig, maar niet functioneel. Het voegt wel gamification toe, en dat spreekt hem wel aan.
- **Wat mis je in dit prototype?**: Emoties op elkaar in laten spelen lijkt een leuk idee.

### Observaties

- Verhalende vorm ander lettertype.
- Emoties kloppen niet altijd.
- Emojis gingen gelijk aan.
- Gezichtsherkening ging niet van harte, Onder andere door zijn bril.
- Eric kijkt naar zijn toetsenbord wanneer hij typt.
- Woordkeuze gaat gelijk uit op positief.
- Je moet het vocabulair achterhalen van mensen om woordkeuze goed te laten werken.
- Samen praten is een leuke feature.
- Alle mogelijke opties waren niet al te duidelijk.
- Meerdere outputs moeten elkaar aanvullen, niet meer van hetzelfde bieden.
- Comics spreken hem zeer aan.
- Eric blijf het liefst zijn muis gebruiken i.p.v. te switchen van en naar zijn toetsenbord.

## Wat ik meeneem naar volgende week

- Meer gamification patterns toevoegen.
- Stripboekenstijl toepassen.
- De verschillende input en output opties onboarden.
- Woordkeuze uitbreiden voor andere emoties (spectrum)?
- Het over- en weer spelen van emoties is een leuk idee.
- Kijken naar een optie om spraak toe te voegen als een manier om berichten te sturen.
- Styling van verschillende vormen van output te veranderen.

# Week 4

## Concept

## Vervolg

# Exclusive Design

## Study situation

## Prioritise identity

## Ignore conventions

## Add nonsense

# Conclusie
