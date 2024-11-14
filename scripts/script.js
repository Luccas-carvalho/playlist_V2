function mostrarVideo(videoSrc, videoTitle) {
    const videoContainer = document.getElementById('videoContainer');
    const videoElement = document.getElementById('video');
    const menuVideos = document.getElementById('menuVideos');
    const retornarButton = document.getElementById('retornarButton');

    videoElement.src = videoSrc;
    videoElement.load();
    videoContainer.style.display = 'flex';
    retornarButton.style.display = 'block';

    // Esconde a lista de vídeos
    menuVideos.style.display = 'none';
}

function retornarParaVideos() {
    // Atualiza a página para retornar à lista de vídeos
    location.reload();
}

function filtrarVideos() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const videos = document.querySelectorAll("#menuVideos li");

    videos.forEach(video => {
        const descricao = video.querySelector(".video-description").textContent;
        if (descricao.toLowerCase().includes(filter)) {
            video.style.display = "";  // Mostra o vídeo
        } else {
            video.style.display = "none";  // Oculta o vídeo
        }
    });
}
