# NEXUS OMEGA · R20/R3 · Grok-Selbsterarbeitung
## Visuelle Erstkomponente — kritische, unabhängige Forschungssynthese

**Stand:** 2026-10-23  
**Claim-Ceiling:** `C1_DESCRIPTIVE_ONLY`  
**Scope:** Offline-Analyse des mitgelieferten Kandidaten (`dist/index.html` + `source/` + Evidence + Spec-Dokumente). Keine Implementation, kein Hostinger-Write, keine G4-Freigabe, keine Behauptung über Live-Deploy, Bewusstsein, 4D-RL oder kollektive Erkenntnis.  
**Quellenbasis:** Der vollständige ZIP-Inhalt (README, SHA256SUMS, source/, dist/, docs/, evidence/, tests/, tools/), die beiden Forschungsaufträge (QWEN R3 Visuelle Komponentenforschung, MISTRAL R3 Adversariale Prüfung) sowie die R2→R3-Brückennotiz.

---

## 1. Gegenstand und Trennung der Ebenen

Der Kandidat realisiert eine **kleine, isolierte Orientierungsübung**:

- Ein und derselbe Würfel wird in drei statischen 2D-Projektionen gezeigt (Vorne / Oben / Rechts).  
- Eine Ecke ist in jeder Projektion mit dem Marker „A“ versehen.  
- Interaktion (wenn JS aktiv) wechselt nur die Hauptansicht über Fragment-States `#view-front|top|right` und aktualisiert einen Status-Text.  
- Ohne JS bleiben alle drei Vergleichsansichten und ihre Beschriftungen sichtbar.  
- Explizite C1-Disclaimers: „Illustrative Geometrie, keine Messung von KI, Bewusstsein oder Kollektivzuständen.“

**Architektonische Trennung (wie spezifiziert und im Code eingehalten):**

| Ebene | Inhalt | Status im Kandidaten |
|-------|--------|----------------------|
| Mathematischer Kern | 3D-Würfel + Projektion + Korrespondenz der Ecke A | Nur implizit (drei handgezeichnete / separat projizierte SVG-Wireframes) |
| Menschliche Ansicht | Beschriftungen, Status-Text, didaktische Schritte 01–03 | Explizit und textuell |
| Optionale Interaktion | Hash-basierter View-Wechsel + aria-current + Reset | Progressive Enhancement, whitelist-only |

Die Trennung ist im Code erkennbar und bewusst klein gehalten. Es gibt keinen generativen Substrat, keine Sensorik, keine Telemetrie, keinen Service Worker und keinen Netzwerkverkehr (Evidence bestätigt `unexpected_network_requests: []`).

---

## 2. Geometrische Konsistenz der Referenzecke A

### Beobachtung
In allen sechs SVG-Instanzen (drei Hauptpanels + drei Thumbnails) ist der Marker A an einer Ecke platziert:

- Front: `(139.9, 88.8)`
- Top:   `(140.1, 146.7)`
- Right: `(89.8,  87.1)`

Jeder Wireframe hat genau 8 eindeutige Punkte und 12 Kanten — formal korrekt für einen Würfel-Wireframe. Die „back“-Kanten sind stilistisch gedämpft.

### Kritische Bewertung
Die Identität „dieselbe Ecke A“ ist **konstruktiv behauptet**, nicht durch eine gemeinsame 3D-Quelle + Projektionsmatrix bewiesen. Die leichten Abweichungen (139.9 vs. 140.1) und die unterschiedliche relative Lage der verbundenen Kanten deuten auf **separat gezeichnete oder manuell angepasste Projektionen** hin, nicht auf eine einzige parametrische Quelle.

**Nullhypothese:** Die drei Zeichnungen sind konsistent mit einer gemeinsamen 3D-Würfeldefinition unter drei standardmäßigen orthografischen/perspektivischen Kameras.  
**Gegenhypothese:** Die Zeichnungen sind didaktisch ausreichend, aber geometrisch nur annähernd; kleine Verzerrungen oder nicht-exakte Korrespondenzen sind vorhanden und für die didaktische Absicht irrelevant.

