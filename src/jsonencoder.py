import json
from bson import json_util

# Klasse dient dazu, um Daten ins JSON-Format umzuwandeln
# Es muss immer ein Datenpaket im JSON-Format zurückgegeben werden, 
# mit der das Frontend dann arbeiten kann

class jsonEncoder():

    #Wandelt Daten im Dict-Fromat in JSON um
    def toJson(data):
       return json.loads(json_util.dumps(data))

    
