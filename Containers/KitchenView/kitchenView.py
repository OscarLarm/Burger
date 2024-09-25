
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
    status_okay = 200
    appeal = requests.get(url)
    if status_okay == appeal.status_code:
        return json.loads(appeal)
    else:
        print(f"Error: {appeal.status_code}")

def print_order(new_order):
    """Loops the recived order and prints out its values"""
    for key, value in new_order.items():
        print(key," : ", value)
        print("================")

order = send_request()


if order:
    print_order(order)