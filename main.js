/*
* Excercise: Raffle Winner
* Verification Program
*
* In this program, you can verify if
* a person is among the list of
* winners in a raffle. Simply input
* the name or ticket number, and
* the program will check and display the winner's
* information.
*
* */

function main() {

    const winningParticipants = [
        {id: 1, name: 'jennifer', ticketNumber: 1},
        {id: 2, name: 'Michel', ticketNumber: 8},
        {id: 3, name: 'Emily', ticketNumber: 47},
        {id: 4, name: 'Charlie', ticketNumber: 15},
    ]

    function findWinnerByName(name) {
        const winner = winningParticipants.find(participant => participant.name === name)
        return winner || 'No winner found with that name'
    }

    function findIndexWinnerByTicket(ticketNumber) {
        const index = winningParticipants.findIndex(participant => participant.ticketNumber === ticketNumber)
        return index !== -1 ? index : 'No winner found with that ticket number'
    }

    function displayWinnerInformation(winner) {
        if (winner !== undefined && winner != null && winner != 'No winner found with that name') {
            console.log('Winner Info: ', winner)
        } else {
            console.log("Winner not found")
        }
    }

    const winnerByName = findWinnerByName('Emily')
    const indexWinnerByTicket = findIndexWinnerByTicket(5)

    displayWinnerInformation(winnerByName)
    console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket)
}

document.addEventListener('DOMContentLoaded', main)