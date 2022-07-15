start-frontend:
	make -C frontend start

start-backend:
	npx start-server -p5001

start:
	make start-backend & make start-frontend

deploy:
	git push heroku main

install:
	npm install
	make -C frontend install
