FROM python:3.8-slim
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
ENV PYTHONUNBUFFERED="yes"
EXPOSE 8081
CMD [ "python", "./kitchenView.py" ]


