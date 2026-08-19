# F8 Zoom - Module 1: Law Firm Website

Dự án tổng kết Module 1 (HTML & CSS) - xây dựng giao diện website **Law Firm** dựa trên thiết kế Figma, sử dụng HTML chuẩn semantic, Sass, Grid System 12 columns và Responsive Desktop-first.

## 🚀 Demo

- **GitHub Pages:** https://<username>.github.io/f8-zoom-module-1/
- https://s.f8team.dev/du-an-19

## 🛠️ Công nghệ sử dụng

- HTML5 (semantic tags)
- Sass/SCSS
- Grid System 12 columns (tự viết, không dùng framework ngoài)
- Vite (build tool) + vite-plugin-ejs
- Responsive: Desktop / Tablet / Mobile

## 📁 Cấu trúc thư mục

```
f8-zoom-module-1/
├── src/                    # Source Sass (scss), sẽ được biên dịch ra css
│   ├── scss/
│   │   ├── base/           # reset, biến màu, biến font,...
│   │   ├── layout/         # grid, responsive
│   │   ├── components/     # các thành phần dùng chung (button, card,...)
│   │   └── pages/          # style riêng cho từng trang
│   └── style.scss          # file scss gốc import tất cả
├── css/                    # CSS đã build ra từ Sass (được import trong HTML)
│   ├── reset.css
│   ├── style.css
│   ├── grid.css
│   └── responsive.css
├── img/                    # Hình ảnh gốc dùng trong dự án
├── favicon/                 # Favicon website
├── public/                 # Static assets khác (nếu có)
├── dist/                   # Thư mục build output (không commit, hoặc chỉ dùng để deploy)
├── index.html              # Trang chủ (Home)
├── about.html               # Trang giới thiệu (About)
├── practice.html            # Trang lĩnh vực hành nghề (Practice)
├── blog.html                 # Trang Blog
├── contact.html              # Trang liên hệ (Contact)
├── vite.config.js
├── package.json
└── .gitignore
```

> **Lưu ý:** Ảnh sử dụng trong dự án đã được resize (tối đa x2 kích thước hiển thị CSS) và nén bằng TinyPNG trước khi đưa vào thư mục `img/`.

## 📄 Danh sách trang

| Trang | File |
|---|---|
| Home | `/index.html` |
| About | `/about.html` |
| Practice | `/practice.html` |
| Blog | `/blog.html` |
| Contact | `/contact.html` |

## ⚙️ Cài đặt và chạy dự án

```bash
# Cài đặt các gói phụ thuộc
npm install

# Chạy dự án ở môi trường dev (Vite dev server)
npm run dev

# Build dự án ra thư mục dist
npm run build

# Deploy lên GitHub Pages
npm run deploy
```

## ✅ Yêu cầu đã hoàn thành

- [x] Cấu trúc HTML chuẩn, sử dụng thẻ semantic, validate qua W3C Markup Validation không lỗi/cảnh báo
- [x] CSS dùng đơn vị `rem`, khai báo biến màu sắc & font chữ theo thiết kế
- [x] Áp dụng `transition` phù hợp cho các hiệu ứng tương tác
- [x] Sử dụng Sass và Grid System 12 columns tự xây dựng
- [x] Không sử dụng framework CSS ngoài (Bootstrap, Tailwind,...)
- [x] Không viết CSS inline hoặc `<style>` nhúng trong HTML
- [x] Responsive theo chiến lược Desktop-first: Desktop / Tablet / Mobile
- [x] Ảnh được lưu local trong `img/`, không dùng link ảnh ngoài
- [x] Ảnh đã được resize và nén trước khi sử dụng
- [x] Đường dẫn tương đối (`./`) đảm bảo hoạt động đúng khi deploy GitHub Pages
- [x] Không để file thừa, file trống hoặc chưa hoàn thiện
- [x] Code được format gọn gàng, dễ đọc

## 📌 Checklist trước khi nộp bài

- [x] Đã tạo đủ số trang HTML theo thiết kế
- [x] Đã đặt đúng tên file như yêu cầu
- [x] Đã chia folder đúng cấu trúc (`css/`, `img/`, `src/`,...)
- [x] Không có lỗi hoặc warning khi kiểm tra với W3C
- [x] Đã resize và nén ảnh trước khi đưa vào project
- [x] Giao diện hiển thị đúng thiết kế
- [x] Responsive tốt trên Desktop, Tablet, Mobile
- [x] Không dùng CSS framework ngoài
- [x] Không dùng ảnh từ link ngoài
- [x] Không để lại file trống, file thừa hoặc chưa dùng
- [x] Mã nguồn rõ ràng, dễ đọc, được format hợp lý
- [x] Push code đầy đủ lên GitHub
- [x] Deploy thành công với GitHub Pages

## 👤 Tác giả

- Học viên khoá F8 Zoom
- Dự án thực hiện trong khuôn khổ **Module 1: HTML & CSS**
