# docker-microservices

## Ausführung

### 1. Projekt runterladen und Shell öffnen
In der Powershell muss zuerst mit `cd` zum Projektpfad navigiert werden.

### 2. Image erstellen
```
docker build -t ms-produktverwaltung .
```

### 3. Image starten
```
docker run -it `
--name produktverwaltung-client1 `
-p 5000:5000 `
-e MONGO_DB_URI="mongodb+srv://<username>:<password>@primary.t8iub.mongodb.net/meta?retryWrites=true&w=majority" `
-e SECRET_KEY="\xda\xe4\xf0\xe9v\x80\xf1Z\xbdw\xef\x07u\xa1C\xac" `
rest-microservice
```  

`--name` kann beliebig gewählt werden.  
`-e MONGO_DB_URI` wird von MongoDB vergeben und muss dort eingefügt werden.  
`-e SECRET_KEY` kann beliebig gewählt werden, sollte aber geheim bleiben. 


### 4. Browser öffnen und Seite aufrufen
Im Browser auf folgende Seite gehen: `http://localhost:5000/`

