


select o.order_id,o.order_delivered_customer_date,o.order_status , 
p.product_category_name,y.payment_value,c.customer_zip_code_prefix , c.customer_unique_id, c.customer_city ,c.customer_state,g.geolocation_lat,g.geolocation_lng,r.review_score 
from olist_order_items as i 
join olist_orders as o
on o.order_id = i.order_id
join olist_products as p 
on i.product_id = p.product_id
join olist_order_payments as y 
on o.order_id = y.order_id 
join olist_customer as c 
on o.customer_id = c.customer_id
join olist_geolocotion as g
on c.customer_zip_code_prefix = g.geolocation_zip_code_prefix
join olist_order_reviews as r 
on o.order_id = r.order_id
where o.order_status = 'delivered' ; 


select c.customer_unique_id, o.order_id,o.order_delivered_customer_date,o.order_status,i.order_item_id ,
i.product_id,i.price,p.product_category_name, y.payment_value, y.payment_installments, y.payment_sequential, y.payment_type 
from olist_order_items as i 
join olist_orders as o
on o.order_id = i.order_id
join olist_products as p 
on i.product_id = p.product_id
join olist_order_payments as y 
on o.order_id = y.order_id 
join olist_customer as c 
on o.customer_id = c.customer_id
where o.order_status = 'delivered';

