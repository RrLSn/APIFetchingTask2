export const truncateStrings = (strings) => {
    return(
        strings?.substr(0, 200) + "..."
    )
}
