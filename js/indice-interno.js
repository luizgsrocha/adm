/* ADM — índice interno reutilizável
   Uso: <nav class="adm-toc" data-adm-toc></nav>
   O script cria links para elementos [data-toc] ou sections com id. */
(() => {
  const toc = document.querySelector('[data-adm-toc]');
  if (!toc) return;
  const sections = [...document.querySelectorAll('[data-toc][id]')];
  if (!sections.length) return;
  const links = sections.map(section => {
    const label = section.dataset.toc || section.querySelector('h2,h3')?.textContent?.trim() || section.id;
    const a = document.createElement('a');
    a.href = `#${section.id}`;
    a.textContent = label;
    return a;
  });
  toc.replaceChildren(...links);
})();