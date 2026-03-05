# Lovci Lovosice – Web Dev Context

## Projekt
Nový web pro házenkářský klub Lovci Lovosice.

Technologie:
- Next.js
- Vercel deploy
- GitHub repo: Lovcilovosice/lovci

Projekt běží na:
lovci-pi.vercel.app

---

## Design

Barvy klubu:
- primary: #1b1e32
- accent: #bad2ed

Pozadí:
- maskáčový pattern
- soubor: /public/images/background.jpg

---

## Struktura projektu

app/
page.tsx

public/
images/
background.jpg

icons/
tymy.png
klub.png
zpravy.png
vstupenky.png
turnaje.png
partneri.png

---

## Header

Header má dvě řady:

1) horní
- logo
- LOVCI LOVOSICE
- social icons

2) menu
- TÝMY
- KLUB
- ZPRÁVY
- VSTUPENKY
- ARCHIV
- TURNAJE
- PARTNEŘI
- PROJEKTY

Menu je vycentrované.

---

## Homepage sekce

1) HERO VIDEO
velké video jako background (podobné webu HC Zubří)

2) články
grid článků

3) další zápas
match bar

4) tabulka extraligy
data z API svazu házené

5) statistiky hráčů

6) Lovci TV

---

## API

Data z:
IS ČSH (handball.cz)

Autorizace:
Bearer JWT token

---

## Poznámky

Web bude později nasazen na:

hazenalovosice.cz  
lovcilovosice.cz

