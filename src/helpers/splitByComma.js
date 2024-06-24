export const splitByComma = (string) => {
    let queryConcatName = "";
    let queryConcatID = "";

    let splitedQuery = string.split(",");

    for (let query of splitedQuery) {
        if (Number(query)) queryConcatID += `id=${query.trim()}&`
        else {
            const splitToNameAndLastName = query.split(" ");

            let formatedString = splitToNameAndLastName.map(el => {
                let trimmedStr = el.trim();
                return trimmedStr.slice(0, 1).toUpperCase() + trimmedStr.slice(1);
            })
            if (splitToNameAndLastName.length > 1) {
                formatedString = formatedString.join(" ");
                queryConcatName += `name=${formatedString.trim()}&`
            }
            else queryConcatName += `name=${query.trim()}&`;
        }
    }

    const cutLastSymbol = (str) => str.endsWith("&") ? str.slice(0, str.length - 1) : str;

    const resultStringName = cutLastSymbol(queryConcatName);
    const resultStringID = cutLastSymbol(queryConcatID);

    return {name: resultStringName, id: resultStringID};
}