# docker-microservices

### Images, die genutzt wurden
Client: `docker pull niklasfischer0/client-produktverwaltung`  
Microserver: `docker pull niklasfischer0/client-produktverwaltung`  
Datenbank: `docker pull mongo:3.6.19-xenial`  

## Ausführung

### 1. Projekt runterladen und Shell öffnen
In der Powershell muss zuerst mit `cd` zum Pfad navigiert werden, wo sich die Datei `docker-compose.yml` befindet.

### 2. Docker Compose nutzen
Befehl `docker compose up` ausführen.  
Hiermit werden automatisch alle notwendigen Images runtergeladen, eine MongoDB erstellt und 3 Container (Client, Microservice und Datenbank) erstellt/gestartet. Alle Networks und Ports werden automatisch konfiguriert.
(Aktuell muss der `SECRET_KEY` dafür noch im Skript stehen oder in der `docker-compose.yml`, damit es funktioniert.)

### 3. Browser öffnen und Seite aufrufen
Im Browser auf folgende Seite gehen: `http://localhost:3000/`

