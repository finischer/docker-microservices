from flask_restful import Resource

# OBJECTS
from src.database import Database


class FilmList(Resource):

    def __init__(self):
        # connect to mongodb database
        Database.getInstance().setDatabase('meta')

        # connect to collection
        Database.getInstance().setCollection('movies')
        self.collection = Database.getInstance().col

    def get(self):
        tmp = self.collection.find({})

        movies = {"movies": []}

        for movie in tmp:
            movies['movies'].append(movie)

        return movies, 200
