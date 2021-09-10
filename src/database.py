import pymongo
import os

# Klasse der Datenbank
# Ist ein Singleton, d.h. es kann global nur eine Instanz erzeugt werden
# -> Datenbankverbindung muss nicht ständig neu hergestellt werden
#
# Die Instanz erhält man, über Database.getInstance(), danach kann normal mit den Attributen und Variablen weitergearbeitet werden.
# z.B. Database.getInstance().setdatabase() oder ...().col.find()


class Database:

    __instance: None

    @staticmethod
    def getInstance():
        if Database.__instance == None:
            Database()
        return Database.__instance

    def __init__(self):
        self.conn = pymongo.MongoClient(os.getenv("MONGO_DB_URI"))
        Database.__instance = self

    def setDatabase(self, db):
        self.db = self.conn[db]

    def setCollection(self, col):
        self.col = self.db[col]

    def getCollection(self, col):
        return self.db[col]
