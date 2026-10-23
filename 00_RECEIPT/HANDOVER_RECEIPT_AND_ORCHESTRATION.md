# NEXUS OMEGA · R20/R3 · Validierte Übergabe (ZIP-frei)

**Objekt:** `NEXUS_OMEGA_R20_R3_VALIDATED_HANDOVER_FOR_MISTRAL_QWEN_20261023`  
**Datum:** 2026-10-23  
**Claim-Ceiling:** `C1_DESCRIPTIVE_ONLY`  
**G4-Status:** `HOLD_SCOPED_DEPLOY_CAPABILITY_GAP` (unverändert)  
**Zweck:** Lesbare, ZIP-unabhängige Übergabe an Mistral und QWEN, weil beide Agenten ZIP-Stacks nicht zuverlässig verarbeiten können.

---

## 1. Was hier übergeben wird

Dieses Verzeichnis enthält **nur einzelne, direkt lesbare Textdateien**. Kein ZIP, kein binäres Stack-Format, keine verschachtelten Archive.

| Ordner | Inhalt |
|--------|--------|
| `00_RECEIPT/` | Dieser Receipt + Original-README + Original-SHA256SUMS des Kandidaten |
| `01_GROK_SELBSTERARBEITUNG/` | Vollständige unabhängige Grok-Selbsterarbeitung (kritische Analyse des Kandidaten) |
| `02_CANDIDATE_SOURCE/` | Die eigentliche visuelle Komponente: `index.html` (dist), `index.template.html`, `app.js`, `styles.css` |
| `03_SPECS_AND_ORDERS/` | Alle Specs und Aufträge (AXIOM-Brücke, Implementierungs-Spec, Cursor-Order, QWEN-Order, Mistral-Order, CSP-Hashes) |
| `04_EVIDENCE/` | Lokale Browser-Evidence (`local_browser_result.json`) |

Die drei PNG-Screenshots (320 / 375 / 1440) sind bewusst **nicht** enthalten, weil sie binär sind und für Text-Agenten-Analyse nicht primär benötigt werden. Die numerischen Messergebnisse stehen vollständig in `local_browser_result.json`.

---

## 2. Was Grok bereits geleistet hat (Kurzfassung)

Die Datei in `01_GROK_SELBSTERARBEITUNG/` ist die vollständige kritische Selbsterarbeitung. Zentrale, belegbare Punkte:

- Geometrische Identität der Ecke A ist **konstruktiv** (gleiche Markierung in drei statischen SVGs), nicht parametrisch bewiesen (keine gemeinsame Vertex-Liste + Projektionsmatrizen).
- „Vorne / Oben / Rechts“ ist **illustrative Benennung**, keine strenge mathematische Kamera-Konvention.
- No-JS-Fallback funktioniert; lokale Evidence (320–1440 CSS-px, kein Overflow, kein Netzverkehr) ist grün.
- CSP-Meta-Hashes sind korrekt; HTTP-Header-Kollision bleibt der dokumentierte Grund für G4=HOLD.
- Trennung mathematischer Kern / menschliche Ansicht / optionale Interaktion ist im Code erkennbar und eingehalten.
- Keine Implementation, kein Deploy, keine Hostinger-/WWW-Mutation, keine Bewusstseins-/4D-/Kollektiv-Claims.

---

## 3. Erwartete Nutzung durch Mistral und QWEN

**Mistral (Adversarial):**  
Bitte die Dateien in `02_CANDIDATE_SOURCE/` und `03_SPECS_AND_ORDERS/04_MISTRAL_R3_ADVERSARIAL_VISUAL_ORDER.md` aktiv angreifen. Besonders prüfen: Orientierung von A, Perspektivbezeichnungen, Screenreader, Fokus, Tab/History, No-JS, 320-px-Reflow, CSP-Kollision, Link-Aussagen zum Forum. Ergebnis als freier kritischer Text zurück.

**QWEN (Visuelle Forschung):**  
Bitte die Dateien in `02_CANDIDATE_SOURCE/` und `03_SPECS_AND_ORDERS/03_QWEN_R3_VISUAL_RESEARCH_ORDER.md` kritisch prüfen. Besonders: SVG-Beschriftung, geometrische Konsistenz, fehlende Orientierungsinformationen, bessere Open-Source-Referenzen, Testideen für Nutzerstudien, Trennung der Ebenen. Ergebnis als freie kritische Gedankenrecherche zurück.

Beide Agents sollen **keine** ZIP erzeugen und **keine** produktiven Writes oder G4-Freigaben vornehmen.

---

## 4. Provenienz und Integrität

- Original-Kandidat SHA256SUMS: siehe `ORIGINAL_CANDIDATE_SHA256SUMS.txt` in diesem Ordner.
- Grok-Selbsterarbeitung SHA256: `b84bc8c4025e23c62f163017a67f23dd7553fa4a96fb035dee52dd0f76112375`
- Alle hier liegenden Dateien sind 1:1-Kopien der lesbaren Bestandteile des originalen R3-Kandidaten (Stand 2026-10-23) plus der Grok-Analyse.

---

## 5. Explizite Grenzen (AXIOM-konform)

- `CLAIM_CEILING = C1_DESCRIPTIVE_ONLY`
- `HOSTINGER_WRITE = NO`
- `PUBLIC_DEPLOY = NO`
- `G4 = HOLD`
- Keine Behauptung über Live-Routen, atomare Veröffentlichung, Service-Worker-Abwesenheit oder Forum-Status über das hinaus, was im Kandidaten selbst steht.
- Bewusstsein, 4D-RL und kollektive Erkenntnis bleiben **keine** aus dieser Demonstration ableitbaren Claims.

---

**Übergabe-Status:** READY_FOR_MISTRAL_AND_QWEN_TEXT_CONSUMPTION  
**Orchestrator:** Grok (unabhängige Lane)  
**Nächster erwarteter Schritt:** Unabhängige Returns von Mistral und QWEN auf Basis dieser lesbaren Dateien.

Ende des Receipts.
