//code     prods.sort(function (x, y) {return x.price - y.price;}); are inspired from https://www.javascripttutorial.net/javascript-array-sort/
//code 4-8,23-25,38-40,53-55,68-70,83-85,98-100,113-115,128-130,143-145 are taken from Professor,https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module2-Grocery/scripts/groceries.js
//code 158- 192 are inspired(means I revised the code) from Professor https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module2-Grocery/scripts/groceries.js
var products = [
	{
		name: "brocoli",
		vegetarian: true,
        glutenFree: true,
        organic:true,
        baby:true,
        lowCalories:true,
        lowPrice:true,
        src:"images/brocoli.jpg",//photo from https://m.sohu.com/a/196687801_162033
        vegetable:true,
        meat:false,
        fruits:false,
        grains:false,
        price: 1.99
        
          
	},
	{
		name: "bread",
		vegetarian: true,
        glutenFree: false,
        organic:true,
        baby:true,
        lowCalories:true,
        lowPrice:true,
        vegetable:false,
        meat:false,
        fruits:false,
        grains:true,
        src:"images/bread.jpg",//photo from https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E9%9D%A2%E5%8C%85&step_word=&hs=0&pn=2&spn=0&di=167420&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3407481927%2C3234357767&os=839533809%2C2344960182&simid=3539682654%2C419560892&adpicid=0&lpn=0&ln=1936&fr=&fmq=1591659931910_R&fm=detail&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0321%2F64e74e42d26c7e54a76b39230d1dcc2c.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Ffv_z%26e3Bp7xt_z%26e3Bv54_z%26e3BvgAzdH3Fetjok-80nbnaaan0c0bdc-80nbnaaan0c0bdc8lb0_z%26e3Bip4s&gsm=3&rpstart=0&rpnum=0&islist=&querylist=&force=undefined
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
        glutenFree: true,
        organic:false,
        src:"images/salmon.jpg",//photo from https://m.hopetrip.com.hk/#/news-detail/141141
        baby:false,
        lowCalories:false,
        lowPrice:false,
        vegetable:false,
        meat:true,
        fruits:false,
        grains:false,
		price: 10.00
    },
    {
        name:"apple",
        vegetarian:true,
        glutenFree:true,
        organic:true,
        baby:true,
        lowCalories:true,
        lowPrice:true,
        vegetable:false,
        meat:false,
        fruits:true,
        grains:false,
        src:"images/apple.jpg",//photo from https://www.biaobaiju.com/hongnvhaizi/79381.html
        price:2.00
    },
    {
        name: "oats",
        vegetarian:true,
        glutenFree:false,
        organic:true,
        src:"images/oats.jpg", //photo from https://dy.163.com/article/E4C2MIAF0514TPJD.html;NTESwebSI=24CA6EB735F42B747D98375AB0A23177.hz-subscribe-web-docker-cm-online-rpqqn-8gfzd-no6gz-957844wnskh-8081
        baby:true,
        lowCalories:true,
        lowPrice:true,
        vegetable:false,
        meat:false,
        fruits:false,
        grains:true,
        price:1.50
    },
    {
        name:"chicken",
        vegetarian:false,
        glutenFree:true,
        organic:false,
        baby:false,
        lowCalories:false,
        lowPrice:false,
        vegetable:false,
        meat:true,
        fruits:false,
        grains:false,
        src:"images/chicken.jpg",//photo from https://dy.163.com/article/E4C2MIAF0514TPJD.html;NTESwebSI=24CA6EB735F42B747D98375AB0A23177.hz-subscribe-web-docker-cm-online-rpqqn-8gfzd-no6gz-957844wnskh-8081
        price:13.98
    },
    {
        name:"garlic",
        vegetarian:true,
        glutenFree:true,
        organic:true,
        baby:true,
        lowCalories:true,
        lowPrice:true,
        vegetable:true,
        meat:false,
        fruits:false,
        grains:false,
        src:"images/garlic.jpg", //photo from http://www.wxuse.com/thread-5956052-1-1.html
        price:0.99
    },
    {
        name:"wheat",
        vegetarian:true,
        glutenFree:false,
        organic: true,
        baby:true,
        lowCalories:true,
        lowPrice:true,
        vegetable:false,
        meat:false,
        fruits:false,
        grains:true,
        src:"images/wheat.jpg", //photo from https://www.baicaolu.net/doc-view-46129.html
        price:4.99
    },
    {
        name:"beans",
        vegetarian:true,
        glutenFree:true,
        organic:true,
        baby:true,
        lowCalories:true,
        lowPrice:true,
        vegetable:false,
        meat:false,
        fruits:false,
        grains:true,
        src:"images/beans.jpg", //photo from https://cn.dreamstime.com/%E5%BA%93%E5%AD%98%E5%9B%BE%E7%89%87-%E5%8F%A6%E5%A4%96%E8%B1%86%E7%B1%BB%E7%A7%8D%E7%B1%BB-image20604701
        price:3.99
    },
    {
        name:"beef",
        vegetarian:false,
        glutenFree:true,
        organic:false,
        baby:false,
        lowCalories:false,
        lowPrice:false,
        vegetable:false,
        meat:true,
        fruits:false,
        grains:false,
        src:"images/beef.jpg", //photo from http://www.ddmeishi.com/mszs/2020/0221/5054192.html
        price:18.67
    }
];
function restrictListProductsVegetable(prods,restriction){
    let product_names_v=[];
    prods.sort(function (x, y) {
        return x.price - y.price;
    });
    for(let i = 0;i<prods.length;i+=1){
        if((restriction=="Vegetarian") && (prods[i].vegetarian == true) && (prods[i].vegetable == true)){
            product_names_v.push(prods[i].name);
        }else if((restriction=="GlutenFree")&&(prods[i].glutenFree==true)&& (prods[i].vegetable == true)){
            product_names_v.push(prods[i].name);
        }else if((restriction=="VegetarianAndGlutenFree") && (prods[i].vegetarian==true)&&(prods[i].glutenFree==true)&&(prods[i].vegetable == true)){
            product_names_v.push(prods[i].name);
        }else if((restriction=="Organic")&&(prods[i].organic==true)&& (prods[i].vegetable == true)){
            product_names_v.push(prods[i].name);
        }else if((restriction == "Baby")&&(prods[i].baby == true)&& (prods[i].vegetable == true)){
            product_names_v.push(prods[i].name);
        }else if((restriction == "None") && (prods[i].vegetable == true)){
            product_names_v.push(prods[i].name);
        }else if((restriction == "LowPrice") &&(prods[i].lowPrice ==true)&& (prods[i].vegetable == true)){
            product_names_v.push(prods[i].name);
        }else if((restriction == "LowCalories")&&(prods[i].lowCalories == true)&& (prods[i].vegetable == true)){
            product_names_v.push(prods[i].name);
        }
    }
    return product_names_v;
}
function restrictListProductsMeat(prods,restriction){
    let product_names_m=[];
    prods.sort(function (x, y) {
        return x.price - y.price;
    });
    for(let i = 0;i<prods.length;i+=1){
        if((restriction=="Vegetarian") && (prods[i].vegetarian == true) && (prods[i].meat == true)){
            product_names_m.push(prods[i].name);
        }else if((restriction=="GlutenFree")&&(prods[i].glutenFree==true)&& (prods[i].meat == true)){
            product_names_m.push(prods[i].name);
        }else if((restriction=="VegetarianAndGlutenFree") && (prods[i].vegetarian==true)&&(prods[i].glutenFree==true)&&(prods[i].meat == true)){
            product_names_m.push(prods[i].name);
        }else if((restriction=="Organic")&&(prods[i].organic==true)&& (prods[i].meat == true)){
            product_names_m.push(prods[i].name);
        }else if((restriction == "Baby")&&(prods[i].baby == true)&& (prods[i].meat == true)){
            product_names_m.push(prods[i].name);
        }else if((restriction == "None") && (prods[i].meat == true)){
            product_names_m.push(prods[i].name);
        }else if((restriction == "LowPrice") &&(prods[i].lowPrice ==true)&& (prods[i].meat == true)){
            product_names_m.push(prods[i].name);
        }else if((restriction == "LowCalories")&&(prods[i].lowCalories == true)&& (prods[i].meat == true)){
            product_names_m.push(prods[i].name);
        }
    }
    return product_names_m;
}
function restrictListProductsFruits(prods,restriction){
    let product_names_f=[];
    prods.sort(function (x, y) {
        return x.price - y.price;
    });
    for(let i = 0;i<prods.length;i+=1){
        if((restriction=="Vegetarian") && (prods[i].vegetarian == true) && (prods[i].fruits == true)){
            product_names_f.push(prods[i].name);
        }else if((restriction=="GlutenFree")&&(prods[i].glutenFree==true)&& (prods[i].fruits == true)){
            product_names_f.push(prods[i].name);
        }else if((restriction=="VegetarianAndGlutenFree") && (prods[i].vegetarian==true)&&(prods[i].glutenFree==true)&&(prods[i].fruits == true)){
            product_names_f.push(prods[i].name);
        }else if((restriction=="Organic")&&(prods[i].organic==true)&& (prods[i].fruits == true)){
            product_names_f.push(prods[i].name);
        }else if((restriction == "Baby")&&(prods[i].baby == true)&& (prods[i].fruits == true)){
            product_names_f.push(prods[i].name);
        }else if((restriction == "None") && (prods[i].fruits == true)){
            product_names_f.push(prods[i].name);
        }else if((restriction == "LowPrice") &&(prods[i].lowPrice ==true)&& (prods[i].fruits == true)){
            product_names_f.push(prods[i].name);
        }else if((restriction == "LowCalories")&&(prods[i].lowCalories == true)&& (prods[i].fruits == true)){
            product_names_f.push(prods[i].name);
        }
    }
    return product_names_f;
}
function restrictListProductsGrains(prods,restriction){
    let product_names_g=[];
    prods.sort(function (x, y) {
        return x.price - y.price;
    });
    for(let i = 0;i<prods.length;i+=1){
        if((restriction=="Vegetarian") && (prods[i].vegetarian == true) && (prods[i].grains == true)){
            product_names_g.push(prods[i].name);
        }else if((restriction=="GlutenFree")&&(prods[i].glutenFree==true)&& (prods[i].grains== true)){
            product_names_g.push(prods[i].name);
        }else if((restriction=="VegetarianAndGlutenFree") && (prods[i].vegetarian==true)&&(prods[i].glutenFree==true)&&(prods[i].grains == true)){
            product_names_g.push(prods[i].name);
        }else if((restriction=="Organic")&&(prods[i].organic==true)&& (prods[i].grains == true)){
            product_names_g.push(prods[i].name);
        }else if((restriction == "Baby")&&(prods[i].baby == true)&& (prods[i].grains == true)){
            product_names_g.push(prods[i].name);
        }else if((restriction == "None") && (prods[i].grains == true)){
            product_names_g.push(prods[i].name);
        }else if((restriction == "LowPrice") &&(prods[i].lowPrice ==true)&& (prods[i].grains == true)){
            product_names_g.push(prods[i].name);
        }else if((restriction == "LowCalories")&&(prods[i].lowCalories == true)&& (prods[i].grains == true)){
            product_names_g.push(prods[i].name);
        }
    }
    return product_names_g;
}


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
        }else if((restriction == "Baby")&&(prods[i].baby == true)){
            product_names.push(prods[i].name);
        }else if(restriction == "None"){
            product_names.push(prods[i].name);
        }else if((restriction == "LowPrice") &&(prods[i].lowPrice ==true)){
            product_names.push(prods[i].name);
        }else if((restriction == "LowCalories")&&(prods[i].lowCalories == true)){
            product_names.push(prods[i].name);
        }
    }
    return product_names;
}
function restrictListProductsPriceVegetable(prods,restriction){
    let product_price_v=[];
    prods.sort(function (x, y) {
        return x.price - y.price;
    });
    for(let i = 0;i<prods.length;i+=1){
        if((restriction=="Vegetarian") && (prods[i].vegetarian == true)&& (prods[i].vegetable == true)){
            product_price_v.push(prods[i].price);
        }else if((restriction=="GlutenFree")&&(prods[i].glutenFree==true)&& (prods[i].vegetable == true)){
            product_price_v.push(prods[i].price);
        }else if((restriction=="VegetarianAndGlutenFree") && (prods[i].vegetarian==true)&&(prods[i].glutenFree==true)&& (prods[i].vegetable == true)){
            product_price_v.push(prods[i].price);
        }else if((restriction=="Organic")&&(prods[i].organic==true)&& (prods[i].vegetable == true)){
            product_price_v.push(prods[i].price);
        }else if((restriction == "None")&& (prods[i].vegetable == true)){
            product_price_v.push(prods[i].price);

        }else if((restriction == "Baby") &&(prods[i].baby == true)&& (prods[i].vegetable == true)){
            product_price_v.push(prods[i].price);
        }else if((restriction == "LowPrice") &&(prods[i].lowPrice == true)&& (prods[i].vegetable == true)){
            product_price_v.push(prods[i].price);
        }else if((restriction == "LowCalories") &&(prods[i].lowCalories == true)&& (prods[i].vegetable == true)){
            product_price_v.push(prods[i].price);
        }
    }
    
    return product_price_v;
}
function restrictListProductsPriceMeat(prods,restriction){
    let product_price_m=[];
    prods.sort(function (x, y) {
        return x.price - y.price;
    });
    for(let i = 0;i<prods.length;i+=1){
        if((restriction=="Vegetarian") && (prods[i].vegetarian == true)&& (prods[i].meat == true)){
            product_price_m.push(prods[i].price);
        }else if((restriction=="GlutenFree")&&(prods[i].glutenFree==true)&& (prods[i].meat == true)){
            product_price_m.push(prods[i].price);
        }else if((restriction=="VegetarianAndGlutenFree") && (prods[i].vegetarian==true)&&(prods[i].glutenFree==true)&& (prods[i].meat == true)){
            product_price_m.push(prods[i].price);
        }else if((restriction=="Organic")&&(prods[i].organic==true)&& (prods[i].meat == true)){
            product_price_m.push(prods[i].price);
        }else if((restriction == "None")&& (prods[i].meat == true)){
            product_price_m.push(prods[i].price);

        }else if((restriction == "Baby") &&(prods[i].baby == true)&& (prods[i].meat == true)){
            product_price_m.push(prods[i].price);
        }else if((restriction == "LowPrice") &&(prods[i].lowPrice == true)&& (prods[i].meat == true)){
            product_price_m.push(prods[i].price);
        }else if((restriction == "LowCalories") &&(prods[i].lowCalories == true)&& (prods[i].meat == true)){
            product_price_m.push(prods[i].price);
        }
    }
    
    return product_price_m;
}
function restrictListProductsPriceFruits(prods,restriction){
    let product_price_f=[];
    prods.sort(function (x, y) {
        return x.price - y.price;
    });
    for(let i = 0;i<prods.length;i+=1){
        if((restriction=="Vegetarian") && (prods[i].vegetarian == true)&& (prods[i].fruits == true)){
            product_price_f.push(prods[i].price);
        }else if((restriction=="GlutenFree")&&(prods[i].glutenFree==true)&& (prods[i].fruits == true)){
            product_price_f.push(prods[i].price);
        }else if((restriction=="VegetarianAndGlutenFree") && (prods[i].vegetarian==true)&&(prods[i].glutenFree==true)&& (prods[i].fruits == true)){
            product_price_f.push(prods[i].price);
        }else if((restriction=="Organic")&&(prods[i].organic==true)&& (prods[i].fruits== true)){
            product_price_f.push(prods[i].price);
        }else if((restriction == "None")&& (prods[i].fruits == true)){
            product_price_f.push(prods[i].price);

        }else if((restriction == "Baby") &&(prods[i].baby == true)&& (prods[i].fruits== true)){
            product_price_f.push(prods[i].price);
        }else if((restriction == "LowPrice") &&(prods[i].lowPrice == true)&& (prods[i].fruits == true)){
            product_price_f.push(prods[i].price);
        }else if((restriction == "LowCalories") &&(prods[i].lowCalories == true)&& (prods[i].fruits == true)){
            product_price_f.push(prods[i].price);
        }
    }
    
    return product_price_f;
}
function restrictListProductsPriceGrains(prods,restriction){
    let product_price_g=[];
    prods.sort(function (x, y) {
        return x.price - y.price;
    });
    for(let i = 0;i<prods.length;i+=1){
        if((restriction=="Vegetarian") && (prods[i].vegetarian == true)&& (prods[i].grains == true)){
            product_price_g.push(prods[i].price);
        }else if((restriction=="GlutenFree")&&(prods[i].glutenFree==true)&& (prods[i].grains == true)){
            product_price_g.push(prods[i].price);
        }else if((restriction=="VegetarianAndGlutenFree") && (prods[i].vegetarian==true)&&(prods[i].glutenFree==true)&& (prods[i].grains == true)){
            product_price_g.push(prods[i].price);
        }else if((restriction=="Organic")&&(prods[i].organic==true)&& (prods[i].grains == true)){
            product_price_g.push(prods[i].price);
        }else if((restriction == "None")&& (prods[i].grains == true)){
            product_price_g.push(prods[i].price);

        }else if((restriction == "Baby") &&(prods[i].baby == true)&& (prods[i].grains == true)){
            product_price_g.push(prods[i].price);
        }else if((restriction == "LowPrice") &&(prods[i].lowPrice == true)&& (prods[i].grains == true)){
            product_price_g.push(prods[i].price);
        }else if((restriction == "LowCalories") &&(prods[i].lowCalories == true)&& (prods[i].grains == true)){
            product_price_g.push(prods[i].price);
        }
    }
    
    return product_price_g;
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

        }else if((restriction == "Baby") &&(prods[i].baby == true)){
            product_price.push(prods[i].price);
        }else if((restriction == "LowPrice") &&(prods[i].lowPrice == true)){
            product_price.push(prods[i].price);
        }else if((restriction == "LowCalories") &&(prods[i].lowCalories == true)){
            product_price.push(prods[i].price);
        }
    }
    
    return product_price;
}

