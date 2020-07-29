
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