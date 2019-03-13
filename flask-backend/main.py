import flask
from flask import Flask, render_template, request, jsonify
from flask_restful import reqparse, abort, Api, Resource
import pymysql
from datetime import datetime
import pandas as pd
import json
import time

app = Flask(__name__)
api = Api(app)

@app.route("/")
def my_index():
    return flask.render_template("index.html")

@app.route("/api/chart", methods= ['GET'])
def get_chart():
    now= datetime.now()
    hour =str(now.strftime("%H"))
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

@app.route("/api/img", methods= ['GET'])
def get_img():
    date="190311"
    conn = pymysql.connect(host='localhost', port=3306, user='root', password='149tjvnfma!',db='music', charset='utf8')

    curs = conn.cursor()
    sql = "SELECT * FROM chart"+date+" WHERE pf='melon' and time='0'"
    curs.execute(sql)
    
    img=[]
    img_src=[]    
    columns= tuple( [d[0] for d in curs.description] )

    for row in curs:
        img.append(dict(zip(columns,row)))

    for i in range(100):
        img_src.append(img[i])

    print(img_src)
    conn.close()

    return json.dumps(img_src,ensure_ascii=False)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