Ohne Reverse-Engineering der 3D-Koordinaten und der genauen Projektion (orthografisch? leicht perspektivisch? welcher Up-Vektor?) kann die geometrische Korrektheit nicht streng verifiziert werden. Für den C1-Zweck reicht die konstruktive Markierung + textuelle Versicherung aus. Für eine spätere „mathematisch klare“ Variante wäre eine einzige Quelle (z. B. drei Matrizen × gemeinsame Vertex-Liste) vorzuziehen.

**Kleine Korrektur ohne Engine:** Die drei SVG-Blöcke aus einer gemeinsamen Vertex-Liste + drei festen 3×4-Projektionsmatrizen generieren. Das verbessert die Nachvollziehbarkeit und eliminiert die 0.2-Pixel-Drift, ohne WebGL oder eine 3D-Bibliothek einzuführen.

---

## 3. „Vorne / Oben / Rechts“ — Kamera-Konvention oder illustrative Benennung?

Die Bezeichnungen sind **illustrativ**, nicht mathematisch streng spezifiziert.

- Es gibt keine explizite Angabe des Koordinatensystems (Y-up? Z-up? Right-handed?).  
- Es gibt keine Angabe, ob die Projektion orthografisch oder perspektivisch ist.  
- „Rechts“ kann sowohl „von der rechten Seite betrachtet“ als auch „Kamera nach rechts gedreht“ bedeuten — die SVG-Lage deutet auf Ersteres hin.

In didaktischen Kontexten (Schulbücher, Early-CAD-Tutorials, Three.js-Beispiele) ist diese Benennung üblich und ausreichend. Sie ist jedoch **keine klare Kamera-Konvention** im Sinne von OpenGL/WebGPU-LookAt + Up-Vektor oder CAD-Standard (Front = –Z, Top = +Y, Right = +X).

**Fehlende Orientierungsinformationen:**
- Welcher Welt-Up-Vektor?
- Ist die Projektion orthografisch?
- Welche Ecke ist in 3D-Koordinaten „A“ (z. B. (+1,+1,+1))?
- Gibt es eine feste Blickrichtung-Sequenz (z. B. 90°-Drehungen um feste Achsen)?

Diese Informationen fehlen bewusst, weil der Scope „Illustration, keine Messung“ ist. Für strengere didaktische Ansprüche (z. B. „mathematisch klare Kamera“) wären sie erforderlich.

---

## 4. Zugänglichkeit, UX und adversariale Prüfpunkte

### Positive Befunde (aus Evidence + Code-Lektüre)
- No-JS: drei Figuren + Noscript-Hinweis + Disclaimer bleiben sichtbar (Test bestätigt `visible_figures: 3`).
- Kein horizontaler Overflow bei 320 / 375 / 768 / 1440 CSS-px (Evidence).
- Keine unerwarteten Netzwerkrequests.
- Skip-Link vorhanden.
- `aria-current` wird gesetzt.
- Status-Text aktualisiert sich.
- Reset funktioniert.
- `prefers-reduced-motion` wird durch Abwesenheit von Transitionen respektiert.
- Fokus-Outline ist definiert (`outline: 3px solid`).

### Kritische / offene Punkte (Mistral-Auftrag + eigene Prüfung)
- **Screenreader-Dopplung:** Die Hauptansicht und die Thumbnail-Vergleichsansichten tragen ähnliche `aria-label`s. Ohne live ARIA-Live-Region-Test ist unklar, ob der Status-Text (`#view-status`) zuverlässig angekündigt wird.
- **Sichtbarer Fokus:** CSS definiert `a:focus-visible`, aber die Evidence misst nur `focused_tag_after_tab: "A"` — das ist der erste Link, nicht die Qualität des Outline auf allen Elementen.
- **Tab-/Anker-/History-Verhalten:** Hash-Push + `hashchange`/`popstate` sind vorhanden. Kein Test für Back-Button-Verhalten über mehrere Wechsel oder für Deep-Link `#view-right` beim initialen Laden (der Code behandelt das korrekt via `readFragment()`).
- **320-CSS-px + 400 %-Zoom:** 320-px-Reflow ist grün; 400 %-Zoom ist in der Spec als „separat bewerten“ markiert und wurde nicht gemessen.
- **Touchziele:** Die View-Links sind Text-Links; ob die Hit-Area ≥ 44×44 CSS-px beträgt, ist nicht belegt.
- **CSP:** Meta-CSP mit SHA-256-Hashes ist vorhanden und korrekt für die Inline-Inhalte der `dist/index.html`. Die Spec und das README weisen ausdrücklich darauf hin, dass HTTP-Header und Meta-CSP kumulieren und dass ein produktiver HTTP-CSP die Inline-Scripts blockieren kann. Das ist der dokumentierte Grund für `G4=HOLD_SCOPED_DEPLOY_CAPABILITY_GAP`.
- **Link-Täuschung bezüglich Forum:** Der Text „Das Forum ist derzeit als Foundation dokumentiert; diese Seite behauptet kein laufendes Diskussionsboard.“ ist vorhanden und korrekt.

