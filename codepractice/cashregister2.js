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
        check.change = exactChange
      if (breakable > 1) {
        if (unitAvailable > 0) {
             if (changeAmt.fixed >= inDrawer && changeAmt.temp == changeAmt.fixed) {
             console.log("We have $", inDrawer,currencyName, "dollars in the Register, and we need", changeAmt.fixed, "left in change." )
             changeAmt.temp = (changeAmt.fixed - inDrawer).toFixed(2)
             withdraw = parseFloat(inDrawer)
              if (withdraw != 0 && inDrawer > changeAmt.temp) {
                 exactChange.push([currencyName, withdraw])
               } else {
                 check.status = "INSUFFICIENT_FUNDS"
               }
             } else if (changeAmt.temp > inDrawer) {
                breakable = Math.floor(changeAmt.temp / currencyValue)
               console.log("We have $", inDrawer, currencyName, "dollars in the Register, and we need", changeAmt.temp, "left in change")
               console.log(breakable, inDrawer, unitAvailable)
               changeAmt.temp = (changeAmt.temp - inDrawer).toFixed(2)
               withdraw = parseFloat(inDrawer)
               if (withdraw != 0 && inDrawer > changeAmt.temp) {
                 exactChange.push([currencyName, withdraw])
               } else {
                 check.status = "INSUFFICIENT_FUNDS"
               }
             } else if (changeAmt.temp <= inDrawer) {
               breakable = Math.floor(changeAmt.temp / currencyValue)
               let amtAvailable = (breakable * currencyValue).toFixed(2)
               console.log("We have $", inDrawer, currencyName, "dollars in the Register, and we need", changeAmt.temp, "left in change")
               console.log(breakable, inDrawer, amtAvailable)
               changeAmt.temp = (changeAmt.temp - amtAvailable).toFixed(2)
               withdraw = parseFloat(amtAvailable)
                if (withdraw != 0 && amtAvailable > changeAmt.temp) {
                 exactChange.push([currencyName, withdraw])
               }
               
             }
            




          
        }
      }
    } else if (totalInRegister < changeAmt.fixed) {
      check.status = "INSUFFICIENT_FUNDS"
      return check
    } else if (totalInRegister == changeAmt.fixed) {
      check.status = "CLOSED"
      check.change = cid.reverse()
      return check
    }





  })


  console.log("CHECK", check)
  return check;
}






//RUN
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])