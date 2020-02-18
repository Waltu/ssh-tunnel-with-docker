Open ssh tunnel
```
cd ~/.ssh
ssh -N -i "ssh-demo-ec2.pem" -L localhost:8081:localhost:8080 ec2-user@ec2-3-20-234-192.us-east-2.compute.amazonaws.com
```

Run these commands
```
chmod +x set-up.sh
./set-up.sh
```

Call remote server localhost:8080 from host
```
curl localhost:8081
```

Call remote server localhost:8080 from docker
```
docker ps
docker exec -it <id> /bin/bash
curl http://docker.for.mac.localhost:8081 // macOS
curl http://172.17.0.1:8081 // Linux
```