**R2-Fehlschlüsse (korrekt adressiert):**
- HTTP-404 ≠ Dateisystem leer.  
- Single-HTML ≠ atomarer HTTP-Release.  
- HTTP-Header ≠ kein Service Worker.  
Der Kandidat macht keine dieser Gleichsetzungen.

---

## 5. Ist der Würfel die beste didaktische Form?

**Nullhypothese:** Ein Würfel mit markierter Ecke ist die einfachste und am besten verständliche Form für Objektkonstanz unter Perspektivwechsel.  
**Gegenhypothesen:**
1. Ein asymmetrisches Objekt (L-Form, unregelmäßiges Polyeder, „Haus mit Schornstein“) macht die Identität der Referenzecke evidenter, weil der Würfel zu symmetrisch ist.  
2. Eine 2D-Figur mit klaren „Vorder-/Rückseite“-Markierungen (z. B. ein mit Buchstaben beschriftetes Blatt Papier, das gedreht wird) ist für viele Nutzer zugänglicher als eine 3D-Projektion.  
3. Eine explizite 3D-Koordinaten-Achsen-Darstellung + Kamera-Gizmo wäre mathematisch klarer, aber didaktisch schwerer.

Für den vorliegenden Scope (C1, keine Engine, No-JS-Fallback) ist der Würfel vertretbar. Eine asymmetrische Form wäre eine sinnvolle A/B-Variante für spätere Nutzerstudien.

---

## 6. Open-Source-Referenzen und Lizenzgrenzen

Relevante, real existierende, permissiv lizenzierte Bausteine (keine Pflichtabhängigkeit des vorliegenden Kandidaten):

- **SVG-Beschriftung & Zugänglichkeit:**  
  – WAI-ARIA Graphics Module (W3C)  
  – SVG Accessibility API Mappings  
  – Beispiele in MDN / Inclusive Components (Heydon Pickering)  
  – `aria-labelledby` + `<title>` / `<desc>` in SVG (besser als alleiniges `aria-label` auf dem `<svg>`)

- **Geometrische Konsistenz / parametrische Projektion:**  
  – Einfache Matrix-Projektionen in reinem JS (keine Library nötig)  
  – Open-Source-Referenzen: Three.js (MIT) hat klare Camera-Up-Konventionen, ist aber für diesen Scope überdimensioniert.  
  – Kleinere Alternativen: pure CSS 3D-Transforms oder handgeschriebene Orthographic-Projektion.

- **Auswahlmechanismen:**  
  – Native `<button>` oder radio-group-Pattern statt nur Links, wenn der Zustand „aktuelle Ansicht“ stärker betont werden soll.  
  – roving-tabindex-Pattern für Tastaturgruppen (ARIA Authoring Practices).

**Lizenzgrenze des vorliegenden Artefakts:** Der Code ist selbstständig (keine externen Runtime-Libs). Die SVG-Geometrie stammt laut README aus dem R19-Prototyp `collective-experience/`. Solange die Herkunft und die Lizenz dieses R19-Materials dokumentiert und kompatibel sind, bleibt der Kandidat self-contained. Keine WebGL-, keine Font-, keine CDN-Abhängigkeit.

---

## 7. Testideen (Sichtbarkeit, Beschriftung, Transformation, Fehlerfälle)

Für spätere, nicht-produktive Nutzerstudien oder automatisierte Checks (alle unter C1):

