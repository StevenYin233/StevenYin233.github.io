//code line 46-369 are inspired from professor,https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module2-Grocery/scripts/main.js
//code line 11-44 are inspired from https://www.w3schools.com/howto




document.getElementById("displayProduct2").style.fontSize = "xx-large";
document.getElementById("displayProduct3").style.fontSize = "xx-large";
document.getElementById("displayProduct4").style.fontSize = "xx-large";
document.getElementById("displayProduct5").style.fontSize = "xx-large";

function openChoice(evt, Name) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent2");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks1");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(Name).style.display = "block";
	evt.currentTarget.className += " active";
  }


function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("breadcrumb");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}
function populateListProductChoicesforVegetables(slct1,slct2){
	var s1 = document.getElementById(slct1);
	var s2 = document.getElementById(slct2);
	var output ="Here is your cart which is based on you"+'&nbsp;'+s1.value+'&nbsp;'+"preference";
	
	document.getElementById("content").style.fontSize = "large";
	document.getElementById("content").style.fontStyle = "italic";
	document.getElementById("content").style.color = "red"
	document.getElementById("content").innerHTML = output;
		// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
		s2.innerHTML = "";
		
		// obtain a reduced list of products based on restrictions
		var optionArray = restrictListProductsVegetable(products, s1.value);
		var optionImage = restrictListProductsImageVegetable(products,s1.value);
		var optionPrice = restrictListProductsPriceVegetable(products,s1.value);
		// for each item in the array, create a checkbox element, each containing information such as:
		// <input type="checkbox" name="product" value="Bread">
		// <label for="Bread">Bread/label><br>
			
		for (i = 0; i < optionArray.length; i++) {
			var DOM_img = document.createElement("img");
			var productName = optionArray[i];
			DOM_img.src = optionImage[i];
	
			//var tmp3 = optionImage[i];
			var tmp2 = optionPrice[i];
			// create the checkbox and add in HTML DOM
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s2.appendChild(checkbox);
	
			
			// create a label for the checkbox, and also add in HTML DOM
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.htmlFor = tmp2;
			//label.htmlFor = tmp3;
			label.appendChild(document.createTextNode(productName));
			label.appendChild(document.createTextNode(tmp2));
			//label.appendChild(document.createTextNode('<img src="'+DOM_img+'">'));
		
			//label.appendChild(document.innerHTML(tmp3));
			//DOM_img.setAttribute("src","test.PNG");
			DOM_img.setAttribute("height",70);
			DOM_img.setAttribute("width",70);
			s2.appendChild(label);
			s2.appendChild(DOM_img);
			// create a breakline node and add in HTML DOM
			 
			s2.appendChild(document.createElement("br"));    
			s2.appendChild(document.createElement("br")); 
			s2.appendChild(document.createElement("br"));
		}
}
function populateListProductChoicesforMeat(slct1,slct2){
	var s1 = document.getElementById(slct1);
	var s2 = document.getElementById(slct2);
	var output ="Here is your cart which is based on you"+'&nbsp;'+s1.value+'&nbsp;'+"preference";
	
	document.getElementById("content").style.fontSize = "large";
	document.getElementById("content").style.fontStyle = "italic";
	document.getElementById("content").style.color = "red"
	document.getElementById("content").innerHTML = output;
		// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
		s2.innerHTML = "";
		
		// obtain a reduced list of products based on restrictions
		var optionArray = restrictListProductsMeat(products, s1.value);
		var optionImage = restrictListProductsImageMeat(products,s1.value);
		var optionPrice = restrictListProductsPriceMeat(products,s1.value);
		// for each item in the array, create a checkbox element, each containing information such as:
		// <input type="checkbox" name="product" value="Bread">
		// <label for="Bread">Bread/label><br>
			
		for (i = 0; i < optionArray.length; i++) {
			var DOM_img = document.createElement("img");
			var productName = optionArray[i];
			DOM_img.src = optionImage[i];
	
			//var tmp3 = optionImage[i];
			var tmp2 = optionPrice[i];
			// create the checkbox and add in HTML DOM
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s2.appendChild(checkbox);
	
			
			// create a label for the checkbox, and also add in HTML DOM
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.htmlFor = tmp2;
			//label.htmlFor = tmp3;
			label.appendChild(document.createTextNode(productName));
			label.appendChild(document.createTextNode(tmp2));
			//label.appendChild(document.createTextNode('<img src="'+DOM_img+'">'));
		
			//label.appendChild(document.innerHTML(tmp3));
			//DOM_img.setAttribute("src","test.PNG");
			DOM_img.setAttribute("height",70);
			DOM_img.setAttribute("width",70);
			s2.appendChild(label);
			s2.appendChild(DOM_img);
			// create a breakline node and add in HTML DOM
			 
			s2.appendChild(document.createElement("br"));    
			s2.appendChild(document.createElement("br")); 
			s2.appendChild(document.createElement("br"));
		}
}
function populateListProductChoicesforFruits(slct1,slct2){
	var s1 = document.getElementById(slct1);
	var s2 = document.getElementById(slct2);
	var output ="Here is your cart which is based on you"+'&nbsp;'+s1.value+'&nbsp;'+"preference";
	
	document.getElementById("content").style.fontSize = "large";
	document.getElementById("content").style.fontStyle = "italic";
	document.getElementById("content").style.color = "red"
	document.getElementById("content").innerHTML = output;
		// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
		s2.innerHTML = "";
		
		// obtain a reduced list of products based on restrictions
		var optionArray = restrictListProductsFruits(products, s1.value);
		var optionImage = restrictListProductsImageFruits(products,s1.value);
		var optionPrice = restrictListProductsPriceFruits(products,s1.value);
		// for each item in the array, create a checkbox element, each containing information such as:
		// <input type="checkbox" name="product" value="Bread">
		// <label for="Bread">Bread/label><br>
			
		for (i = 0; i < optionArray.length; i++) {
			var DOM_img = document.createElement("img");
			var productName = optionArray[i];
			DOM_img.src = optionImage[i];
	
			//var tmp3 = optionImage[i];
			var tmp2 = optionPrice[i];
			// create the checkbox and add in HTML DOM
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s2.appendChild(checkbox);
	
			
			// create a label for the checkbox, and also add in HTML DOM
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.htmlFor = tmp2;
			//label.htmlFor = tmp3;
			label.appendChild(document.createTextNode(productName));
			label.appendChild(document.createTextNode(tmp2));
			//label.appendChild(document.createTextNode('<img src="'+DOM_img+'">'));
		
			//label.appendChild(document.innerHTML(tmp3));
			//DOM_img.setAttribute("src","test.PNG");
			DOM_img.setAttribute("height",70);
			DOM_img.setAttribute("width",70);
			s2.appendChild(label);
			s2.appendChild(DOM_img);
			// create a breakline node and add in HTML DOM
			 
			s2.appendChild(document.createElement("br"));    
			s2.appendChild(document.createElement("br")); 
			s2.appendChild(document.createElement("br"));
		}
}
function populateListProductChoicesforGrains(slct1,slct2){
	var s1 = document.getElementById(slct1);
	var s2 = document.getElementById(slct2);
		
	var output ="Here is your cart which is based on you"+'&nbsp;'+s1.value+'&nbsp;'+"preference";
	
	document.getElementById("content").style.fontSize = "large";
	document.getElementById("content").style.fontStyle = "italic";
	document.getElementById("content").style.color = "red"
	document.getElementById("content").innerHTML = output;
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
		s2.innerHTML = "";
		
		// obtain a reduced list of products based on restrictions
		var optionArray = restrictListProductsGrains(products, s1.value);
		var optionImage = restrictListProductsImageGrains(products,s1.value);
		var optionPrice = restrictListProductsPriceGrains(products,s1.value);
		// for each item in the array, create a checkbox element, each containing information such as:
		// <input type="checkbox" name="product" value="Bread">
		// <label for="Bread">Bread/label><br>
			
		for (i = 0; i < optionArray.length; i++) {
			var DOM_img = document.createElement("img");
			var productName = optionArray[i];
			DOM_img.src = optionImage[i];
	
			//var tmp3 = optionImage[i];
			var tmp2 = optionPrice[i];
			// create the checkbox and add in HTML DOM
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s2.appendChild(checkbox);
	
			
			// create a label for the checkbox, and also add in HTML DOM
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.htmlFor = tmp2;
			//label.htmlFor = tmp3;
			label.appendChild(document.createTextNode(productName));
			label.appendChild(document.createTextNode(tmp2));
			//label.appendChild(document.createTextNode('<img src="'+DOM_img+'">'));
		
			//label.appendChild(document.innerHTML(tmp3));
			//DOM_img.setAttribute("src","test.PNG");
			DOM_img.setAttribute("height",70);
			DOM_img.setAttribute("width",70);
			s2.appendChild(label);
			s2.appendChild(DOM_img);
			// create a breakline node and add in HTML DOM
			 
			s2.appendChild(document.createElement("br"));    
			s2.appendChild(document.createElement("br")); 
			s2.appendChild(document.createElement("br"));
		}
}

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	//var tmp3 = document.getElementById(slct1).style.height = "50px";
	var output ="Here is your cart which is based on you"+'&nbsp;'+s1.value+'&nbsp;'+"preference";
	
	document.getElementById("content").style.fontSize = "large";
	document.getElementById("content").style.fontStyle = "italic";
	document.getElementById("content").style.color = "red"
	document.getElementById("content").innerHTML = output;

	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value);
	var optionImage = restrictListProductsImage(products,s1.value);
    var optionPrice = restrictListProductsPrice(products,s1.value);
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
		var DOM_img = document.createElement("img");
        var productName = optionArray[i];
		DOM_img.src = optionImage[i];

		//var tmp3 = optionImage[i];
        var tmp2 = optionPrice[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);

		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
        label.htmlFor = productName;
		label.htmlFor = tmp2;
		//label.htmlFor = tmp3;
        label.appendChild(document.createTextNode(productName));
		label.appendChild(document.createTextNode(tmp2));
		//label.appendChild(document.createTextNode('<img src="'+DOM_img+'">'));
	
		//label.appendChild(document.innerHTML(tmp3));
		//DOM_img.setAttribute("src","test.PNG");
		DOM_img.setAttribute("height",70);
		DOM_img.setAttribute("width",70);
		s2.appendChild(label);
		s2.appendChild(DOM_img);
		// create a breakline node and add in HTML DOM
         
		s2.appendChild(document.createElement("br"));    
		s2.appendChild(document.createElement("br")); 
		s2.appendChild(document.createElement("br"));
        
        
    }   
}

	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price


function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));

			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
			
		}
	}
	document.getElementById("displayCart").style.fontSize = "xx-large";	
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}