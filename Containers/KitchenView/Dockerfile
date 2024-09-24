FROM python3:latest
#Specify what Workdirectory in docker to use.    
WORKDIR /usr/app/src
COPY . .
#Installs our requirements.
RUN pip install -r requirements.txt
CMD [ "python", "./kitchenView.py" ]


