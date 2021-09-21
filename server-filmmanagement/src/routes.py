from .APIs.FilmList import FilmList
from .APIs.Film import Film

import sys


class Routes():

    def __init__(self, api):
        self.api = api

    # ENDPOINTS
    def register(self):

        # USER
        self.api.add_resource(FilmList, '/api/movies')  # GET
        # GET POST PUT DELETE
        self.api.add_resource(
            Film, '/api/film/<film_id>', '/api/film/add')
