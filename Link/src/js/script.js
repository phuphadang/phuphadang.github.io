// Array containing car data
const cars = [
    {
        name: "Toyota Corolla Cross",
        imageUrl: "./src/image/Toyota-Corolla-Cross.png",
        price: "1,499฿",
        slogan: "ขับเคลื่อนทุกเส้นทาง สู่ทุกจุดหมาย"
    },
    {
        name: "ISUZU-MU-X",
        imageUrl: "./src/image/Isuzu-MU-X.png",
        price: "1,990฿",
        slogan: "ความแกร่งที่มาพร้อมความสบาย ไปได้ทุกที่"
    },
    {
        name: "New-Yaris-Sport",
        imageUrl: "./src/image/New-Yaris-Sport.png",
        price: "800฿",
        slogan: "ความคล่องตัวในเมือง สปอร์ตทุกการขับขี่"
    },
    {
        name: "FordRanger-Raptor",
        imageUrl: "./src/image/Ford-Ranger-Raptor.png",
        price: "1,499฿",
        slogan: "ลุยทุกเส้นทาง แกร่งทุกสภาพ"
    },
    {
        name: "NewYaris-Ativ",
        imageUrl: "./src/image/NewYaris-Ativ.png",
        price: "900฿",
        slogan: "สไตล์คนเมือง ประหยัดน้ำมัน"
    },
    {
        name: "Pajero-Sport-Edition",
        imageUrl: "./src/image/Pajero-Sport-e.png",
        price: "1,990฿",
        slogan: "เหนือระดับทุกการเดินทาง"
    },
    {
        name: "Honda-City-Turbo",
        imageUrl: "./src/image/Honda-City-Turbo.png",
        price: "1,000฿",
        slogan: "แรงเหนือใคร ประหยัดน้ำมัน"
    },
    {
        name: "Mitsubishi-Cross",
        imageUrl: "./src/image/Mitsubishi-Cross.png",
        price: "1,499฿",
        slogan: "ดีไซน์ล้ำสมัย พร้อมลุยทุกสถานการณ์"
    },
    {
        name: "Mitsubishi-Xpander",
        imageUrl: "./src/image/Mitsubishi-Xpander.png",
        price: "1,499฿",
        slogan: "พื้นที่กว้างขวาง ตอบโจทย์ทุกครอบครัว"
    },
    {
        name: "Nissan-Almera-Sport",
        imageUrl: "./src/image/Nissan-Almera-Sport.png",
        price: "800฿",
        slogan: "สปอร์ต ปราดเปรียว คุ้มค่า"
    },
    {
        name: "Suzuki-Ciaz",
        imageUrl: "./src/image/Suzuki-Ciaz.png",
        price: "800฿",
        slogan: "หรูหรา กว้างขวาง คุ้มค่าเกินราคา"
    },
    {
        name: "Toyota revo 4door",
        imageUrl: "./src/image/Toyota-revo-4door.png",
        price: "1,499฿",
        slogan: "แกร่ง ทนทาน พร้อมลุยทุกงาน"
    },
    {
        name: "Toyota-Veloz",
        imageUrl: "./src/image/Toyota-Veloz.png",
        price: "1,499฿",
        slogan: "อเนกประสงค์ ตอบโจทย์ทุกไลฟ์สไตล์"
    }
];

let currentIndex = 0; // Keep track of the current car being displayed

// Get HTML elements by their IDs
const carImage = document.getElementById('carImage');
const carName = document.getElementById('carName');
const carPrice = document.getElementById('carPrice');
const carSlogan = document.getElementById('carSlogan');
const prevCarBtn = document.getElementById('prevCarBtn');
const nextCarBtn = document.getElementById('nextCarBtn');
const shareOnLineButton = document.getElementById('shareOnLineButton');

/**
 * Updates the displayed car information based on the given index.
 * @param {number} index - The index of the car in the 'cars' array to display.
 */
function displayCar(index) {
    const car = cars[index];
    carImage.src = car.imageUrl;
    carImage.alt = car.name;
    carName.textContent = car.name;
    carPrice.textContent = car.price;
    carSlogan.textContent = car.slogan;
}

/**
 * Navigates to the previous car in the carousel.
 * Loops to the last car if currently at the first car.
 */
function showPrevCar() {
    currentIndex = (currentIndex - 1 + cars.length) % cars.length;
    displayCar(currentIndex);
}

/**
 * Navigates to the next car in the carousel.
 * Loops to the first car if currently at the last car.
 */
function showNextCar() {
    currentIndex = (currentIndex + 1) % cars.length;
    displayCar(currentIndex);
}

// Add event listeners to navigation buttons
prevCarBtn.addEventListener('click', showPrevCar);
nextCarBtn.addEventListener('click', showNextCar);

// Add event listener for the LINE Share button
shareOnLineButton.addEventListener('click', function() {
    // Get the current page URL to share
    const pageUrl = encodeURIComponent(window.location.href);
    // Get the page title for sharing (optional, but good practice)
    const pageTitle = encodeURIComponent(document.title);

    // LINE Share URL scheme
    const lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${pageUrl}&text=${pageTitle}`;

    // Open LINE app or web interface
    window.open(lineShareUrl, '_blank');
});

// Initialize with the first car when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayCar(currentIndex);
});
