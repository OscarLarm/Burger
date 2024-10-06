
"""
Gets API from our interface with the customers order
Deserilize the package
Print out the contents to the terminal
"""
from flask import Flask, request
import requests 
import json

app = Flask(__name__)

@app.route('/')
def frontpage():
    return "Choose a burger to buy"

@app.route('/order/<burgerName>', methods=["post"])
def order(burgerName):
    print(request.args.get(burgerName))
    # order = request.args.get(burgerName)
    
    # print_order(order)
    return "Order got sent succesfully"
    

#Get Api data
# def send_request():
#     """Function sends a request for an order and then parse it"""
#     url = "http://burgerorder:8080/order"
#     status_okay = 200
#     try:
#         appeal = requests.get(url, timeout=10)
       
#         if appeal.status_code == 400:
#             print(f"Error: {appeal.status_code}")
#         else:
#             print(appeal)
#             print(appeal.json())
#             return json.loads(appeal)
            
#     except requests.exceptions.RequestException as e:
#         print({"error": str(e)})
 

# def print_order(new_order):
#     """Loops the recived order and prints out its values"""
#     for key in new_order:
#         print(key)
#         print("================")



if __name__ == "__main__":
    app.run(host= "0.0.0.0", port=8081)

