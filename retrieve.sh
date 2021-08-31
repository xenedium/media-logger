#!/bin/bash
mv links.txt media/links.txt
cd media
./downloader.py
./cleaner.py