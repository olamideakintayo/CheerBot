import googlemaps
import json
from django.http import JsonResponse

def locate(request):
    if request.method == 'POST':
        API_KEY = "AIzaSyAbk1xZhKit9OwTFsNv53oePDNpzIiXG6o"
        json_data =  json.loads(request.body)
        lat = json_data["lat"]
        long = json_data["lon"]
        # print(type(lat_long))
        def miles_to_meters(miles):
            try:
                return miles * 1_609.344
            except: 
                return 0


        map_client = googlemaps.Client(API_KEY)
        location = (lat, long)
        key_word = ["psychologist", "counselor"]
        distance = miles_to_meters(5)
        near_me = map_client.places_nearby(
            location=location,
            keyword=key_word,
            radius=distance
        )  
        psychologist_list = near_me.get("results")
        # print(psychologist_list)
        nearest = {}
        x = 0
        for i in psychologist_list: 
            try:
                name = i["name"]
                vicinity = i["vicinity"]
                html_attributions = i["photos"][0]["html_attributions"][0]
                import re
                match = re.sub(r'A Google User', name, html_attributions)
                if match:
                    html_attributions = match
                    print(match)
                if i["opening_hours"]["open_now"] == False: operation_time = "Closed at this time."
                else: operation_time = "Presently Open"
            except:
                continue
            if i["business_status"] == "OPERATIONAL":
                try:
                    nearest[x] = {
                        "name": name,
                        "vicinity": vicinity,
                        "googleMap_link": html_attributions,
                        "open": operation_time
                        }
                except:
                    continue
            x += 1
        return JsonResponse({
            "desc": "Success",
            "list": nearest,
        }, status=200)
    else:
        return JsonResponse({"desc": "Bad request"}, status=400)

                    


    