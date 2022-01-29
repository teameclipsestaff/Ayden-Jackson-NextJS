import { createClient } from 'contentful';
import Link from 'next/link'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'blog'})

  return{
    props: {
      blogposts: res.items
    }
  }
}
export default function blogPage({ blogposts }){
  console.log(blogposts)
  return(
    <>
    <h1>Blog</h1>
    <ul>
      {blogposts.map(blog =>  (
        <li><Link
        href={`/blog/${blog.fields.slug}`}
        passHref
      >{blog.fields.title}</Link></li>
      ))}
    </ul>
    </>
  )
}