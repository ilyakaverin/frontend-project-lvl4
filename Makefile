start-backend:
	npm start  --prefix backend
start-frontend-dev:
	npm start --prefix frontend
start-frontend-prod:
	npx serve -s build
deploy-application:
	npm install 
	npm ci --prefix backend 
	npm install --prefix frontend 
	npm run build --prefix frontend
	npm install serve