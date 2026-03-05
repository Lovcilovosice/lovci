# Lovci Lovosice – UI Plan (Homepage)

Barvy:
- primary: #1b1e32
- accent: #bad2ed

Pozadí:
- /public/images/background.jpg (maskáč)

Cíl:
Homepage ve stylu grafického návrhu (dark + maskáč), podobně jako hczubri.cz.

---

## 0) Globální layout
- max šířka obsahu: 1200px (desktop)
- okraje: auto + padding 16–24px
- typografie: výrazné nadpisy, světlé texty
- karty: tmavé panely s jemným borderem (white/10)

---

## 1) Header (2 řádky)
### 1A) Horní lišta
Vlevo:
- logo klubu (pokud bude k dispozici: SVG/PNG)
- text: LOVCI LOVOSICE

Vpravo:
- ikonky sociálních sítí (FB, IG, YT)
- vyhledávání (ikonka)
- případně odkaz "KIS" (později)

Pozadí:
- tmavý gradient / průhledná vrstva nad pozadím
- border-bottom (white/10)

### 1B) Menu (vycentrované)
Položky:
- TÝMY
- KLUB
- ZPRÁVY
- VSTUPENKY
- ARCHIV
- TURNAJE
- PARTNEŘI
- PROJEKTY

U každé položky:
- malá ikonka „panáček“ (monochrome white)
- soubory v /public/icons:
  - tymy.png
  - klub.png
  - zpravy.png
  - vstupenky.png
  - turnaje.png
  - partneri.png
  - (archiv.png, projekty.png doplnit později)

Hover:
- text + ikonka zesvětlí do #bad2ed

---

## 2) Hero sekce – “Velké video”
- fullscreen-ish blok pod headerem (cca 420–520px)
- background video (autoplay, muted, loop)
- fallback: tmavý gradient, když video není
- přes video jemný overlay (dark) pro čitelnost

Obsah hero:
- zatím pouze placeholder
- později: headline / CTA (např. Vstupenky)

---

## 3) Sekce článků (nad foldem)
Layout:
- vlevo 1 velká karta (hlavní článek)
- vpravo 3 malé karty (další články)

Karta článku:
- obrázek/thumbnail (placeholder když není)
- titulek
- datum

Později napojení na CMS.

---

## 4) Match Bar – příští zápas
Horizontální pruh:
- domácí tým (logo + název)
- datum + čas (uprostřed)
- hosté (logo + název)

Fallback log:
- pokud není logo, použít neutrální badge.

---

## 5) Extraliga tabulka + Statistika hráčů
Layout 2 sloupce:
- vlevo: tabulka soutěže (top 12)
- vpravo: top statistiky hráčů (3 hráči)

Tabulka:
- pořadí
- tým
- zápasy
- body

Statistika hráčů:
- foto (placeholder)
- jméno
- počet zápasů
- počet gólů

---

## 6) Lovci TV
- vlevo: logo/label Lovci TV
- vpravo: embed YouTube video (nebo placeholder)
- titulek videa

---

## 7) CTA bloky
2 velká tlačítka vedle sebe:
- “Stáhni si naši aplikaci!”
- “Lovecký fanshop!”

---

## 8) Footer
- partneři loga
- odkaz na zásady soukromí
- copyright

---

## Poznámky
- Vše držet jednoduché, rychlé, bez těžkých knihoven.
- První verze = statické placeholdery, pak napojení na API svazu + CMS.
