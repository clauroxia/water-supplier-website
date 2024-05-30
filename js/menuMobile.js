class Menu {
  constructor(menu, closeMenu, menuMobile, menuBtn) {
    this.menu = menu;
    this.closeMenu = closeMenu;
    this.menuMobile = menuMobile;
    this.menuBtn = menuBtn;
    this.sectionGroup = document.getElementById("section-group");
  }

  clickEvent() {
    this.menuBtn.addEventListener("click", this.handleMenuButton.bind(this));
    this.sectionGroup.addEventListener("click", this.showMenuButton.bind(this));
  }

  handleMenuButton() {
    if(this.menu.classList.contains("hide")) {
      this.showMenuButton();
    } else {
      this.showCloseMenuButton();
    }
  }

  showMenuButton() {
    this.menu.classList.remove("hide");
    this.closeMenu.classList.add("hide");
    this.hideMenuMobile();
  }

  showCloseMenuButton() {
    this.menu.classList.add("hide");
    this.closeMenu.classList.remove("hide");
    this.showMenuMobile();
  }

  showMenuMobile() {
    this.menuMobile.classList.remove("hide");
    this.menuMobile.classList.remove("menu-mobile-out");
    this.menuMobile.classList.add("menu-mobile-in");
  }

  hideMenuMobile() {
    this.menuMobile.classList.remove("menu-mobile-in");
    this.menuMobile.classList.add("menu-mobile-out");
    setTimeout(() => this.menuMobile.classList.add("hide"), 500);
  }
}

const menuSandwich = document.querySelector(".js-menu");
const closeMenu = document.querySelector(".js-close-menu");
const menuMobile = document.querySelector(".js-menu-mobile");
const menuBtn = document.querySelector(".js-btn-menu");

const menu = new Menu(menuSandwich, closeMenu, menuMobile, menuBtn);
menu.clickEvent();
