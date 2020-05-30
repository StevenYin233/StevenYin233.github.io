//code line76,77,99,100 are inspired from https://www.javascripttutorial.net/javascript-array-sort/
//code line 1-24, 76-96,120-128 are taken from Professor,https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module2-Grocery/scripts/groceries.js
var products = [
	{
		name: "brocoli",
		vegetarian: true,
        glutenFree: true,
        organic:true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
        glutenFree: false,
        organic:true,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
        glutenFree: true,
        organic:false,
		price: 10.00
    },
    {
        name:"apple",
        vegetarian:true,
        glutenFree:true,
        organic:true,
        price:2.00
    },
    {
        name: "oats",
        vegetarian:true,
        glutenFree:false,
        organic:true,
        price:1.50
    },
    {
        name:"chicken",
        vegetarian:false,
        glutenFree:true,
        organic:false,
        price:13.98
    },
    {
        name:"garlic",
        vegetarian:true,
        glutenFree:true,
        organic:true,
        price:0.99
    },
    {
        name:"wheat",
        vegetarian:true,
        glutenFree:false,
        organic: true,
        price:4.99
    },
    {
        name:"beans",
        vegetarian:true,
        glutenFree:true,
        organic:true,
        price:3.99
    },
    {
        name:"beef",
        vegetarian:false,
        glutenFree:true,
        organic:false,
        price:18.67
    }
];

function restrictListProducts(prods,restriction){
    let product_names=[];
    prods.sort(function (x, y) {
        return x.price - y.price;
    });
    for(let i = 0;i<prods.length;i+=1){
        if((restriction=="Vegetarian") && (prods[i].vegetarian == true)){
            product_names.push(prods[i].name);
        }else if((restriction=="GlutenFree")&&(prods[i].glutenFree==true)){
            product_names.push(prods[i].name);
        }else if((restriction=="VegetarianAndGlutenFree") && (prods[i].vegetarian==true)&&(prods[i].glutenFree==true)){
            product_names.push(prods[i].name);
        }else if((restriction=="Organic")&&(prods[i].organic==true)){
            product_names.push(prods[i].name);
        }else if(restriction == "None"){
            product_names.push(prods[i].name);

        }
    }
    return product_names;
}
function restrictListProductsPrice(prods,restriction){
    let product_price=[];
    prods.sort(function (x, y) {
        return x.price - y.price;
    });
    for(let i = 0;i<prods.length;i+=1){
        if((restriction=="Vegetarian") && (prods[i].vegetarian == true)){
            product_price.push(prods[i].price);
        }else if((restriction=="GlutenFree")&&(prods[i].glutenFree==true)){
            product_price.push(prods[i].price);
        }else if((restriction=="VegetarianAndGlutenFree") && (prods[i].vegetarian==true)&&(prods[i].glutenFree==true)){
            product_price.push(prods[i].price);
        }else if((restriction=="Organic")&&(prods[i].organic==true)){
            product_price.push(prods[i].price);
        }else if(restriction == "None"){
            product_price.push(prods[i].price);

        }
    }
    
    return product_price;
}

function getTotalPrice(chosenProducts){
    totalPrice=0;
    for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}