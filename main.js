
const f = require('./fonctions.js');


let args = process.argv;
if(args[2] === undefined){
    console.log("Veuillez entrer \"-action\"");
} else {
    switch (args[2]) {
        case "-action":
            // Si l'argument à l'index 3 correspond au action possible ou n'est pas défini, je rentre dans la condition
            if(args[3] === "transform" || args[3] === "sort_date" ||
            args[3] === "sort_title" || args[3] === "search_date" ||
            args[3] === "search_keyword" || args[3] === undefined){
                // J'observe l'argument à l'index 3
                switch (args[3]) {
                    // Dans le cas où l'argument à l'index 3 est "transform" j'effectue les actions ci-dessous
                    case "transform":
                        const movies = f.readJson(args[4]);
                        const data = f.getAllTitleAndYear(movies);
                        f.writeJson(data, args[5]);
                        const movies2 = f.readJson(args[5]);
                        console.log(movies[0].title);
                        console.log(movies2[0]);
                        break;
                    case "sort_date":
                        console.log("Triage par date");
                        break;
                    case "sort_title":
                        console.log("Triage par titre");
                        break;
                    case "search_date":
                        console.log("Recherche par date");
                        break;
                    case "search_keyword":
                        console.log("Recherche par mot clé");
                        break;
                    // Dans le cas où l'argument à l'index 3 est undefined, j'affiche en console la liste des actions disponible
                    case undefined:
                        console.log("Action List : \n - transform <input.json> <output.json> \n - sort_date <input.json> <output.json> \n - sort_title <input.json> <output.json> \n - search_date <input.json> <year> <sorted?> \n - search_keyword <input.json> <keyword> <genre>");
                        break;
                
                    default:
                        break;
                }
                
            } else {
                console.log("<" + args[3] + ">" + " n'est pas reconnu comme une action. Veuillez entrer une action valide !");
            }

        default:
            break;
    }
}













