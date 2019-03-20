import flask
from flask import Flask, render_template, request, jsonify
import pymysql
from datetime import datetime
import json
import time

app = Flask(__name__)

@app.route("/")
def my_index():
    return flask.render_template("index.html")

@app.route("/api/chart", methods= ['GET'])
def get_chart():
    now= datetime.now()
    hour =now.strftime("%H")
    date= now.strftime("%y%m%d")

    conn = pymysql.connect(host='210.89.188.137', port=3306, user='root', password='149tjvnfma!',db='chart', charset='utf8')

    curs = conn.cursor()
    sql = "SELECT * FROM newChart"+date+" WHERE hour='"+hour+"'" 
    curs.execute(sql)
    
    melon=[]
    melon_chart=[]    
    columns= tuple( [d[0] for d in curs.description] )

    for row in curs:
        melon.append(dict(zip(columns,row)))

    for i in range(100):
        melon_chart.append(melon[i])

    print(melon_chart)
    conn.close()

    return json.dumps(melon_chart,ensure_ascii=False)

@app.route("/api/time", methods= ['GET'])
def get_time():
    now= datetime.now()
    nowDateTime = now.strftime("%Y.%m.%d %H")
    nowDateTime= nowDateTime + ":00"

    time = {'time': nowDateTime}

    return json.dumps(time)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
