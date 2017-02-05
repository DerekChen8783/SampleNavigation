'use strict'

import { routeStack } from './navigationConfiguration'
import findRouteIndexByName from '../helperFunctions/findRouteIndexByName'

const defaultState = {
  index:0,
  routes: routeStack
}
const reducer = (state=defaultState,action) => {
  switch (action.type) {
    case 'Navigate':
      var index = findRouteIndexByName(routeStack,action.routeName)
      if (  index !== -1 ) {
        return { ...state, index: index }
      } else {
        return state
      }
      break;

    case 'Back':
     if (action.key === 'TabBarBack') {
       var currentIndex = state.index
       return { ...state, index: currentIndex - 1 }
     } else {
       return state
     }

      break;
  }
  return state
}

export default reducer