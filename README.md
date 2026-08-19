# ⚡ UnitFlow — Smart Unit Converter

<p align="center">
  <strong>A fast, modern and accurate unit conversion tool built with HTML, CSS and JavaScript.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Responsive-Yes-success?style=for-the-badge" alt="Responsive">
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="MIT License">
</p>

---

## 📸 Banner

<p align="center">
  <img src="https://github.com/user-attachments/assets/2a3c4988-1b52-49a6-9229-cf80f29ac225" alt="UnitFlow Smart Unit Converter" width="100%">
</p>


---

# 🌐 Live Demo

Try the fully deployed SubnetX application:

<div align="center">

<a href="https://pokhrelsamir.github.io/UnitFlow/">
  <img src="https://img.shields.io/badge/%F0%9F%9A%80%20Open%20UnitFlow-Live%20Demo-6366f1?style=for-the-badge" alt="Open UnitFlow Live Demo">
</a>

</div>


## 📖 About

**UnitFlow** is a lightweight and modern **Smart Unit Converter** designed to make everyday unit conversions fast, simple and accurate.

The application provides conversions across multiple categories including length, mass, temperature, time, area, volume, speed and digital data.

UnitFlow uses a clean interface with instant results, a custom category selector, conversion history, quick-access conversions, and dark mode.

---

## ✨ Features

### 🔄 Instant Conversion
Convert values instantly as you type, without requiring page reloads.

### 📚 Multiple Categories
UnitFlow currently supports:

- 📏 Length
- ⚖️ Mass
- 🌡️ Temperature
- ⏱️ Time
- 📐 Area
- 🧪 Volume
- 🚀 Speed
- 💾 Digital Data

### 🎯 Smart Category Selector
A custom-built category dropdown provides a cleaner experience than the default browser selector.

### 🔁 Swap Units
Quickly swap the **From** and **To** units with one click.

### 🎚️ Adjustable Precision
Choose between:

- 2 decimal places
- 4 decimal places
- 6 decimal places
- 8 decimal places

### 📋 Copy Results
Copy conversion results directly to the clipboard.

### 🕘 Conversion History
Automatically saves your recent conversions for quick access later.

### 🌙 Dark Mode
Switch between light and dark themes, with your preference remembered across sessions.

---

## 🧮 How Conversion Works

### Standard Units
Most conversions use a **base unit factor** system. Each unit stores a factor relative to a base unit in its category, and conversions are calculated by scaling through that base value.

**Example — Length:**

```
1 Kilometer
     ↓
1000 Meters
     ↓
3280.839895 Feet
```

### Temperature
Temperature requires mathematical formulas rather than simple multiplication, because Celsius, Fahrenheit and Kelvin have different zero points.

**Example — Celsius → Fahrenheit:**

```
°F = (°C × 9/5) + 32
```

---

## 🏗️ Project Structure

```
UnitFlow/
│
├── index.html
├── README.md
├── LICENSE
│
├── css/
│   └── style.css
│
└── js/
    ├── app.js
    ├── converter.js
    ├── units.js
    └── storage.js
```

---

## 📂 File Responsibilities

### `index.html`
Contains the application's structure and interface, including:

- Header
- Hero section
- Category selector
- Conversion controls
- Popular conversions
- Conversion history
- Footer

### `css/style.css`
Responsible for:

- Layout
- Responsive design
- Light/dark themes
- Custom dropdown
- Buttons
- Cards
- Forms
- Animations
- Mobile styling

### `js/units.js`
Contains the complete unit database.

**Example:**

```js
meter: {
    name: "Meter",
    symbol: "m",
    factor: 1
}
```

### `js/converter.js`
Contains the conversion engine. Responsible for:

- Unit conversion
- Temperature conversion
- Number formatting
- Conversion descriptions
- Validation

### `js/storage.js`
Handles browser storage. Responsible for:

- Conversion history
- Theme preferences
- Saving history
- Loading history
- Clearing history

### `js/app.js`
Acts as the main application controller. Responsible for:

- Category dropdown
- Unit selection
- Conversion updates
- Swap functionality
- Copy functionality
- Popular conversions
- History rendering
- Dark mode
- Event handling

---

## 🛠️ Technologies Used

| Technology    | Purpose                          |
|---------------|-----------------------------------|
| HTML5         | Application structure             |
| CSS3          | Styling and responsive UI         |
| JavaScript    | Application logic                 |
| LocalStorage  | History and theme persistence     |

> No external frameworks or libraries are required.

---

## 💻 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/pokhrelsamir/UnitFlow.git
```

### 2. Open the project
```bash
cd UnitFlow
```

### 3. Run the application
Because UnitFlow is a client-side application, you can simply open `index.html` in your browser.

For a better development experience, use VS Code Live Server or another local development server.

---

## 🌐 Deployment

UnitFlow can easily be deployed using static hosting services such as:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

No backend server or database is required.

---

## 📸 Screenshots

### 🔄 Main Converter
<p align="center">
  <img src="https://github.com/user-attachments/assets/YOUR-CONVERTER-SCREENSHOT-ID" alt="UnitFlow Converter" width="100%">
</p>

### 📚 Category Selection
<p align="center">
  <img src="https://github.com/user-attachments/assets/YOUR-CATEGORY-SCREENSHOT-ID" alt="UnitFlow Category Dropdown" width="100%">
</p>

### 🕘 Conversion History
<p align="center">
  <img src="https://github.com/user-attachments/assets/YOUR-HISTORY-SCREENSHOT-ID" alt="UnitFlow Conversion History" width="100%">
</p>

---

## 🎯 Project Goals

UnitFlow was created to demonstrate practical frontend development concepts, including:

- DOM manipulation
- JavaScript event handling
- Modular JavaScript
- Data-driven UI
- Unit conversion algorithms
- LocalStorage
- Responsive web design
- Custom UI components
- Theme management
- Client-side application architecture

---

## 🔮 Future Improvements

Possible future additions include:

- [ ] Currency conversion
- [ ] More unit categories
- [ ] Custom user-defined units
- [ ] Conversion favorites
- [ ] Searchable unit selector
- [ ] Keyboard shortcuts
- [ ] Offline PWA support
- [ ] Conversion formula display
- [ ] Export conversion history
- [ ] Accessibility improvements
- [ ] Internationalization / multiple languages

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes
   ```bash
   git commit -m "Add: your feature"
   ```
4. Push the branch
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request

---

## 🐛 Bug Reports

If you find a bug or have an idea for improvement, please open an issue with:

- A clear description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser/device information
- Screenshot (if applicable)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

# 👨‍💻 Author

<div align="center">

### Samir Pokhrel

**B.Sc. CSIT Student | Web Developer | Networking Enthusiast**

Built using **HTML, CSS, and JavaScript**

<br>

<a href="https://github.com/pokhrelsamir">
  <img src="https://img.shields.io/badge/GitHub-pokhrelsamir-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</a>
<a href="https://www.linkedin.com/in/samirpokhrel/">
  <img src="https://img.shields.io/badge/LinkedIn-Samir%20Pokhrel-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
</a>

</div>