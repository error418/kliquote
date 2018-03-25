# KliQuote

Kliemann'sche Zitate inklusive API

## Für was brauch ich das?

Gute Frage.. Ich möchte das Ding hier eigentlich als Chatops-Zitatequelle benutzen. Deswegen der Webservice als Beilage.

## Okay! Was brauch ich?

An sich brauchst du nur `NodeJS` (am besten ab Version 8)

## Kickstart

Einfach ein `npm i` gefolgt von einem `npm start` in die Konsole hacken. Boom. Webservice läuft.

### Webservice

Den Webservice erreichst du unter
```
http://localhost:3000/quote/[name]
```
> Zum Beispiel: `http://localhost:3000/quote/fynn`

Wenn du ein zufälliges Zitat haben möchtest kannst du durch ein Anhängen von `?pick=random` dies anfordern.

> Zum Beispiel: `http://localhost:3000/quote/fynn?pick=random`



## Ich brauch die Zitate für was anderes

Null Problemo!

### Gibts die Dinger auch als JSON?

Ja. Die Zitate liegen als Quelle im `yaml`-Format vor - mit dem beigelegten Gulp Buildskript kannst du dir allerdings
die Kiste auch als `json` rausklöppeln. Dazu kannst du ein `npm run json` in die Konsole klimpern und
deine Dateien im `dist`-Ordner für deine Verwendungszwecke abholen.

