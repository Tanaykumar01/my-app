import { Metadata } from "next"

export const metadata : Metadata = {
    // title : {
    //     absolute:"Blog",
    // }
    title : "blog",
}

const blog = () => {
  return (
    <h1>My Blog</h1>
  )
}

export default blog
