docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test13/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t test13/app ../..
