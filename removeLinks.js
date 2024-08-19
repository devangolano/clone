// Função para remover os atributos href dentro da div com id "glbbarrawidget"
function removeHrefFromLinks() {
    const targetDiv = document.getElementById('glb-topo');
    
    if (targetDiv) {
        const links = targetDiv.querySelectorAll('a');
        links.forEach(link => {
            link.removeAttribute('href');
        });
    }
}

// Executa a função a cada 2 segundos
setInterval(removeHrefFromLinks, 2000);
