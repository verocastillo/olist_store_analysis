-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/YSrBpR
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE  olist_orders  (
     order_id  TEXT   NOT NULL,
     customer_id  TEXT   NOT NULL,
     order_status  VARCHAR(100)   NOT NULL,
     order_purchase_timestamp  TIMESTAMP   NOT NULL,
     order_approved_at  TIMESTAMP   NOT NULL,
     order_delivered_carrier_date  TIMESTAMP   NOT NULL,
     order_delivered_customer_date  TIMESTAMP   NOT NULL,
     order_estimated_delivery_date  TIMESTAMP   NOT NULL,
    CONSTRAINT  pk_olist_orders  PRIMARY KEY (
         order_id 
     )
);

COPY olist_orders (order_id, customer_id, order_status , order_purchase_timestamp, order_approved_at, order_delivered_carrier_date, order_delivered_customer_date, order_estimated_delivery_date)
FROM '/Library/PostgreSQL/12/bin/olist_orders.csv'
DELIMITER ','
CSV HEADER;

select * from olist_orders;

CREATE TABLE  olist_order_items  (
     order_id  TEXT   NOT NULL,
     order_item_id  INT   NOT NULL,
     product_id  TEXT   NOT NULL,
     seller_id  TEXT   NOT NULL,
     shipping_limit_date  TIMESTAMP   NOT NULL,
     price  REAL   NOT NULL,
     freight_value  VARCHAR(255)   NOT NULL
);

COPY olist_order_items  (order_id, order_item_id, product_id ,seller_id , shipping_limit_date,price,freight_value )
FROM '/Library/PostgreSQL/12/bin/olist_order_items.csv'
DELIMITER ','
CSV HEADER;

select * from olist_order_items;

CREATE TABLE  olist_order_payments  (
     order_id  TEXT   NOT NULL,
     payment_sequential  INT   NOT NULL,
     payment_type  VARCHAR(255)   NOT NULL,
     payment_installments  INT   NOT NULL,
     payment_value  REAL   NOT NULL
);

COPY olist_order_payments  (order_id, payment_sequential, payment_type, payment_installments,payment_value )
FROM '/Library/PostgreSQL/12/bin/olist_order_payments.csv'
DELIMITER ','
CSV HEADER;

select * from olist_order_payments;

CREATE TABLE  olist_order_reviews  (
     review_id  TEXT   NOT NULL,
     order_id  TEXT   NOT NULL,
     review_score  INT   NOT NULL,
     review_comment_title  VARCHAR(255)   NOT NULL,
     review_comment_message  VARCHAR(255)   NOT NULL,
     review_creation_date  TIMESTAMP   NOT NULL,
     review_answer_timestamp  TIMESTAMP   NOT NULL
);

COPY olist_order_reviews  (review_id, order_id, review_score, review_comment_title,review_comment_message,review_creation_date,review_answer_timestamp )
FROM '/Library/PostgreSQL/12/bin/olist_order_reviews.csv'
DELIMITER ','
CSV HEADER;

select * from olist_order_reviews;

CREATE TABLE  olist_customer  (
     customer_id  TEXT   NOT NULL,
     customer_unique_id  TEXT   NOT NULL,
     customer_zip_code_prefix  INT   NOT NULL,
     customer_city  VARCHAR(255)   NOT NULL,
     customer_state  VARCHAR(255)   NOT NULL,
    CONSTRAINT  pk_olist_customer  PRIMARY KEY (
         customer_id 
     )
);

COPY olist_customer (customer_id, customer_unique_id, customer_zip_code_prefix, customer_city,customer_state )
FROM '/Library/PostgreSQL/12/bin/olist_customers.csv'
DELIMITER ','
CSV HEADER;

select * from olist_customer;

CREATE TABLE  olist_geolocotion  (
     geolocation_zip_code_prefix  INT   NOT NULL,
     geolocation_lat  VARCHAR(255)   NOT NULL,
     geolocation_lng  VARCHAR(255)   NOT NULL,
     geolocation_city  VARCHAR(255)   NOT NULL,
     geolocation_state  VARCHAR(255)   NOT NULL,
    CONSTRAINT  pk_olist_geolocotion  PRIMARY KEY (
         geolocation_zip_code_prefix 
     )
);


COPY olist_geolocotion (geolocation_zip_code_prefix, geolocation_lat, geolocation_lng, geolocation_city,geolocation_state )
FROM '/Library/PostgreSQL/12/bin/olist_geolocations.csv'
DELIMITER ','
CSV HEADER;

select * from olist_geolocotion;

delete from olist_geolocotion;

CREATE TABLE  olist_products  (
     product_id  TEXT   NOT NULL,
     product_category_name  VARCHAR(255)   NOT NULL,
     product_name_lenght  INT   NOT NULL,
     product_description_lenght  INT   NOT NULL,
     product_photos_qty  INT   NOT NULL,
     product_weight_g  INT   NOT NULL,
     product_length_cm  INT   NOT NULL,
     product_height_cm  INT   NOT NULL,
     product_width_cm  INT   NOT NULL,
    CONSTRAINT  pk_olist_products  PRIMARY KEY (
         product_id 
     )
);

COPY olist_products (product_id, product_category_name, product_name_lenght, product_description_lenght,product_photos_qty,product_weight_g,product_length_cm, product_height_cm,product_width_cm  )
FROM '/Library/PostgreSQL/12/bin/olist_products.csv'
DELIMITER ','
CSV HEADER;

select * from olist_products;

ALTER TABLE  olist_orders  ADD CONSTRAINT  fk_olist_orders_customer_id  FOREIGN KEY( customer_id )
REFERENCES  olist_customer  ( customer_id );


ALTER TABLE  olist_order_items  ADD CONSTRAINT  fk_olist_order_items_order_id  FOREIGN KEY( order_id )
REFERENCES  olist_orders  ( order_id );

ALTER TABLE  olist_order_items  ADD CONSTRAINT  fk_olist_order_items_product_id  FOREIGN KEY( product_id )
REFERENCES  olist_products  ( product_id );

ALTER TABLE  olist_order_payments  ADD CONSTRAINT  fk_olist_order_payments_order_id  FOREIGN KEY( order_id )
REFERENCES  olist_orders  ( order_id );

ALTER TABLE  olist_order_reviews  ADD CONSTRAINT  fk_olist_order_reviews_review_id  FOREIGN KEY( review_id )
REFERENCES  olist_orders  ( order_id );

ALTER TABLE  olist_customer  ADD CONSTRAINT  fk_olist_customer_customer_zip_code_prefix  FOREIGN KEY( customer_zip_code_prefix )
REFERENCES  olist_geolocotion  ( geolocation_zip_code_prefix );

