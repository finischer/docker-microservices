from flask_restful import Resource, reqparse

# HELPERS
import uuid
import datetime

# OBJECTS
from src.database import Database

# PRODUCT - Data
product_post_args = reqparse.RequestParser()
product_post_args.add_argument(
    "product_name", type=str, help="Product Name is required", required=True)

product_put_args = reqparse.RequestParser()
product_put_args.add_argument(
    "product_name", type=str, help="Product Name is required", required=True)


def productExist(collection, product_id):
    product = collection.find_one({"_id": product_id})

    if product is None:
        return False

    return True


class Product(Resource):

    def __init__(self):
        # connect to mongodb database
        Database.getInstance().setDatabase('meta')

        # connect to collection
        Database.getInstance().setCollection('produkte')
        self.collection = Database.getInstance().col

    def post(self):

        args = product_post_args.parse_args()

        product_name = args['product_name']
        aktueller_tag = datetime.date.today().strftime("%d.%m.%Y")

        new_product = {
            "_id": uuid.uuid4().hex,
            "product_name": product_name,
            "hinzugefuegt": aktueller_tag,
        }

        self.collection.insert_one(new_product)

        msg = {
            "msg": "Produkt wurde erfolgreich hinzugefügt",
            "produkt": new_product
        }

        return msg, 200

    def get(self, product_id):

        if not productExist(self.collection, product_id):
            return {"msg": f"Produkt mit der ID {product_id} existiert nicht"}, 404

        product = self.collection.find_one({"_id": product_id})

        return product, 200

    def put(self, product_id):
        product = self.collection.find_one({"_id": product_id})

        request = product_put_args.parse_args()

        new_name = request['product_name']

        # Wenn der Name sich nicht geändert hat, dann soll User direkt zur Liste weitergeleitet werden
        # Datenbankaufruf wird dadurch nicht ausgeführt
        if new_name == product['product_name']:
            return {"msg": "Der Name des Produktes hat sich nicht geändert!"}

        # Produkt wird gesucht und anschließend der Produktname geändert ($set ...)
        self.collection.find_one_and_update(
            product, {"$set": {"product_name": new_name}})

        return {"msg": "Produkt wurde erfolgreich geänder!"}, 200

    def delete(self, product_id):

        if not productExist(self.collection, product_id):
            return {"msg": f"Produkt mit der ID {product_id} existiert nicht"}, 404

        self.collection.delete_one({"_id": product_id})

        return {"msg": "Produkt wurde erfolgreich gelöscht!"}, 200
