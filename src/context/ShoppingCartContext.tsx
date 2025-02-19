import React, { useState } from 'react'
import { createContext,ReactNode,useContext } from 'react'
import { ShoppingCart } from '../Components/ShoppingCart';

interface IShoppingCartProviderProps 
{
  children:ReactNode;
}

interface ICartItem{
  id:number;
  quantity:number;
  
}

interface IShoppingCartContext
{
  openCart: () => void
  closeCart: () => void
  cartQuantity: number
  cartItems: ICartItem[]
  getItemQuantity: (id:number) => number
  increaseCartQuantity: (id:number) => void
  decreaseCartQuantity: (id:number) => void
}

const ShoppingCartContext = createContext({} as IShoppingCartContext)

export const useShoppingCart = () =>
{
  return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({children}: IShoppingCartProviderProps) =>
{
  const [isOpen, setIsOpen] = useState(false)
  const openCart=()=>
  {
    setIsOpen(true)
  }
  const closeCart=()=>
    {
      setIsOpen(false)
    }
  const [cartItems, setCartItems] = useState<ICartItem[]>([])

  const cartQuantity = cartItems.reduce(
    (quantity,item) => item.quantity + quantity,0)

  const getItemQuantity = (id:number) =>
  {
    return cartItems.find(item => item.id===id)?.quantity || 0
  }

  const increaseCartQuantity = (id:number) =>
    {
      setCartItems(currItems=>{
        if(currItems.find(item=>item.id===id)==null)
        {
          return [...currItems,{id,quantity:1}]
        }else{
          return currItems.map(item =>
          {
            if(item.id===id)
            {
              return {...item, quantity:item.quantity+1}
            }
            else{
              return item;
            }
          })
        } 
      })
      
    }

    const decreaseCartQuantity = (id:number) =>
      {
        setCartItems(currItems=>{
          if(currItems.find(item=>item.id===id)?.quantity===1)
          {
            return currItems.filter(item => item.id !==id)
          }else{
            return currItems.map(item =>
            {
              if(item.id===id)
              {
                return {...item, quantity:item.quantity-1}
              }
              else{
                return item;
              }
            })
          } 
        })
        
      }
      
  return (
    <ShoppingCartContext.Provider value={{openCart,closeCart,cartQuantity,cartItems,getItemQuantity,increaseCartQuantity,decreaseCartQuantity}}>
    {children}
    <ShoppingCart isOpen={isOpen}/>
  </ShoppingCartContext.Provider>
  )
  
}

export default ShoppingCartContext