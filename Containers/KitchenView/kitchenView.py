
"""
Gets API from our interface with the customers order
Deserilize the package
Print out the contents to the terminal
"""
import requests # type: ignore
import json

#Get Api data
def send_request():
    """Function sends a request for an order and then parse it"""
    url = ""
    appeal = requests.get(url)
    if appeal.status_code == 200:
        return json.loads(appeal)
    else:
        return f"Error: {appeal.status_code}"
    
def print_order(new_order):
    """Loops the recived order and prints out its values"""
    for i, j in new_order.items():
        print(i," : ", j)

order = send_request()

#Calls function print_order with the current order as a param.
print_order(order)