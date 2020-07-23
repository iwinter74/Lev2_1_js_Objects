var edelMetallPreise = [
    {
        name: "Gold", preiseGramEuro: 42.91, veranderung: "+0.12%",
        myArrow: () => { 
            console.log(edelMetallPreise[0].name)
            console.log(edelMetallPreise[0].preiseGramEuro)
            console.log(edelMetallPreise[0].veranderung)
            },
    },
    {
        name: "Silber", preiseGramEuro: 0.51, veranderung: "+1.02%",
        myArrow: () => { 
            console.log(edelMetallPreise[1].name)
            console.log(edelMetallPreise[1].preiseGramEuro)
            console.log(edelMetallPreise[1].veranderung)
            },
    },
    {
        name: "Platin", preiseGramEuro: 25.74, veranderung: "+0.41%",
        myArrow: () => { 
            console.log(edelMetallPreise[2].name)
            console.log(edelMetallPreise[2].preiseGramEuro)
            console.log(edelMetallPreise[2].veranderung)
            },
    },
    {
        name: "Palladium", preiseGramEuro: 50.93, veranderung: "0.00%",
        myArrow: () => { 
            console.log(edelMetallPreise[3].name)
            console.log(edelMetallPreise[3].preiseGramEuro)
            console.log(edelMetallPreise[3].veranderung)
            },
    },
    {
        name: "Rhodium", preiseGramEuro: 160.12, veranderung: "-0.10%",
        myArrow: () => { 
            console.log(edelMetallPreise[4].name)
            console.log(edelMetallPreise[4].preiseGramEuro)
            console.log(edelMetallPreise[4].veranderung)
            },
    },
    {
        name: "Iridium", preiseGramEuro: 42.84, veranderung: "0.00%",
        myArrow: () => { 
            console.log(edelMetallPreise[5].name)
            console.log(edelMetallPreise[5].preiseGramEuro)
            console.log(edelMetallPreise[5].veranderung)
            },
    },
    {name: "Ruthenium", preiseGramEuro: 7.36, veranderung: "0.00%",
        myArrow: () => { 
            console.log(edelMetallPreise[6].name)
            console.log(edelMetallPreise[6].preiseGramEuro)
            console.log(edelMetallPreise[6].veranderung)
            },
    },
    {name: "Rhenium", preiseGramEuro: 37.22, veranderung: "-0.53%",
    myArrow: () => { 
        console.log(edelMetallPreise[7].name)
        console.log(edelMetallPreise[7].preiseGramEuro)
        console.log(edelMetallPreise[7].veranderung)
        },
    },
    {name: "Osmium", preiseGramEuro: 11.54, veranderung: "0.00%",
        myArrow: () => { 
            console.log(edelMetallPreise[8].name)
            console.log(edelMetallPreise[8].preiseGramEuro)
            console.log(edelMetallPreise[8].veranderung)
            },
    },
];
  
// Danach nutze Arrow Funktion. 

edelMetallPreise.forEach(element => {
    element.myArrow()
});



  //Greife auf die Objekte im Array mit Hilfe von map(), forEach(), filter() zu.


  edelMetallPreise.map(x=>console.log(x))

  edelMetallPreise.forEach(element => {
      console.log(element)
  });


// Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.

edelMetallPreise.forEach(element => {
    console.log(element.name)
});

// Verwende map() und greife auf alle name zu.

edelMetallPreise.map(x => console.log(x.name))

// Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese ein neues Array.

let newArray=[]
edelMetallPreise.forEach(element => {
    console.log(element.preiseGramEuro)
    newArray.push(element.preiseGramEuro)
});
console.log(newArray)

// Verwende map() und greife auf alle preiseGramEuro zu.
edelMetallPreise.map(x => console.log(x.preiseGramEuro))

// Verwende map() und greife auf alle veranderung zu.
edelMetallPreise.map(x => console.log(x.veranderung))



// Verwende forEach() und greife auf alle veranderung zu und pushe in ein neues Array.

let newArray1=[]
edelMetallPreise.forEach(element => {
    console.log(element.veranderung)
    newArray.push(element.veranderung)
});
console.log(newArray1)

// Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu 

let newArray2 = edelMetallPreise.filter(element => element.preiseGramEuro > 50)

newArray2.map(x => console.log(x.preiseGramEuro))


// Drucke alles als Tabelle in deinem HTML-Dokument aus.

var edelMetallPreise1 = [
    { name: "Gold", preiseGramEuro: 42.91, veranderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veranderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veranderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veranderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veranderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veranderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veranderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veranderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veranderung: "0.00%" }
  ];
edelMetallPreise1.forEach(elt => {
    document.getElementById("table").innerHTML += `
    <tr>
            <td>${elt.name}</td>
            <td>${elt.preiseGramEuro}</td>
            <td>${elt.veranderung}</td>
        </tr>
    `
      console.log(elt.name,elt.preiseGramEuro,elt.veranderung)
  })

