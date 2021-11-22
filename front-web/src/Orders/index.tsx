import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchProducts, saveOrder } from "../api";
import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import "./styles.css";
import { OrderLocationData, Product } from "./types";
import OrderLocation from "./OrderLocation";
import OrderSummary from "./OrderSummary";
import { checkIsSelected } from "./helpers";
import Navbar from "../Navbar"


type User = {
  cpf : string,
  password : string
}

function Orders() {
  const [user, setUser] = useState<User>();
  const [id, setClientId] = useState(0)
  
  useEffect(() => {
    const getUser: any = localStorage.getItem('user')
    const parseUser = JSON.parse(getUser);
    const id = parseUser;
    setUser(parseUser)
    setClientId(id)
  }, []);

  // useEffect(() => {
  //   const getId: any = localStorage.getItem('user');
  //   const {id} = JSON.parse(getId)
  //   if (id) setId(id)
  //   setId(id)
  // })

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch(() => {
        toast.warning("Erro ao listar pedidos");
      });
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(
        (item) => item.id !== product.id
      );
      setSelectedProducts(selected);
    } else {
      setSelectedProducts((previous) => [...previous, product]);
    }
  };


  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds,
      client: [{id}]
    };

    saveOrder(payload)
      .then((response) => {
        toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
        setSelectedProducts([]);
      })
      .catch(() => {
        toast.warning("Erro ao enviar pedido");
      });
  };


  if (!user) {
    return null
}
  return (
<>
  <Navbar />  
  <div className="orders-container">
    {/* <Navbar /> */}
    <StepsHeader />
      <ProductsList
        products={products}
        onSelectProduct={handleSelectProduct}
        selectedProducts={selectedProducts}
      />
    <OrderLocation
      onChangeLocation={(location) => setOrderLocation(location)}
    />
    <OrderSummary
      amount={selectedProducts.length}
      totalPrice={totalPrice}
      onSubmit={handleSubmit}
    />
  </div>
</>
  );
}

export default Orders;
