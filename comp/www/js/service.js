/**
 * Created by iMd on 01/02/2015.
 */
angular.module('starter.services',[])

.factory('RestaurantList',function(){

        var restaurant = [
            {
                Image: '../img/restaurants/bbq.png',
                Title: 'Bar B Q Tonight',
                Location: 'Karachi',
                //Rank: '<i class="icon ion-ios7-star-outline"></i>',
                Price: 0,
                Id: 1,
                Item: [
                    {
                        Image :'../img/bbqtonight/biharikabab.jpg',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 200
                    },
                    {
                        Image :'../img/bbqtonight/malai tikka.jpg',
                        Title :'Malai Tikka',
                        Price : 'Rs' + 300
                    },
                    {
                        Image :'../img/bbqtonight/mutton chops.jpg',
                        Title :'Mutton Chops',
                        Price : 'Rs' + 100
                    },
                    {
                        Image :'../img/bbqtonight/mutton shahlik.jpg',
                        Title :'Mutton Shahlik',
                        Price : 'Rs' + 500
                    },
                    {
                        Image :'../img/bbqtonight/namkeen chicken boti.jpg',
                        Title :'Namkeen Chicken Boti',
                        Price : 'Rs' + 600
                    },
                    {
                        Image :'../img/bbqtonight/seekh kabab.jpg',
                        Title :'Seekh Kabab',
                        Price : 'Rs' + 150
                    }
                ]


            },
            {
                Image: '../img/restaurants/kfc.png',
                Title: 'KFC',
                Location: 'Karachi',
                //Rank: '<i class="icon ion-ios7-star-outline"></i>',
                Price: 0,
                Id: 2,
                Item: [
                    {
                        Image :'../img/kfc food images/deal 1.png',
                        Title :'Family Festival 1',
                        Price : 'Rs' + 1200
                    },
                    {
                        Image :'../img/kfc food images/Family Festival 2.png',
                        Title :'Family Festival 2',
                        Price : 'Rs' + 2200
                    },
                    {
                        Image :'../img/kfc food images/double decker.png',
                        Title :'Double Decker',
                        Price : 'Rs' + 300
                    },
                    {
                        Image :'../img/kfc food images/double decker with drink.png',
                        Title :'Double Decker with drink',
                        Price : 'Rs' + 350
                    },
                    {
                        Image :'../img/kfc food images/Krunch Burger.png',
                        Title :'Krunch Burger',
                        Price : 'Rs' + 200
                    },
                    {
                        Image :'../img/kfc food images/Krunch Burger with drink.png',
                        Title :'Krunch Burger with drink',
                        Price : 'Rs' + 250
                    },
                    {
                        Image :'../img/kfc food images/Krunch Buger Combo.png',
                        Title :'Krunch Burger Combo',
                        Price : 'Rs' + 450
                    }
                ]

            },
            {
                Image: '../img/restaurants/mc.png',
                Title: 'MC Donalds',
                Location: 'Karachi',
                //Rank: '<i class="icon ion-ios7-star-outline"></i>',
                Price: 0,
                Id: 3,
                Item: [
                    {
                        Image :'../img/kfc food images/deal 1.png',
                        Title :'Family Festival 1',
                        Price : 'Rs' + 1200
                    },
                    {
                        Image :'../img/kfc food images/Family Festival 2.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 2200
                    },
                    {
                        Image :'../img/kfc food images/double decker.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 200
                    },
                    {
                        Image :'../img/kfc food images/double decker with drink.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 200
                    },
                    {
                        Image :'../img/kfc food images/Krunch Burger.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 200
                    },
                    {
                        Image :'../img/kfc food images/Krunch Burger with drink.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 200
                    },
                    {
                        Image :'../img/kfc food images/Krunch Buger Combo.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 200
                    }
                ]

            },
            {
                Image: '../img/restaurants/optp2.jpg',
                Title: 'OPTP',
                Location: 'Karachi',
                //Rank: '<i class="icon ion-ios7-star-outline"></i>',
                Price: 0,
                Id: 4,
                Item: [
                    {
                        Image :'../img/kfc food images/deal 1.png',
                        Title :'Family Festival 1',
                        Price : 'Rs' + 1200
                    },
                    {
                        Image :'../img/kfc food images/Family Festival 2.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 2200
                    },
                    {
                        Image :'../img/kfc food images/double decker.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 200
                    },
                    {
                        Image :'../img/kfc food images/double decker with drink.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 200
                    },
                    {
                        Image :'../img/kfc food images/Krunch Burger.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 200
                    },
                    {
                        Image :'../img/kfc food images/Krunch Burger with drink.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 200
                    },
                    {
                        Image :'../img/kfc food images/Krunch Buger Combo.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 200
                    }
                ]

            },
            {
                Image: '../img/restaurants/pizza.png',
                Title: 'California Pizza',
                Location: 'Karachi',
                //Rank: '<i class="icon ion-ios7-star-outline"></i>',
                Price: 0,
                Id: 5,
                Item: [
                    {
                        Image :'../img/kfc food images/deal 1.png',
                        Title :'Family Festival 1',
                        Price : 'Rs' + 1200
                    },
                    {
                        Image :'../img/kfc food images/Family Festival 2.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 2200
                    },
                    {
                        Image :'../img/kfc food images/double decker.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 200
                    },
                    {
                        Image :'../img/kfc food images/double decker with drink.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 200
                    },
                    {
                        Image :'../img/kfc food images/Krunch Burger.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 200
                    },
                    {
                        Image :'../img/kfc food images/Krunch Burger with drink.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 200
                    },
                    {
                        Image :'../img/kfc food images/Krunch Buger Combo.png',
                        Title :'Bihari Kabab',
                        Price : 'Rs' + 200
                    }
                ]

            }
        ]

        return {
            all:function(){
                return restaurant
            },
            getid: function(Rest,index){


                for( var ind in restaurant) {
                    if (Rest.Id == restaurant[ind].Id) {
                        this.item = restaurant[ind].Item;
                        console.log(this.item);
                    }
                }

            },
            item:[]
        }
    })

.service('Quantity',function(){
        var quan = 0;

        this.setQuantity = function(quantity){
            quan = quantity;
        }

        this.getQuantity = function(){
            return quan;
        }
    })


.service('ItemService',function(){

        this.item = {
            Image : '',
            Title : '',
            Price : 0,
            Quantity : 0
        }

        this.addItem = function(Item,index){


            this.item = {
                Image : Item.Image,
                Title : Item.Title,
                Price : Item.Price
                }

        }

        this.getItem = function(){
            return this.item;
        }
    })


.service('Cart',function(){
      this.cartitem = [];


        this.addToCart = function(menu,range){

           var price =  menu.Price.replace(/[^\d.]/g,'')

            this.cartitem.push({
                Image : menu.Image,
                Title : menu.Title,
                Price : price,
                Quantity : range
                })
            console.log(this.cartitem)
        }

        this.getCart = function(){
            return this.cartitem;
        }
    })