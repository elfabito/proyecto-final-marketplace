import staticData from '../utils/structure.json'


const initialStore = () => {
    const initial = []
    staticData.validatorContent.sections.forEach(itemData => {
        const responseItem = itemData
        itemData.checks?.forEach(itemChecks =>{
            itemChecks.response = null
        })
        initial.push(responseItem)
    });

    const initialData = {
        structure: initial,
    }    

    return initialData
}

const types = {
    getProperties: 'getProperties',
    
}

const storeReducer = (state, action) =>{
    switch(action.type){
        case types.getProperties:
            return(state);
        
        default:
            return state;
    }
}


export { types }
export { initialStore }
export default storeReducer