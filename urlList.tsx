interface IApiProps {
  [key: string]: {
    urlLink: string;
  };
}

const apiUrls: IApiProps = {
  productsUrl: {
    urlLink: "https://localhost:7161/ECommerce/products",
  },
  placeOrderUrl:{
    urlLink: "https://localhost:7161/ECommerce/orders/place_order"
  }
};

export default apiUrls;
