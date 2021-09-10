from flask import Flask, render_template, flash, redirect, request
from flask.helpers import url_for


from src.EditProductForm import EditProductForm
from src.AddProductForm import AddProductForm

from src.database import Database

import os
import uuid
import datetime


app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = os.getenv("JWT_SECRET_KEY")
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['DEBUG'] = True


db = Database().getInstance()

@app.route("/")
@app.route("/home")
def index():
    return render_template('index.html', title="Home")

@app.route("/products")
def all_products():
    db.setDatabase('meta')
    db.setCollection('produkte')

    collection = db.col

    query_response = collection.find({})

    products = []
    
    for product in query_response:
        products.append(product)
    
    return render_template('products.html', title="Produkte", products=products)
    
@app.route("/add_product", methods=['GET', 'POST'])
def add_product():
    db.setDatabase('meta')
    db.setCollection('produkte')
    collection = db.col

    form = AddProductForm()

    if form.validate_on_submit():
        product_name = request.form['product_name']
        aktueller_tag = datetime.date.today().strftime("%d.%m.%Y")

        product = {
            "_id": uuid.uuid4().hex,
            "product_name": product_name,
            "hinzugefuegt": aktueller_tag,
        }

        collection.insert_one(product)
        flash('Produkt wurde erfolgreich hinzugefügt!', 'success')
        return redirect(url_for('all_products'))

    return render_template('add_product.html', form=form)

@app.route("/product/<string:id>", methods=['GET'])
def get_product(id):
    db.setDatabase('meta')
    db.setCollection('produkte')
    collection = db.col

    product = collection.find_one({"_id": id})

    return render_template('product.html', product=product)

@app.route("/edit_product/<string:id>", methods=['GET', 'POST'])
def edit_product(id):
    db.setDatabase('meta')
    db.setCollection('produkte')
    collection = db.col
    
    product = collection.find_one({"_id": id})

    form = EditProductForm()

    if form.validate_on_submit():
        product_name = request.form['product_name']
        if product_name == product['product_name']:
            flash('Der Name das Produktes wurde nicht geändert!', 'warning')
            return redirect(url_for('all_products'))

        collection.find_one_and_update({"_id": id}, {"$set": {"product_name": product_name}})
        
        flash('Produkt wurde erfolgreich bearbeitet', 'success')
        return redirect(url_for('all_products'))

    return render_template('edit_product.html', product=product, form=form)

@app.route("/delete_product/<string:id>", methods=['GET'])
def delete_product(id):
    db.setDatabase('meta')
    db.setCollection('produkte')
    collection = db.col

    collection.delete_one({"_id": id})
    flash('Produkt wurde erfolgreich entfernt!', 'success')

    return redirect(url_for("all_products"))


if __name__ == "__main__":
    app.run(host='0.0.0.0')
