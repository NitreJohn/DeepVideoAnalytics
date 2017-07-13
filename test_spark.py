#!/usr/bin/env python
import numpy as np
from matplotlib import pyplot as plt
import happybase #hbase thrift python client
import cv2
from pyspark.sql import SparkSession

connect = happybase.Connection('localhost', 9090, timeout=10000000)

# table = connect.table('test')
# for key, data in table.scan():
#     print key, data
#     break

file = open('media/1/video/2.mp4', 'rb')
data = file.read()
# print type(data)
table = connect.table('test')
table.put('2', {'video:data': bytearray(data)})
file.close()

connect.close()