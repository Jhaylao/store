const startRegBtn= document.querySelector(".start-registration_btn");
const registerModal= document.querySelector(".register_modal")
const backDrop= document.querySelector(".backdrop")
const wrapperSave=document.querySelector(".wrapperSave")
const landingPage=document.querySelector(".landing_page")
const backDrophandler=()=>{
    registerModal.classList.remove("visible")
    backDrop.classList.remove("visible")
    wrapper3.classList.remove("visible")
    deleteModal.classList.remove('visible')
    wrapperSave.classList.remove("visible")
    
}
const registerModalHandler=()=>{
    registerModal.classList.toggle("visible");
    backDrop.classList.toggle("visible")
}
startRegBtn.addEventListener("click",registerModalHandler)
backDrop.addEventListener("click",backDrophandler)

const registerBtn=document.querySelector(".regContainer_btn");
const wrapper2=document.getElementsByClassName("wrapper2")[0]
const wrapper1=document.getElementsByClassName("wrapper")[0]
const inputs=registerModal.querySelectorAll("input")
const welcome=document.querySelectorAll("span")

const userNameStyle=()=>{
    let userNames= inputs[1].value.toUpperCase()
    welcome.forEach(element => {
        element.textContent=`${userNames}.`
        element.style.color="#d4d925"
      });
}
const userNameCollector=()=>{
    if(inputs[0].value===""||inputs[1].value===""){
        return  alert("please enter valid details")
    } else if(inputs[0].value!==""|| inputs[1].value!==""){
    userNameStyle()
    wrapper2.classList.add("visible")
    landingPage.classList.add("invisible")
   wrapper1.classList.toggle("invisible")
   registerModalHandler()
   inputs[0].value=""
   inputs[1].value=""
   
}}
registerBtn.addEventListener("click",userNameCollector)

const addMoreBtn=document.querySelector(".addmore")
const wrapper3=document.querySelector(".wrapper3")
const cancelBtn=document.querySelector(".no")

const addMoreBtnHandler=()=>{
    productList.classList.remove("invisible")
    wrapper3.classList.toggle("visible")
    backDrop.classList.toggle("visible")
    
}

addMoreBtn.addEventListener("click",addMoreBtnHandler)
cancelBtn.addEventListener("click", addMoreBtnHandler)

let products=[]
const productList=document.querySelector(".product_list")
const confirmAddbtn=document.querySelector(".yes")

const deleteModal=document.querySelector(".delete_modal")
const deleteProductModalHandler=()=>{
    deleteModal.classList.toggle('visible')
    backDrop.classList.toggle("visible")

}
const btnDanger=deleteModal.lastElementChild.firstElementChild.addEventListener("click",backDrophandler)
const btnPassive=deleteModal.lastElementChild.lastElementChild;
const renderProduct=(titles,images,descriptions)=>{
    let newLi=document.createElement("li")
    newLi.className="product_element"
    newLi.innerHTML=
    `
    <div class="product_element_image">
    <img src="${images}" alt="${titles}" class="product_image">
    </div>
    <div class="product_element_info">
    <h2 class="product_h2">${titles}</h2>
    <p class="product_p">${descriptions}</p>
    </div>
     `
     newLi.addEventListener("click", ()=>{
        deleteProductModalHandler()
        let selectedEvent=event.currentTarget
        btnPassive.addEventListener("click",()=>{
        selectedEvent.remove()
        backDrophandler()
        
        })
     })
  productList.append(newLi)
}
const saveBtnsModal1=document.querySelector(".save_btns").firstElementChild
const saveBtnsModal2=document.querySelector(".save_btns").lastElementChild

const saveBtns=()=>{
    if(products.length>0){
        saveBtnsModal1.classList.add("visible")
        saveBtnsModal2.classList.add("visible")
    }
}

const userProductParameters=wrapper3.querySelectorAll("input")
const newProductCreator=()=>{
 let title= userProductParameters[0].value.toUpperCase();
 let image=userProductParameters[1].value
 let description=userProductParameters[2].value.toString()
if(description.length<49){
 let productObj={
     titles:title,
     images:image,
     descriptions:description
 }
 saveBtns()
 products.push(productObj)
 console.log(products)
 renderProduct(title, image,description)
 
 addMoreBtnHandler()


 userProductParameters[0].value=""
 userProductParameters[1].value=""
 userProductParameters[2].value=""
}else{
    alert("enter description less than 50 words")
}
}
confirmAddbtn.addEventListener("click",newProductCreator)


const saveBtn=saveBtnsModal1.firstElementChild
const saveWrapper=document.querySelector(".wrapperSave")
saveBtn.addEventListener("click",()=>{
    saveWrapper.classList.toggle("visible")
    backDrop.classList.toggle("visible")
})
const modal2=document.querySelector(".modal-2")
const collectionAvi=document.getElementById("collection_avi")
const modal2Inputs=modal2.firstElementChild.lastElementChild;
const select=document.querySelector("#collection_selection")
const collection=document.getElementsByClassName("collection")[0]
const done=document.querySelector(".done")
const doneBtn=document.querySelector(".donebtn")
doneBtn.addEventListener("click",()=>{
    wrapper2.classList.remove("visible")
    collection.classList.toggle("visible")
    done.classList.toggle("visible")

})

let myCollection=[]
const renderedCollection=(images,collectionNames,categories)=>{
    const collectionList= document.querySelector(".collections_list")
    let newCollectLi=document.createElement("li")
    newCollectLi.className="product_element"
    newCollectLi.innerHTML=
    `
    <div class="product_element_image">
    <img src="${images}" alt="${collectionNames}" class="product_image">
    </div>
    <div class="product_element_info">
    <h2 class="product_h2">${categories}</h2>
    </div>
    `

    let collectionObj={
        collectionTitle:collectionNames,
        collectionNiche:categories
    }
    newCollectLi.addEventListener("click",()=>{
        collection.classList.remove("visible")
        wrapper2.classList.toggle("visible")
        saveBtnsModal1.classList.remove("visible")
        saveBtnsModal2.classList.remove("visible")
        done.classList.toggle("visible")
        
    })
    console.log(myCollection)
    myCollection.push(collectionObj)
    collectionList.append(newCollectLi)
    backDrophandler()
    wrapper2.classList.toggle("visible")
    collection.classList.add("visible")
    addMoreBtn.classList.add("invisible")
    

}

const addCollection=document.getElementById("add")

function collectionDetails() {
    let collectionName = modal2Inputs.value.toUpperCase();
    let image = collectionAvi.value.toString();
    let collectionCategory = select.options[select.selectedIndex].text;

    renderedCollection(image, collectionName, collectionCategory);


}

const addnewbtn=document.querySelector(".addnewbtn")
const addNewBtnHandler=()=>{
    wrapper2.classList.toggle("visible")
    productList.classList.add("invisible")
    saveBtnsModal1.classList.toggle("visible")
    saveBtnsModal2.classList.toggle("visible")
    addMoreBtn.classList.remove("invisible")
    

}
addnewbtn.addEventListener("click",addNewBtnHandler)

addCollection.addEventListener("click",collectionDetails)