function restrictListProductsImageVegetable(prods,restriction){
    let product_image_v=[];
    prods.sort(function (x, y) {
        return x.price - y.price;
    });
    for(let i = 0;i<prods.length;i+=1){
        if((restriction=="Vegetarian") && (prods[i].vegetarian == true)&&(prods[i].vegetable == true)){
            product_image_v.push(prods[i].src);
        }else if((restriction=="GlutenFree")&&(prods[i].glutenFree==true)&&(prods[i].vegetable == true)){
            product_image_v.push(prods[i].src);
        }else if((restriction=="VegetarianAndGlutenFree") && (prods[i].vegetarian==true)&&(prods[i].glutenFree==true)&&(prods[i].vegetable == true)){
            product_image_v.push(prods[i].src);
        }else if((restriction=="Organic")&&(prods[i].organic==true)&&(prods[i].vegetable == true)){
            product_image_v.push(prods[i].src);
        }else if((restriction == "None")&&(prods[i].vegetable == true)){
            product_image_v.push(prods[i].src);

        }else if((restriction == "Baby") &&(prods[i].baby == true)&&(prods[i].vegetable == true)){
            product_image_v.push(prods[i].src);
        }else if((restriction == "LowPrice") &&(prods[i].lowPrice == true)&&(prods[i].vegetable == true)){
            product_image_v.push(prods[i].src);
        }else if((restriction == "LowCalories") &&(prods[i].lowCalories == true)&&(prods[i].vegetable == true)){
            product_image_v.push(prods[i].src);
        }
    }
    
    return product_image_v;


}
function restrictListProductsImageMeat(prods,restriction){
    let product_image_m=[];
    prods.sort(function (x, y) {
        return x.price - y.price;
    });
    for(let i = 0;i<prods.length;i+=1){
        if((restriction=="Vegetarian") && (prods[i].vegetarian == true)&&(prods[i].meat == true)){
            product_image_m.push(prods[i].src);
        }else if((restriction=="GlutenFree")&&(prods[i].glutenFree==true)&&(prods[i].meat == true)){
            product_image_m.push(prods[i].src);
        }else if((restriction=="VegetarianAndGlutenFree") && (prods[i].vegetarian==true)&&(prods[i].glutenFree==true)&&(prods[i].meat == true)){
            product_image_m.push(prods[i].src);
        }else if((restriction=="Organic")&&(prods[i].organic==true)&&(prods[i].meat == true)){
            product_image_m.push(prods[i].src);
        }else if((restriction == "None")&&(prods[i].meat == true)){
            product_image_m.push(prods[i].src);

        }else if((restriction == "Baby") &&(prods[i].baby == true)&&(prods[i].meat == true)){
            product_image_m.push(prods[i].src);
        }else if((restriction == "LowPrice") &&(prods[i].lowPrice == true)&&(prods[i].meat == true)){
            product_image_m.push(prods[i].src);
        }else if((restriction == "LowCalories") &&(prods[i].lowCalories == true)&&(prods[i].meat == true)){
            product_image_m.push(prods[i].src);
        }
    }
    
    return product_image_m;


}
function restrictListProductsImageFruits(prods,restriction){
    let product_image_f=[];
    prods.sort(function (x, y) {
        return x.price - y.price;
    });
    for(let i = 0;i<prods.length;i+=1){
        if((restriction=="Vegetarian") && (prods[i].vegetarian == true)&&(prods[i].fruits == true)){
            product_image_f.push(prods[i].src);
        }else if((restriction=="GlutenFree")&&(prods[i].glutenFree==true)&&(prods[i].fruits == true)){
            product_image_f.push(prods[i].src);
        }else if((restriction=="VegetarianAndGlutenFree") && (prods[i].vegetarian==true)&&(prods[i].glutenFree==true)&&(prods[i].fruits == true)){
            product_image_f.push(prods[i].src);
        }else if((restriction=="Organic")&&(prods[i].organic==true)&&(prods[i].fruits == true)){
            product_image_f.push(prods[i].src);
        }else if((restriction == "None")&&(prods[i].fruits == true)){
            product_image_f.push(prods[i].src);

        }else if((restriction == "Baby") &&(prods[i].baby == true)&&(prods[i].fruits == true)){
            product_image_f.push(prods[i].src);
        }else if((restriction == "LowPrice") &&(prods[i].lowPrice == true)&&(prods[i].fruits == true)){
            product_image_f.push(prods[i].src);
        }else if((restriction == "LowCalories") &&(prods[i].lowCalories == true)&&(prods[i].fruits == true)){
            product_image_f.push(prods[i].src);
        }
    }
    
    return product_image_f;


}
function restrictListProductsImageGrains(prods,restriction){
    let product_image_g=[];
    prods.sort(function (x, y) {
        return x.price - y.price;
    });
    for(let i = 0;i<prods.length;i+=1){
        if((restriction=="Vegetarian") && (prods[i].vegetarian == true)&&(prods[i].grains == true)){
            product_image_g.push(prods[i].src);
        }else if((restriction=="GlutenFree")&&(prods[i].glutenFree==true)&&(prods[i].grains == true)){
            product_image_g.push(prods[i].src);
        }else if((restriction=="VegetarianAndGlutenFree") && (prods[i].vegetarian==true)&&(prods[i].glutenFree==true)&&(prods[i].grains == true)){
            product_image_g.push(prods[i].src);
        }else if((restriction=="Organic")&&(prods[i].organic==true)&&(prods[i].grains == true)){
            product_image_g.push(prods[i].src);
        }else if((restriction == "None")&&(prods[i].grains == true)){
            product_image_g.push(prods[i].src);

        }else if((restriction == "Baby") &&(prods[i].baby == true)&&(prods[i].grains == true)){
            product_image_g.push(prods[i].src);
        }else if((restriction == "LowPrice") &&(prods[i].lowPrice == true)&&(prods[i].grains == true)){
            product_image_g.push(prods[i].src);
        }else if((restriction == "LowCalories") &&(prods[i].lowCalories == true)&&(prods[i].grains == true)){
            product_image_g.push(prods[i].src);
        }
    }
    
    return product_image_g;


}

