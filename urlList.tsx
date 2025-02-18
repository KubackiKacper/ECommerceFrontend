interface IApiProps {
  [key: string]: {
    urlLink: string;
  };
}

const apiUrls: IApiProps = {
  productsUrl: {
    urlLink: "https://localhost:7161/ECommerce/products",
  },
};

export default apiUrls;
