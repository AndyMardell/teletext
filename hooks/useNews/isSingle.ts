const isSingle = (endpoint: string) => {
  const fixedEndpoints = ['top']

  if (fixedEndpoints.includes(endpoint)) {
    return false
  }

  return true
}

export default isSingle
