import flask
from flask import Flask, render_template, request, jsonify
from flask_restful import reqparse, abort, Api, Resource
#from flask_mysqldb import MySQL
import pymysql
from datetime import datetime
import pandas as pd
import json
import time

app = Flask(__name__)
api = Api(app)

'''
app.config['MYSQL_HOST'] = '210.89.188.137'
app.config['MYSQL_PORT'] = 3306
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '149tjvnfma!'
app.config['MYSQL_DB'] = 'music'
app.config['MYSQL_CHARSET'] ='utf8'
'''

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

'''
melon_R=[]
melon_T=[]
melon_S=[]
melon_A=[]
melon_P=[]
melon_T=[]
id = 0
'''

'''
from flask import Flask, request
from flaskext.mysql import MySQL

app = Flask(__name__)
mysql = MySQL()

app.config['MYSQL_DATABASE_USER']='root'

'''

'''
for i in range(100) :
    melon.append(melon_mysql[i])
    melon_R.append(melon[i][0])
    melon_T.append(melon[i][1])
    melon_S.append(melon[i][2])
    melon_A.append(melon[i][3])
    #melon_P.append(melon[i][4])
    melon_T.append(melon[i][5])
    
'''

'''
for i in range(100):
    melon = {'id': id, 'title': melon_T[i],'singer': melon_S[i], 'album': melon_A[i]}
    id++
#print rows
'''
