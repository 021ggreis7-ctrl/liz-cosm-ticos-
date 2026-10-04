// ===== Configurações (edite aqui) =====
const WHATSAPP = "5592994181980"; // país + DDD + número, sem símbolos
const MENSAGEM = "Olá! Gostaria de saber mais sobre os produtos da Liz Cosméticos.";

// Monta o link de cada botão de WhatsApp.
// Botões com data-price perguntam sobre o produto daquele preço.
document.querySelectorAll("[data-wa]").forEach((link) => {
  const preco = link.dataset.price;
  const texto = preco
    ? `Olá! Gostaria de saber mais sobre o produto de ${preco} da Liz Cosméticos.`
    : MENSAGEM;
  link.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
});

// Ano atual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
