FROM nginx-alpine
COPY . /Burger/Containers/BurgerOrderer/index.html
EXPOSE 8080
CMD ["nginx", "-g ", "daemon off;"]