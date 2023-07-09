import { useEffect, useState } from 'react'

interface Ingredient {
  id: number
  name: string
  amount: number
  unit: string
}

interface Recipe {
  id: number
  title: string
  servings: string
  summary: string
  instructions: string
  extendedIngredients: Ingredient[]
}

export interface useRecipeProps {
  limit?: number
}

export default function useRecipe({ limit }: useRecipeProps = {}) {
  const [recipe, setRecipe] = useState<Recipe>()

  const getRecipeInfo = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/recipes/random?number=${limit}`
      )

      const recipeData = await res.json()
      setRecipe(recipeData)
    } catch (err: any) {
      console.error(err)
    }
  }

  useEffect(() => {
    getRecipeInfo()
  }, [])

  return [recipe]
}
