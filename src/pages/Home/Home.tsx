type Props = {}
const Home = (props: Props) => {
  return (
   <Container className="main-container" component={'main'}>
    <ProductList addProductToCart={addProductToCart} />
   </Container>
  )
}
export default Home