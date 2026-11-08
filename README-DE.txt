LEVEL UP – Life Toolkit (PWA)
================================

INHALT
- index.html, styles.css, app.js: App-Oberfläche und Funktionen
- manifest.webmanifest: Installationsinformationen
- sw.js: Offline-Caching (Service Worker)
- icon.svg, icon-192.png, icon-512.png: App-Symbole

WAS DIESE VERSION KANN
- 6 Themenwelten mit 26 Lifehacks
- XP, Level und erledigte Hacks
- Favoriten
- 14-Tage-Challenge
- Feel-Good-Bereich mit warmem Design und SOS-Ansicht
- Stimmungs-Check-in
- Lokaler Datenexport und -import
- Teilen-Funktion für den veröffentlichten Link
- Offline-Nutzung nach dem ersten erfolgreichen Laden

DATENSCHUTZ
Es gibt in dieser Version kein Benutzerkonto, kein Backend und keine Übertragung
der persönlichen App-Daten. Fortschritt und Einträge werden im localStorage
des jeweiligen Browsers auf dem jeweiligen Gerät gespeichert. Wer die App auf
einem anderen Gerät öffnet, beginnt dort separat. Beim Löschen der Browserdaten
können App-Daten verloren gehen; deshalb gibt es den Backup-Export.

WICHTIG ZUR WHATSAPP-WEITERGABE
Die ZIP-Datei selbst ist ein Projektpaket und nicht der ideale Weg, um eine
installierbare PWA zu verteilen. Für WhatsApp wird ein öffentlicher HTTPS-Link
benötigt. Nach dem Hosting sendest du diesen Link per WhatsApp. Jede Person
öffnet ihn in Chrome und wählt – sofern angeboten – „Installieren“ oder
„Zum Startbildschirm hinzufügen“.

EINFACHE VERÖFFENTLICHUNG MIT GITHUB PAGES
1. Erstelle bzw. melde dich bei GitHub an.
2. Lege ein neues öffentliches Repository an, z.B. "level-up-app".
3. Entpacke dieses ZIP und lade ALLE enthaltenen Dateien direkt in das
   Hauptverzeichnis des Repositorys hoch (index.html muss dort liegen).
4. Öffne im Repository Settings > Pages.
5. Wähle "Deploy from a branch", Branch "main", Ordner "/ (root)" und speichere.
6. Warte, bis GitHub Pages die Website veröffentlicht hat.
7. Der HTTPS-Link sieht ungefähr so aus:
   https://DEIN-BENUTZER.github.io/level-up-app/
   Ersetze den Beispiel-Link durch den echten Link aus GitHub Pages.
8. Öffne ihn auf Android in Chrome, teste die App und teile ihn per WhatsApp.

ALTERNATIVE
Ein statischer Hosting-Dienst wie Netlify kann dieselben Dateien ebenfalls
über HTTPS bereitstellen. Das Projekt braucht keinen Servercode.

ANDROID-TEST
- Link in Chrome öffnen.
- App einmal vollständig laden lassen.
- Browser-Menü > „Installieren“ oder „Zum Startbildschirm hinzufügen“.
- App starten und anschließend Flugmodus aktivieren: Kernfunktionen sollten
  nach erfolgreichem ersten Laden verfügbar bleiben.

HINWEISE
- Dies ist ein erster funktionsfähiger Prototyp, kein professionell geprüfter
  Gesundheits- oder Krisendienst.
- Die Stimmungseinträge sind eine einfache private Reflexionshilfe.
- Wenn sich jemand akut gefährdet fühlt oder nicht sicher ist, sollte sofort
  eine vertraute erwachsene Person bzw. der örtliche Notruf kontaktiert werden.
- Für eine öffentliche Verteilung sollten App-Inhalte, Barrierefreiheit,
  Datenschutztext und Installationsverhalten auf mehreren Android-Geräten
  nochmals getestet werden.
