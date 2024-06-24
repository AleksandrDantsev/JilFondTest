export const filterUnique = (array) => {
    let alreadyExistID = {};

    const uniqueData = array.filter(el => {
        if (!(String(el.id) in alreadyExistID)) {

            alreadyExistID[String(el.id)] = 1;
            return el;
        }
    })
    alreadyExistID = null;
    return uniqueData;
}

