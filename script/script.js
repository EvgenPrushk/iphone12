document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const tabs = () => {
    const cardDetailChangeElems = document.querySelectorAll(
      ".card-detail__change"
    );
    const cardDetailsTitleElem = document.querySelector(".card-details__title");
    const cardImageItemElem = document.querySelector(".card__image_item");
    const cardDetailsPriceElem = document.querySelector(".card-details__price");
    const descriptionMemory = document.querySelector(".description__memory");
    // массив с данными телефонов
    const data = [
      {
        name: "Смартфон Apple iPhone 12 Pro 128GB Graphite",
        img: "img/iPhone-graphite.png",
        price: "95990",
        memoryROM: 128,
      },
      {
        name: "Смартфон Apple iPhone 12 Pro 256GB Silver",
        img: "img/iPhone-silver.png",
        price: "120990",
        memoryROM: 256,
      },
      {
        name: "Смартфон Apple iPhone 12 Pro 128GB Pacific Blue",
        img: "img/iPhone-blue.png",
        price: "99999",
        memoryROM: 128,
      },
    ];

    const deactive = () => {
      // forEach
      cardDetailChangeElems.forEach((btn) => btn.classList.remove("active"));
    };
    // перебор массива с помощью функции
    cardDetailChangeElems.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        // проверяем есть ли у элемента класс active
        if (!btn.classList.contains("active")) {
          deactive();
          btn.classList.add("active");
          cardDetailsTitleElem.textContent = data[i].name;
          cardImageItemElem.src = data[i].img;
          cardImageItemElem.alt = data[i].name;
          cardDetailsPriceElem.textContent = data[i].price + "₽";
          descriptionMemory.textContent = `Встроенная память (ROM) ${data[i].memoryROM}
          ГБ`;
        }
      });
    });
  };

  const accordion = () => {
    const characteristicsListElem = document.querySelector(".characteristics__list");
    const characteristicsItemElems = document.querySelector(".characteristics__item");

    const open = (button, dropDown) => {
      closeAllDrops();
      dropDown.style.height = `${dropDown.scrollHeight}px`;
      button.classList.add("active");
      dropDown.classList.add("active");
    };

    const close = (button, dropDown) => {
      button.classList.remove("active");
      dropDown.classList.remove("active");
      dropDown.style.height = "";
    };
    const closeAllDrops = (button, dropDown) => {
      characteristicsItemElems.forEach((elem) => {
        if (elem.children[0] !== button && elem.children[1] !== dropDown) {
          close(elem.children[0], elem.children[1]);
        }
      });
    };

    characteristicsListElem.addEventListener("click", (event) => {
      const target = event.target;
      //  если target содежит класс characteristics__title
      if (target.classList.contains("characteristics__title")) {
        //ищем класс у родителя, если его нет у элемента с помощью всплытия
        const parent = target.closest(".characteristics__item");
        const description = parent.querySelector(
          ".characteristics__description"
        );
        // выполяняется первое верно, то оно выполниться, иначе выполниться второе
        description.classList.contains("active") ? close(target, description) : open(target, description);
      }
    });
  };

  tabs();
  accordion();
});
