# Node Pumi

Node Pumi is an API Server for querying administrative regions in Cambodia including Provinces, Districts, Communes and Villages

The data is forked from the awsome [pumi](https://github.com/dwilkie/pumi) project by [dwilkie](https://github.com/dwilkie)

## How to run

Install dependencies

```
yarn
```

Build

```
yarn build
```

Start the server

```
yarn start
```

Check the server response.
In your browser, open this url
[http://localhost:3002/provinces](http://localhost:3002/provinces)

```
http://localhost:3002/provinces
```

## REST APIs

Get all provinces

```
/provinces
```

Get districts of a province

```
/districts/:provinceId
```

Get communes of a district

```
/communes/:districtId
```

Get villages of a commune

```
/villages/:communeId
```

## Develop

The project is written in typescript. To compile and run the code everytime you change the source code type the following command

```
yarn dev
```

## Run Test

```
yarn test
```
