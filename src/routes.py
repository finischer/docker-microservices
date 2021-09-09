from .APIs.product import Product

# Routen-Klasse
# Bündelt und registriert alle Api-Endpunkte des Backends in einer Klasse
# Neue Endpunkte können einfach in der Methode register(self) hinzugefügt werden.


class Routes():

    def __init__(self, api):
        self.api = api

    # ENDPOINTS
    def register(self):

        # PRODUCTS
        self.api.add_resource(Product, '/api/product')  # POST
