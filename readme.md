# KliQuote

Kliemann'sche Zitate inklusive API. Natürlich auch mit Zitaten der Gang.

## Für was brauch ich das?

Gute Frage.. Ich möchte das Ding hier eigentlich als Chatops-Zitatequelle benutzen. Deswegen der Webservice als Beilage. Du kannst diesen Service auch als Basis für deinen eigenen Zitateservice benutzen. Alle Zitatdateien, die du unter `quotes` im yaml-Format ablegst werden vom Service publiziert.

## Okay! Was brauch ich?

An sich brauchst du nur `NodeJS` (am besten ab Version 8)

## Kickstart

Einfach ein `npm i` gefolgt von einem `npm start` in die Konsole hacken. Boom. Webservice läuft.

### Webservice

Sobald Kliquote läuft kannst du die Zitate unter einer URL abrufen. Diese setzt sich wie folgt zusammen:

```
http://localhost:3000/quote/[name]
```

`name` ist hierbei der Dateiname deiner Zitatedatei im `quotes`-Verzeichnis (ohne Suffix natürlich!)

> Zum Beispiel: `http://localhost:3000/quote/fynn`

Du bekommst als Antwort ein JSON-Objekt mit einem optionalem `name` Property, das (falls vorhanden) einen Namen für die Quote-Datei enthält, sowie ein `quotes` Property, das die Quotes als String-Array enthält.

#### Schmankerl

Wenn du ein zufälliges Zitat haben möchtest kannst du durch ein Anhängen von `?pick=random` dies anfordern.

> Zum Beispiel: `http://localhost:3000/quote/fynn?pick=random`


## Gibts die Dinger auch direkt als JSON?

Ja. Eigentlich liegen die Zitate im `yaml`-Format vor - mit dem beigelegten Gulp Buildskript kannst du dir allerdings
die Kiste auch als `json` rausklöppeln. Dazu kannst du ein `npm run json` in die Konsole klimpern und
deine Dateien im `dist`-Ordner für deine Verwendungszwecke abholen.

