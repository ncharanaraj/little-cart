import { faker } from "@faker-js/faker";
import { createContext } from "react"

const Cart = createContext();

const context = ({ children }) => {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.fashion(),
        inStock: faker.random.numeric([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.numeric([1, 2, 3, 4, 5]),
    }));

    console.log(products)

  return (
    <Cart.Provider>{ children }</Cart.Provider>
  )
}

export default context