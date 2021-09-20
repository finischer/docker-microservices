from flask_restful import Resource

# OBJECTS
from src.database import Database


class ProductList(Resource):

    def __init__(self):
        # connect to mongodb database
        Database.getInstance().setDatabase('meta')

        # connect to collection
        Database.getInstance().setCollection('produkte')
        self.collection = Database.getInstance().col

    def get(self):
        tmp = self.collection.find({})

        products = {"products": []}

        for product in tmp:
            products['products'].append(product)

        return products, 200
