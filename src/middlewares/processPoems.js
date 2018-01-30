export default function ({ dispatch }) {
  return next => action => {
    if (action.type === 'FETCH_POEMS_SUCCESS') {
      const { poems } = action
      poems.splice(poems.length - 1, 1)

      const parsedPoems = poems.map(poem => {
        const poemTitleBodyAuthorCredits = poem.split('/end')
        const poemTitleBody = poemTitleBodyAuthorCredits[0]
        const title = poemTitleBody.split('/title')[0]
        const body = poemTitleBody.split('/title')[1]
        const parsedBody = processPoemBody(body)

        const authorCredits = poemTitleBodyAuthorCredits[1].split('/author')
        const [author, credits] = authorCredits
        const parsedCredits = credits.replace('/credits', '')

        return {
          title,
          body: parsedBody,
          author,
          credits: parsedCredits
        }
      })

      action.poems = parsedPoems
      next(action)
    }
    else {
      next(action)
    }
  }
}

const processPoemBody = (body) => {
  const parseLines = body.replace(/\/line/g, '{<br />}')
  const parseParagraphs = parseLines.replace(/\/para/g, '{<br /><br />}')
  return parseParagraphs
}