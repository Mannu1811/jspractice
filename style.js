var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var list = ul.children;


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(createDeleteBtn() );
	li.addEventListener("click", toggleListClassDone);
	li.children[0].addEventListener("click", deleteList);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {	
	if(inputLength() != 0) {
		createListElement();
	}
}

function addListAfterkeypress(event) {	
	if(inputLength() != 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleListClassDone() {
	this.classList.toggle("done");
}

function deleteList() {
    this.parentElement.remove();
}

function createDeleteBtn() {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	return btn;
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterkeypress);

for(var i = 0; i < list.length; i++) {
	list[i].addEventListener("click", toggleListClassDone);	
	list[i].appendChild(createDeleteBtn() );
	list[i].children[0].addEventListener("click", deleteList);
}





/*


SELECTORS

-- getElementsByTagName --
-- getElementsByClassName --
-- getElementsByID --

-- querySector --
-- querySectorAll --



GET & SET ATTRIBUTE
-- getAttribute("attribute name") --		/get attribute name / /element.getAttribute("attribute name")
-- setAttribute("attr", "new") --   	/ change value of attribute to new  / / element.setAttribute("attr", "new attribute name");


-- className("class name") --  /element.className("xyz")  /add class xyz to that element

-- classList --     / add classes or get classes /
	add, remove, toggle

-- parentElement("Element") --	/ gets parent /
-- Children("Element") --  / gets children /


EVENTS
addEventListner   


CREATE ELEMENT
-- createElement("Element") --   / document.createElement("li"); / 
/ creates element /

-- appendChild() /element.apendchild()



**/