function restrictListProductsImage(prods,restriction){
    let product_image=[];
    prods.sort(function (x, y) {
        return x.price - y.price;
    });
    for(let i = 0;i<prods.length;i+=1){
        if((restriction=="Vegetarian") && (prods[i].vegetarian == true)){
            product_image.push(prods[i].src);
        }else if((restriction=="GlutenFree")&&(prods[i].glutenFree==true)){
            product_image.push(prods[i].src);
        }else if((restriction=="VegetarianAndGlutenFree") && (prods[i].vegetarian==true)&&(prods[i].glutenFree==true)){
            product_image.push(prods[i].src);
        }else if((restriction=="Organic")&&(prods[i].organic==true)){
            product_image.push(prods[i].src);
        }else if(restriction == "None"){
            product_image.push(prods[i].src);

        }else if((restriction == "Baby") &&(prods[i].baby == true)){
            product_image.push(prods[i].src);
        }else if((restriction == "LowPrice") &&(prods[i].lowPrice == true)){
            product_image.push(prods[i].src);
        }else if((restriction == "LowCalories") &&(prods[i].lowCalories == true)){
            product_image.push(prods[i].src);
        }
    }
    
    return product_image;


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
/*
function getPrice(chosenProducts){
    var tmp;
    for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			tmp = product[i].name;
		}
    }
    return tmp;
}
*/