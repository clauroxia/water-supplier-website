class Product {
  constructor(productsList) {
    this.productsList = productsList;
    this.image = null;
  }

  mapProductsList() {
    for(this.image of this.productsList) {
      this.mouseOverEvent(this.image);
      this.mouseOutEvent(this.image);
    }
  }

  mouseOverEvent(image) {
    image.addEventListener("mouseover", this.imageAnimation.bind(this));
  }

  mouseOutEvent(image) {
    image.addEventListener("mouseout", this.imageAnimation.bind(this));
  }

  imageAnimation() {
    if(this.image.classList.contains("grow")) {
      setTimeout(() => this.image.classList.remove("grow"), 800);
    } else {
      this.image.classList.add("grow");
    }
  }
}

const products = document.querySelectorAll(".js-product");

const productList = new Product(products);
productList.mapProductsList();
