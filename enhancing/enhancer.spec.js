const {repair, succeed, fail, get} = require('./enhancer.js');

describe("Enhancement", () => {

    describe("Repair item", () => {
        let item = {
            name: "Gilbat Ghash",
            durability: 25,
            enhancement: 13
        }

        it("Should restore durability of an item to 100", () => {
            expect(repair(item)).toBe(100)
            // console.log(item)
        })
    })

    // Enhancement Succeeded (1 test)

    describe("Enhance item suceeded", () => {
        let item = {
            name: "Glamdring",
            durability: 90,
            enhancement: 13
        }

        it("Should enhance item by 1 level", () => {
            expect(succeed(item)).toBe(14)
            // console.log(item)
        })
    })

    // Enhancement Failed (3 tests)

    describe("Enhance item failed with enhancement < 15", () => {
        let item = {
            name: "Orcrist",
            durability: 85,
            enhancement: 13
        }

        it("Should lower durability by 5 levels", () => {
            expect(fail(item)).toBe(80)
            // console.log(item)
        })
    })

    describe("Enhance item failed with enhancement >= 15", () => {
        let item = {
            name: "Ringil",
            durability: 95,
            enhancement: 15
        }

        it("Should lower durability by 10 levels", () => {
            expect(fail(item)).toBe(85)
            // console.log(item)
        })
    })

    describe("Enhance item failed with enhancement > 16", () => {
        let item = {
            name: "Anglachel",
            durability: 15,
            enhancement: 17
        }

        it("Should lower durability by 10 levels", () => {
            expect(fail(item)).toBe(5)
            // console.log(item)
        })
    })
})

describe("Renames item with enhancement level", () => {
    let item = {
        name: "Narsil",
        durability: 15,
        enhancement: 20
    }

    it("Should modify item 'Narsil' to '[+20] Narsil'", () => {
        expect(get(item)).toBe("[+20] Narsil")
        // console.log(item)
    })
})
