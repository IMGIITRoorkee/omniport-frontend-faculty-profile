export const formatCountry = (countryName) => {
    return countryName
        .toLowerCase()
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
}