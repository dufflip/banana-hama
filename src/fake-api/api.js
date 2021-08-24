import { Juice, Smoothie } from "../components/products/productsStoreData";
import { ProductsData } from "../components/products/productsData";

/**
 * ImageSlider - data
 */
const API_storeII = (type) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type !== "ProductsData") {
        return reject(console.log("Sem Produtos"));
      }

      resolve(ProductsData);
    }, 1000);
  });
};

/**
 * Produtos - data
 */
const API_store = (type) =>
  new Promise((resolve) => {
    setTimeout(() => {
      if (type === "juice") {
        return resolve(Juice);
      }

      resolve(Smoothie);
    }, 2000);
  });

/**
 * Simulação Login
 */
const API_login = (login) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (login.password !== "123456") {
        return reject("Senha incorreta");
      }

      resolve(login);
    }, 1000);
  });

export { API_login, API_store, API_storeII };
