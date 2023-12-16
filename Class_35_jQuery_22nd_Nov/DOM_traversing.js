

// DOM Traversing is used to access the DIVs parent, Grandparent just like in CSS

const self = $("#self");

const parent = $(self).parent();


console.log($(self).parent());

console.log($(self).parents());

console.log($(self).parentsUntil("body"));

console.log($(self).prev());
console.log($(self).prevAll());

console.log($(self).next());
console.log($(self).nextAll());
