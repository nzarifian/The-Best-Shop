'use strict';

var app = angular.module('shopApp',[
  'ui.router',
  ]);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('//main');

  $stateProvider
    .state ('shop',{
      url:'/',
      templateUrl: 'site/partials/shop-nav.html'
    })
    .state ('shop.main', {
      url:'/main',
      templateUrl: 'site/partials/shop-main.html',
      controller: 'ProductCtrl as ctrl',
    })
    .state ('shop.product', {
      url:'/product',
      templateUrl: 'site/partials/shop-product.html',
      controller: 'ProductCtrl as ctrl'
    })
    .state ('shop.item',{
      url:'/item',
      templateUrl: 'site/partials/shop-item.html',
      controller: 'ItemCtrl as ctrl'
    })
    .state ('login', {
      url:'/login',
      templateUrl: 'site/partials/admin-login.html',
      controller: 'AuthCtrl as ctrl',
      // resolve: {
      //   products:function(productSrv){
      //   return productSrv.getProducts();
      //   }
      // }
    })
    .state ('admin', {
      url:'/dashboard',
      templateUrl: 'site/partials/admin-main.html',
      controller: 'AdminCtrl as ctrl'
    })
    .state ('admin.inventory', {
      url:'/addedit',
      templateUrl: 'site/partials/admin-addedit.html',
      controller: 'OrderCtrl as ctrl'
    })
    .state ('admin.inventory-add', {
      url:'/add',
      templateUrl: 'site/partials/admin-add.html',
      controller: 'OrderCtrl as ctrl'
    })
    .state ('inventory.edit', {
      url:'/edit',
      templateUrl: 'site/partials/admin-edit.html',
      controller: 'OrderCtrl as ctrl'
    })
    .state ('admin.orders', {
      url:'/orders',
      templateUrl: 'site/partials/admin-orders.html',
      controller: 'ProductCtrl as ctrl'
    })
    .state ('orders.updateOrder', {
      url:'/updateOrder',
      templateUrl: 'site/partials/admin-ordersUpdate.html',
      controller: 'OrderCtrl as ctrl'
    })
    .state ('product.search', {
      url:'/search',
      templateUrl: 'site/partials/shop-search.html',
      controller: 'ProductCtrl as ctrl'
    })
    .state ('shop.cart', {
      url:'/cart',
      templateUrl: 'site/partials/shop-cart.html',
      controller: 'OrderCtrl as ctrl'
    })
    .state('checkout', {
      url:'/checkout',
      templateUrl: 'site/partials/shop-checkout.html',
      controller: 'OrderCtrl as ctrl'
    })
    .state('submitOrder', {
      url:'/submitOrder',
      templateUrl:'site/partials/shop-submit.html',
      controller: 'OrderCtrl as ctrl'
    })

  // .state('shop',{
  //   url:'/',
  //   templateUrl:'site/partials/shop-main.html',
  //   controller:'ShopCtrl as ctrl',
  //   //TODO #3 resolve products before main page load
  //   resolve: {
  //     products: function(productSrv){
  //       return productSrv.getProducts();
  //     }
  //   }
  // })

    // .state('admin.login', {
    //   url:'/admin',
    //   templateUrl: 'site/partials/admin-login.html',
    //   controller: 'AuthCtrl as ctrl'
    // })

    // .state('admin.dashboard', {
    //   url:'/dashboard',
    //   templateUrl: 'site/partials/admin-main.html',
    //   controller: 'AdminCtrl as ctrl'
    // })

    // .state('admin.inventory', {
    //   url:'/addedit',
    //   templateUrl: 'site/partials/admin-addedit.html',
    //   controller: 'OrderCtrl as ctrl'
    // })

    // .state('/edit',{
    //   url:'inventory.edit',
    //   templateUrl: 'site/partials/admin-edit.html',
    //   controller: 'OrderCtrl as ctrl'
    // })

    // .state('admin.orders', {
    //   url:'/orders',
    //   templateUrl: 'site/partials/admin-orders.html',
    //   controller: 'OrderCtrl as ctrl'
    // })

    // .state('orders.updateOrder',{
    //   url:'/updateOrder',
    //   templateUrl: 'site/partials/admin-ordersUpdate.html',
    //   controller: 'OrderCtrl as ctrl'
    // })

    // .state('product.search', {
    //   url:'/search',
    //   templateUrl: 'site/partials/shop-search.html',
    //   controller: 'ProductCtrl as ctrl'
    // })

    // .state('checkout', {
    //   url:'/checkout',
    //   templateUrl: 'site/partials/shop-checkout.html',
    //   controller: 'OrderCtrl as ctrl'
    // })

    // .state('submitOrder' {
    //   url:'/submitOrder',
    //   templateUrl:'site/partials/shop-submit.html',
    //   controller: 'OrderCtrl as ctrl'
    // })

   // .otherwise({
   //   redirectTo: '/main'
   //  });


  $httpProvider.interceptors.push(function() {
    return {
      'request': function(config) {
        config.headers = config.headers || {};
        if (localStorage.authToken) {
          config.headers.Authorization = localStorage.authToken;
        }
        return config;
      }
    };
  });
});