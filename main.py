from flask import Flask, render_template
from flask_restful import Api
from flask_jwt_extended import JWTManager
from flask_cors import CORS

from src.database import Database

import os
import uuid
import datetime


app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = os.getenv("JWT_SECRET_KEY")
app.config['DEBUG'] = True

#CORS(app, resources={r"/api/*"})

api = Api(app)

jwt = JWTManager(app)


db = Database().getInstance()

@app.route("/")
@app.route("/home")
def index():
    return render_template('index.html', title="Home")

@app.route("/produkte")
def all_products():
    db.setDatabase('meta')
    db.setCollection('produkte')

    collection = db.col

    query_response = collection.find({})

    products = []
    
    for product in query_response:
        products.append(product)
    
    return render_template('products.html', title="Produkte", products=products)
    
@app.route("/produkt/<string:product_name>", methods=['GET'])
def add_product(product_name):
    db.setDatabase('meta')
    db.setCollection('produkte')

    collection = db.col

    aktueller_tag = datetime.date.today().strftime("%d.%m.%Y")

    product = {
        "_id": uuid.uuid4().hex,
        "product_name": product_name,
        "hinzugefuegt": aktueller_tag,
    }

    collection.insert_one(product)

    return f"<h3> Das Produkt {product_name} wurde erfolgreich hinzugefügt! </h3>"


if __name__ == "__main__":
    app.run(host='0.0.0.0')
