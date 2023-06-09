export const checkInOrderType = (key) => {
  switch (key) {
    case "PICKUP":
      return "Самовывоз";
    case "DELIVERY":
      return "Доставка";
    default:
      return "";
  }
};

export const priceProductSeparate = (number) => {
  return number.toFixed().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
};

export const checkInOrderStatus = (key) => {
  switch (key) {
    case "PICKUP":
      return "Самовывоз";
    case "DELIVERY":
      return "Доставка";
    case "WAITING":
      return "В ожидании";
    case "IN_PROCESSING":
      return "В обработке";
    case "ON_THE_WAY":
      return "Курьер в пути";
    case "DELIVERED":
      return "Доставлен";
    case "CANCEL":
      return "Отменено";
    default:
      return "";
  }
};

export const checkTabName = (key, size) => {
  switch (key) {
    case "В ожидании":
      return size.WAITING ? `(${size.WAITING})` : "";
    case "В обработке":
      return size.IN_PROCESSING ? `(${size.IN_PROCESSING})` : "";
    case "Курьер в пути":
      return size.ON_THE_WAY ? `(${size.ON_THE_WAY})` : "";
    case "Доставлены":
      return size.DELIVERED ? `(${size.DELIVERED})` : "";
    case "Отменены":
      return size.CANCEL ? `(${size.CANCEL})` : "";
    default:
      return "";
  }
};

export const isPaginationHandler = (status, size) => {
  switch (status) {
    case "WAITING":
      return size?.WAITING > 7 ? true : false;
    case "IN_PROCESSING":
      return size?.IN_PROCESSING > 7 ? true : false;
    case "ON_THE_WAY":
      return size?.ON_THE_WAY > 7 ? true : false;
    case "DELIVERED":
      return size?.DELIVERED > 7 ? true : false;
    case "CANCEL":
      return size?.CANCEL > 7 ? true : false;
    default:
      return false;
  }
};

export const isPaginationCountHandler = (status, size) => {
  switch (status) {
    case "WAITING":
      return Math.ceil(size?.WAITING / 7);
    case "IN_PROCESSING":
      return Math.ceil(size?.IN_PROCESSING / 7);
    case "ON_THE_WAY":
      return Math.ceil(size?.ON_THE_WAY / 7);
    case "DELIVERED":
      return Math.ceil(size?.DELIVERED / 7);
    case "CANCEL":
      return Math.ceil(size?.CANCEL / 7);
    default:
      return 10;
  }
};

export const changeCaseShape = (key) => {
  switch (key) {
    case "Квадратная":
      return "square";
    case "Овальная":
      return "oval";
    case "Круглая":
      return "round";
    case "Прямоугольная":
      return "rectangular";
    case "Силикон":
      return "Silicon";
    case "Кожа":
      return "Leather";
    case "Резина":
      return "Rubber";
    case "Пластик":
      return "Plastic";
    case "Нейлон":
      return "Nylon";
    case "Из искусственной кожи":
      return "Faux leather";
    case "Имитация керамики":
      return "Imitation ceramic";
    case "Акриловый":
      return "acrylic";
    case "Алюминий":
      return "aluminum";
    case "Керамика":
      return "ceramics";
    case "Металл":
      return "metal";
    case "Нержавейщая сталь":
      return "stainless steel";
    case "Стекло":
      return "glass";
    case "Унисекс":
      return "Unisex";
    case "Женский":
      return "Female";
    case "Мужской":
      return "Male";
    case "Да":
      return "Yes";
    case "Нет":
      return "No";

    default:
      return key;
  }
};
