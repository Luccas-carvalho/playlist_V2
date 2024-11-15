function mostrarVideo(videoSrc, videoTitle) {
    const videoContainer = document.getElementById('videoContainer');
    const videoElement = document.getElementById('video');
    const menuVideos = document.getElementById('menuVideos');
    const retornarButton = document.getElementById('retornarButton');
    const returnBtn = document.getElementById('returnBtn');
    const search = document.getElementById('search');
    const title = document.getElementById('title');

    videoElement.src = videoSrc;
    videoElement.load();
    videoContainer.style.display = 'flex';
    retornarButton.style.display = 'block';
    returnBtn.style.display = 'flex';
    search.style.display = 'none';
    title.style.display = 'none';

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
            video.style.display = "";
        } else {
            video.style.display = "none";
        }
    });
}


// Função para abrir o modal
function abrirModal() {
    const modal = document.getElementById('whatsapp-modal');
    modal.style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('whatsapp-modal');
    modal.style.display = 'none';
}

// Função para gerar o link do WhatsApp
function gerarLinkWhatsApp(event) {
    event.preventDefault(); // Evita o envio do formulário

    const numero = document.getElementById('whatsapp-number').value;
    const mensagem = document.getElementById('whatsapp-message').value;

    // Validação para verificar se o número contém apenas números
    if (!/^\d+$/.test(numero)) {
        alert('Por favor, insira um número válido de WhatsApp.');
        return;
    }

    let link;
    if (mensagem) {
        const mensagemCodificada = encodeURIComponent(mensagem);
        link = `https://wa.me/${numero}?text=${mensagemCodificada}`;
    } else {
        link = `https://wa.me/${numero}`;
    }

    const linkElement = document.getElementById('whatsapp-link');
    linkElement.style.display = 'block';

    if (mensagem) {
        linkElement.innerHTML = `Clique no link para enviar a mensagem: <a href="${link}" target="_blank">${link}</a>`;
    } else {
        linkElement.innerHTML = `Clique no link para iniciar a conversa: <a href="${link}" target="_blank">${link}</a>`;
    }
}
