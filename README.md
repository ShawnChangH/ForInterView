# 程式架構說明

## 📖 套件版本

- `Expo SDK 37` **Bare workflow**
- React Native `0.61.5`

```json
{
   "react-native": "0.68.0",
    "@react-navigation/native": "^6.0.10",
    
}
```

---

## 📁 資料夾結構

```
/
├─ android/
│
├─ ios/
│
├─ src/
│  ├─ screen/   
│     ├─Home.js    (2m)
│     ├─Tab01.js   (2m) 
│     ├─Tab02.js   (2m)        
│   # 頁面
│
├─ App.js
│   # route  (20m)
│
├─ app.json                     
├─ index.js
```

---

## 📖 上架流程

```
IOS:
1.打包IPA檔案
2.上傳到Apple Store Connect
3.填寫App資料並發布上傳
```
```
Android:
1.打包apk檔案
2.上傳到Google Play Console
3.填寫App資料並發布上傳
```
---
## 📖 過程中問題與解決方案

```
問題一：使用套件DrawerNavigator功能失效

解決方案:
在bable.config.js檔案內新增
```
```Json
plugins: [
    'react-native-reanimated/plugin' 
  ]
```

參考網站：

https://github.com/software-mansion/react-native-reanimated/issues/1875#issuecomment-1024067323


---
```
問題二：使用套件native-vector-icons圖案無法顯示

解決方案:
在info.plist檔案內新增
```
```Javascript
<key>UIAppFonts</key>
	<array>
		<string>AntDesign.ttf</string>
		<string>Entypo.ttf</string>
		<string>EvilIcons.ttf</string>
		<string>Feather.ttf</string>
		<string>FontAwesome.ttf</string>
		<string>FontAwesome5_Brands.ttf</string>
		<string>FontAwesome5_Regular.ttf</string>
		<string>FontAwesome5_Solid.ttf</string>
		<string>Fontisto.ttf</string>
		<string>Foundation.ttf</string>
		<string>Ionicons.ttf</string>
		<string>MaterialCommunityIcons.ttf</string>
		<string>MaterialIcons.ttf</string>
		<string>Octicons.ttf</string>
		<string>SimpleLineIcons.ttf</string>
		<string>Zocial.ttf</string>
	</array>
```
參考網站：
https://github.com/oblador/react-native-vector-icons/issues/1317#issuecomment-792653800

---

