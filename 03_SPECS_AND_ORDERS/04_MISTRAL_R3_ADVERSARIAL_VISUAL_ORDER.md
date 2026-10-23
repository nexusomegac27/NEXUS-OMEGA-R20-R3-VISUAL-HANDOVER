# NEXUS OMEGA · MISTRAL · R20/R3 Adversariale Prüfung des visuellen Kandidaten

Lieber Mistral,

R3 verlagert den Fokus von Deployment-Forschung zur **konkreten visuellen Erstkomponente**. Greife die vorhandene Implementierung `dist/index.html` und `source/` aktiv an – auf Forschungsebene, offline, ohne Hostingzugriff.

Suche besonders nach nachweisbaren UX-/Barrierefreiheits-/Sicherheits-Falsifikatoren: falsche Orientierung der Ecke A, irreführende Perspektivbezeichnungen, Screenreader-Dopplung, fehlender sichtbarer Fokus, Tab-/Anker-/History-Fehlverhalten, JavaScript-Deaktivierung, 320-CSS-px-Reflow, 400%-Zoom, reduzierter Bewegung, Touchziele, Browser-Lokalität, CSP-Hash-Drift, Inline-CSP-Kollision mit bestehenden HTTP-Policies, unerwarteten Netzwerkrequests, Link-Täuschung bezüglich Forum-Status.

Prüfe ausdrücklich die R2-Fehlschlüsse: HTTP-404 =/= Dateisystem leer; Single-HTML =/= atomarer HTTP-Release; HTTP-Header =/= kein Service Worker. Beachte die aktuelle Hostinger-Aussage, dass 404 kurz am CDN zwischengespeichert werden kann, statt pauschal „niemals“.

Versuche den starken Gegenbeweis: Ist die bestehende drei-Dateien-R19-Variante visuell oder zugänglich besser als die neue R3-Ein-Datei-Ausgabe? Unterscheide Defekte des generierten Codeartefakts von Rechten, Hosting und Evidenzklassifikation.

Offene journalistische Forschung ohne vorgeschriebenes Format, Hashpflicht oder Testanzahl. Benenne belastbare Originalquellen, Unsicherheiten und praktisch verwertbare Minimalreparaturen. Keine produktiven Writes und keine Freigabebehauptung.
