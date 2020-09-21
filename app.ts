const person = {
    name: 'Ejila',
    age: 28,
    hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Yoga'];

console.log(person.name);

for (const hobby of person.hobbies ) {
    console.log(hobby.toUpperCase())
}