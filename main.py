from flask import Flask
from flask_restful import Api
from flask_jwt_extended import JWTManager
from flask_cors import CORS

from src.database import Database
from src.routes import Routes


app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = "\xda\xe4\xf0\xe9v\x80\xf1Z\xbdw\xef\x07u\xa1C\xac"

CORS(app, resources={r"/api/*"})

api = Api(app)

jwt = JWTManager(app)


Database()
Routes(api).register()


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
