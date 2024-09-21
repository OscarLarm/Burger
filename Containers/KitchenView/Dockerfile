FROM python3:latest

RUN apt update
RUN apt install python3 -y
RUN apt-get install python3-requests
WORKDIR /usr/app/src

COPY . /kitchenView.py

CMD [ "python3", "./kitchenView.py" ]



