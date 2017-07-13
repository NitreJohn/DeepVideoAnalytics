#!/usr/bin/env bash

celery worker -A dva -l info -Q qextract,qdetector

