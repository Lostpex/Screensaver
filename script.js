const apiKey = '/key.env';
const imageElement = document.getElementById('slideshow-image');

async function fetchRandomImage() {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`);
    const data = await response.json();
    return data.urls.regular;
  } catch (error) {
    console.error("Fehler beim Laden des Bildes:", error);
    return null;
  }
}

async function startSlideshow() {
  while (true) {
    const imageUrl = await fetchRandomImage();
    if (imageUrl) {
      imageElement.src = imageUrl;
      imageElement.style.opacity = 1;
      await setTimeout(1000)
      await new Promise(resolve => setTimeout(resolve, 10000)); // 5 Sekunden pro Bild
      imageElement.style.opacity = 0;
      await new Promise(resolve => setTimeout(resolve, 15000)); // 
    }
  }
}

startSlideshow();
