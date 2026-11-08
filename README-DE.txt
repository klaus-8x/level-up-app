# LEVEL UP – PWA v2.0

## Enthalten
- Sechs Themenwelten und 26 ausführlich erklärte Hacks
- Antippbare Detailansichten mit Hintergrund, Schritten, Beispiel und Mini-Challenge
- Tages-Check-in ohne Punkte oder Bewertung
- Soforthilfe-Bereich mit Atem-Moment und Hinweisen zum Hilfeholen
- XP/Level, Favoriten und 14-Tage-Experiment ohne Streak-Strafe
- Lokale Speicherung über IndexedDB (Fallback: LocalStorage)
- JSON-Backup exportieren/importieren und lokale Daten löschen
- Web App Manifest und Service Worker für Installation/Offline-Nutzung

## Auf GitHub Pages aktualisieren
1. ZIP entpacken.
2. Im Repository `level-up-app` alle enthaltenen Dateien und den Ordner `icons` hochladen.
3. Vorhandene Dateien überschreiben, neue Dateien hinzufügen und Änderungen committen.
4. GitHub Pages muss weiterhin `main` und `/(root)` verwenden.
5. Danach `https://klaus-8x.github.io/level-up-app/` öffnen.

## Android-Installation
1. Link in Chrome öffnen.
2. Menü ⋮ → „App installieren“ oder „Zum Startbildschirm hinzufügen“.
3. Nach dem ersten Online-Aufruf die App einmal öffnen, damit der Service Worker die Dateien zwischenspeichert.
4. Flugmodus-Test: App erneut starten und prüfen, ob die Oberfläche lädt.

## Datenschutz und Grenzen
- Kein Konto, kein Analytics, keine Werbetracker und kein App-Backend.
- Persönliche App-Daten bleiben im Browser-Speicher dieses Geräts.
- Browserdaten können durch Nutzer:innen oder das Betriebssystem gelöscht werden. Regelmäßig ein Backup exportieren.
- Der Service Worker cached die App-Oberfläche; Updates werden beim nächsten Online-Besuch geladen.
- Die App ist ein Selbsthilfe-Werkzeug und ersetzt keine persönliche, schulische, medizinische oder psychotherapeutische Unterstützung.
- Für Jugendliche: Bei anhaltender oder starker Belastung eine vertraute erwachsene Person ansprechen. Bei unmittelbarer Gefahr den örtlichen Notruf wählen.

## Dateien
- `index.html`: App-Oberfläche und Funktionen
- `manifest.webmanifest`: Installationsmetadaten
- `sw.js`: Offline-Caching
- `icons/`: App-Symbole
