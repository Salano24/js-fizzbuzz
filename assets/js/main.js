let numeri = document.querySelector("#numeri")

        let contenutoBlocco;
        let stile;

        for(let i=1; i<=100; i++){

            if(i%3==0){
                contenutoBlocco += "Fitz"
                stile ="orange"
            }

            if(i%5==0){
                contenutoBlocco += "Buzz"
                stile ="green"
            }

            if(i%5==0&&i%3==0){
                stile="red"
            }

            if(i%3!=0 && i%5!=0){
                contenutoBlocco = i
                stile ="blue"
            }

            numeri.innerHTML += `<p class="${stile}">${contenutoBlocco}</p>`
            
            contenutoBlocco = ""
        }