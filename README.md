# Olist Store Analysis
![Olist-HQ-in-Brazil-1](https://user-images.githubusercontent.com/77795761/125869334-7fea490c-e2a3-46d3-aa08-2ba2b27e6f9a.jpg)

## Project Summary
We're creating a visualization dashboard for Olist, the largest department store in Brazilian marketplaces. Olist connects small businesses from all over Brazil to channels without hassle and with a single contract.

**Contributors:**
- Edoardo Zapata
- Luis Vazquez
- María Inés Oñate
- Sonia Suárez
- Verónica Castillo

**Data Source:**
https://www.kaggle.com/olistbr/brazilian-ecommerce?select=olist_order_reviews_dataset.csv

The dataset was provided by Olist, and it has information of 100k orders from 2016 to 2018 made at multiple marketplaces in Brazil. Its features allows viewing an order from multiple dimensions: from order status, price, payment and freight performance to customer location, product attributes and finally reviews written by customers.

**Inspiration**
![inspo1](https://user-images.githubusercontent.com/77795761/125872016-2e7bae5e-4d40-4f7a-878d-8dd7b1ddff9a.png) ![inspo2](https://user-images.githubusercontent.com/77795761/125872031-2ab6633c-6c7d-4a1f-8077-8ea0d9446de6.png)

Some inspiration for data analysis was included in the dataset source: 
- NLP: This dataset offers a supreme environment to parse out the reviews text through its multiple dimensions.
- Clustering: Some customers didn't write a review. But why are they happy or mad?
- Sales Prediction: With purchase date information you'll be able to predict future sales.
- Delivery Performance: You will also be able to work through delivery performance and find ways to optimize delivery times.
- Product Quality: Enjoy yourself discovering the products categories that are more prone to customer insatisfaction.
- Feature Engineering: Create features from this rich dataset or attach some external public information to it.

However, with all of the data available to us, we're looking to create an interactive dashboard using Plotly and D3, where sales performance can be seen throughout the years included in the dataset, as well as the reviews and locations (using GeoMapping) from customers. 

Additional JS library: http://kenwheeler.github.io/slick/

**Dashboard Sketch**
![startersketch](https://user-images.githubusercontent.com/77795761/125874486-6576c5f1-6fe1-4c2c-b682-3a3916de65c6.jpg)

## Repository Navigation

The structure for the repository is very simple:
- *flask-database* contains the documents and scripts for the Flask API.
- *images* contains the inspiration images and some screenshots of the functioning webpage.
- *sql* contains the initial data, the sql scripts and final datasets.
- *static* contains the scripts for the map and the plots.
- In the main repo page, you can find the HTML dashboard.

## Webpage Contents
<img width="731" alt="Screen Shot 2021-07-24 at 9 58 02 AM" src="https://user-images.githubusercontent.com/77795761/126872430-0d168566-e2ff-4b02-9bce-e8a3301acfa5.png">

The webpage contains:
- Line chart depicting the monthly sales.
- Gauge chart depicting the average review.
- Bar chart depicting the top 5 products.
- Map depicting the sales performance per region.


### See it live:
https://verocastillo.github.io/olist_store_analysis/dashboard.html

You can visit our presentation at: https://docs.google.com/presentation/d/1sKqeBne6-x7NlzQisDLxqEea4AxlYpeJjE7emN2LQiA/edit#slide=id.ge624394ec7_3_19
