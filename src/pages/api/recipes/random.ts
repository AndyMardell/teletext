import { NextApiRequest, NextApiResponse } from 'next'
import { recipeHeaders as headers } from '@/lib/api/headers'

const getRecipe = async () => {
  const recipeRes = await fetch(`${process.env.RECIPE_API}/random`, {
    headers
  })
  const { recipes } = await recipeRes.json()

  if (!recipes.length) {
    return null
  }

  return recipes[0]
}

export default async function RandomRecipe(
  _: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const recipe = await getRecipe()

    if (!recipe) {
      return res.status(404).json({ message: 'Not found' })
    }

    return res.json(recipe)
  } catch (err: any) {
    return res.status(500).json({ statusCode: 500, message: err.message })
  }
}
