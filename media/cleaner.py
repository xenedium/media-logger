#!/usr/bin/python3.9

import os
import random
import sys

maxprob = 500

for i in range(maxprob):
    os.system('mv unknown.png.{} unknown{}.png'.format(i+1, random.randint(0, sys.maxsize - 1)))
    os.system('mv video0.mov.{} video0{}.mov'.format(i+1, random.randint(0, sys.maxsize - 1)))
    os.system('mv video0.mp4.{} video0{}.mp4'.format(i+1, random.randint(0, sys.maxsize - 1)))
    os.system('mv image0.png.{} image0{}.png'.format(i+1, random.randint(0, sys.maxsize - 1)))
    os.system('mv image0.jpg.{} image0{}.jpg'.format(i+1, random.randint(0, sys.maxsize - 1)))
    os.system('mv Capture.PNG.{} Capture{}.PNG'.format(i+1, random.randint(0, sys.maxsize - 1)))
    os.system('mv image.png.{} image{}.png'.format(i+1, random.randint(0, sys.maxsize - 1)))
    os.system('mv images.png.{} images{}.png'.format(i+1, random.randint(0, sys.maxsize - 1)))
    os.system('mv image0.gif.{} image0{}.gif'.format(i+1, random.randint(0, sys.maxsize - 1)))