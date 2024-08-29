import Character from "../character";
import Team from "../app";


test("initiasization of team and adding player by ADD method", () => {
    const teamOne = new Team()
    const player1 = new Character("Bob", "100", "10")
    teamOne.add(player1)

    expect(teamOne.members.size).toBe(1)
});

test("initiasization of team and adding 2 players by ADD method (error)", () => {
    const teamOne = new Team()
    const player1 = new Character("Bob", "100", "10")
    teamOne.add(player1)

    expect(() => teamOne.add(player1)).toThrow(Error);
});

test("initiasization of team and adding 2 players by ALLADD method (2 different)", () => {
    const teamOne = new Team()
    const player1 = new Character("Bob", "100", "10")
    const player2 = new Character("Tod", "90", "9")
    teamOne.addAll(player1, player2)

    expect(teamOne.members.size).toBe(2)
});

test("initiasization of team and adding 2 players by ALLADD method (2 different plus 1 same)", () => {
    const teamOne = new Team()
    const player1 = new Character("Bob", "100", "10")
    const player2 = new Character("Tod", "90", "9")
    teamOne.addAll(player1, player2, player1)

    expect(teamOne.members.size).toBe(2)
});

test("initiasization of filled out team changing object to array)", () => {
    const teamOne = new Team()
    const player1 = new Character("Bob", "100", "10")
    const player2 = new Character("Tod", "90", "9")
    teamOne.addAll(player1, player2)

    const ideal = [{"health": "100", "name": "Bob", "power": "10"}, {"health": "90", "name": "Tod", "power": "9"}]

    expect(teamOne.toArray()).toEqual(ideal)
});