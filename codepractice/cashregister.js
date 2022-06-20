
// //Currency Lookup Table
// function currency() {
//     let values = [
//       ["PENNY", .01], 
//       ["NICKEL", .05], 
//       ["DIME", .1], 
//       ["QUARTER", .25], 
//       ["ONE", 1], 
//       ["FIVE", 5], 
//       ["TEN", 10], 
//       ["TWENTY", 20], 
//       ["ONE HUNDRED", 100]]
  
//       return values.reverse()
  
//   }
  
  
  
//   //MAIN
//   function checkCashRegister(price, cash, cid) {
  
  
//   //CheckSum
//   let sumArr = []
  
//   cid.forEach((x,i,a) => {
//     sumArr.push(a[i][1])
//   })
  
  
//   let sum = sumArr.reduce((p, c) => {
//     return p + c
//   }, 0)
  
//   let totalInRegister = sum.toFixed(2)
//   console.log("TOTAL IN REGISTER", totalInRegister)
  
  
  
  
//     let changeAmt = (cash - price).toFixed(2)
//     let revCid = cid.reverse()
//     const check = {
//       status: "OPEN",
//       change: []
//     }
  
  
  
//   //ForEach
//       console.log("INITIAL Change Amount:", changeAmt)
//       let exact = []
//       revCid.forEach((unit, i, a) => {
  
  
//         //Variables
//         let currencyName = currency()[i][0]
//         let currencyValue = currency()[i][1]
//         let breakable = Math.floor(changeAmt/currencyValue.toFixed(2))
//         let inDrawer = a[i][1]
//         let billsAmt = (inDrawer/currencyValue)
//         let billsNeeded = (Math.floor(breakable)*currencyValue)
  
        
  
//   //Check if we have enough bills/coins
//         if (breakable < 1) {
//           console.log(currencyName, "is N/A")
//         } else if (breakable >= 1) {
//           //If we can use up all the bills
//           if (breakable > billsAmt && billsAmt != 0 && changeAmt != 0) {
//           console.log("We have", billsAmt, currencyName, "bills/coins, aka", inDrawer, "dollars" )
//           console.log("Amount needed: $", billsNeeded, "~~~", breakable, "bills/coins")
//           console.log("We can use every bill/coin")
//           changeAmt = (changeAmt - inDrawer).toFixed(2)
//           a[i].splice(1,1,0)
//           console.log("NEW Change Amount:", changeAmt)
//           exact.push([currencyName, inDrawer])
          
//           //If we can't use up all the bills
//           } else if (breakable < billsAmt && billsAmt != 0 && changeAmt != 0) {
//           console.log("We have", billsAmt, a[i][0], "bills/coins, aka", inDrawer, "dollars" )
//           changeAmt = (changeAmt - billsNeeded).toFixed(2)
//           console.log("NEW Change Amount:", changeAmt)
//           a[i].splice(1,1,(billsAmt - billsNeeded)*currencyValue)
//           exact.push([currencyName, (Math.floor(breakable)*currencyValue)])
//         } else {
//           check.status = "INSUFFICIENT_FUNDS"
//           check.change = []
//           return check
//         }
//         }
      
//       })
      
//        check.change = exact
       
//         console.log(check)
//         return check;
//   }
  
  
  
  
  
  
//   //RUN
//   checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])





















//Currency Lookup Table
function currency() {
    const values = [
      ["PENNY", .01],
      ["NICKEL", .05],
      ["DIME", .1],
      ["QUARTER", .25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ]
  
    return values.reverse()
  
  }
  
  
  
  //MAIN
  function checkCashRegister(price, cash, cid) {
  
  
    //CheckSum
    let sumArr = []
  
    cid.forEach((x, i, a) => {
      sumArr.push(a[i][1])
    })
  
  
    let sum = sumArr.reduce((p, c) => {
      return p + c
    }, 0)
  
    const totalInRegister = sum.toFixed(2)
    console.log("TOTAL IN REGISTER", totalInRegister)
  
  
    const changeAmt = {
       fixed: parseFloat((cash - price).toFixed(2)),
       temp: parseFloat((cash - price).toFixed(2))
    }
    const check = {
      status: "OPEN",
      change: []
    }
  
  
  
    let revCid = cid.reverse()
  
  
  
  
    //ForEach
    console.log("INITIAL Change Amount:", changeAmt.fixed)
    let exactChange = []
    revCid.forEach((unit, i, a) => {
  
  
      //Variables
      let currencyName = currency()[i][0]
      let currencyValue = currency()[i][1]
      let breakable = Math.floor(changeAmt.fixed / currencyValue)
      let inDrawer = a[i][1].toFixed(2)
      let unitAvailable = (inDrawer / currencyValue).toFixed(2)
      let amtAvailable = (breakable * currencyValue).toFixed(2)
      let withdraw
  
      if (totalInRegister > changeAmt.fixed) {
        if (breakable > 1) {
          if (unitAvailable > 0) {
            console.log(inDrawer, amtAvailable)
               if (changeAmt.fixed >= inDrawer && changeAmt.temp == 1) {
               console.log("We have $", inDrawer,currencyName, "dollars in the Register, and we need", changeAmt.fixed, "left in change." )
               changeAmt.temp = (changeAmt.fixed - inDrawer).toFixed(2)
               withdraw = parseFloat(inDrawer)
                if (withdraw != 0) {
                   exactChange.push([currencyName, withdraw])
                 }
               } else if (changeAmt.temp > inDrawer) {
                  breakable = Math.floor(changeAmt.temp / currencyValue)
                 console.log("We have $", inDrawer, currencyName, "dollars in the Register, and we need", changeAmt.temp, "left in change")
                 console.log(breakable, inDrawer, unitAvailable)
                 changeAmt.temp = (changeAmt.temp - inDrawer).toFixed(2)
                 withdraw = parseFloat(inDrawer)
                 if (withdraw != 0) {
                   exactChange.push([currencyName, withdraw])
                 }
               } else if (changeAmt.temp <= inDrawer) {
                 breakable = Math.floor(changeAmt.temp / currencyValue)
                 let amtAvailable = (breakable * currencyValue).toFixed(2)
                 console.log("We have $", inDrawer, currencyName, "dollars in the Register, and we need", changeAmt.temp, "left in change")
                 console.log(breakable, inDrawer, amtAvailable)
                 changeAmt.temp = (changeAmt.temp - amtAvailable).toFixed(2)
                 withdraw = parseFloat(amtAvailable)
                  if (withdraw != 0) {
                   exactChange.push([currencyName, withdraw])
                 }
               }
              
  
  
  
  
            
          }
        }
      }
  
  
  
  
  
    })
  
    check.change = exactChange
  
    console.log("CHECK", check)
    return check;
  }
  
  
  
  
  
  
  //RUN
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])