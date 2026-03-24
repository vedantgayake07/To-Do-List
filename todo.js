const taskinpt = document.getElementById("task-input");
const addbtn = document.getElementById("add");
const list = document.getElementById("todo-list");
let tasks =[];
let arr=[];
const dat = new Date();


function add()
{
    let todo = taskinpt.value ;
    let day = `${dat.getFullYear()} : ${dat.getMonth()} : ${dat.getDay()}`
    if(todo==="")
    {
        window.alert("enter the task");
        return;
    }
    let complete = false;
    let tasks = JSON.parse(localStorage.getItem("tasks"))  || [];
    tasks.push({task : todo , completed : complete , date : day});

    localStorage.setItem("tasks" , JSON.stringify(tasks));
    showtasks();
}

window.onload = showtasks;

function showtasks()
{
    let i=0;
    list.innerHTML = "";    
    let arr = JSON.parse(localStorage.getItem("tasks"));
    arr.forEach(element => {
    let li = document.createElement("li");
    let done = document.createElement("input");
    let lb = document.createElement("p");
    li.id = `li${i}`;
    done.type = "checkbox";
    done.checked = element.completed;

    done.addEventListener("change" , function ()
    {
        document.getElementById(li.id).classList.toggle("lis");
    })

    li.addEventListener("dblclick" , function()
    {
        let update = window.prompt("Enter the name of the task");
        element.task = update;

        localStorage.setItem("tasks", JSON.stringify(arr));
        showtasks()
    }
    ) 

    li.textContent = element.task; 
    lb.textContent = element.date;
    list.append(li);   
    li.append(lb);
    li.append(done);
    i++;
    });
}

function del()
{
    let choice = window.confirm("do yo want to delete you tasks");
    if(choice)
    {
        console.log("deleting tasks");
        localStorage.clear();
    }
    showtasks()
}






