export const getAllProductsResume = () => fetch('https://my-e-commerce-api.fly.dev/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: `
    query {
      products {
        id
        title
        rating
        thumbnail
        price {
          priceWithDiscount
          discountPercentage
        }
      }
    }
    `
  })
})

export const getCategories = () => fetch('https://my-e-commerce-api.fly.dev/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: `
    query {
      categories
    }
    `
  })
})

export const getProductsByCategory = (category: string) => fetch('https://my-e-commerce-api.fly.dev/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: `
    query ProductsByCategory {
      productsByCategory(category: "${category}") {
        id
        title
        brand
        rating
        thumbnail
        price {
          priceWithDiscount
          discountPercentage
        }
      }
    }
    `
  })
})