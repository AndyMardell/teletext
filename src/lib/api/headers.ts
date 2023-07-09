export const bingHeaders = {
  'Ocp-Apim-Subscription-Key': process.env.BING_API_KEY || ''
}

export const footballHeaders = {
  'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
  'x-rapidapi-key': process.env.FOOTBALL_API_KEY || ''
}

export const recipeHeaders = {
  'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
  'x-rapidapi-key': process.env.FOOTBALL_API_KEY || ''
}
