const notes = [
    {
        id: 1,
        subject: "HTML and CSS",
        date: "9/28/2021",
        feeling: "Overwhelmed and defeated",
        timeSpent: 600 + " minutes"
    },
    {
        id: 2,
        subject: "Git and Github",
        date: "10/01/2021",
        feeling: "Great and empowered",
        timeSpent: 300 + " minutes"
    },
    {
        id: 3,
        subject: "Javascript",
        date: "10/05/2021",
        feeling: "Optimistic",
        timeSpent: 30 + " minutes"
    }
]
const noteAboutToday = {
    id: 4,
        subject: "Javascript",
        date: "10/06/2021",
        feeling: "Optimistic still and eager to learn more",
        timeSpent: 60 + " minutes"
}
notes.push(noteAboutToday);
// console.log(notes);
const searchTerm = "Optimistic"

// for (const note of notes) {
//     if (note.feeling === searchTerm)
//     {console.log(`Note ${note.id}
//     ${note.date}
//     I learned about ${note.subject}.
//     I spent ${note.timeSpent} working on it.
//     My feelings: ${note.feeling}`)}
// }
const createNote = (note) => {
    const lastIndex = notes.length - 1
    const currentLastNote= notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1
    note.dateCreated = Date()
    note.id = idForNewNote
    notes.push(note)
}
createNote({
    subject: "Functions in Javascript",
        date: "10/07/2021",
        feeling: "Ehhhhhh",
        timeSpent: 60 + " minutes"
})
console.log(notes)
