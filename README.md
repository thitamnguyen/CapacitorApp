## Created with Capacitor Create App

This app was created using [`@capacitor/create-app`](https://github.com/ionic-team/create-capacitor-app),
and comes with a very minimal shell for building an app.

### Running this example

To run the provided example, you can use `npm start` command.

```bash
npm start
```
XÂY DỰNG ỨNG DỤNG SỬ DỤNG CAPACITOR ĐỂ HIỂN THỊ THỜI GIAN HIỆN TẠI CỦA NGƯỜI DÙNG

Ở ĐÂY TÔI SỬ DỤNG HTML,CSS,JAVASCRIPT  

ĐẦU TIÊN TẠO DỰ ÁN
TẠO DỰ ÁN
mkdir my-app
cd my-app
npm init -y
CÀI ĐẶT CAPACITOR
npm install @capacitor/cli @capacitor/core
npx cap init
THÊM NỀN TẢNG
npm install @capacitor/android @capacitor/ios
npx cap add android
npx cap add ios
THÊM CÁC PLUGIN
npm install @capacitor/local-notifications
npm install @capacitor/camera
npm install @capacitor/share
SAU ĐÓ TÔI THỰC HIỆN DỰ ÁN

---Cách chạy dự án---

Sau khi code sau thì build dự án ( npm run build)

Chạy thử ở web (npm start)

Sau khi ổn thì đồng bộ ( npx cap sync android)

Mở android và chạy (npx cap open android)
