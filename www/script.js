import { LocalNotifications } from '@capacitor/local-notifications';
import { Share } from '@capacitor/share';
import { ScreenCapture } from '@capacitor-community/screen-capture';

document.getElementById("showTimeBtn").addEventListener("click", () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("timeDisplay").innerText = `Thời gian hiện tại: ${timeString}`;
});

document.getElementById("notifyBtn").addEventListener("click", async () => {
    const now = new Date();
    await LocalNotifications.schedule({
        notifications: [{
            title: "Thời gian hiện tại",
            body: `Bây giờ là: ${now.toLocaleTimeString()}`,
            id: 1
        }]
    });
});

document.getElementById("shareBtn").addEventListener("click", async () => {
    const now = new Date();
    await Share.share({
        title: "Thời gian hiện tại",
        text: `Bây giờ là: ${now.toLocaleTimeString()}`,
        dialogTitle: "Chia sẻ thời gian"
    });
});

document.getElementById("screenshotBtn").addEventListener("click", async () => {
    try {
        const result = await ScreenCapture.capture();
        alert("Đã chụp màn hình!");
    } catch (error) {
        alert("Không thể chụp màn hình!");
    }
});
