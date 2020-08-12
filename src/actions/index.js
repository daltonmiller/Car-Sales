export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const addFeature = (feature, carName) => {
    return {
        type: ADD_FEATURE,
        payload: feature,
        name: carName
    }
}
export const removeFeature = feature => {
    console.log(feature);
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}