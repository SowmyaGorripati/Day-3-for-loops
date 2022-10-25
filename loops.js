let data= [{"name":"Edwin","location":"Burkina Faso","id":"1"},
{"name":"Chase","location":"El Salvador","id":"2"},
{"name":"Letha","location":"Norfolk Island","id":"3"},
{"name":"Derick","location":"Solomon Islands","id":"4"},
{"name":"Jackson","location":"Pitcairn Islands","id":"5"},
{"name":"Julia","location":"American Samoa","id":"6"},
{"name":"Terrence","location":"Palau","id":"7"},
{"name":"John","location":"Guinea-Bissau","id":"8"},
{"name":"Russel","location":"Bouvet Island (Bouvetoya)","id":"9"},
{"name":"Suzanne","location":"Mayotte","id":"10"},
{"name":"Sheridan","location":"Saint Helena","id":"11"},
{"name":"Jaquelin","location":"Bouvet Island (Bouvetoya)","id":"12"},
{"name":"Janie","location":"India","id":"13"},
{"name":"Shyanne","location":"Macedonia","id":"14"},
{"name":"Isabel","location":"Ethiopia","id":"15"},
{"name":"Whitney","location":"Czech Republic","id":"16"},
{"name":"Lilian","location":"Aruba","id":"17"},
{"name":"Camden","location":"Somalia","id":"18"},
{"name":"Branson","location":"Republic of Korea","id":"19"},
{"name":"Rogers","location":"Bolivia","id":"20"},
{"name":"Marcelina","location":"Barbados","id":"21"},
{"name":"Lemuel","location":"Philippines","id":"22"},
{"name":"Charlie","location":"Jordan","id":"23"},
{"name":"Preston","location":"Belarus","id":"24"},
{"name":"Micheal","location":"Sierra Leone","id":"25"},
{"name":"Josiah","location":"Oman","id":"26"},
{"name":"Sheldon","location":"India","id":"27"},
{"name":"Nella","location":"Guyana","id":"28"},
{"name":"Clyde","location":"Azerbaijan","id":"29"},
{"name":"Amina","location":"Lebanon","id":"30"},
{"name":"Sadie","location":"Mayotte","id":"31"},
{"name":"Kamron","location":"Australia","id":"32"},
{"name":"Nelson","location":"Honduras","id":"33"},
{"name":"Jeffry","location":"Philippines","id":"34"},
{"name":"Elinore","location":"Mongolia","id":"35"},
{"name":"Zoey","location":"Panama","id":"36"},
{"name":"Solon","location":"Finland","id":"37"},
{"name":"Maye","location":"Sweden","id":"38"},
{"name":"Melisa","location":"Faroe Islands","id":"39"},
{"name":"Sabina","location":"Jersey","id":"40"},
{"name":"Buck","location":"Falkland Islands (Malvinas)","id":"41"},
{"name":"Lauryn","location":"Liechtenstein","id":"42"},
{"name":"Lea","location":"Sudan","id":"43"},
{"name":"Nat","location":"South Georgia and the South Sandwich Islands","id":"44"},{"name":"Pearlie","location":"Uruguay","id":"45"},
{"name":"Annette","location":"Ireland","id":"46"},
{"name":"Ardella","location":"Cayman Islands","id":"47"},
{"name":"Earlene","location":"Kiribati","id":"48"},
{"name":"Shaniya","location":"Namibia","id":"49"},
{"name":"Nasir","location":"Samoa","id":"50"},
{"name":"Aron","location":"Maldives","id":"51"},
{"name":"Hunter","location":"Brazil","id":"52"},
{"name":"Wallace","location":"Malaysia","id":"53"},
{"name":"Leopoldo","location":"Cote d'Ivoire","id":"54"}]

//for loop
for(let i =0; i<data.length; i++){
    let obj=data[i];
    console.log(obj.name);
    console.log(obj.location);
    console.log(obj.id);
}

//for-in
for (let key in data) {
    if (data.hasOwnProperty(key)) {
      console.log(data[key].name);
      console.log(data[key].id);

    }
}

//for-each
data.forEach(function(obj) { 
    console.log(obj.name); 
    console.log(obj.location); 
    console.log(obj.id); 
});

//for-of
let text = "";
let i;
for (let x of data[i]) {
 text += x.name; 
}
console.log(text);
