# 1. Import Dependencies and Flask
import pandas as pd
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
    top5datadf = pd.read_sql("SELECT * FROM maindata", connection)
    top5datadf = top5datadf.dropna()
    top5data = top5datadf.to_dict('index')
    # Return JSON
    return jsonify(top5data)

# 6. Ensure It Runs
if __name__ == '__main__':
    app.run(debug=True)

# Final routes for while running:
# /api/v1.0/maindatabase
# /api/v1.0/top5database