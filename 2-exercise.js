//first part
const bigArray = [true, 'hello', 5, 12, -200, false, false, 'word', [1,2,3], -250, 2024, 'excel',
"Node", "npm", 279, null, 128, -64, "Hello world!", "Kyiv"];
const hash = { number: 0, string: 0, boolean: 0, object: 0 };

for(const element of bigArray) {
    hash[typeof element] += 1;
}
console.dir(hash)

//second part
const hash1 = {  };

for(const element of bigArray) {
    if (Object.getOwnPropertyNames(hash1).includes(typeof element)) {
        hash1[typeof element] += 1;
    }   else    {
        Object.defineProperty(hash1, typeof element, {
            enumerable: true,
            writable: true,
            value: 1,
        })
        
    }
}
console.dir(hash1)