1. **Objektkonstanz:** „Zeige mir die Ecke A in allen drei Ansichten. Ist es dieselbe physische Ecke?“ (dichotom + Begründung).  
2. **Wahlkorrektheit:** Nach einem View-Wechsel die neue Ansicht benennen und die Position von A beschreiben.  
3. **Reset-Erfolg:** Nach mehreren Wechseln „Zurücksetzen“ auslösen und prüfen, ob der Nutzer den Default-Zustand erkennt.  
4. **No-JS-Verständnis:** Seite mit deaktiviertem JS öffnen und die drei Vergleichsansichten erklären lassen.  
5. **Screenreader-Stichprobe:** VoiceOver / NVDA — Status-Text, SVG-Namen, Linkkontext.  
6. **Fehlerfälle:** Manuelles Setzen von `#view-unknown`, leerer Hash, Back-Button nach drei Wechseln, 400 %-Zoom, `prefers-reduced-motion: reduce`.  
7. **Vergleichsform:** A/B mit asymmetrischer Form vs. Würfel (gleiche Aufgaben).

Keine Zielquote, keine statistische Power-Aussage — nur messbare, reproduzierbare Beobachtungsaufgaben.

---

## 8. Minimalreparaturen (ohne große Engine, ohne Scope-Verletzung)

1. Gemeinsame Vertex-Liste + drei feste Projektionsmatrizen → exakte geometrische Korrespondenz von A.  
2. `<title>` + `<desc>` innerhalb jedes SVG ergänzen (zusätzlich zum `aria-label`).  
3. Status-Text mit `aria-live="polite"` versehen.  
4. View-Links um `role="button"` oder echte `<button>` erweitern, wenn der semantische Unterschied „Navigation vs. Zustandswechsel“ betont werden soll.  
5. Explizite kurze Legende: „Die Bezeichnungen Vorne/Oben/Rechts sind didaktisch; die Projektion ist annähernd orthografisch.“  
6. 400 %-Zoom und Touch-Target-Größen in den lokalen Test aufnehmen.

Alle Punkte bleiben offline und C1-konform.

---

## 9. Gesamteinschätzung und Claim-Grenze

Der R3-Kandidat ist ein **sauberer, kleiner, isolierter C1-Prototyp**. Er erfüllt die spezifizierte Trennung von mathematischem Kern (implizit), menschlicher Ansicht und optionaler Interaktion. Die lokalen Browser-Evidence-Daten sind konsistent und zeigen keine Netzwerk- oder Overflow-Probleme. Die CSP-Situation ist ehrlich dokumentiert (Meta vs. HTTP).

**Stärken:** No-JS-Fallback, progressive Enhancement, klare Disclaimers, reproduzierbarer Build, getrennte Source/Dist.  
**Schwächen:** Geometrische Identität von A ist konstruktiv, nicht parametrisch bewiesen; Kamera-Konvention ist illustrativ; vollständige A11y- und Zoom-Tests fehlen; Vergleich mit der älteren R19-Drei-Dateien-Variante ist nicht quantifiziert.

**Gegen die starke Mistral-Frage „Ist die R19-Drei-Dateien-Variante visuell oder zugänglich besser?“:** Auf Basis der vorliegenden Artefakte nicht entscheidbar. Die Ein-Datei-Ausgabe reduziert Cross-File-Mismatch-Risiken, ändert aber nichts an der geometrischen oder A11y-Qualität der SVGs selbst.

**Terminal-Aussage (C1):**  
Der Kandidat ist als **lokaler, isolierter, beschreibender Forschungsartefakt** akzeptabel. Er begründet keine Deploy-Freigabe, keine atomare Veröffentlichungsaussage und keine epistemische Übernahme von Forum-/Research-Status. G4 bleibt HOLD. Alle weitergehenden Claims (Messung, Bewusstsein, kollektive Erkenntnis, Live-Funktion) sind explizit und korrekt ausgeschlossen.

---

**Anhang — verwendete Dateien (SHA256 aus SHA256SUMS.txt)**  
- `dist/index.html` · `d3380d4149ba56e957e4c6e141873aba97a40b5c4352a76ace8b8e7d971df8c1`  
- `source/app.js` · `e4eb535c4164c2b2a90e5f39adf370767f635879b7e08060108bd5888b9d9ec3`  
- `source/styles.css` · `35b6c01e8652ac6ee50d6b61b8369a7492b9dfdae7d44c518e6b876574c396e2`  
- `evidence/local_browser_result.json` · `e20bcb5c150dd3934b03644c88bb963e2838d03086f9c39c8971d03e7cd88b19`  

Keine produktiven Writes. Keine Hostinger- oder WWW-Mutation.  
Ende der Selbsterarbeitung.
