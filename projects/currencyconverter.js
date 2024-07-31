//practice  program 1

/*let data="data is present";

class user{
  constructor(name,email){
    this.name=name;
    this.email=email;
  }
  viewData(){
    console.log("data:",data);
  }
}
class admin extends user{
  constructor(name,email,secretId){
    super(name,email)
    this.secretId=secretId;
  }
  editdata(){
    data="admin can edit data whenever it is required";
    console.log("data:",data);
  }
}
let obj=new user("pradeep","badupradeep123@gmail.com");
let obj2=new user("mohan","tatemohan420@gmail.com");
let obj3=new user("suyog","ghodasuyog69@gmial.com");
let adminobj=new admin("daddy","mrdaddyoff123@gmail.com","#$%sfgfdg534");
adminobj.editdata();*/



//another practice problem:
/*class principal{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  pdata(){
    console.log("principal is present");
  }
}
class teacher extends principal{
  constructor(name,age,department){
    super(name,age)
    this.department=department;
  }
  tdata(){
    console.log("teachers data is presernt");
  }
}
class student extends teacher{
constructor(name,age,department,usn){
  super(name,age,department)
  this.usn=usn;
}
sdata(){
  console.log("students data is presented");
}
}
let sobj=new student("pradeep","20","cse","1nt22cs133");
let pobj =new principal("nagaraj","55");
let tobj =new teacher("jayashree depti Barve","36","CSE");
pobj.pdata();
tobj.tdata();
sobj.sdata();*/



//practice problem 3
//asynshronous program
/*console.log("hello");
console.log("world");
console.log('welcome ');
console.log("to my youtube");
setTimeout(()=>{
  console.log("channel ");
},6000);*/


// asynchronous practice 1

/*class vehilce{
  constructor(manufacturer_company,year_of_manufacture){
    this.manufacturer_company=manufacturer_company;
    this.year_of_manufacture=year_of_manufacture;
    setTimeout((vehilce) => {
      console.log(vehicleobj);
    },7000);
  }
}
class car extends vehilce{
  constructor(name,car_type,){
    super(vehilce)
    this.name=name;
    this.car_type=car_type;
    setTimeout((car) => {
      console.log(carobj);
    },8000);
  }
}
class bike extends vehilce{
  constructor(name,bike_type,milege){
    super(vehilce)
    this.name=name;
    this.bike_type=bike_type;
    setTimeout((bike) => {
      console.log(bikeobj);
    }, 9000);
  }
}
let vehicleobj=new vehilce("volkswagen","1995");
let carobj=new car("volkswagen","2010","Maserati","sedan");
let bikeobj=new bike("bajaj motors","2016","bajaj","Naked shaped","35km/hr");*/



// callback function:
/*function pradeep(name,callback){
  setTimeout(() => {
    console.log("name:",name);
    callback();
  }, 3000);
  
}
let prashant="prashant";let lucky="lucky";let prince="prince";let ghoda="ghoda";
pradeep(prashant,()=>{
pradeep(lucky,()=>{
  pradeep(prince,()=>{
    pradeep(ghoda,()=>{

    });
  });
});
});*/


//callback  function another problem
/*console.log("vehicle names:");
function vehicle(name,callback){
  setTimeout(() => {
    console.log(name);
    callback();
  }, 2000);
}
let volkswagen="volkswagen";
let lamborghinni="lamborghinni";
let bugatti="bugatti";
let  porche="porche";
let mahindra="Thar";let kia="saltos";let honda="Amaze";let hyundai="creata";let tata="nexon";
vehicle(volkswagen,()=>{
  vehicle(lamborghinni,()=>{
    vehicle(bugatti,()=>{
      vehicle(porche,()=>{
        vehicle(mahindra,()=>{
          vehicle(kia,()=>{
            vehicle(honda,()=>{
              vehicle(hyundai,()=>{
                vehicle(tata,()=>{})
              });
            });
          });
        });
        });
    });
  });
});*/


