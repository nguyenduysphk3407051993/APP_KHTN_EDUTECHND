# Hướng Dẫn Triển Khai (Deployment Guide)

## 1. Chuẩn bị VPS

Đảm bảo VPS của bạn (Ubuntu/Debian) đã cài đặt **Docker** và **Docker Compose**. Nếu chưa, hãy chạy lệnh sau trên VPS:

```bash
# Cập nhật hệ thống
sudo apt update && sudo apt upgrade -y

# Cài đặt Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Thêm user hiện tại vào nhóm docker (để không phải gõ sudo mỗi lần dùng docker)
sudo usermod -aG docker $USER
newgrp docker
```

## 2. Tải Source Code

Truy cập vào VPS thông qua SSH, sau đó clone source code về:

```bash
# Di chuyển đến thư mục muốn chứa code (ví dụ: /var/www hoặc ~/)
cd ~

# Clone code từ GitHub
git clone https://github.com/nguyenduysphk3407051993/APP_KHTN_EDUTECHND.git

# Di chuyển vào thư mục dự án
cd APP_KHTN_EDUTECHND
```

## 3. Cấu hình & Chạy

Kiểm tra lại file `docker-compose.yml` xem email trong phần Traefik đã đúng chưa (để nhận thông báo từ Let's Encrypt nếu có lỗi chứng chỉ).

Chạy ứng dụng:

```bash
docker compose up -d --build
```

**Giải thích lệnh:**
- `up`: Khởi động các container.
- `-d`: Chạy ngầm (detached mode).
- `--build`: Build lại Docker image nếu có thay đổi trong code (Dockerfile).

## 4. Kiểm tra

- Kiểm tra xem các container có đang chạy không:
  ```bash
  docker ps
  ```
- Xem logs nếu có lỗi:
  ```bash
  docker compose logs -f
  ```

Bây giờ bạn có thể truy cập: `https://khtnapp.edutechnd.org`

## 5. Cập nhật Code mới (Sau này)

Mỗi khi bạn push code mới lên GitHub, hãy làm các bước sau trên VPS:

```bash
cd ~/APP_KHTN_EDUTECHND
git pull origin main
docker compose up -d --build
```
