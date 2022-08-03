var toPerson;
toPerson = 'sumit kumar sharma';
var elem = document.getElementById('enter');
elem.innerText = toPerson;
var circ = function (diameter, circumference) {
    if (circumference)
        return circumference;
    return diameter * Math.PI;
};
console.log(circ(5, 2));
var myDetails = {
    name: "sumit kr sharma",
    address: "shivaji park",
    district: "East",
    state: "Pune",
    country: "India"
};
myDetails.name = "Sohan patel";
myDetails.landmark = "school";
myDetails.addressList = ["asd"];
myDetails.obj = { address1: "asd" };
console.log(myDetails);