// callbback  practice exercise3
/*console.log("Names of IT Company");
function iTCompany(S_NO,name,year,callback){
  setTimeout(() => {
    console.log(`S.no:${S_NO}\tName:${name}\t\tYear:${year}`);
    callback();
  }, 3500);
}
let wipro={S_NO:"1",name:"wipro",year:"1992"};
let cognizant={S_NO:"2",name:"cognizant",year:"1890"};
let infyosis={S_NO:"3",name:"infyosis",year:"1956"};
let amazon={S_NO:"4",name:"amazon",year:"1869"};          //this callback is called callbackhell or pyramid of doom in jasvascript
let spaceX={S_NO:"5",name:"spaceX",year:"1977"};
let wallmart={S_NO:"6",name:"wallmart",year:"1968"};
iTCompany(wipro.S_NO, wipro.name, wipro.year, ()=>{
  iTCompany(cognizant.S_NO,cognizant.name,cognizant.year,()=>{
    iTCompany(infyosis.S_NO,infyosis.name,infyosis.year,()=>{
      iTCompany(amazon.S_NO,amazon.name,amazon.year,()=>{
        iTCompany(spaceX.S_NO,spaceX.name,spaceX.year,()=>{
          iTCompany(wallmart.S_NO,wallmart.name,wallmart.year,()=>{
          });
        });
      });
    });
  });
});*/




//promises :it is like making a promise or trust to the customer to ensure that their product will be fullfilled or get rejected
/*let makepromise=()=>{
  return new Promise((resolve, reject) => {
    console.log("i am a promise");
    if(makepromise){
      resolve("success");
    }
    else{
      reject("server disconnected!!");
    }
  })
}
let promise=makepromise();
promise.then((res)=>{
  console.log("promise fullfilled successfully.");//if promise fulfilled it is printed

})
promise.catch((err)=>{
  console.log("failed to fullfill promise !");//if promise failed this line is printed
})*/






//promise chaining:using then or catch within a then or catch promises 
/*function asyfunction1(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    },4000 );
  });
}
function asyfunction2(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    },4000 );
  });
}
console.log("fetching data1.......");
asyfunction1().then((res)=>{
  console.log("fetching data2.......");
  return asyfunction2();
  }).then((res)=>{
    console.log("all data fetched...");
  });*/





//async-await :used to decrease the bulkyness of the code and make the reader to understand the code easier and make it simpler
/*function getdata(dataId){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("data:",dataId);
      if(dataId!=4){
         resolve("success");
      }
      else{
        reject("Failed to maintain the promise"+dataId);
      }
    }, 2000);
  });
}
async function getAllData(){
  try{
    console.log("Getting Data1.......");
  await getdata(1);
  console.log("Getting Data2.......");
  await getdata(2);
  console.log("Getting Data3.......");
  await getdata(3);
  console.log("Getting Data4.......");
  await getdata(4);
  console.log("Getting Data5.......");
  await getdata(5);
  console.log("Getting Data6.......");
  await getdata(6);
  console.log("Getting Data7.......");
  await getdata(7);
  }
  catch(err){
console.log("error occured while executing the code!!!",err);
  }
}
getAllData();*/



//same the above async await function but a little change in the values 
/*function getdata(dataId){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("data:",dataId);
      if(dataId===4){
        reject("Failed to maintain the promise"+dataId);
      }
      else{
        resolve("success");
      }
    }, 2000);
  });
}
async function getAllData(){
  try{
    console.log("Getting Data1.......");
  await getdata(1);
  console.log("Getting Data2.......");
  await getdata(2);
  console.log("Getting Data3.......");
  await getdata(3);
  console.log("Getting Data4.......");
  await getdata(4);
  console.log("Getting Data5.......");
  await getdata(5);
  console.log("Getting Data6.......");
  await getdata(6);
  console.log("Getting Data7.......");
  await getdata(7);
  }
  catch(error){
console.log("error occured while executing the code!!!",error);
  }
}
getAllData();*/





//api fetchting demonstration:1
/*let url="https://api.waifu.pics/type/category"
let btn=document.querySelector('#butt');

const getanime= async()=>{
console.log("fetching data....");
let response=await fetch(url);
console.log(response);
}*/




//code for currency converter 
const BASE_URL =
"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
