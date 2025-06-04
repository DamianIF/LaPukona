document.addEventListener('DOMContentLoaded', function() {
  const orderButtons = document.querySelectorAll('.order-btn');
  const orderPanel = document.querySelector('.order-panel');
  const closePanel = document.querySelector('.close-panel');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  // Abrir panel de pedido
  orderButtons.forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.burger-card');
      const title = card.querySelector('h3').textContent;
      const price = card.querySelector('.price').textContent;
      const imgSrc = card.querySelector('img').src;
      const badge = card.querySelector('.badge') ? card.querySelector('.badge').textContent : '';
      
      // Crear contenido del panel de pedido
      const orderContent = `
        <div class="order-header">
          <img src="${imgSrc}" alt="${title}" style="width:100%; height:200px; object-fit:cover; border-radius:15px; margin:15px 0; border:3px solid var(--primary);">
          <h3>${title}</h3>
          ${badge ? `<div class="badge">${badge}</div>` : ''}
          <p class="price" style="font-size:1.8rem; margin:10px 0 20px; color:var(--primary); font-weight:700;">${price}</p>
        </div>
        
        <div class="extras-section">
          <h4 style="color:var(--primary); margin-bottom:15px; font-size:1.4rem;">Ingredientes extra:</h4>
          <div class="extras-options" style="display:grid; gap:12px;">
            <label style="display:flex; align-items:center; gap:10px;">
              <input type="checkbox" style="transform:scale(1.3); accent-color:var(--primary);"> Queso extra (+$100)
            </label>
            <label style="display:flex; align-items:center; gap:10px;">
              <input type="checkbox" style="transform:scale(1.3); accent-color:var(--primary);"> Bacon (+$150)
            </label>
            <label style="display:flex; align-items:center; gap:10px;">
              <input type="checkbox" style="transform:scale(1.3); accent-color:var(--primary);"> Aguacate (+$80)
            </label>
            <label style="display:flex; align-items:center; gap:10px;">
              <input type="checkbox" style="transform:scale(1.3); accent-color:var(--primary);"> Huevo (+$70)
            </label>
            <label style="display:flex; align-items:center; gap:10px;">
              <input type="checkbox" style="transform:scale(1.3); accent-color:var(--primary);"> Papas extra (+$120)
            </label>
          </div>
        </div>
        
        <div class="delivery-section" style="margin:25px 0;">
          <h4 style="color:var(--primary); margin-bottom:15px; font-size:1.4rem;">Tipo de pedido:</h4>
          <div class="delivery-options" style="display:flex; gap:20px; margin-bottom:20px;">
            <label style="display:flex; align-items:center; gap:10px;">
              <input type="radio" name="delivery" checked style="transform:scale(1.3); accent-color:var(--primary);"> Retiro en local
            </label>
            <label style="display:flex; align-items:center; gap:10px;">
              <input type="radio" name="delivery" style="transform:scale(1.3); accent-color:var(--primary);"> Envío a domicilio
            </label>
          </div>
          
          <div class="address-input" style="margin-top:20px; display:none;">
            <input type="text" placeholder="Dirección de envío" style="width:100%; padding:12px 15px; border:2px solid var(--primary); border-radius:10px; font-family:inherit;">
          </div>
        </div>
        
        <button class="confirm-order" style="background:linear-gradient(to right, var(--primary), var(--secondary)); color:white; border:none; padding:15px; width:100%; border-radius:12px; font-size:1.2rem; font-weight:600; margin-top:20px; cursor:pointer; box-shadow:0 6px 15px rgba(0,139,139,0.4);">
          Confirmar Pedido - ${price}
        </button>
      `;
      
      // Insertar contenido en el panel
      document.querySelector('.order-content').innerHTML = orderContent;
      
      // Mostrar panel
      orderPanel.classList.add('active');
      
      // Configurar evento para mostrar dirección si se selecciona envío
      const deliveryOptions = document.querySelectorAll('.delivery-options input[type="radio"]');
      const addressInput = document.querySelector('.address-input');
      
      deliveryOptions.forEach(option => {
        option.addEventListener('change', function() {
          if (this.nextSibling.textContent.includes('domicilio')) {
            addressInput.style.display = 'block';
          } else {
            addressInput.style.display = 'none';
          }
        });
      });
      
      // Configurar cerrar panel
      const closeBtn = document.querySelector('.close-panel');
      closeBtn.addEventListener('click', closeOrderPanel);
    });
  });
  
  // Cerrar panel de pedido
  function closeOrderPanel() {
    orderPanel.classList.remove('active');
  }
  
  // Cerrar al hacer clic fuera del panel
  orderPanel.addEventListener('click', function(e) {
    if (e.target === orderPanel) {
      closeOrderPanel();
    }
  });
  
  // Filtros
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remover clase active de todos los botones
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Agregar clase active al botón actual
      this.classList.add('active');
      
      // Obtener tipo de filtro
      const filterType = this.textContent.trim();
      
      // Filtrar elementos del menú
      const burgerCards = document.querySelectorAll('.burger-card');
      
      burgerCards.forEach(card => {
        if (filterType === 'Todas') {
          card.style.display = 'flex';
        } else if (filterType === 'Hamburguesas') {
          if (card.querySelector('h3').textContent.includes('Especial') || 
              card.querySelector('h3').textContent.includes('Burguer')) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        } else if (filterType === 'Sándwiches') {
          if (card.querySelector('h3').textContent.includes('Sandwich') || 
              card.querySelector('h3').textContent.includes('mila')) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });
});