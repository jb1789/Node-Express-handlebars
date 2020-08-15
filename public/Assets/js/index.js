$( document ).ready(function() {
    console.log( "ready!" );
    
    // populate all burgers into html
    const loadAllBurgers = () => {
    
        $.ajax({ url:"https://nw-eat-da-burger-app.herokuapp.com/burger-all", method: "GET"}).then((tableData) => {
            // $.ajax({ url:"http://localhost:9000/burger-all", method: "GET"}).then((tableData) => {
            console.log(tableData);
            for (let i = 0; i < tableData.length; i++) {
                console.log("tableData.devoured",tableData[i].devoured);
                if (tableData[i].devoured==0){
                    const tableList = $("#tableList");
                    const listItem = $("<li class='list-group-item mt-4'>");
                    listItem.append(
                        $("<br>"),
                        $(`<h2 class="burgerName" id="${tableData[i].burger_name}">`).text(tableData[i].burger_name),
                        $(`<button type="button" id="${tableData[i].id}" class="btn-lg btn-danger deleteBurger">Devour</button>`)
                    );
                    tableList.append(listItem);
                } else if (tableData[i].devoured==1) {
                    const tableList2 = $("#tableList-2");
                    const listItem2 = $("<li class='list-group-item mt-4'>");
                    listItem2.append(
                        $("<br>"),
                        $(`<h2 class="burgerName">`).text(tableData[i].burger_name),
                        $("<br>")
                    );
                    tableList2.append(listItem2);
                }
            }
        });
    };

    // create a new burger in database with ajax call
    $(".addBurger").on("click", (event) => {
        event.preventDefault();
        const newBurger = {
            burger_name: $("#burger-name").val().trim(),
            devoured: 0
        };
        console.log(newBurger);

        $.ajax({url:"https://nw-eat-da-burger-app.herokuapp.com/burger-new", method: "POST", data: newBurger}).then ((tableData) => {
        // $.ajax({url:"http://localhost:9000/burger-new", method: "POST", data: newBurger}).then ((tableData) => {
            $("#burger_name").val("");
            console.log(tableData.insertId);
            const tableList = $("#tableList");
            const listItem = $("<li class='list-group-item mt-4'>");
            listItem.append(
            $("<br>"),
            $(`<h2 class="burgerName" id="${newBurger.burger_name}">`).text(newBurger.burger_name),
            $(`<button type="button" id="${tableData.insertId}" class="btn-lg btn-danger deleteBurger">Devour</button>`)
            );
            tableList.append(listItem);
        });
        
   

    });

    // devour burger
    $(document).on('click','.deleteBurger', function() {
        event.preventDefault();
        const burger_name= $(this).siblings(".burgerName").attr("id");
        console.log(burger_name);
        $(this).closest('li.list-group-item.mt-4').remove();
        const tableList2 = $("#tableList-2");
        const listItem2 = $("<li class='list-group-item mt-4'>");
        listItem2.append(
            $("<br>"),
            $("<h2>").text(burger_name),
        );
        tableList2.append(listItem2);
        
        const id= $(this).attr("id");
        console.log(id);
        
        const data = {
            id: id,
            devoured: 1
        }

        $.ajax({url:"https://nw-eat-da-burger-app.herokuapp.com/updateBurger", method:"PUT", data:data}).then((data) => {
            // $.ajax({url:"http://localhost:9000/updateBurger", method:"PUT", data:data}).then((data) => {
            
            if (data) {
                alert("Yay! Burger has been devoured!");
            }
            else {
                alert("Sorry!");
            }
        });
    });

    loadAllBurgers();
});
