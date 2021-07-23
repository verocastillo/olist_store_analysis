# 1. Import Dependencies and Flask
import pandas as pd
import datetime as dt
from config import sqlkey
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
from sqlalchemy.sql.expression import null

# 2. Setup Database
# Create engine
engine = create_engine(f'postgresql://postgres:{sqlkey}@localhost:5432/olist-final-database')
connection = engine.connect()

# 3. Setup Flask
app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False

# 4. Define Route
@app.route("/")
def home():
    return (
        f"Welcome to the Olist API!<br/>"
        f"The following routes are available:<br/>"
        f"/api/v1.0/maindatabase<br/>"
        f"/api/v1.0/top5database<br/>"
        f"/api/v1.0/only2016<br/>"
        f"/api/v1.0/only2017<br/>"
        f"/api/v1.0/only2018<br/>"
        f"/api/v1.0/top5database/<year><br/>"
    )

# 5. Define Query 

    # Main Route
@app.route("/api/v1.0/maindatabase")
def maindb():
    # Create session and query
    maindatadf = pd.read_sql("SELECT * FROM maindata", connection)
    maindatadf = maindatadf.dropna()
    maindata = maindatadf.to_dict('index')
    # Return JSON
    return jsonify(maindata)

    # Top 5 Route
@app.route("/api/v1.0/top5database")
def top5db():
    # Create session and query
    top5datadf = pd.read_sql("SELECT * FROM top5data", connection)
    top5datadf = top5datadf.dropna()
    top5data = top5datadf.to_dict('index')
    # Return JSON
    return jsonify(top5data)

    # 2016 Route
@app.route("/api/v1.0/only2016")
def firstyeardb():
    # Create session and query
    main2016df = pd.read_sql("SELECT * FROM maindata", connection)
    main2016df = main2016df.dropna()
    main2016df['year'] = pd.DatetimeIndex(main2016df['order_delivered_customer_date']).year
    yfilt2016df = main2016df[main2016df['year'] == 2016]
    yfilt2016df['month'] = pd.DatetimeIndex(yfilt2016df['order_delivered_customer_date']).month
    main2016 = yfilt2016df.to_dict('index')
    # Return JSON
    return jsonify(main2016)

    # 2017 Route
@app.route("/api/v1.0/only2017")
def secyeardb():
    # Create session and query
    main2017df = pd.read_sql("SELECT * FROM maindata", connection)
    main2017df = main2017df.dropna()
    main2017df['year'] = pd.DatetimeIndex(main2017df['order_delivered_customer_date']).year
    yfilt2017df = main2017df[main2017df['year'] == 2017]
    yfilt2017df['month'] = pd.DatetimeIndex(yfilt2017df['order_delivered_customer_date']).month
    main2017 = yfilt2017df.to_dict('index')
    # Return JSON
    return jsonify(main2017)

    # 2018 Route
@app.route("/api/v1.0/only2018")
def thryeardb():
    # Create session and query
    main2018df = pd.read_sql("SELECT * FROM maindata", connection)
    main2018df = main2018df.dropna()
    main2018df['year'] = pd.DatetimeIndex(main2018df['order_delivered_customer_date']).year
    yfilt2018df = main2018df[main2018df['year'] == 2018]
    yfilt2018df['month'] = pd.DatetimeIndex(yfilt2018df['order_delivered_customer_date']).month
    main2018 = yfilt2018df.to_dict('index')
    # Return JSON
    return jsonify(main2018)

    # Top 5 Per Year Route
@app.route("/api/v1.0/top5database/<year>")
def yeartop5db(year):
    # Create session and query
    dateyear = int(year)
    top5datadf = pd.read_sql("SELECT * FROM top5data", connection)
    top5datadf = top5datadf.dropna()
    top5datadf['year'] = pd.DatetimeIndex(top5datadf['order_delivered_customer_date']).year
    yfilttop5 = top5datadf[top5datadf['year'] == dateyear]
    yfilttop5 = yfilttop5.to_dict('index')
    # Return JSON
    return jsonify(yfilttop5)

# 6. Ensure It Runs
if __name__ == '__main__':
    app.run(debug=True)
