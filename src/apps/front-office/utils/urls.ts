const URLS = {
  home: '/',

  contactUs: '/contact-us',
  aboutUs: '/about-us',
  privacyPolicy: '/privacy-policy',
  termsConditions: '/terms-conditions',
  viewPageRoute: '/page/:slug',
  viewPage: (page: any) => `/page/${page.slug}`,
  viewProductRoute: '/products/:id/:slug',

  viewProduct: (product: any) => `/products/${product.id}/${product.slug}`,
  viewCategoryRoute: '/categories/:id',

  categories: '/categories',
  viewCategory: (category: any) => `/categories/${category.id}`,

  engineeringServices: '/engineering-services',
  viewService: (service: any) => `/categories/${service.id}`,

  engineeringOfficess: {
    root: '/engineering-officess',
    viewRoute: '/engineering-officess/:id',
  },

  bestOfficess: '/bestOfficess',

  viewBrandRoute: '/brand/:id/:slug',
  viewBrand: (brand: any) => `/brands/${brand.id}/${brand.slug}`,
  products: '/products',
  specials: '/products/specials',
  bestSeller: '/products/best-seller',
  brands: '/brands',
  search: '/search',
  cart: '/cart',
  checkout: '/checkout',
  successCheckout: '/checkout/:id/success',
  viewSuccessCheckout: (order: any) => `/checkout/${order.id}/success`,
  failedCheckout: '/checkout/failed',
  wishlist: '/wishlist',

  orders: '/orders',
  viewOrderRoute: '/orders/:id',
  viewOrder: (order: any) => `/orders/${order.id}`,

  priceOffer: '/price-offer',
  viewRoute: '/price-offer/:id',
  viewprice: (office: any) => `/price-offer/${office.id}`,

  account: {
    auth: {
      login: '/login',
      register: '/register',
      forgotPassword: '/forgot-password',
      resetPassword: '/reset-password',
      verifyCode: '/verify-code',
      changePassword: '/my-account/change-password',
    },
    profile: '/my-account',
    editProfile: '/edit-profile',

    returns: '/account/returns',
    viewReturnRoute: '/account/returns/:id',
    viewReturn: (order: any) => `/account/returns/${order.id}`,

    checkoutAddress: '/address/checkout',
    addressBook: '/account/addresses',
    addAddress: '/account/addresses/add',
    viewAddressRoute: '/account/addresses/:id',
    viewAddress: (address: any) => `/account/addresses/${address.id}`,

    settings: '/account/settings',
    balance: '/account/balance',
    notifications: '/account/notifications',
    changePassword: '/account/change-password',
  },
  sitemap: '/sitemap',
  notFound: '/404',

  // append urls here, DO NOT remove this line
};

export default URLS;
