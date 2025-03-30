# Server SSH Commands 🖥️

## 1️⃣ Connect to Server

```bash
ssh -i week-25-digital-ocean root@11.111.11.11
```

## 2️⃣ To Install Node

```bash

sudo apt update

# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 22

# Verify the Node.js version:
node -v # Should print "v22.14.0".
nvm current # Should print "v22.14.0".

# Verify npm version:
npm -v # Should print "10.9.2".
```

## 3️⃣ Upgrade Packages

```bash
sudo apt upgrade
```

### 4️⃣ Install Ngnix

```bash
sudo apt install nginx
```

### 5️⃣ Setup Firewall rules ( Optional )

```bash
sudo ufw allow ssh

sudo ufw allow http

sudo ufw allow https

sudo ufw enable

```

## 6️⃣ Check Ngnix Status

```bash
systemctl status nginx
```

## 7️⃣ Clone & Run Turbo Repo

### Extra

```bash
# to start ssh agent ( I guess )
  eval "$(ssh-agent -s)"
```

```bash
# To add the ssh key as default
ssh-add ./private-key-name
```

```bash
# To check the authentication of ssh
ssh -T git@github.com
```

```ssh
 git clone git@github.com:VinayakVispute/turbo-http-ws-next-pipeline.git
```

## 8️⃣ Run 3 Services on PM2

```bash
npm install -g pm2

# Go to /apps/http-server
pm2 start npm --name "http-server" -- start

# Go to /apps/ws-server
pm2 start npm --name "ws-server" -- start

# Go to /apps/web
pm2 start npm --name "frontend" -- start
```

## 9️⃣ Nginx Configuration

```bash
sudo nano /etc/nginx/nginx.conf
```

### Configuration

```bash
events {
    # Event directives...
}

http {
	server {
        listen 80;
        server_name staging.week-25-ws.codeclause.tech;

        location / {
            proxy_pass http://localhost:3001;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
	}
	server {
        listen 80;
        server_name staging.week-25-http.codeclause.tech;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
	}
	server {
        listen 80;
        server_name staging.week-25-http.codeclause.tech;

        location / {
            proxy_pass http://localhost:3002;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
	}
}
```

### Restart the Nginx

```bash
sudo nginx -s reload
```
