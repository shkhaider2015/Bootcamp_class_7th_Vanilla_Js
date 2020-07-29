
// Callbacks Example 

function printGreetings(msg, alertGreeting)
{
    alertGreeting(msg)
}

function alertGreeting(msg)
{
    console.log(msg)
}

printGreetings("Eid Mubarak", alertGreeting)

// Promise

let promise = new Promise(function(resolve, reject)
{
    console.log("New Promise")
    resolve()
})

promise.then(function(){
    console.log("Promise Resolve")
})