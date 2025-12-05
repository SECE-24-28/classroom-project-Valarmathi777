// let mob={brand:"Apple",model:"Iphone 14 Pro",color:"Silver",price:130000};
// console.log(mob);
// console.log(mob.brand);
// console.log(mob["model"]);
// mob.price=120000;
// console.log(mob);
// mob.storage="256GB";    
// console.log(mob);
// console.log(mob.price);
// delete mob.storage;
// console.log(mob);
// delete mob["color"];
// console.log(mob);

let stu=[{
    name:"Tian Xu Ning",
    age:23,
    course:"MERN"
},{
    name:"Keen",
    age:22,     
    course:"MERN"
}]
console.log(stu);
stu.forEach(student => {
    console.log(student);
});
console.log(stu[0].name);
console.log(stu[1]["course"]);

