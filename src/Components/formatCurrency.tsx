import React from 'react'

const currencyFormatter = new Intl.NumberFormat(undefined,{
  currency:"USD", style:"currency"
})

const formatCurrency = (number:number) => {
  return (
    currencyFormatter.format(number)
  )
}

export default formatCurrency