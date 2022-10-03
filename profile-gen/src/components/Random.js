export const randomNames = ({namechange}) => {
    let names = [
        "John", "Will", "Jerry", "Rayan", "Mike", "Harry", "Bob", "Popaye", "kayle"
    ]
    namechange(names[Math.floor(Math.random() * names.length)])
}
