import Character from "../character";

test("initialization of player", () => {
    const player1 = new Character("Bob", "100", "10")
    const ideal = {name: "Bob", health: "100", power: "10" }
    expect(player1).toEqual(ideal)
})