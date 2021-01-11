import * as actionTypes from '../actions/actionTypes';
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7,
}

const initialState = {
  ingredients: null,
  // loading: false,
  error: false,
  totalPrice: 4,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice +  INGREDIENT_PRICES[action.ingredientName]
      }
    case actionTypes.REMOVE_INGREDIENT:
      return {
          ...state,
          ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] - 1
          },
          totalPrice: state.totalPrice -  INGREDIENT_PRICES[action.ingredientName]
      }
      case actionTypes.SET_INGREDIENTS: 
        return {
          ...state,
          ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
          },
          totalPrice: 4,
          error: false
        }
        case actionTypes.FETCH_INGREDIENTS_FAILED: 
          return {
            ...state,
            error: true
          }
    default:
      return state;
  }
}


export default reducer;