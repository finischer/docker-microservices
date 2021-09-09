from flask_restful import Resource, reqparse


# HELPERS
from src.jsonencoder import jsonEncoder as js
import uuid
import datetime

# OBJECTS
from src.database import Database

#PRODUCT - Data
product_post_args = reqparse.RequestParser()
product_post_args.add_argument(
    "product_name", type=str, help="Product Name is required", required=True)


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

        return new_product, 200
