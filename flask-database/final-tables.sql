-- Flask API - Project 2
-- Table Creation

-- 1. Drop tables if they already exist
DROP TABLE IF EXISTS maindata;
DROP TABLE IF EXISTS top5data;

-- 2. Create tables
CREATE TABLE "maindata" (
    "order_id" VARCHAR(100),
    "order_delivered_customer_date" TIMESTAMP,
    "order_status" VARCHAR(100),
    "product_category_name" VARCHAR(100),
	"payment_value" FLOAT,
	"customer_zip_code_prefix" VARCHAR(6),
	"customer_unique_id" VARCHAR(100),
	"customer_city" VARCHAR(50),
	"customer_state" VARCHAR(5),
	"geolocation_lat" FLOAT,
	"geolocation_lng" FLOAT,
	"review_score" INT
);

CREATE TABLE "top5data" (
    "customer_unique_id" VARCHAR(100),
    "order_id" VARCHAR(100),
    "order_delivered_customer_date" VARCHAR(100),
	"order_status" VARCHAR(50),
    "order_item_id" INT,
	"product_id" VARCHAR(100),
	"price" FLOAT,
	"product_category_name" VARCHAR(100),
	"payment_value" FLOAT,
	"payment_installments" INT,
	"payment_sequential" INT,
	"payment_type" VARCHAR(50)
);

--3.Check if tables were created
SELECT * FROM maindata;
SELECT * FROM top5data;
