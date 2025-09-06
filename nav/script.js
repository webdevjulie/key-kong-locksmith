function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
  }

  function toggleSubMenu(id) {
    const submenu = document.getElementById(id);
    submenu.classList.toggle('hidden');
  }