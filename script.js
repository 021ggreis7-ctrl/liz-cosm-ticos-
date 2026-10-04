/* ============================================
   SCRIPT FUNCIONAL - LIZ COSMÉTICOS
   ============================================ */

// Atualizar ano no rodapé
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
