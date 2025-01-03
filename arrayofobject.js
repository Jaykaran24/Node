const people = [{
    firstname: "jay",
    gender:"male"
},{
    firstname: "ojas",
    gender: "male"
},{
    firstname: "manoj",
    gender: "male"
},{
    firstname: "nisha",
    gender: "female"
}]
for(i=0; i<people.length;i++){
    if(people[i].gender == "male") {
        console.log(people[i].firstname)
    }
}