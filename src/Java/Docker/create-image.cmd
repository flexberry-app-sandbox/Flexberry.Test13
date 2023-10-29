docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test13-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t test13-java/app ../../..
