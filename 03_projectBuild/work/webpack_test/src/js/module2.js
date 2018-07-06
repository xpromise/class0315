function sum(...args) {
  return args.reduce((prev, curr) => {
    return prev + curr;
  })
}

export default sum;