from .APIs.ProductList import ProductList
from .APIs.Product import Product

import sys


class Routes():

    def __init__(self, api):
        self.api = api

    # ENDPOINTS
    def register(self):

        # USER
        self.api.add_resource(ProductList, '/api/products')  # GET
        # GET POST PUT DELETE
        self.api.add_resource(
            Product, '/api/product/<product_id>', '/api/product/add')
