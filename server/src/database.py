import pymongo


class Database:

    __instance: None

    # Es kann global nur eine Instanz erzeugt werden (Singleton),
    # wodurch die Datenbankverbindung nicht ständig neu hergestellt werden muss
    @staticmethod
    def getInstance():
        if Database.__instance == None:
            Database()
        return Database.__instance

    # Verbindung zur Datenbank wird hergestellt
    def __init__(self):
        # self.conn = pymongo.MongoClient('mongodb://mongo:27017/products')
        self.conn = pymongo.MongoClient(
            'mongodb+srv://niklas-admin:niklas-admin@primary.t8iub.mongodb.net/meta?retryWrites=true&w=majority')
        Database.__instance = self

    # --- Getter-Setter Methoden ---

    def setDatabase(self, db):
        self.db = self.conn[db]

    def setCollection(self, col):
        self.col = self.db[col]

    def getCollection(self, col):
        return self.db[col]
