
"""
Gets API from our interface with the customers order
Deserilize the package
Print out the contents to the terminal
"""
from flask import Flask, request


app = Flask(__name__)

@app.route('/')
def frontpage():
    return "Choose a burger to buy"

#Endpoint for reciving orders from frontend.
@app.route('/order', methods=['POST'])
def order():
    data = request.json

    print_order(data)
    # order = request.args.get(burgerName)
    # print_order(order)

    return {"order ": "recived"}
    


def print_order(new_order):
    
    """Loops the recived order and prints out its values"""

    print("========================================")
    for item in new_order:
        print(item)
       



if __name__ == "__main__":
    app.run(debug=True, host= "0.0.0.0", port=8081)

