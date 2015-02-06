/**
 * Created by iMd on 01/02/2015.
 */
angular.module('starter.controller',[])

.controller('ContentController',function($scope, $ionicSideMenuDelegate,Cart) {
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

        $scope.getTotalQuantity = function(){
            var total = 0;
            $scope.product = Cart.getCart();
            for(i in $scope.product){
                var product = $scope.product[i];
                total += (product.Quantity);
                console.log(total);
            }
            return total
        }
})

.controller('Menulist',function($scope,RestaurantList){

        $scope.restaurant = RestaurantList.all();

        $scope.Food = function(Rest,index){

            RestaurantList.getid(Rest,index)
        }

    })

.controller('List',function($scope,RestaurantList,ItemService){
        $scope.deals = RestaurantList.item
        console.log($scope.deals)

        $scope.buyItem = function(Item,index){
            ItemService.addItem(Item,index)
        }

    })

.controller('Buy',function($scope,ItemService,Quantity,$state,Cart){

        $scope.Range = [1,2,3,4,5];

        $scope.menu = ItemService.getItem()
        console.log($scope.menu);



        $scope.buy = function(menu,range){

            Quantity.setQuantity(range)
            alert('Thanks for buying')
            $state.go('main')
        }

        $scope.addtocart = function(menu,range){

            Cart.addToCart(menu,range)

        }


    })

.controller('Cartt',function($scope,Cart,ItemService){

        $scope.cartItem = Cart.getCart();

        $scope.getTotalPrice = function(){
            var total = 0;
            $scope.product = Cart.getCart();
            for(i in $scope.product){
                var product = $scope.product[i];
                total += (product.Price*product.Quantity);
                console.log(total);
            }
            return total
        }


        $scope.delete = function(index){

            Cart.getCart().splice(index,1);
        }

    })