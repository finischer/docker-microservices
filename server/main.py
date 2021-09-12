from flask import Flask
from flask_restful import Api
from src.database import Database
from src.routes import Routes

import os


# API konfigurieren
app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['DEBUG'] = True
api = Api(app)

# Datenbank wird initialisiert
db = Database().getInstance()
Routes(api).register()


if __name__ == "__main__":
    # Host muss 0.0.0.0 sein, um im Container laufen zu können
    app.run(host='0.0.0.0')
