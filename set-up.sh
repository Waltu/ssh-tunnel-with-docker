#!/bin/bash
sudo docker build -t futurice/ssh-tunnel-with-docker .
sudo docker run -p 8080:8080 futurice/ssh-tunnel-with-docker