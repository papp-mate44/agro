# Gazdálkodási napló – telepítés telefonra (iPhone és Android)

Az alkalmazás telepíthető weboldal (PWA). Egy HTTPS-címen kell elérhetővé tenni, utána a telefonon ikonként a főképernyőre kerül.

## 1. Feltöltés GitHub Pages-re (ingyenes)
1. github.com → **New repository** → név: `gazdanaplo` → Public → Create.
2. **uploading an existing file** → húzd be ennek a mappának a tartalmát (index.html, sw.js, manifest.webmanifest és az icons mappa) → **Commit changes**.
3. **Settings → Pages → Branch: main, / (root) → Save.**
4. 1–2 perc múlva a címed: `https://FELHASZNALONEV.github.io/gazdanaplo/`

## 2. Telepítés
- **iPhone / iPad (Safari):** nyisd meg a címet → Megosztás gomb → **Főképernyőhöz adás**.
- **Android (Chrome):** nyisd meg a címet → menü (három pont) → **Alkalmazás telepítése**, vagy az Adatok → Több oldalon a Telepítés gomb.

## Tudnivalók
- Az adatok az adott telefon böngészőjében tárolódnak, a telefonok között nem szinkronizálódnak (ez jön a bejelentkezős, felhős verzióval). Rendszeresen használd az Adatok oldalon a mentést.
- Az első megnyitáshoz internet kell (térkép, betűtípus). Utána az alkalmazás offline is elindul, és a már megtekintett térképrészletek is megmaradnak.
- Frissítés: cseréld ki a fájlokat a GitHubon, a telefon a következő megnyitáskor tölti le az újat.
