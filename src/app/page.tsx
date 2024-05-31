import Link from "next/link"

const app = () => {
  return (
    <>
    <h1>Welcome Home</h1>
    <Link href="/blog" ><h1>Blog</h1></Link>
    <Link href="/products" ><h1>Product</h1></Link>
    </>
  )
}

export default app
