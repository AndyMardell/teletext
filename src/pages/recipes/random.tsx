import Layout from '@/components/global/Layout'
import Highlight from '@/components/global/Highlight'
import Headline from '@/components/global/Headline'
import Divider from '@/components/global/Divider'
import useRecipe from '@/hooks/useRecipe'
import { styled } from 'styled-components'

export default function League() {
  const [recipe] = useRecipe({
    limit: 1
  })

  return (
    <Layout
      title="Recipes"
      color="white"
    >
      {recipe && (
        <>
          <Highlight
            background="blue"
            color="white"
          >
            {recipe.title}
          </Highlight>
          <main style={{ margin: '2rem 0' }}>
            <Headline category="Ingredients:" />
            {recipe.extendedIngredients.map(
              ({ amount, unit, name: ingredientName }, index) => (
                <Text key={index}>{`${amount} ${unit} ${ingredientName}`}</Text>
              )
            )}
            <Headline
              category="Method:"
              style={{ margin: '2rem 0' }}
            />
            <Text dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
          </main>
        </>
      )}
      <Highlight mb>Ceefax: Sports at your fingertips</Highlight>
    </Layout>
  )
}

const Text = styled.div`
  color: ${({ theme }) => theme.colors.lightblue};
`
