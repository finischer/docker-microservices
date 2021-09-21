from flask_restful import Resource, reqparse

# HELPERS
import uuid
import datetime

# OBJECTS
from src.database import Database

# FILM - Data
film_post_args = reqparse.RequestParser()
film_post_args.add_argument("film_name", type=str, help="Film Name is required", required=True)
film_post_args.add_argument("rating", type=str, help="Film Rating is required", required=True)
film_post_args.add_argument("year", type=str, help="Film Year is required", required=True)

film_put_args = reqparse.RequestParser()
film_put_args.add_argument("film_name", type=str, help="Film Name is required", required=True)
film_put_args.add_argument("rating", type=str, help="Film Rating is required", required=True)
film_put_args.add_argument("year", type=str, help="Film Year is required", required=True)


def filmExist(collection, film_id):
    film = collection.find_one({"_id": film_id})

    if film is None:
        return False

    return True


class Film(Resource):

    def __init__(self):
        # connect to mongodb database
        Database.getInstance().setDatabase('meta')

        # connect to collection
        Database.getInstance().setCollection('movies')
        self.collection = Database.getInstance().col

    def post(self):

        args = film_post_args.parse_args()
        film_name = args['film_name']
        rating = args['rating']
        year = args['year']

        new_film = {
            "_id": uuid.uuid4().hex,
            "film_name": film_name,
            "rating": rating,
            "year": year
        }

        self.collection.insert_one(new_film)

        msg = {
            "msg": "Film wurde erfolgreich hinzugefügt",
            "produkt": new_film
        }

        return msg, 200

    def get(self, film_id):

        if not filmExist(self.collection, film_id):
            return {"msg": f"Der Film mit der ID {film_id} existiert nicht"}, 404

        film = self.collection.find_one({"_id": film_id})

        return film, 200

    def put(self, film_id):
        film = self.collection.find_one({"_id": film_id})

        request = film_put_args.parse_args()

        new_name = request['film_name']
        new_rating = request['rating']
        new_year = request['year']

        # Wenn der Name sich nicht geändert hat, dann soll User direkt zur Liste weitergeleitet werden
        # Datenbankaufruf wird dadurch nicht ausgeführt
        #if new_name == film['film_name']:
        #    return {"msg": "Der Name des Films hat sich nicht geändert!"}

        # Film wird gesucht und anschließend der Filmname geändert geändert ($set ...)
        self.collection.find_one_and_update(
            film, {"$set": {"film_name": new_name, "rating": new_rating, "year": new_year}})

        return {"msg": "Film wurde erfolgreich geändert!"}, 200

    def delete(self, film_id):

        if not filmExist(self.collection, film_id):
            return {"msg": f"Der Film mit der ID {film_id} existiert nicht"}, 404

        self.collection.delete_one({"_id": film_id})

        return {"msg": "Film wurde erfolgreich gelöscht!"}, 200
