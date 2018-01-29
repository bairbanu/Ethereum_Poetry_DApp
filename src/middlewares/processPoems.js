export default function ({ dispatch }) {
  return next => action => {
    console.log('just the poem array:::', action.poems)
    next(action)
  }
}
