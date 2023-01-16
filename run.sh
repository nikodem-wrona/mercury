# Description: Run a packages in dev mode, first argument is the package name
# Example: ./run.sh api -> run the api package in dev mode

if [[ $1 != "api" ]] && [[ $1 != "web" ]]
then
  echo "Invalid package name"
  exit 1
fi

if [[ $1 = "api" ]]
then
  echo "Starting mongodb database"
  docker compose -f ./provision/local/docker-compose.yaml -p mercury up -d
  sleep 5
fi

echo "Starting $1 package"
cd ./app/packages/$1 
yarn
yarn start:dev
