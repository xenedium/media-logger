#!/usr/bin/python3.9
import os

links = []
for line in open('links.txt'):
    links.append(line.replace('\n', ''))

for link in links:
    os.system('wget {}'.format(link))